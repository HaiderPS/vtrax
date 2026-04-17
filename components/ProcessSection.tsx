"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "1",
    title: "SUBMIT ENQUIRY",
    description:
      "Call Jake directly on 0478 563 679, email vtraxprojects@gmail.com, or fill in the quote form below.",
    action: "⚡ 10-MIN TEXT REPLY",
  },
  {
    number: "2",
    title: "FREE SITE VISIT",
    description:
      "Jake visits your property to inspect the site, take measurements, and recommend the right solution for your specific conditions.",
    action: "100% FREE",
  },
  {
    number: "3",
    title: "WRITTEN QUOTE",
    description:
      "You receive a clear written quote — no hidden costs. Jake schedules around you, including weekdays after 4:30 pm and weekends.",
    action: "NO OBLIGATION",
  },
  {
    number: "4",
    title: "PROFESSIONAL BUILD",
    description:
      "Jake and crew arrive on time with all equipment. Site is cleaned on completion and you're walked through the finished result.",
    action: "QUALITY FINISH",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const header = headerRef.current;
    const stepsEl = stepsRef.current;
    if (!el || !header || !stepsEl) return;
    const ctx = gsap.context(() => {
      gsap.from(header, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      });
      gsap.from(Array.from(stepsEl.children), {
        opacity: 0,
        y: 25,
        duration: 0.55,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: stepsEl, start: "top 82%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 text-dark sm:py-24">
      <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-8">
        
        {/* Header - Heading Size Fixed */}
        <div ref={headerRef} className="text-center">
          <p className="font-oswald text-[10px] font-bold uppercase leading-[100%] tracking-[2px] text-primary">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-[42px] font-black uppercase leading-[0.95] tracking-[-0.01em] sm:text-[52px]">
            Simple Process.
            <span className="block text-primary">Professional Results.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div ref={stepsRef} className="relative mx-auto mt-16 grid max-w-[1300px] gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          
          {/* Connecting Line */}
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-[1px] bg-dark/10 lg:block" />

          {steps.map((step) => (
            <article key={step.number} className="relative flex flex-col items-center text-center">
              
              {/* Number Circle */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-dark/10 bg-white font-oswald text-[18px] font-bold leading-[100%] text-primary shadow-sm">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mt-6 font-oswald text-[14px] font-bold uppercase leading-[100%] tracking-[1px] text-dark">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 font-open-sans text-[11.5px] font-normal leading-[1.6] text-dark/65 px-2">
                {step.description}
              </p>

              {/* Action Badge */}
              <span className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-4 py-1.5 font-oswald text-[9.5px] font-bold uppercase leading-[100%] tracking-[0.8px] text-dark">
                {step.action}
              </span>
              
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}