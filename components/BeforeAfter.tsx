"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
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

// Thumbnails with optional mobile images
const thumbs = [
  { desktop: "/images/before-after/1-v2.jpg" },
  { desktop: "/images/before-after/2-v2.jpg" },
  { desktop: "/images/before-after/3-v2.jpg" },
  { desktop: "/images/before-after/4-v2.jpg" },
  { desktop: "/images/before-after/5-v2.jpg" },
  { desktop: "/images/before-after/6-v2.jpg" },
];

// Double-headed left-right arrow icon
const SliderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5L2 12L8 19" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 5L22 12L16 19" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="2" y1="12" x2="22" y2="12" stroke="#111111" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export function BeforeAfter() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeFilter, setActiveFilter] = useState(0);

  const getPercent = (clientX: number) => {
    if (!containerRef.current) return 50;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return (x / rect.width) * 100;
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      setSliderPosition(getPercent(e.clientX));
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      setSliderPosition(getPercent(e.touches[0].clientX));
    };
    const onEnd = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, []);

  useEffect(() => {
    const target = reviewsRef.current;
    if (!target) return;
    if (target.querySelector("script[data-trustindex]")) return;
    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?3b46d1873dcd9227361672ad678";
    script.async = true;
    script.defer = true;
    script.setAttribute("data-trustindex", "true");
    target.appendChild(script);
  }, []);

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
            Completed Projects
          </p>
          <h2 className="mt-3 font-display text-[40px] font-black uppercase leading-[1.1] sm:text-[52px] md:text-[62px]">
            Before & <span className="text-primary">After</span>
          </h2>
          <p className="mt-3 font-open-sans text-[14px] font-normal leading-[1.6] text-dark/70 sm:text-[15px]">
            Real jobs completed by VTRAX Projects across the Illawarra. Drag the
            slider to compare before and after transformations.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-8 flex flex-nowrap gap-3 overflow-x-auto pb-4 sm:flex-wrap sm:overflow-visible sm:pb-0">
          {topFilters.map((item, index) => (
            <button
              key={item}
              type="button"
              onClick={() => setActiveFilter(index)}
              className={`whitespace-nowrap font-oswald text-[12px] font-bold uppercase leading-[100%] tracking-[1.3px] px-5 py-2.5 sm:text-[14px] sm:px-6 sm:py-3 transition-colors cursor-pointer ${
                activeFilter === index ? "bg-dark text-white" : "bg-white text-dark border border-dark/10 hover:bg-dark/5"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Main panel */}
        <div ref={panelRef} className="mt-10 border border-dark/10 bg-dark text-white">
          {/* Before / After Slider - Extreme height increase */}
          <div 
            ref={containerRef}
            className="relative w-full overflow-hidden select-none"
          >
            {/* Changed to pt-[90%] sm:pt-[70%] for extreme height */}
            <div className="relative w-full pt-[90%] sm:pt-[70%]">
              {/* After Image — full size, always underneath */}
              <div className="absolute inset-0">
                <Image
                  src="/images/before-after/after.jpg"
                  alt="After retaining wall site"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1300px) 1300px, 100vw"
                  priority
                  draggable={false}
                />
                {/* After Label - Always visible since after image is always underneath */}
                <span className="absolute right-4 top-4 z-10 rounded-[1px] bg-primary px-4 py-2 font-oswald text-[10px] font-bold uppercase tracking-[1px] text-dark">
                  After
                </span>
              </div>

              {/* Before Image — full size, clipped to reveal only the left portion */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src="/images/before-after/before.png"
                  alt="Before retaining wall site"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1300px) 1300px, 100vw"
                  priority
                  draggable={false}
                />
                {/* Before Label - Only visible when before image is visible */}
                <span className="absolute left-4 top-4 z-10 rounded-[1px] bg-dark/85 px-4 py-2 font-oswald text-[10px] font-bold uppercase tracking-[1px] text-white">
                  Before
                </span>
              </div>

              {/* Draggable Slider */}
              <div
                className="absolute top-0 bottom-0 z-30 w-1 cursor-ew-resize bg-white shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  isDraggingRef.current = true;
                  document.body.style.cursor = "ew-resize";
                  document.body.style.userSelect = "none";
                }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  isDraggingRef.current = true;
                }}
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-white p-2 shadow-md transition-transform active:scale-110">
                  <SliderIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Info bar */}
          <div className="border-t border-white/10">
            <div className="flex flex-col sm:grid sm:grid-cols-[40%_60%]">
              <div className="border-b border-white/10 px-6 py-6 sm:border-b-0 sm:border-r sm:px-8 sm:py-8">
                <p className="font-oswald text-[11px] font-bold uppercase tracking-[2px] text-primary sm:text-[12px]">
                  Job 1
                </p>
                <h3 className="mt-3 font-oswald text-[18px] font-black uppercase leading-[1.2] tracking-[0.5px] text-white sm:text-[20px]">
                  Timber Sleeper Demolition &amp;<br />
                  Concrete Sleeper Replacement
                </h3>
              </div>

              <div className="flex flex-col gap-3 px-6 py-6 sm:flex-row sm:flex-wrap sm:gap-4 sm:px-8 sm:py-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  {specTags.slice(0, 2).map((tag) => (
                    <div
                      key={tag.label}
                      className="flex w-full flex-col border border-white/15 bg-white/5 sm:w-auto sm:flex-row sm:items-center"
                    >
                      <span className="border-b border-white/15 px-4 py-2 font-oswald text-[11px] font-extrabold uppercase tracking-[1px] text-primary sm:border-b-0 sm:border-r">
                        {tag.label}:
                      </span>
                      <span className="break-words px-4 py-2 font-oswald text-[11px] font-extrabold uppercase tracking-[0.5px] text-[#FFFFFFB2] sm:whitespace-nowrap">
                        {tag.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex w-full flex-col border border-white/15 bg-white/5 sm:w-auto sm:flex-row sm:items-center">
                  <span className="border-b border-white/15 px-4 py-2 font-oswald text-[11px] font-extrabold uppercase tracking-[1px] text-primary sm:border-b-0 sm:border-r">
                    After:
                  </span>
                  <span className="break-words px-4 py-2 font-oswald text-[11px] font-extrabold uppercase tracking-[0.5px] text-[#FFFFFFB2] sm:whitespace-nowrap">
                    {specTags[2].value}
                  </span>
                </div>

                <div className="flex w-full flex-col border border-white/15 bg-white/5 sm:w-auto sm:flex-row sm:items-center">
                  <span className="border-b border-white/15 px-4 py-2 font-oswald text-[11px] font-extrabold uppercase tracking-[1px] text-primary sm:border-b-0 sm:border-r">
                    Scope:
                  </span>
                  <span className="break-words px-4 py-2 font-oswald text-[11px] font-extrabold uppercase tracking-[0.5px] text-[#FFFFFFB2] sm:whitespace-nowrap">
                    {specTags[3].value}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail grid with responsive images - Extreme height increase */}
        <div ref={thumbsRef} className="mt-6">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {thumbs.map((thumb, index) => (
              <div
                key={`${thumb.desktop}-${index}`}
                className="relative aspect-square w-full overflow-hidden sm:h-[400px] sm:aspect-auto"
              >
                <Image
                  src={thumb.desktop}
                  alt={`Project gallery thumbnail ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Google reviews — TrustIndex widget */}
        <div ref={reviewsRef} className="mt-10" />

      </div>
    </section>
  );
}