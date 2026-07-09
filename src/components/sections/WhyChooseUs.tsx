"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="bg-noise absolute inset-0" aria-hidden />
      <Container className="relative grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
            <Image
              src="/images/gallery/wood-fence-pool-backyard-01.jpg"
              alt="Finished wood privacy fence around a backyard pool in Shreveport, Louisiana"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass absolute bottom-6 left-6 right-6 rounded-2xl border border-white/25 p-5"
            >
              <p className="font-heading text-lg text-ink">
                Straight lines. Solid hardware.
              </p>
              <p className="mt-1 text-sm text-ink/60">
                Every fence set plumb, true, and built to last.
              </p>
            </motion.div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Why Choose Us"
            tone="light"
            title={
              <>
                Fencing built with pride,
                <br />
                right here in Shreveport.
              </>
            }
            description="We're a local, licensed fencing team that treats every yard, gate, and property line like it's our own."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = ICON_MAP[item.icon];
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="group rounded-2xl border border-white/10 p-6 transition-colors duration-500 hover:border-primary/40 hover:bg-white/5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary-light">
                      {Icon && <Icon className="h-5 w-5" aria-hidden />}
                    </div>
                    <h3 className="mt-4 font-heading text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
