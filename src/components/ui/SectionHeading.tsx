import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]",
              tone === "dark"
                ? "border-primary/25 bg-primary/5 text-primary"
                : "border-white/25 bg-white/10 text-cream"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-heading text-[2.25rem] leading-[1.08] tracking-tight sm:text-[2.75rem] lg:text-[3.25rem]",
            tone === "dark" ? "text-ink" : "text-white"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              tone === "dark" ? "text-ink/65" : "text-white/70"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
