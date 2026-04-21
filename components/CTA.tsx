"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const inputCls =
  "w-full border border-dark/15 bg-white px-4 py-3 text-[12px] text-dark outline-none transition placeholder:text-[#757575] focus:border-primary";

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

// Custom Phone Icon
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.715 5.8425C3.79805 7.97145 5.52855 9.70195 7.6575 10.785L9.3075 9.135C9.4079 9.03298 9.5354 8.96181 9.67495 8.92992C9.81449 8.89802 9.96024 8.90673 10.095 8.955C10.959 9.23951 11.8629 9.38384 12.7725 9.3825C12.9714 9.3825 13.1622 9.46152 13.3028 9.60217C13.4435 9.74282 13.5225 9.93359 13.5225 10.1325V12.75C13.5225 12.9489 13.4435 13.1397 13.3028 13.2803C13.1622 13.421 12.9714 13.5 12.7725 13.5C11.0963 13.503 9.43587 13.1754 7.88638 12.5359C6.33688 11.8965 4.92867 10.9578 3.74234 9.77358C2.55601 8.58933 1.61484 7.18279 0.972684 5.63442C0.33053 4.08605 -2.61006e-06 2.42625 0 0.75C0 0.551088 0.0790176 0.360322 0.21967 0.21967C0.360322 0.0790176 0.551088 0 0.75 0H3.375C3.57391 0 3.76468 0.0790176 3.90533 0.21967C4.04598 0.360322 4.125 0.551088 4.125 0.75C4.12366 1.6596 4.26799 2.56354 4.5525 3.4275C4.60077 3.56226 4.60948 3.70801 4.57758 3.84755C4.54569 3.9871 4.47452 4.1146 4.3725 4.215L2.715 5.8425Z" fill="currentColor"/>
  </svg>
);

// Custom Email Icon
const EmailIcon = () => (
  <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V10.5C0 10.8978 0.158035 11.2794 0.43934 11.5607C0.720644 11.842 1.10218 12 1.5 12H13.5C13.8978 12 14.2794 11.842 14.5607 11.5607C14.842 11.2794 15 10.8978 15 10.5V1.5C15 1.10218 14.842 0.720644 14.5607 0.43934C14.2794 0.158035 13.8978 0 13.5 0ZM13.5 3L7.5 6.75L1.5 3V1.5L7.5 5.25L13.5 1.5V3Z" fill="currentColor"/>
  </svg>
);

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
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-dark">
                  <PhoneIcon />
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
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-dark">
                  <EmailIcon />
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

            {/* Trust Points with Thin Yellow Line */}
            <ul className="mt-8 space-y-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-[5px] h-[2px] w-5 bg-primary" />
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

            <span className="mt-4 inline-block rounded-full bg-primary px-4 py-1.5 font-oswald text-[10px] font-bold uppercase text-dark sm:text-[9px]">
              10-Minute Response Guarantee
            </span>

            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelCls}>First Name <span className="text-dark/40">*</span></label>
                  <input placeholder="First name" required className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Last Name</label>
                  <input placeholder="Last name" className={inputCls} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelCls}>Phone <span className="text-dark/40">*</span></label>
                  <input placeholder="04XX XXX XXX" required className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Email</label>
                  <input placeholder="your@email.com" className={inputCls} />
                </div>
              </div>

              <div>
                <label className={labelCls}>Suburb / Location <span className="text-dark/40">*</span></label>
                <input
                  placeholder="e.g. Wollongong, Shellharbour, Kiama..."
                  required
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>Service Required</label>
                <select className={inputCls}>
                  <option>Select a service...</option>
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelCls}>Project Description</label>
                <textarea
                  rows={4}
                  className={`${inputCls} resize-none`}
                  placeholder="Briefly describe your project — e.g. approximate wall length, height, slope, and any access considerations..."
                />
              </div>

              <button className="w-full bg-primary py-4 font-oswald text-[13px] font-bold uppercase tracking-[2px] text-dark hover:bg-primary/90 flex items-center justify-center gap-2">
                <Send className="h-4 w-4" />
                Submit — Get My Free Quote
              </button>

              <p className="text-center font-open-sans text-[10px] text-dark/50">
                <span className="font-bold text-primary">10-min text response</span> during business hours (Mon–Fri, 7 am – 5 pm).{" "}
                Your details are kept private and never shared.
              </p>
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