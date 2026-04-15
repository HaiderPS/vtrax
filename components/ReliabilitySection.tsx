"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ClipboardCheck,
  Hammer,
  ShieldCheck,
  Truck,
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
    <section ref={sectionRef} className="bg-dark py-16 text-white sm:py-20">
      <div className="mx-auto grid w-full max-w-[980px] gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:items-start lg:px-8">
        <div ref={leftRef} className="max-w-[500px]">
          <p className="font-oswald text-[8px] font-bold uppercase leading-[100%] tracking-[2px] text-primary">
            Why Clients Choose VTRAX
          </p>

          <h2 className="mt-2 font-display text-[56px] uppercase leading-[0.86] sm:text-[64px]">
            Reliable.
            <span className="block">Efficient.</span>
            <span className="block text-primary">Professional.</span>
          </h2>

          <p className="mt-4 max-w-[470px] font-open-sans text-[11px] font-normal leading-[1.7] text-white70">
            Sourced directly from what clients tell us matters: local knowledge,
            honest quotes, dependable communication, practical systems, and a
            crew that shows up and delivers the right result.
          </p>

          <div className="mt-6 space-y-4">
            {commitments.map((item) => (
              <article key={item.title} className="flex gap-3">
                <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-dark" />
                </span>
                <div>
                  <h3 className="font-oswald text-[10px] font-bold uppercase leading-[100%] tracking-[1.2px] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-open-sans text-[10px] font-normal leading-[1.55] text-white70">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div ref={rightRef} className="grid gap-px bg-white/10 sm:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <article
                key={tool.title}
                className="bg-white10 px-4 py-4 transition hover:bg-white/15"
              >
                <Icon className="h-3.5 w-3.5 text-white" />
                <h3 className="mt-2 font-oswald text-[10px] font-bold uppercase tracking-[1.2px] text-white">
                  {tool.title}
                </h3>
                <p className="mt-1 font-open-sans text-[9px] font-normal leading-[1.5] text-white70">
                  {tool.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
