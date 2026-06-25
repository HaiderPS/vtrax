"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

import { cn } from "@/lib/utils";
import { lenisRef } from "@/components/SmoothScrollProvider";

const links = [
  { label: "Services", id: "services", href: "/services" },
  { label: "Projects", id: "projects", href: "/projects" },
  { label: "About", id: "about", href: "/about" },
  { label: "FAQ", id: "faq", href: "/faq" },
  { label: "Areas", id: "areas", href: "/areas" },
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
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
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
  }, [isHome]);

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

  const isLinkActive = (id: string) => {
    if (isHome) return activeSection === id;
    return pathname === `/${id}`;
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
        {isHome ? (
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center text-left ml-2 sm:ml-4 md:ml-6 lg:ml-8"
            aria-label="Scroll to home"
          >
            <VtraxLogo />
          </button>
        ) : (
          <Link
            href="/"
            className="flex items-center text-left ml-2 sm:ml-4 md:ml-6 lg:ml-8"
            aria-label="Go to home"
          >
            <VtraxLogo />
          </Link>
        )}

        <nav className="hidden h-full flex-1 items-center justify-center lg:flex">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={cn(
                "inline-flex items-center justify-center rounded-[1px] px-4 py-2 text-[14px] font-extrabold uppercase tracking-[0.22em] leading-none transition",
                isLinkActive(link.id)
                  ? "text-[#F7AC1D]"
                  : "text-dark/70 hover:text-dark"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <a
            href="tel:+61478563679"
            className="inline-flex items-center gap-2 border-r border-dark/10 pr-5 align-middle font-oswald text-[18px] font-bold leading-[100%] tracking-[0.48px] text-dark"
          >
            <span className="text-[#F7AC1D]">Call</span>
            <span>0478 563 679</span>
          </a>
          {isHome ? (
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("contact");
              }}
              className="ml-5 inline-flex h-[48px] w-[140px] items-center justify-center rounded-[1px] bg-[#F7AC1D] pt-[12px] pr-[24px] pb-[12px] pl-[24px] text-[12px] font-black uppercase tracking-[0.16em] text-dark opacity-100 transition hover:brightness-95"
            >
              Free Quote
            </a>
          ) : (
            <Link
              href="/#contact"
              className="ml-5 inline-flex h-[48px] w-[140px] items-center justify-center rounded-[1px] bg-[#F7AC1D] pt-[12px] pr-[24px] pb-[12px] pl-[24px] text-[12px] font-black uppercase tracking-[0.16em] text-dark opacity-100 transition hover:brightness-95"
            >
              Free Quote
            </Link>
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label="Open navigation"
        >
          <Menu className="h-6 w-6 text-dark" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: cubicBezier(0.22, 1, 0.36, 1) }}
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-[#111111] lg:hidden"
          >
            {/* Drawer header */}
            <div className="flex h-20 shrink-0 items-center justify-between px-5">
              {isHome ? (
                <button type="button" onClick={() => scrollToSection("home")} className="brightness-0 invert">
                  <VtraxLogo />
                </button>
              ) : (
                <Link href="/" onClick={() => setIsOpen(false)} className="brightness-0 invert">
                  <VtraxLogo />
                </Link>
              )}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
                aria-label="Close navigation"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col border-t border-white/10">
              {[...links.map(l => ({ label: l.label === "Areas" ? "Service Areas" : l.label, id: l.id, href: l.href })),
                { label: "Free Quote", id: "contact", href: isHome ? "#contact" : "/#contact" }
              ].map((link) => (
                link.id === "contact" ? (
                  isHome ? (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => scrollToSection("contact")}
                      className="flex items-center justify-between border-b border-white/10 px-5 py-5 text-left"
                    >
                      <span className="font-oswald text-[15px] font-bold uppercase tracking-[2px] text-white">
                        {link.label}
                      </span>
                      <ChevronRight className="h-4 w-4 text-white/40" />
                    </button>
                  ) : (
                    <Link
                      key={link.id}
                      href="/#contact"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between border-b border-white/10 px-5 py-5 text-left"
                    >
                      <span className="font-oswald text-[15px] font-bold uppercase tracking-[2px] text-white">
                        {link.label}
                      </span>
                      <ChevronRight className="h-4 w-4 text-white/40" />
                    </Link>
                  )
                ) : (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between border-b border-white/10 px-5 py-5 text-left"
                  >
                    <span className={cn(
                      "font-oswald text-[15px] font-bold uppercase tracking-[2px]",
                      link.label === "Projects" ? "text-[#F7AC1D]" : "text-white"
                    )}>
                      {link.label}
                    </span>
                    <ChevronRight className="h-4 w-4 text-white/40" />
                  </Link>
                )
              ))}
            </nav>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-col gap-3 px-5">
              <a
                href="tel:+61478563679"
                className="flex items-center justify-center gap-2 bg-primary py-4 font-oswald text-[13px] font-bold uppercase tracking-[2px] text-dark"
              >
                <Phone className="h-4 w-4" />
                Call 0478 563 679
              </a>
              {isHome ? (
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="flex items-center justify-center border border-white/30 py-4 font-oswald text-[13px] font-bold uppercase tracking-[2px] text-white"
                >
                  Request Free Quote
                </button>
              ) : (
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center border border-white/30 py-4 font-oswald text-[13px] font-bold uppercase tracking-[2px] text-white"
                >
                  Request Free Quote
                </Link>
              )}
            </div>

            {/* Hours & Email */}
            <div className="mt-8 flex flex-col gap-5 px-5">
              <div>
                <p className="font-oswald text-[11px] font-bold uppercase tracking-[2px] text-primary">Hours</p>
                <p className="mt-1 font-open-sans text-[12px] text-white/60">Mon–Fri · 7 am – 5 pm</p>
                <p className="font-open-sans text-[12px] text-white/60">Bookings: weekends &amp; after 4:30 pm</p>
              </div>
              <div>
                <p className="font-oswald text-[11px] font-bold uppercase tracking-[2px] text-primary">Email</p>
                <a href="mailto:vtraxprojects@gmail.com" className="mt-1 block font-open-sans text-[12px] text-white/60">
                  vtraxprojects@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
