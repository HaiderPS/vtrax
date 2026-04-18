"use client";

import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

import { cn } from "@/lib/utils";
import { lenisRef } from "@/components/SmoothScrollProvider";

const links = [
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "FAQ", id: "faq" },
  { label: "Areas", id: "areas" },
];

const sectionIds = ["home", "services", "projects", "about", "faq", "areas", "contact"];

function VtraxLogo() {
  return (
    <Image
      src="/images/vtrax_logo.svg"
      alt="VTRAX logo"
      width={110}
      height={88}
      className="h-16 w-auto shrink-0"
      priority
    />
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -80 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b text-dark transition-shadow duration-300",
        scrolled
          ? "border-dark/15 bg-white shadow-[0_2px_16px_rgba(17,17,17,0.10)]"
          : "border-dark/10 bg-white shadow-[0_1px_0_rgba(17,17,17,0.06)]"
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex items-center text-left ml-2 sm:ml-4 md:ml-6 lg:ml-8"
          aria-label="Scroll to home"
        >
          <VtraxLogo />
        </button>

        <nav className="hidden h-full flex-1 items-center justify-center lg:flex">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "inline-flex items-center justify-center rounded-[1px] px-4 py-2 text-[14px] font-extrabold uppercase tracking-[0.22em] leading-none transition",
                activeSection === link.id
                  ? "text-primary"
                  : "text-dark/70 hover:text-dark"
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <a
            href="tel:+61478563679"
            className="inline-flex items-center gap-2 border-r border-dark/10 pr-5 align-middle font-oswald text-[18px] font-bold leading-[100%] tracking-[0.48px] text-dark"
          >
            <span className="text-primary">Call</span>
            <span>0478 563 679</span>
          </a>
          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("contact");
            }}
            className="ml-5 inline-flex h-[48px] w-[140px] items-center justify-center rounded-[1px] bg-primary pt-[12px] pr-[24px] pb-[12px] pl-[24px] text-[12px] font-black uppercase tracking-[0.16em] text-dark opacity-100 transition hover:brightness-95"
          >
            Free Quote
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+61478563679"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-dark/10 bg-white text-dark"
            aria-label="Call VTRAX"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-dark/10 bg-dark text-white"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: cubicBezier(0.22, 1, 0.36, 1) }}
            className="border-t border-dark/10 bg-white px-4 py-4 shadow-panel lg:hidden"
          >
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    "rounded-sm border px-4 py-3 text-left text-[14px] font-extrabold uppercase tracking-[0.22em] transition",
                    activeSection === link.id
                      ? "border-primary text-dark"
                      : "border-dark/10 text-dark/70 hover:border-primary hover:text-dark"
                  )}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("contact");
                }}
                className={cn(
                  "inline-flex h-12 items-center justify-center rounded-sm bg-primary px-4 text-[12px] font-black uppercase tracking-[0.16em] text-dark"
                )}
              >
                Free Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}