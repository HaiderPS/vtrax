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
    <section ref={sectionRef} id="areas" className="scroll-mt-24 overflow-hidden bg-white py-8 text-dark lg:py-32">
      <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
          
          {/* Left Side: Content & Grid */}
          <div className="animate-content">
            <p className="font-oswald text-[11px] font-bold uppercase tracking-[2.5px] text-primary">
              SERVICE AREAS
            </p>
            <h2 className="mt-2 font-display text-[28px] font-black uppercase leading-[1] tracking-[-0.01em] text-dark sm:text-[36px]">
              Illawarra & South Coast
            </h2>
            <p className="mt-3 max-w-[540px] font-open-sans text-[14px] font-semibold leading-[1.6] text-dark sm:mt-5">
              VTRAX Projects operates across the Illawarra, South Coast, and South Sydney. Based in Lake Heights, we can be on-site quickly across all primary service areas.
            </p>
            <p className="mt-1 max-w-[540px] font-open-sans text-[12px] font-normal leading-[1.6] text-dark/50 italic sm:mt-3">
              For projects outside the Illawarra — contact Jake to confirm. We are open to travelling for projects where it makes sense.
            </p>

            {/* Area Grid */}
            <div className="mt-6 grid grid-cols-2 border border-black/5 sm:mt-12">
              {areas.map((area, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 border-b border-r border-black/5 px-3 py-3 sm:px-6 sm:py-5 last:border-b-0"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary fill-primary/10" />
                  <span className="font-oswald text-[11px] font-bold uppercase tracking-[1.5px] text-dark sm:text-[13px]">
                    {area}
                  </span>
                </div>
              ))}
              
              {/* Black CTA Button in Grid Cell - Text in one line & circle border removed */}
              <a
                href="#contact"
                className="flex items-center gap-3 bg-[#111111] px-3 py-3 transition-colors hover:bg-primary group sm:px-6 sm:py-5"
              >
                {/* Location Pin with centered dot */}
                <div className="relative flex items-center justify-center">
                  <svg 
                    width="14" 
                    height="16" 
                    viewBox="0 0 14 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M7 14.5C7 14.5 1 10.5 1 6C1 4.4087 1.63214 2.88258 2.75736 1.75736C3.88258 0.632141 5.4087 0 7 0C8.5913 0 10.1174 0.632141 11.2426 1.75736C12.3679 2.88258 13 4.4087 13 6C13 10.5 7 14.5 7 14.5Z" 
                      stroke="white" 
                      strokeWidth="1.2"
                      fill="none"
                    />
                    <circle 
                      cx="7" 
                      cy="6" 
                      r="2.5" 
                      stroke="white" 
                      strokeWidth="1.2"
                      fill="white"
                    />
                  </svg>
                </div>

                {/* Plus Sign - Circle border removed */}
                <div className="flex h-5 w-5 items-center justify-center">
                  <span className="text-[18px] text-white font-bold leading-none group-hover:text-dark">+</span>
                </div>

                <span className="font-oswald text-[11px] font-bold uppercase tracking-[1.5px] text-white whitespace-nowrap group-hover:text-dark sm:text-[13px]">
                  More on Request
                </span>
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="animate-content relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-lg lg:aspect-auto lg:-my-32 lg:min-h-[700px]">
            <Image
              src="/images/vtrax_about.jpg"
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