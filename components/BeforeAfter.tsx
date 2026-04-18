"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const topFilters = [
  "Job 1 — Timber → Concrete Sleeper",
  "Job 2 — Block Wall, Pool Surrounds",
  "Job 3 — Concrete Removal & Yard Level",
];

const specTags = [
  { label: "Location", value: "Pool-Side Retaining Wall" },
  { label: "Before", value: "Old Timber Sleeper Wall — Failing & Unsafe" },
  { label: "After", value: "New Concrete Sleeper Wall With Steel Posts" },
  { label: "Scope", value: "Pool Surrounds, Residential Illawarra" },
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
    <section
      ref={sectionRef}
      id="projects"
      className="scroll-mt-24 bg-[#FFFFFF] py-20 text-dark sm:py-28"
    >
      <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="max-w-[700px]">
          <p className="font-oswald text-[12px] font-bold uppercase leading-[100%] tracking-[2px] text-primary">
            Projects Portfolio
          </p>
          <h2 className="mt-3 font-display text-[40px] font-black uppercase leading-[1.1] sm:text-[52px] md:text-[62px]">
            Before & <span className="text-primary">After</span>
          </h2>
          <p className="mt-3 font-open-sans text-[14px] font-normal leading-[1.6] text-dark/70 sm:text-[15px]">
            Real jobs completed by VTRAX Projects across the Illawarra. Drag the
            slider to compare before and after transformations.
          </p>
        </div>

        {/* Filter tabs - horizontal scroll on mobile, original layout on desktop */}
        <div className="mt-8 flex flex-nowrap gap-3 overflow-x-auto pb-4 sm:flex-wrap sm:overflow-visible sm:pb-0">
          {topFilters.map((item, index) => (
            <span
              key={item}
              className={`whitespace-nowrap font-oswald text-[12px] font-bold uppercase leading-[100%] tracking-[1.3px] px-5 py-2.5 sm:text-[14px] sm:px-6 sm:py-3 ${
                index === 0 ? "bg-dark text-white" : "bg-white text-dark border border-dark/10"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Main panel */}
        <div ref={panelRef} className="mt-10 border border-dark/10 bg-dark text-white">
          {/* Before / After images - original grid layout on desktop, stacked on mobile */}
          <div className="relative grid h-[400px] grid-cols-1 sm:h-[500px] sm:grid-cols-2">
            <div className="relative overflow-hidden border-b border-white/10 sm:border-b-0 sm:border-r">
              <Image
                src="https://images.unsplash.com/photo-1564678477755-e8daef081875?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Before retaining wall site"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <span className="absolute left-4 top-4 rounded-[1px] bg-dark/85 px-4 py-2 font-oswald text-[10px] font-bold uppercase tracking-[1px] text-white">
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
              <span className="absolute right-4 top-4 rounded-[1px] bg-primary px-4 py-2 font-oswald text-[10px] font-bold uppercase tracking-[1px] text-dark">
                After
              </span>
            </div>

            {/* Centre divider dot - hide on mobile */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-dark/30 bg-white p-3 sm:flex">
              <span className="block h-2.5 w-2.5 rounded-full bg-dark" />
            </div>
          </div>

          {/* Info bar - original desktop layout preserved */}
          <div className="border-t border-white/10">
            {/* Mobile: stacked, Desktop: original grid layout */}
            <div className="flex flex-col sm:grid sm:grid-cols-[40%_60%]">
              {/* Left: Job title block - original styling */}
              <div className="border-b border-white/10 px-6 py-6 sm:border-b-0 sm:border-r sm:px-8 sm:py-8">
                <p className="font-oswald text-[11px] font-bold uppercase tracking-[2px] text-primary sm:text-[12px]">
                  Job 1
                </p>
                <h3 className="mt-3 font-oswald text-[18px] font-black uppercase leading-[1.2] tracking-[0.5px] text-white sm:text-[20px]">
                  Timber Sleeper Demolition &amp;<br />
                  Concrete Sleeper Replacement
                </h3>
              </div>

              {/* Right: spec tags - vertical stack on mobile with proper text wrapping */}
              <div className="flex flex-col gap-3 px-6 py-6 sm:flex-row sm:flex-wrap sm:gap-4 sm:px-8 sm:py-8">
                {/* Mobile: vertical stack, Desktop: horizontal layout */}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  {specTags.slice(0, 2).map((tag) => (
                    <div
                      key={tag.label}
                      className="flex w-full flex-col border border-white/15 bg-white/5 sm:w-auto sm:flex-row sm:items-center"
                    >
                      <span className="border-b border-white/15 px-4 py-2 font-oswald text-[11px] font-extrabold uppercase tracking-[1px] text-primary sm:border-b-0 sm:border-r">
                        {tag.label}:
                      </span>
                      <span className="break-words px-4 py-2 font-oswald text-[11px] font-extrabold uppercase tracking-[0.5px] text-white sm:whitespace-nowrap">
                        {tag.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* After */}
                <div className="flex w-full flex-col border border-white/15 bg-white/5 sm:w-auto sm:flex-row sm:items-center">
                  <span className="border-b border-white/15 px-4 py-2 font-oswald text-[11px] font-extrabold uppercase tracking-[1px] text-primary sm:border-b-0 sm:border-r">
                    After:
                  </span>
                  <span className="break-words px-4 py-2 font-oswald text-[11px] font-extrabold uppercase tracking-[0.5px] text-white sm:whitespace-nowrap">
                    {specTags[2].value}
                  </span>
                </div>

                {/* Scope */}
                <div className="flex w-full flex-col border border-white/15 bg-white/5 sm:w-auto sm:flex-row sm:items-center">
                  <span className="border-b border-white/15 px-4 py-2 font-oswald text-[11px] font-extrabold uppercase tracking-[1px] text-primary sm:border-b-0 sm:border-r">
                    Scope:
                  </span>
                  <span className="break-words px-4 py-2 font-oswald text-[11px] font-extrabold uppercase tracking-[0.5px] text-white sm:whitespace-nowrap">
                    {specTags[3].value}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail grid - original desktop layout preserved */}
        <div ref={thumbsRef} className="mt-6 flex flex-col gap-2">
          {/* Row 1: 4 equal images on desktop, 2 on mobile */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {thumbs.slice(0, 4).map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative h-[180px] overflow-hidden sm:h-[280px]"
              >
                <Image
                  src={src}
                  alt={`Project gallery thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>

          {/* Row 2: 2 images on desktop - original layout with fixed width */}
          <div className="flex gap-2">
            {thumbs.slice(4, 6).map((src, index) => (
              <div
                key={`${src}-${index + 4}`}
                className="relative h-[180px] overflow-hidden sm:h-[280px]"
                style={{ width: "calc(25% - 2px)" }}
              >
                <Image
                  src={src}
                  alt={`Project gallery thumbnail ${index + 5}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}