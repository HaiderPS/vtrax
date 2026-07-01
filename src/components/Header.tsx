"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, IMG } from "@/data/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-[100]">
      {/* Main header */}
      <header className="border-b border-white/10 bg-ink">
        <div className="mx-auto flex h-[74px] max-w-shell items-center justify-between gap-6 px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="VTRAX Projects home">
            <Image
              src={IMG.logoWhite}
              alt="VTRAX Projects"
              width={150}
              height={50}
              className="h-[50px] w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1.5 lg:flex">
            {NAV.map((n) => {
              const active = isActive(pathname, n.href);
              return (
                <Link
                  key={n.key}
                  href={n.href}
                  className={`border-b-2 px-3 py-2.5 font-open text-[13px] font-bold uppercase tracking-[0.04em] transition-colors ${
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

          <Link
            href="/contact"
            className="btn-primary px-[22px] py-[15px] text-[13px] tracking-[0.06em]"
          >
            Free Quote
          </Link>
        </div>

        {/* Compact nav for small screens */}
        <nav className="flex flex-wrap items-center gap-1 border-t border-white/10 px-8 py-2 lg:hidden">
          {NAV.map((n) => {
            const active = isActive(pathname, n.href);
            return (
              <Link
                key={n.key}
                href={n.href}
                className={`px-2.5 py-2 font-open text-[12px] font-bold uppercase tracking-[0.04em] ${
                  active ? "text-yellow" : "text-[#C7CCD2]"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </header>
    </div>
  );
}
