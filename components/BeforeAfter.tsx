"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const topFilters = [
  "Ret-1 - Drainage + Concrete Cutbacks",
  "Ret-2 - Block Wall + Full Regrading",
  "Ret-3 - Concrete Sleeper + Final Level",
];

const specRows = [
  { label: "Time", value: "Timber Sleeper Demolition & Concrete Sleeper Replacement" },
  { label: "Location", value: "Post-Cut Retaining Wall" },
  { label: "Material", value: "600 Timber Sleeper Wall + New Drain & Base" },
  { label: "After", value: "New Concrete Sleeper Wall with Levelled Finish" },
  { label: "Scope", value: "Full Excavation, Drainage Preparation" },
];

const thumbs = [
    "https://images.unsplash.com/photo-1586333982571-ff3e0464ccff?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1605998533624-89d432d5003f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1733259613906-177d7b01bbdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1721052112076-9be4a47ff318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1664695710496-e3e271ffd3f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1745238703211-e0a1996f16ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
];

export function BeforeAfter() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const header = headerRef.current;
    const panel = panelRef.current;
    const thumbsEl = thumbsRef.current;
    if (!el || !header || !panel || !thumbsEl) return;
    const ctx = gsap.context(() => {
      gsap.from(header, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      });
      gsap.from(panel, {
        opacity: 0,
        scale: 0.97,
        duration: 0.7,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: panel, start: "top 82%", once: true },
      });
      gsap.from(Array.from(thumbsEl.children), {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: thumbsEl, start: "top 85%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="scroll-mt-24 bg-[#FFFFFF] py-14 text-dark sm:py-16">
      <div className="mx-auto w-full max-w-[980px] px-6 lg:px-8">
        <div ref={headerRef} className="max-w-[520px]">
          <p className="font-oswald text-[8px] font-bold uppercase leading-[100%] tracking-[2px] text-primary">
            Projects Portfolio
          </p>
          <h2 className="mt-2 font-display text-[54px] uppercase leading-[0.86] sm:text-[60px]">
            Before & <span className="text-primary">After</span>
          </h2>
          <p className="mt-2 font-open-sans text-[10px] font-normal leading-[1.6] text-dark/70 sm:text-[11px]">
            Real jobs completed by VTRAX Projects across the Illawarra. Drag the
            slider to compare before and after transformations.
          </p>
        </div>

        <div ref={panelRef} className="mt-6 border border-dark/10 bg-dark text-white">
          <div className="flex flex-wrap items-center gap-3 border-b border-white/10 px-3 py-2">
            {topFilters.map((item) => (
              <span
                key={item}
                className="font-oswald text-[7px] font-bold uppercase leading-[100%] tracking-[1.3px] text-white70"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="relative grid h-[250px] grid-cols-2 sm:h-[320px]">
            <div className="relative overflow-hidden border-r border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1564678477755-e8daef081875?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Before retaining wall site"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <span className="absolute left-3 top-3 rounded-[1px] bg-dark/85 px-2 py-1 font-oswald text-[8px] font-bold uppercase tracking-[1px] text-white">
                Before
              </span>
            </div>

            <div className="relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1729873317549-4d32c07d0d29?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="After retaining wall site"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <span className="absolute right-3 top-3 rounded-[1px] bg-primary px-2 py-1 font-oswald text-[8px] font-bold uppercase tracking-[1px] text-dark">
                After
              </span>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark/30 bg-white p-2">
              <span className="block h-1.5 w-1.5 rounded-full bg-dark" />
            </div>
          </div>

          <div className="grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {specRows.map((row) => (
              <div key={row.label} className="border-r border-t border-white/10 px-3 py-2.5">
                <p className="font-oswald text-[7px] font-bold uppercase tracking-[1.5px] text-primary">
                  {row.label}
                </p>
                <p className="mt-1 font-open-sans text-[8px] font-normal leading-[1.4] text-white70">
                  {row.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div ref={thumbsRef} className="mt-3 grid grid-cols-2 gap-1 sm:grid-cols-3">
          {thumbs.map((src, index) => (
            <div key={`${src}-${index}`} className="relative h-[118px] overflow-hidden">
              <Image
                src={src}
                alt={`Project gallery thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
