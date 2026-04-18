"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const inputCls =
  "w-full border border-dark/15 bg-white px-4 py-3 text-[12px] text-dark outline-none transition placeholder:text-dark/35 focus:border-primary";

const labelCls =
  "mb-1 block font-oswald text-[9px] font-bold uppercase leading-[100%] tracking-[1.4px] text-dark/60";

const trustPoints = [
  "Jake texts back personally within 10 minutes",
  "Free site visit — no obligation, no hidden fees",
  "Flexible scheduling including weekends",
  "Publicly insured · ABN 13 907 578 2201",
];

const services = [
  "Retaining walls",
  "Excavation & earthworks",
  "Site preparation",
  "Drainage solutions",
  "Landscaping walls",
  "Other / Not sure",
];

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!el || !left || !right) return;

    const ctx = gsap.context(() => {
      gsap.from(left, {
        opacity: 0,
        y: 30,
        duration: 0.65,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
      });

      gsap.from(right, {
        opacity: 0,
        y: 30,
        duration: 0.65,
        delay: 0.12,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="scroll-mt-16 bg-[#F2F2F2] pt-20 pb-0"
    >
      <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          
          {/* Left column */}
          <div ref={leftRef} className="max-w-[380px]">
            <p className="font-oswald text-[12px] font-bold uppercase tracking-[2px] text-primary">
              Get in Touch
            </p>

            {/* Heading - smaller on mobile */}
            <h2 className="mt-3 font-display text-[32px] font-black uppercase leading-[1.2] text-black sm:text-[40px] md:text-[46px]">
              <span className="whitespace-nowrap">
                Request a <span className="text-primary">Free</span> Site
              </span>
              <br />
              <span>Assessment</span>
            </h2>

            <p className="mt-4 max-w-[380px] font-open-sans text-[12px] leading-[1.75] text-dark/70">
              Whether you have a clear plan or just a problem to solve — get in
              touch and we&apos;ll organise a free site visit at a time that suits
              you. No obligation, no pressure.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:0478563679"
                className="flex items-center gap-3 border border-dark/10 bg-white px-5 py-4 transition hover:border-primary/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-dark text-white">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-oswald text-[9px] font-bold uppercase text-dark/50">
                    Call Jake Directly
                  </span>
                  <span className="block font-oswald text-[17px] font-bold text-dark">
                    0478 563 679
                  </span>
                </span>
              </a>

              <a
                href="mailto:vtraxprojects@gmail.com"
                className="flex items-center gap-3 border border-dark/10 bg-white px-5 py-4 transition hover:border-primary/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-dark text-white">
                  <Mail className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-oswald text-[9px] font-bold uppercase text-dark/50">
                    Email
                  </span>
                  <span className="block font-oswald text-[15px] font-bold text-dark">
                    vtraxprojects@gmail.com
                  </span>
                </span>
              </a>
            </div>

            <ul className="mt-8 space-y-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-[3px] h-3 w-3 rounded-full bg-primary" />
                  <span className="text-[11px] text-dark/75">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div ref={rightRef} className="bg-white p-5 shadow-panel sm:p-10">
            <p className="font-oswald text-[20px] font-bold uppercase text-dark sm:text-[18px]">
              Free Quote Request
            </p>

            <p className="mt-2 text-[13px] text-dark/55 sm:text-[11px]">
              Jake will text you within 10 minutes during business hours.
            </p>

            <span className="mt-4 inline-block bg-primary px-4 py-1.5 font-oswald text-[10px] font-bold uppercase text-dark sm:text-[9px]">
              10-Minute Response Guarantee
            </span>

            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input placeholder="First name" required className={inputCls} />
                <input placeholder="Last name" className={inputCls} />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input placeholder="Phone" required className={inputCls} />
                <input placeholder="Email" className={inputCls} />
              </div>

              <input
                placeholder="Suburb / Location"
                required
                className={inputCls}
              />

              <select className={inputCls}>
                <option>Select a service...</option>
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>

              <textarea
                rows={4}
                className={`${inputCls} resize-none`}
                placeholder="Project description..."
              />

              <button className="w-full bg-primary py-4 font-oswald text-[13px] font-bold uppercase tracking-[2px] text-dark hover:bg-primary/90 flex items-center justify-center gap-2">
                <Send className="h-4 w-4" />
                Submit — Get My Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Yellow Strip */}
      <div className="mt-20 bg-primary py-16 sm:py-20">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-8 px-6 lg:flex-row lg:items-center lg:px-8">
          <h3 className="font-display text-[32px] font-black uppercase leading-[0.9] text-dark sm:text-[42px] md:text-[52px]">
            Want to discuss your<br />
            retaining wall project?<br />
            Give us a call.
          </h3>
          <div className="flex flex-col gap-4 sm:flex-row lg:ml-auto">
            <a
              href="#contact"
              className="bg-dark px-8 py-4 font-oswald text-[13px] font-bold uppercase tracking-[2px] text-white transition hover:bg-dark/85"
            >
              Request Site Assessment
            </a>
            <a
              href="tel:0478563679"
              className="border-2 border-dark px-8 py-4 font-oswald text-[13px] font-bold uppercase tracking-[2px] text-dark transition hover:bg-dark hover:text-white"
            >
              Call 0478 563 679
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}