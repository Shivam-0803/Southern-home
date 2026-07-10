"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, AlertTriangle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

async function reportSubmissionFailure(payload: {
  errorMessage: string;
  failureReason: string;
  name: string;
  phone: string;
  message: string;
}) {
  try {
    await fetch("/api/contact-notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // The notifier itself failing should never block the user-facing fallback.
  }
}

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: "Call or Text",
    value: BUSINESS.phone,
    href: BUSINESS.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: BUSINESS.email,
    href: BUSINESS.emailHref,
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: BUSINESS.serviceArea,
    href: BUSINESS.mapShareUrl,
  },
];

export function Contact() {
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);

    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value?.trim() ?? "";
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value?.trim() ?? "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value?.trim() ?? "";

    try {
      if (!name || !phone || !message) {
        throw new Error("Missing required field: name, phone, and project details are all required.");
      }

      const digitsOnly = phone.replace(/\D/g, "");
      if (digitsOnly.length < 7) {
        throw new Error(`Invalid phone number format: "${phone}"`);
      }

      const subject = encodeURIComponent(`Free Estimate Request — ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\n${message}`);
      const mailto = `${BUSINESS.emailHref}?subject=${subject}&body=${body}`;

      if (!mailto.startsWith("mailto:")) {
        throw new Error("Failed to construct a valid mailto link.");
      }

      window.location.href = mailto;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      setSubmitError(
        `Something went wrong submitting the form. Please call or text ${BUSINESS.phone} directly.`
      );
      await reportSubmissionFailure({
        errorMessage,
        failureReason: "Contact form validation or submission error",
        name,
        phone,
        message,
      });
    }
  }

  return (
    <section id="contact" className="relative bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          align="center"
          title="Get your free estimate."
          description="Tell us about your project and we'll reach out to schedule a walkthrough — no obligation, no pressure."
        />

        <div className="mt-16 grid min-w-0 gap-6 lg:grid-cols-2 lg:items-start lg:gap-8">
          <Reveal className="grid min-w-0 gap-4 lg:col-start-1 lg:row-start-1">
            {CONTACT_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex min-w-0 items-center gap-4 rounded-3xl border border-ink/8 bg-card p-5 transition-colors duration-300 hover:border-primary/40"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                      {card.label}
                    </span>
                    <span className="block truncate font-heading text-lg text-ink">
                      {card.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </Reveal>

          <Reveal delay={0.06} className="min-w-0 overflow-hidden rounded-3xl border border-ink/8 lg:col-start-1 lg:row-start-2">
            <iframe
              title={`Map showing service area near ${BUSINESS.serviceArea}`}
              src={BUSINESS.mapEmbedUrl}
              className="aspect-[16/10] w-full min-h-[260px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label={`Google Map centered on ${BUSINESS.serviceArea}`}
            />
          </Reveal>

          <Reveal delay={0.12} className="min-w-0 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-stretch">
            <form
              onSubmit={handleSubmit}
              className="flex h-full min-w-0 flex-col gap-5 rounded-3xl border border-ink/8 bg-card p-8"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-ink/12 bg-transparent px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="w-full rounded-xl border border-ink/12 bg-transparent px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                  placeholder="(318) 000-0000"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="h-full w-full resize-none rounded-xl border border-ink/12 bg-transparent px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                  placeholder="Fence type, approximate length, and your property address..."
                />
              </div>
              {submitError && (
                <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                  <span>{submitError}</span>
                </div>
              )}
              <Button type="submit" variant="primary" icon={<Send className="h-4 w-4" />} className="w-full">
                Request Free Estimate
              </Button>
              <p className="text-center text-xs text-ink/45">
                Prefer to talk now? Call{" "}
                <a href={BUSINESS.phoneHref} className="font-semibold text-primary">
                  {BUSINESS.phone}
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
