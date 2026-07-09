"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { useScrollLock } from "@/hooks/useScrollLock";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useScrollLock(open);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    if (!panel) return;

    const focusables = Array.from(
      panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || focusables.length === 0) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  useEffect(() => {
    if (open) return;
    toggleRef.current?.focus({ preventScroll: true });
  }, [open]);

  const overlay =
    mounted &&
    createPortal(
      <AnimatePresence>
        {open && (
          <div
            className="fixed inset-0 z-[9999] h-[100dvh] w-screen"
            role="presentation"
          >
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 h-full w-full cursor-default border-0 bg-[rgba(0,0,0,0.35)] backdrop-blur-[6px]"
              onClick={closeMenu}
            />

            <motion.div
              ref={panelRef}
              id="mobile-navigation-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-y-0 right-0 flex h-[100dvh] w-[85%] max-w-[380px] flex-col bg-cream shadow-[-12px_0_40px_rgba(11,11,10,0.18)]"
            >
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
                className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-ink/12 bg-white text-ink transition-colors hover:border-primary hover:text-primary"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>

              <div className="flex min-h-0 flex-1 flex-col justify-between overflow-y-auto px-7 pb-8 pt-24">
                <nav className="flex flex-col gap-[26px]" aria-label="Mobile primary">
                  {NAV_LINKS.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + index * 0.04, duration: 0.3 }}
                      className="flex min-h-12 items-center font-heading text-[1.35rem] leading-none text-ink transition-colors hover:text-primary"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="mt-10 flex flex-col gap-4 border-t border-ink/10 pt-8">
                  <a
                    href={BUSINESS.phoneHref}
                    onClick={closeMenu}
                    className="flex min-h-12 items-center gap-3 text-sm font-semibold text-ink transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {BUSINESS.phone}
                  </a>
                  <a
                    href={BUSINESS.emailHref}
                    onClick={closeMenu}
                    className="flex min-h-12 items-center gap-3 text-sm font-semibold text-ink transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {BUSINESS.email}
                  </a>
                  <Button
                    href="#contact"
                    variant="primary"
                    onClick={closeMenu}
                    className="mt-2 h-[52px] w-full"
                  >
                    Free Estimate
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>,
      document.body
    );

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        onClick={() => setOpen((value) => !value)}
        className="relative flex h-12 w-12 items-center justify-center rounded-full border border-ink/12 text-ink transition-colors hover:border-primary hover:text-primary"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {overlay}
    </>
  );
}
