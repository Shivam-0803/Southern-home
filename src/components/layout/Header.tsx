"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-ink/8 bg-white shadow-[0_4px_28px_rgba(11,11,10,0.08)]"
          : "glass border-b border-white/40 bg-white/90 shadow-[0_2px_24px_rgba(11,11,10,0.06)] backdrop-blur-xl"
      )}
    >
      <div className="mx-auto grid h-[90px] max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-6 px-8 md:px-10 xl:px-12">
        <Link
          href="#home"
          className="group flex shrink-0 items-center gap-4 xl:mr-4"
          aria-label="Southern Home Improvements home"
        >
          <span className="relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full ring-2 ring-primary/15 transition-transform duration-500 group-hover:scale-[1.03] sm:h-[60px] sm:w-[60px]">
            <Image
              src="/images/brand/straight-line-fencing-logo.jpg"
              alt="Southern Home Improvements logo"
              fill
              sizes="60px"
              className="object-cover"
              priority
            />
          </span>
          <span className="hidden min-w-0 shrink-0 flex-col leading-none sm:flex">
            <span className="font-heading text-lg font-semibold tracking-tight text-ink sm:text-[1.2rem]">
              Southern Home
            </span>
            <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Improvements &middot; Fencing
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center justify-center gap-8 xl:flex xl:gap-10"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative whitespace-nowrap py-2 text-[0.9375rem] font-medium text-ink/70 transition-colors duration-300 hover:text-primary"
            >
              {link.label}
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 ease-out group-hover:w-full"
              />
            </a>
          ))}
        </nav>

        <div className="col-start-3 flex items-center justify-end">
          <div className="hidden items-center xl:flex">
            <div className="flex items-center gap-3 border-l border-ink/10 pl-8">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                <Phone className="h-[18px] w-[18px]" aria-hidden />
              </span>
              <a
                href={BUSINESS.phoneHref}
                className="whitespace-nowrap text-[0.9375rem] font-semibold tracking-tight text-ink transition-colors duration-300 hover:text-primary"
              >
                {BUSINESS.phone}
              </a>
            </div>

            <Button
              href="#contact"
              variant="primary"
              className="ml-8 h-[52px] min-h-[52px] shrink-0 whitespace-nowrap px-8 !py-0"
            >
              Free Estimate
            </Button>
          </div>

          <div className="xl:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
