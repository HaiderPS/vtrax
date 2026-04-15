"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "1",
    title: "Submit Enquiry",
    description:
      "Call or enquiry on 0478 563 679. We'll discuss your wall scope, site, and access requirements.",
    action: "To Book Site Safety",
  },
  {
    number: "2",
    title: "Free Site Visit",
    description:
      "We visit your property to inspect the site, take measurements, and recommend the right solution for your specific conditions.",
    action: "Let's Talk",
  },
  {
    number: "3",
    title: "Written Quote",
    description:
      "Receive a clear written quote with itemised scope, materials, and timeline including excavation, drainage and wall details.",
    action: "No Obligation",
  },
  {
    number: "4",
    title: "Professional Build",
    description:
      "Our crew arrives on time with all equipment. Site is managed safely and completed to the agreed finished result.",
    action: "Quality Finish",
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
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      });
      gsap.from(Array.from(stepsEl.children), {
        opacity: 0,
        y: 30,
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
    <section ref={sectionRef} className="bg-[#EFEFEF] py-16 text-dark sm:py-20">
      <div className="mx-auto w-full max-w-[980px] px-6 lg:px-8">
        <div ref={headerRef} className="text-center">
          <p className="font-oswald text-[8px] font-bold uppercase leading-[100%] tracking-[2px] text-primary">
            How It Works
          </p>
          <h2 className="mt-2 font-display text-[56px] uppercase leading-[0.86] sm:text-[64px]">
            Simple Process.
            <span className="block text-primary">Professional Results.</span>
          </h2>
        </div>

        <div ref={stepsRef} className="relative mx-auto mt-10 grid max-w-[900px] gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-dark/15 lg:block" />

          {steps.map((step) => (
            <article key={step.number} className="relative text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-dark/15 bg-white font-oswald text-[13px] font-bold leading-[100%] tracking-[0.8px] text-primary">
                {step.number}
              </div>

              <h3 className="mt-4 font-oswald text-[10px] font-bold uppercase leading-[100%] tracking-[1.4px] text-dark">
                {step.title}
              </h3>

              <p className="mx-auto mt-3 max-w-[170px] font-open-sans text-[10px] font-normal leading-[1.55] text-dark/70">
                {step.description}
              </p>

              <span className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-3 py-1 font-oswald text-[8px] font-bold uppercase leading-[100%] tracking-[1.3px] text-dark">
                {step.action}
              </span>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
