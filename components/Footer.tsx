"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceLinks = [
  "Concrete Sleeper Walls",
  "Block Retaining Walls",
  "Timber Sleeper Walls",
  "Excavation & Footings",
  "Landscaping & Turf",
  "Wall Repairs & Replacements",
];

const areaLinks = [
  "Wollongong",
  "Shellharbour",
  "Kiama",
  "Dapto & Albion Park",
  "Corrimal / Fairy",
  "Woonona / Bulli",
  "South Coast",
  "South Sydney",
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    const grid = gridRef.current;
    if (!el || !grid) return;
    const ctx = gsap.context(() => {
      gsap.from(Array.from(grid.children), {
        opacity: 0,
        y: 24,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#181818] text-white">
      <div className="mx-auto max-w-[1300px] px-6 pt-12 pb-6 lg:px-8">
        <div ref={gridRef} className="grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] items-start">
          {/* Col 1 — Logo + description */}
          <div>
            <Image
              src="/images/vtrax_logo.svg"
              alt="VTRAX logo"
              width={72}
              height={57}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-4 font-open-sans text-[13px] font-light not-italic leading-[23.4px] text-[#FFFFFFA6] max-w-[220px]">
              Locally owned retaining wall installations and landscaping company servicing the Illawarra, South Coast, and South Sydney. Professional equipment, quality workmanship, reliable results.
            </p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <p className="font-oswald text-[10px] font-bold uppercase leading-[100%] tracking-[2px] text-primary mb-3">
              Services
            </p>
            <ul className="space-y-0.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span className="font-open-sans text-[13px] font-light not-italic leading-[23.4px] text-[#FFFFFFA6] align-middle">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Service Areas */}
          <div>
            <p className="font-oswald text-[10px] font-bold uppercase leading-[100%] tracking-[2px] text-primary mb-3">
              Service Areas
            </p>
            <ul className="space-y-0.5">
              {areaLinks.map((a) => (
                <li key={a}>
                  <span className="font-open-sans text-[13px] font-light not-italic leading-[23.4px] text-[#FFFFFFA6] align-middle">
                    {a}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p className="font-oswald text-[10px] font-bold uppercase leading-[100%] tracking-[2px] text-primary mb-3">
              Contact
            </p>
            <a
              href="tel:0478563679"
              className="block font-oswald text-[20px] font-bold leading-[100%] tracking-[0.5px] text-primary mb-1"
            >
              0478 563 679
            </a>
            <a
              href="mailto:vtraxprojects@gmail.com"
              className="block font-open-sans text-[13px] font-light not-italic leading-[23.4px] text-[#FFFFFFA6] align-middle mb-3"
            >
              vtraxprojects@gmail.com
            </a>
            <div className="flex justify-between text-[13px] font-open-sans font-light not-italic leading-[13.4px] text-[#FFFFFFA6] align-middle mt-4">
              <span>Mon – Fri</span>
              <span>7 am – 5 pm</span>
            </div>
            <div className="flex justify-between text-[13px] font-sans font-light not-italic leading-[23.4px] text-[#FFFFFFA6] align-middle mt-4">
              <span>Bookings</span>
              <span>Wknds & After 4:30</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-3 lg:px-8">
        <div className="mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-[10px] text-white/35">
            © 2026 VTRAX Projects. All rights reserved.
          </p>
          <p className="text-[10px] text-white/35">
            Lake Heights, Wollongong NSW
          </p>
        </div>
      </div>
    </footer>
  );
}
