"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, IMG, CONTACT } from "@/data/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // While the drawer is open: lock body scroll and close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <div className="sticky top-0 z-[100]">
      {/* Main header */}
      <header className="border-b border-white/10 bg-ink">
        <div className="mx-auto flex h-[64px] max-w-shell items-center justify-between gap-4 px-5 sm:h-[74px] sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="VTRAX Projects home"
          >
            <Image
              src={IMG.logoWhite}
              alt="VTRAX Projects"
              width={150}
              height={50}
              className="h-10 w-auto sm:h-[50px]"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1.5 lg:flex">
            {NAV.map((n) => {
              const active = isActive(pathname, n.href);
              return (
                <Link
                  key={n.key}
                  href={n.href}
                  className={`border-b-2 px-3 py-3 font-open text-[13px] font-bold uppercase tracking-[0.04em] transition-colors ${
                    active
                      ? "border-yellow text-yellow"
                      : "border-transparent text-[#C7CCD2] hover:text-white"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="btn-primary hidden px-[22px] py-[15px] text-[13px] tracking-[0.06em] lg:inline-flex"
            >
              Free Quote
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-[3px] border border-white/15 text-white transition-colors hover:border-yellow hover:text-yellow lg:hidden"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile off-canvas drawer */}
      <div
        className={`fixed inset-0 z-[110] bg-black/60 backdrop-blur-[1px] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed right-0 top-0 z-[120] flex h-full w-[min(86vw,340px)] flex-col border-l border-white/10 bg-ink shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[64px] flex-none items-center justify-between border-b border-white/10 px-5">
          <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.16em] text-yellow">
            Menu
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-white/15 text-white transition-colors hover:border-yellow hover:text-yellow"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto px-3 py-2">
          {NAV.map((n) => {
            const active = isActive(pathname, n.href);
            return (
              <Link
                key={n.key}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`flex min-h-[52px] items-center border-b border-white/[0.06] px-3 font-open text-[15px] font-bold uppercase tracking-[0.04em] transition-colors ${
                  active ? "text-yellow" : "text-[#C7CCD2] hover:text-white"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-none flex-col gap-3 border-t border-white/10 px-5 py-5">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary min-h-[48px] justify-center px-6 py-3.5 text-[14px]"
          >
            Free Quote
          </Link>
          <a
            href={CONTACT.phoneHref}
            className="btn-outline-light min-h-[48px] justify-center px-6 py-3.5 text-[14px]"
          >
            Call {CONTACT.phone}
          </a>
        </div>
      </aside>
    </div>
  );
}
