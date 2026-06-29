"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MediaSlot from "./MediaSlot";
import { SERVICES, serviceSlug } from "@/data/site";

/**
 * The alternating service rows on /services.
 * Deep-linking to /services#<slug> (from the footer, the home "What We Offer"
 * grid, etc.) smooth-scrolls to that service and highlights its title in
 * brand yellow until another service is selected.
 */
export default function ServiceRows() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const syncToHash = () => {
      const slug = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (!slug) return;
      setActive(slug);
      // Wait a frame so the target row is laid out, then scroll it just
      // below the sticky header (handled by scroll-margin on the article).
      requestAnimationFrame(() => {
        document
          .getElementById(slug)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };

    syncToHash();
    window.addEventListener("hashchange", syncToHash);
    return () => window.removeEventListener("hashchange", syncToHash);
  }, []);

  // While a service is highlighted, the next click anywhere clears it —
  // unless that click is (re)selecting another service link.
  useEffect(() => {
    if (!active) return;
    const clearOnClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (el?.closest('a[href*="/services#"]')) return;
      setActive(null);
    };
    document.addEventListener("click", clearOnClick);
    return () => document.removeEventListener("click", clearOnClick);
  }, [active]);

  return (
    <>
      {SERVICES.map((s, i) => {
        const slug = serviceSlug(s.title);
        const imageRight = i % 2 === 1;
        const isActive = active === slug;
        return (
          <article
            key={s.title}
            id={slug}
            className="grid scroll-mt-[170px] grid-cols-1 items-start gap-11 md:grid-cols-2 lg:scroll-mt-[124px]"
          >
            <div
              className={`relative h-[360px] ${imageRight ? "md:order-2" : ""}`}
            >
              <MediaSlot src={s.img} alt={s.title} />
            </div>
            <div className={imageRight ? "md:order-1" : ""}>
              <div className="font-open text-[11px] font-bold uppercase leading-none tracking-[0.16em] text-yellow">
                {s.no}
              </div>
              <h2 className="m-0 mb-3.5 mt-3 font-oswald text-[clamp(26px,3.4vw,38px)] font-bold uppercase leading-[1.05] text-ink">
                <span
                  className={`box-decoration-clone -mx-2 px-2 py-0.5 transition-colors duration-300 ${
                    isActive ? "bg-yellow" : "bg-transparent"
                  }`}
                >
                  {s.title}
                </span>
              </h2>
              <p className="m-0 mb-[18px] font-open text-[16px] leading-[1.65] text-[#4a4f55]">
                {s.text}
              </p>
              <Link
                href="/contact"
                className="cursor-pointer border-b-2 border-yellow pb-1 font-open text-[12px] font-bold uppercase tracking-[0.08em] text-ink"
              >
                Get a quote →
              </Link>
            </div>
          </article>
        );
      })}
    </>
  );
}
