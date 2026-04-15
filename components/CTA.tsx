"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const inputCls =
  "w-full border border-dark/15 bg-white px-3 py-2.5 text-[11px] text-dark outline-none transition placeholder:text-dark/35 focus:border-primary";

const labelCls =
  "mb-1 block font-oswald text-[8px] font-bold uppercase leading-[100%] tracking-[1.4px] text-dark/60";

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
    <section ref={sectionRef} id="contact" className="scroll-mt-16 bg-[#F2F2F2]">
      <div className="mx-auto grid w-full max-w-[980px] gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
        {/* Left column */}
        <div ref={leftRef}>
          <p className="font-oswald text-[8px] font-bold uppercase leading-[100%] tracking-[2px] text-primary">
            Get in Touch
          </p>

          <h2 className="mt-2 font-display text-[46px] uppercase leading-[0.86] sm:text-[52px] text-black">
            Request a{" "}
            <span className="text-primary">Free</span> Site
            <span className="block">Assessment</span>
          </h2>

          <p className="mt-4 max-w-[340px] font-open-sans text-[10px] font-normal leading-[1.75] text-dark/70">
            Whether you have a clear plan or just a problem to solve — get in
            touch and we&apos;ll organise a free site visit at a time that suits
            you. No obligation, no pressure.
          </p>

          <p className="mt-3 font-open-sans text-[9px] font-normal italic leading-[1.6] text-dark/50">
            Business hours: Mon–Fri, 7:00 am – 5:00 pm.
            <br />
            Online bookings: weekends &amp; weekdays after 4:30 pm.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href="tel:0478563679"
              className="flex items-center gap-3 border border-dark/10 bg-white px-4 py-3.5 transition hover:border-primary/40"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dark text-white">
                <Phone className="h-3.5 w-3.5" />
              </span>
              <span>
                <span className="block font-oswald text-[8px] font-bold uppercase leading-[100%] tracking-[1.4px] text-dark/50">
                  Call Jake Directly
                </span>
                <span className="mt-0.5 block font-oswald text-[15px] font-bold leading-[100%] tracking-[0.5px] text-dark">
                  0478 563 679
                </span>
              </span>
            </a>

            <a
              href="mailto:vtraxprojects@gmail.com"
              className="flex items-center gap-3 border border-dark/10 bg-white px-4 py-3.5 transition hover:border-primary/40"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dark text-white">
                <Mail className="h-3.5 w-3.5" />
              </span>
              <span>
                <span className="block font-oswald text-[8px] font-bold uppercase leading-[100%] tracking-[1.4px] text-dark/50">
                  Email
                </span>
                <span className="mt-0.5 block font-oswald text-[13px] font-bold leading-[100%] tracking-[0.3px] text-dark">
                  vtraxprojects@gmail.com
                </span>
              </span>
            </a>
          </div>

          <ul className="mt-6 space-y-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-[3px] h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                <span className="font-open-sans text-[10px] font-normal leading-[1.65] text-dark/75">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column quote card */}
        <div ref={rightRef} className="bg-white p-6 shadow-panel sm:p-8">
          <p className="font-oswald text-[15px] font-bold uppercase leading-[100%] tracking-[1px] text-dark">
            Free Quote Request
          </p>
          <p className="mt-1 text-[9.5px] leading-[1.6] text-dark/55">
            Jake will text you within 10 minutes during business hours.
          </p>

          <span className="mt-3 inline-block bg-primary px-3 py-1 font-oswald text-[8px] font-bold uppercase leading-[100%] tracking-[1.6px] text-dark">
            10-Minute Response Guarantee
          </span>

          <form className="mt-5 space-y-3.5">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="first-name" className={labelCls}>
                  First Name <span className="text-primary">*</span>
                </label>
                <input
                  id="first-name"
                  name="first_name"
                  type="text"
                  required
                  className={inputCls}
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="last-name" className={labelCls}>
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="last_name"
                  type="text"
                  className={inputCls}
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="phone" className={labelCls}>
                  Phone <span className="text-primary">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className={inputCls}
                  placeholder="04XX XXX XXX"
                />
              </div>
              <div>
                <label htmlFor="email" className={labelCls}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={inputCls}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="suburb" className={labelCls}>
                Suburb / Location <span className="text-primary">*</span>
              </label>
              <input
                id="suburb"
                name="suburb"
                type="text"
                required
                className={inputCls}
                placeholder="e.g. Wollongong, Shellharbour, Kiama..."
              />
            </div>

            <div>
              <label htmlFor="service" className={labelCls}>
                Service Required
              </label>
              <select id="service" name="service" className={inputCls}>
                <option value="">Select a service...</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="description" className={labelCls}>
                Project Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className={`${inputCls} resize-none`}
                placeholder="Briefly describe your project — e.g. approximate wall length, height, slope, and any access considerations..."
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 bg-primary py-3.5 font-oswald text-[11px] font-bold uppercase leading-[100%] tracking-[2px] text-dark transition hover:bg-primary/90"
            >
              <Send className="h-3.5 w-3.5" />
              Submit — Get My Free Quote
            </button>

            <p className="text-center text-[8.5px] italic leading-[1.6] text-dark/45">
              * 10-min text response during business hours (Mon–Fri, 7 am – 5
              pm). Your details are kept private and never shared.
            </p>
          </form>
        </div>
      </div>

      {/* ── Yellow bottom strip ── */}
      <div className="bg-primary w-full px-0 py-10 sm:py-12 mt-8">
        <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between px-6 lg:px-16">
          <h3 className="font-display text-[32px] uppercase leading-[0.88] text-dark sm:text-[38px]">
            Want to discuss your
            <span className="block">retaining wall project?</span>
            <span className="block">Give us a call.</span>
          </h3>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-[43px] items-center justify-center border border-dark bg-dark px-5 font-oswald text-[10px] font-bold uppercase leading-[100%] tracking-[1.8px] text-white transition hover:bg-dark/90"
            >
              Request Site Assessment
            </a>
            <a
              href="tel:0478563679"
              className="inline-flex h-[43px] items-center justify-center border border-dark bg-transparent px-5 font-oswald text-[10px] font-bold uppercase leading-[100%] tracking-[1.8px] text-dark transition hover:bg-dark/10"
            >
              Call 0478 563 679
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
