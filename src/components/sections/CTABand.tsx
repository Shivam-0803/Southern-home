import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTABand() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-36">
      <Image
        src="/images/gallery/stained-wood-fence-line-commercial-01.jpg"
        alt={`Long stained wood fence line built by ${BUSINESS.name} in Shreveport, Louisiana`}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/72" />
      <Container className="relative z-10 text-center">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cream backdrop-blur-md">
            Ready When You Are
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto max-w-3xl font-heading text-balance text-[2.25rem] leading-[1.1] text-white sm:text-[3rem] lg:text-[3.5rem]">
            Let&rsquo;s build a fence line Shreveport will notice.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-xl text-balance text-white/70">
            Call now to talk through your project, or request a free
            estimate and we&rsquo;ll come take a look at your property.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={BUSINESS.phoneHref} variant="primary" icon={<Phone className="h-4 w-4" />}>
              Call Now
            </Button>
            <Button href="#contact" variant="glass" icon={<ArrowRight className="h-4 w-4" />}>
              Free Estimate
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
