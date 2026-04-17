"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  "Wollongong", "Shellharbour",
  "Kiama", "Dapto",
  "Albion Park", "Corrimal",
  "Woonona / Bulli", "South Coast",
  "South Sydney"
];

export function ServiceAreas() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(".animate-content", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="areas" className="scroll-mt-24 bg-white py-20 text-dark lg:py-32">
      <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          
          {/* Left Side: Content & Grid */}
          <div className="animate-content">
            <p className="font-oswald text-[11px] font-bold uppercase tracking-[2.5px] text-primary">
              SERVICE AREAS
            </p>
            <h2 className="mt-2 font-display text-[28px] font-black uppercase leading-[1] tracking-[-0.01em] text-dark sm:text-[36px]">
              Illawarra & South Coast
            </h2>
            <p className="mt-5 max-w-[540px] font-open-sans text-[14px] font-semibold leading-[1.6] text-dark">
              VTRAX Projects operates across the Illawarra, South Coast, and South Sydney. Based in Lake Heights, we can be on-site quickly across all primary service areas.
            </p>
            <p className="mt-3 max-w-[540px] font-open-sans text-[12px] font-normal leading-[1.6] text-dark/50 italic">
              For projects outside the Illawarra — contact Jake to confirm. We are open to travelling for projects where it makes sense.
            </p>

            {/* Area Grid */}
            <div className="mt-12 grid grid-cols-2 border border-black/5">
              {areas.map((area, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 border-b border-r border-black/5 px-6 py-5 last:border-b-0"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary fill-primary/10" />
                  <span className="font-oswald text-[13px] font-bold uppercase tracking-[1.5px] text-dark">
                    {area}
                  </span>
                </div>
              ))}
              
              {/* Black CTA Button in Grid Cell */}
              <a
                href="#contact"
                className="flex items-center gap-3 bg-[#111111] px-6 py-5 transition-colors hover:bg-primary group"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 group-hover:border-dark">
                  <span className="text-[16px] text-white font-bold leading-none group-hover:text-dark">+</span>
                </div>
                <span className="font-oswald text-[13px] font-bold uppercase tracking-[1.5px] text-white group-hover:text-dark">
                  More on Request
                </span>
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="animate-content relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-lg lg:mt-4">
            <Image
              src="/images/vtrax_about.png"
              alt="VTRAX retaining wall site in the Illawarra region"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}