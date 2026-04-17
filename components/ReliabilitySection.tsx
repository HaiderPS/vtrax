"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ClipboardCheck,
  Hammer,
  ShieldCheck,
  Truck,
  Check,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const commitments = [
  {
    title: "Local Illawarra Business",
    text: "Based in Wollongong, we understand local terrain, soil, and access conditions across the Illawarra and South Coast.",
  },
  {
    title: "Reliable & Efficient Service",
    text: "From small repairs to full retaining systems, we scope projects clearly and deliver cleanly with practical timelines.",
  },
  {
    title: "Professional Excavation Equipment",
    text: "From mini excavators to laser level setup, we use specialised equipment designed for accurate retaining work.",
  },
  {
    title: "Quality Workmanship",
    text: "Every wall is built with correct footing preparation, drainage behind the wall, and structural support for long-term performance.",
  },
  {
    title: "Publicly Insured & Compliant",
    text: "All projects follow current safety and installation requirements with compliant materials and methods.",
  },
];

const tools = [
  {
    title: "Kobelco Sk17SR",
    desc: "Compact excavator for retained-space works.",
    icon: Truck,
  },
  {
    title: "Auger Attachment",
    desc: "Sleeper post hole and pier installation.",
    icon: Hammer,
  },
  {
    title: "Rock Breaker",
    desc: "Breaks rock and hard ground for foundations.",
    icon: ClipboardCheck,
  },
  {
    title: "Tipped Track",
    desc: "On-site spoil movement and delivery support.",
    icon: Truck,
  },
  {
    title: "Laser Level",
    desc: "Precision grading and wall set-out installation.",
    icon: ShieldCheck,
  },
  {
    title: "Compaction Equipment",
    desc: "Foundation and backfill compaction control.",
    icon: Hammer,
  },
];

export function ReliabilitySection() {
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
      gsap.from(Array.from(right.children), {
        opacity: 0,
        y: 24,
        duration: 0.55,
        stagger: 0.07,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: right, start: "top 82%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-dark py-20 text-white sm:py-28">
      <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          {/* LEFT COLUMN */}
          <div ref={leftRef} className="max-w-[620px]">
            {/* Eyebrow label */}
            <p className="font-oswald text-[11px] font-bold uppercase leading-[100%] tracking-[3px] text-primary">
              Why Clients Choose VTRAX
            </p>

            {/* Main heading — Oswald 700, 54px */}
            <h2 className="mt-3 font-oswald font-bold text-[54px] uppercase leading-[0.88]">
              Reliable.
              <span className="block">Efficient.</span>
              <span className="block text-primary">Professional.</span>
            </h2>

            {/* Subtext */}
            <p className="mt-6 max-w-[520px] font-open-sans text-[15px] font-normal leading-[1.7] text-white70">
              Sourced directly from what clients tell us matters: local knowledge,
              honest quotes, dependable communication, practical systems, and a
              crew that shows up and delivers the right result.
            </p>

            {/* Commitments list */}
            <div className="mt-8 space-y-5">
              {commitments.map((item, index) => (
                <div key={item.title}>
                  <article className="flex gap-4">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Check className="h-3.5 w-3.5 text-dark" />
                    </span>
                    <div>
                      <h3 className="font-oswald text-[13px] font-bold uppercase leading-[100%] tracking-[1.5px] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 font-open-sans text-[13px] font-normal leading-[1.6] text-white70">
                        {item.text}
                      </p>
                    </div>
                  </article>
                  {index < commitments.length - 1 && (
                    <div className="mt-5 h-px w-full bg-white/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — tool cards */}
          <div ref={rightRef} className="flex flex-col gap-[2px]">
            {[tools.slice(0, 2), tools.slice(2, 4), tools.slice(4, 6)].map(
              (row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid grid-cols-2 gap-[2px] bg-white/10"
                >
                  {row.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <article
                        key={tool.title}
                        className="bg-white/[0.06] px-8 py-8 transition hover:bg-white/[0.11]"
                      >
                        <Icon className="h-6 w-6 text-white" />
                        <h3 className="mt-4 font-oswald text-[15px] font-bold uppercase tracking-[1.5px] text-white">
                          {tool.title}
                        </h3>
                        <p className="mt-2 font-open-sans text-[13px] font-normal leading-[1.55] text-white70">
                          {tool.desc}
                        </p>
                      </article>
                    );
                  })}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}