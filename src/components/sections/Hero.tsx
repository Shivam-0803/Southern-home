"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, BadgeCheck, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const TRUST_PILLS = [
  { label: "Licensed & Insured", icon: ShieldCheck },
  { label: "Free Estimates", icon: BadgeCheck },
  { label: "Built With Precision", icon: Sparkles },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] w-full items-end overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero/wood-privacy-fence-line-blue-sky-shreveport.jpg"
          alt="Long stained wood privacy fence line under a blue Louisiana sky, built by Southern Home Improvements in Shreveport, LA"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />
      </div>

      <Container className="relative z-10 pb-20 pt-44 sm:pb-28">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cream backdrop-blur-md"
        >
          Straight Line Fencing of Louisiana
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-balance text-[3rem] font-medium leading-[1.02] text-white sm:text-[4.5rem] lg:text-[5.75rem]"
        >
          Fence Contractor
          <br />
          <span className="bg-gradient-to-r from-[#8fb17e] to-[#e3ecd3] bg-clip-text text-transparent">
            Shreveport, Louisiana
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/75 sm:text-lg"
        >
          Wood, vinyl, chain link &amp; aluminum fencing, custom gates, decks
          and pergolas — built straight, built strong, and built to last
          across Shreveport and the surrounding Louisiana community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href={BUSINESS.phoneHref} variant="primary" icon={<Phone className="h-4 w-4" />}>
            Call Now
          </Button>
          <Button href="#contact" variant="glass" icon={<ArrowRight className="h-4 w-4" />}>
            Free Estimate
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-8"
        >
          {TRUST_PILLS.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm font-medium text-white/80">
              <Icon className="h-4 w-4 text-primary-light" aria-hidden />
              {label}
            </div>
          ))}
        </motion.div>
      </Container>

      <div className="absolute bottom-6 right-6 z-10 hidden sm:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-11 w-7 items-start justify-center rounded-full border border-white/30 p-1.5"
          aria-hidden
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
        </motion.div>
      </div>
    </section>
  );
}
