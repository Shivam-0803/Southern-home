"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TESTIMONIAL_PLATFORMS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";

const PLATFORM_ICON = {
  google: GoogleIcon,
  facebook: FacebookIcon,
};

export function Reviews() {
  return (
    <section id="reviews" className="relative bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Reputation"
          align="center"
          title="Read what Shreveport is saying."
          description="Our work speaks for itself, job by job. Visit us on Google or Facebook to see recent projects and hear directly from our customers."
        />

        <div className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-2">
          {TESTIMONIAL_PLATFORMS.map((platform, index) => {
            const Icon = PLATFORM_ICON[platform.icon as keyof typeof PLATFORM_ICON];
            return (
              <Reveal key={platform.name} delay={index * 0.1}>
                <motion.a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex h-full flex-col rounded-3xl border border-ink/8 bg-card p-8 shadow-[0_4px_24px_rgba(11,11,10,0.04)] transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(43,70,37,0.14)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl text-ink">
                    {platform.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">
                    {platform.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                    View on {platform.name.split(" ")[0]}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
