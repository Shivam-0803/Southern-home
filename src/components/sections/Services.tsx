"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section id="services" className="relative bg-cream py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Fence Contractor"
            title={
              <>
                Fencing &amp; outdoor structures,
                <br />
                built in a straight line.
              </>
            }
            description="From privacy fencing to custom gates, decks, and pergolas — every project starts with a free estimate and ends with a fence line you can trust."
          />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <Reveal key={service.slug} delay={index * 0.06}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-ink/8 bg-card p-8 shadow-[0_4px_24px_rgba(11,11,10,0.04)] transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(43,70,37,0.16)]"
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/6 transition-transform duration-700 group-hover:scale-150"
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
                      {Icon && <Icon className="h-6 w-6" aria-hidden />}
                    </div>
                    <h3 className="mt-6 font-heading text-2xl text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/60">
                      {service.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-2 text-sm font-semibold text-primary">
                    <a href="#contact" className="flex items-center gap-2">
                      Get a free estimate
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
