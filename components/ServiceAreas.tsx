"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ServiceAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!el || !left || !right) return;
    const ctx = gsap.context(() => {
      gsap.from(Array.from(left.children), {
        opacity: 0,
        y: 28,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
      });
      gsap.from(right, {
        opacity: 0,
        x: 40,
        duration: 0.7,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="areas" className="scroll-mt-24 bg-white py-16 text-dark">
      <div className="mx-auto grid w-full max-w-[1100px] gap-12 px-8 lg:grid-cols-2 lg:items-center">
        <div ref={leftRef} className="max-w-[500px]">
          <p className="font-oswald text-[10px] font-bold uppercase tracking-[2.2px] text-primary mb-2">
            Service Areas
          </p>
          <h2 className="font-oswald text-[28px] sm:text-[32px] font-extrabold uppercase leading-[1.1] text-dark mb-2">
            Illawarra &amp; South Coast
          </h2>
          <p className="font-open-sans text-[13px] font-normal leading-[1.7] text-dark mb-1">
            VTRAX Projects operates across the Illawarra, South Coast, and South Sydney. Based in Lake Heights, we can be on-site quickly across all primary service areas.
          </p>
          <p className="font-open-sans text-[10px] font-normal leading-[1.5] text-dark/60 mb-4">
            For projects outside the Illawarra — contact Jake to confirm. We are open to travelling for projects where it makes sense.
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-0 mb-4">
            <div className="flex flex-col divide-y divide-dark/10">
              <span className="flex items-center gap-2 py-2.5">
                <MapPin className="h-3 w-3 shrink-0 text-primary" />
                <span className="font-oswald text-[11px] font-bold uppercase leading-[100%] tracking-[1px] text-dark">Wollongong</span>
              </span>
              <span className="flex items-center gap-2 py-2.5">
                <MapPin className="h-3 w-3 shrink-0 text-primary" />
                <span className="font-oswald text-[11px] font-bold uppercase leading-[100%] tracking-[1px] text-dark">Kiama</span>
              </span>
              <span className="flex items-center gap-2 py-2.5">
                <MapPin className="h-3 w-3 shrink-0 text-primary" />
                <span className="font-oswald text-[11px] font-bold uppercase leading-[100%] tracking-[1px] text-dark">Albion Park</span>
              </span>
              <span className="flex items-center gap-2 py-2.5">
                <MapPin className="h-3 w-3 shrink-0 text-primary" />
                <span className="font-oswald text-[11px] font-bold uppercase leading-[100%] tracking-[1px] text-dark">Woonona / Bulli</span>
              </span>
              <span className="flex items-center gap-2 py-2.5">
                <MapPin className="h-3 w-3 shrink-0 text-primary" />
                <span className="font-oswald text-[11px] font-bold uppercase leading-[100%] tracking-[1px] text-dark">South Sydney</span>
              </span>
            </div>
            <div className="flex flex-col divide-y divide-dark/10">
              <span className="flex items-center gap-2 py-2.5">
                <MapPin className="h-3 w-3 shrink-0 text-primary" />
                <span className="font-oswald text-[11px] font-bold uppercase leading-[100%] tracking-[1px] text-dark">Shellharbour</span>
              </span>
              <span className="flex items-center gap-2 py-2.5">
                <MapPin className="h-3 w-3 shrink-0 text-primary" />
                <span className="font-oswald text-[11px] font-bold uppercase leading-[100%] tracking-[1px] text-dark">Dapto</span>
              </span>
              <span className="flex items-center gap-2 py-2.5">
                <MapPin className="h-3 w-3 shrink-0 text-primary" />
                <span className="font-oswald text-[11px] font-bold uppercase leading-[100%] tracking-[1px] text-dark">Corrimal</span>
              </span>
              <span className="flex items-center gap-2 py-2.5">
                <MapPin className="h-3 w-3 shrink-0 text-primary" />
                <span className="font-oswald text-[11px] font-bold uppercase leading-[100%] tracking-[1px] text-dark">South Coast</span>
              </span>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex h-[40px] items-center justify-center gap-2 rounded-[1px] bg-dark px-6 font-oswald text-[11px] font-bold uppercase tracking-[1.6px] text-white transition hover:bg-dark/90"
          >
            <Plus className="h-3.5 w-3.5" />
            More on Request
          </a>
        </div>
        <div ref={rightRef} className="relative flex flex-col items-end">
          <div className="relative w-full max-w-[420px] aspect-square overflow-hidden rounded-sm shadow-lg">
            <Image
              src="/images/vtrax_about.png"
              alt="Retaining wall installation in the Illawarra region"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
