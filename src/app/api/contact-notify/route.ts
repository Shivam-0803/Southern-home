import { NextResponse } from "next/server";
import { BUSINESS } from "@/lib/constants";

const DISCORD_TIMEOUT_MS = 8000;

type FailurePayload = {
  errorMessage?: string;
  failureReason?: string;
  name?: string;
  phone?: string;
  message?: string;
};

function buildDiscordContent(payload: FailurePayload, timestamp: string) {
  const lines = [
    "**Contact Form Submission Failed**",
    `Timestamp: ${timestamp}`,
    `Environment: ${process.env.NODE_ENV ?? "unknown"}`,
    `Failure Reason: ${payload.failureReason || "Unknown"}`,
    `Error: ${payload.errorMessage || "No error message provided"}`,
    `Name: ${payload.name || "Not provided"}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Destination Email: ${BUSINESS.email}`,
    `Message: ${payload.message ? payload.message.slice(0, 500) : "Not provided"}`,
  ];
  return lines.join("\n");
}

export async function POST(request: Request) {
  const timestamp = new Date().toISOString();

  let payload: FailurePayload;
  try {
    payload = await request.json();
  } catch (parseError) {
    payload = {
      failureReason: "Invalid JSON payload received by contact-notify route",
      errorMessage: parseError instanceof Error ? parseError.message : String(parseError),
    };
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[contact-notify] DISCORD_WEBHOOK_URL is not configured.");
    return NextResponse.json(
      { ok: false, error: "Webhook not configured" },
      { status: 500 }
    );
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), DISCORD_TIMEOUT_MS);

  try {
    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: buildDiscordContent(payload, timestamp),
      }),
      signal: controller.signal,
    });

    if (!discordResponse.ok) {
      const body = await discordResponse.text();
      console.error(
        `[contact-notify] Discord webhook responded with ${discordResponse.status}: ${body}`
      );
      return NextResponse.json(
        { ok: false, error: "Discord webhook rejected the request" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const isTimeout = error instanceof Error && error.name === "AbortError";
    console.error(
      `[contact-notify] Failed to reach Discord webhook (${isTimeout ? "timeout" : "network error"}):`,
      error
    );
    return NextResponse.json(
      { ok: false, error: isTimeout ? "Webhook request timed out" : "Webhook request failed" },
      { status: 502 }
    );
  } finally {
    clearTimeout(timeoutId);
  }
}
