"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutProjects() {
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
        y: 30,
        duration: 0.65,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
      });
      gsap.from(right, {
        opacity: 0,
        x: 40,
        duration: 0.75,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="scroll-mt-24 bg-white py-12 text-dark">
      <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div ref={leftRef} className="max-w-[550px]">
            <p className="font-oswald text-[10px] font-bold uppercase tracking-[2.2px] text-primary mb-4">
              About VTRAX Projects
            </p>
            <h2 className="font-oswald text-[48px] sm:text-[58px] font-extrabold uppercase leading-[1.05] text-dark mb-5">
              Locally Owned.<br />
              <span className="text-primary">Illawarra</span> <span className="text-dark">Built.</span>
            </h2>
            <p className="font-open-sans text-[14px] font-normal leading-[1.7] text-dark mb-4">
              VTRAX Projects is a locally owned retaining wall installations and landscaping company servicing the Illawarra region. We specialise in excavation, retaining walls, and landscaping — delivering reliable and precise work for homeowners across Wollongong, Shellharbour, Kiama, and the South Coast.
            </p>
            <p className="font-open-sans text-[14px] font-normal leading-[1.7] text-dark mb-4">
              Founded by Jake Agius, VTRAX Projects is built on practical industry experience, professional equipment, and a commitment to delivering every project safely, efficiently, and to the highest standard.
            </p>
            <blockquote className="border-l-2 border-dark/20 pl-4 font-open-sans text-[12px] italic font-normal leading-[1.7] text-dark/60 mb-6">
              "Every retaining wall is built with proper footing preparation, drainage and structural integrity to ensure long-term durability."
            </blockquote>
            <a
              href="#contact"
              className="inline-flex h-[52px] items-center justify-center rounded-[1px] bg-[#F7AC1D] px-8 font-oswald text-[13px] font-bold uppercase tracking-[1.7px] text-dark"
            >
              Request a Free Site Assessment
            </a>
          </div>
          <div ref={rightRef} className="relative flex flex-col items-end">
            <div className="relative w-full max-w-[480px] h-[620px]">
              <div className="absolute inset-0 overflow-hidden rounded-sm shadow-lg">
                <Image
                  src="/images/vtrax_about.png"
                  alt="VTRAX on-site excavation and retaining works"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
              {/* Experience badge — bottom-left, slightly outside image */}
              <div className="absolute -left-7 bottom-0 translate-y-7 flex h-[100px] w-[98px] flex-col justify-center bg-primary px-3 pb-2 pt-2 text-dark shadow-lg">
                <span className="font-oswald text-[48px] font-bold leading-[1]">8</span>
                <span className="font-oswald text-[8.5px] font-bold uppercase leading-[1.5] tracking-[1.6px]">
                  Years<br />Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}