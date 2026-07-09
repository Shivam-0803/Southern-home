import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { FacebookIcon } from "@/components/icons/FacebookIcon";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-20 pb-10 text-white">
      <div className="bg-noise absolute inset-0" aria-hidden />
      <Container className="relative">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/40">
                <Image
                  src="/images/brand/straight-line-fencing-logo.jpg"
                  alt="Southern Home Improvements logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-lg font-semibold">
                  Southern Home Improvements
                </span>
                <span className="mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-primary">
                  Straight Line Fencing of Louisiana
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Licensed, insured fence contractor building wood, vinyl, chain
              link, and aluminum fencing, custom gates, decks, and pergolas
              across Shreveport, Louisiana.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={BUSINESS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find us on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-primary hover:text-primary"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Services
            </p>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug} className="text-sm text-white/70">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Contact
            </p>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.emailHref}
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Serving {BUSINESS.serviceArea}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Southern Home Improvements
            &middot; Straight Line Fencing of Louisiana. All rights reserved.
          </p>
          <p>Fence Contractor Shreveport, LA</p>
        </div>
      </Container>
    </footer>
  );
}
