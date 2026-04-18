"use client";

import Image from "next/image";
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

const services = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1663090226912-511b20a3f8a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29uc3RydWN0aW9uJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    tag: "01 - Core Service",
    title: "Concrete Sleeper Retaining Walls",
    description:
      "High-strength precast concrete sleeper walls built for depth, line and durability. We excavate, prepare foundations, and manage drainage so every wall performs long term.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578052315041-06c7c248b325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbnN0cnVjdGlvbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    tag: "02 - Core Service",
    title: "Block Retaining Walls",
    description:
      "Concrete block walls engineered for both structural performance and visual finish. Back drainage, tie systems, and reinforcement are integrated to minimise future repairs.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1682148832806-9e116d5eca90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    tag: "03 - Core Service",
    title: "Timber Retaining Walls",
    description:
      "Treated hardwood and timber sleeper walls for residential boundary, retaining and tiered levels. Cost-effective and practical when designed with correct support and drainage.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1682148770244-8b42b1f6cdb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
    tag: "04 - Site Works",
    title: "Excavation & Footings",
    description:
      "VTRAX Projects prepares, excavates and shapes retaining sites with proper cut lines, levels, and compaction for long-term wall support.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1682144429868-c3b4fe271292?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
    tag: "05 - Landscaping",
    title: "Landscaping & Turf",
    description:
      "Site cleanups, contour levelling, ground finishing, and turf installation complete every retaining package so your outdoor areas are practical and presentation ready.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1725408082757-cd1a39a947ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvbnN0cnVjdGlvbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    tag: "06 - Projects & Installations",
    title: "Wall Repairs & Replacements",
    description:
      "Assessment and full replacement of failing or aging retaining walls including drainage solutions, tie-ins, and structural correction where required.",
  },
];

const highlights = [
  {
    title: "Kobelco SK17SR",
    detail: "Mini Excavator — owned & operated",
    icon: ShieldCheck,
  },
  {
    title: "Auger & Rock Breaker",
    detail: "Attachments for all ground conditions",
    icon: ClipboardCheck,
  },
  {
    title: "Tipped Track",
    detail: "On-site spoil removal & material delivery",
    icon: Truck,
  },
  {
    title: "Laser Level Equipment",
    detail: "Precise grading & compaction tools",
    icon: Hammer,
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;
    if (!el || !header || !grid) return;
    const ctx = gsap.context(() => {
      gsap.from(header, {
        opacity: 0,
        y: 28,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      });
      gsap.from(Array.from(grid.children), {
        opacity: 0,
        y: 30,
        duration: 0.55,
        stagger: 0.07,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: grid, start: "top 82%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="scroll-mt-24 bg-[#EFEFEF] py-20 text-dark sm:py-24">
      <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-8">
        {/* Header - Responsive margins */}
        <div ref={headerRef} className="max-w-[600px] mx-0 sm:mx-0 md:ml-24 lg:ml-40">
          <p className="font-oswald text-[10px] font-bold uppercase leading-[100%] tracking-[2px] text-primary">
            Services
          </p>
          <h2 className="mt-3 font-display text-[36px] font-black uppercase leading-[1.1] sm:text-[48px] md:text-[56px]">
            Retaining Wall <span className="text-primary">Services</span>
          </h2>
          <p className="mt-3 max-w-[500px] font-open-sans text-[12px] font-normal leading-[1.6] text-dark/70 sm:text-[13px]">
            Reliable and structurally sound retaining wall solutions across the
            Illawarra. Every wall is built with proper footing preparation,
            drainage, and structural integrity.
          </p>
        </div>

        {/* Services Grid - Responsive columns */}
        <div ref={gridRef} className="mt-8 grid grid-cols-1 gap-0 border border-dark/10 bg-white md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col border-b border-dark/10 last:border-b-0 md:border-r md:last:border-r-0"
            >
              <div className="relative h-[280px] overflow-hidden bg-dark">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col px-6 py-5 pb-7">
                <div className="mt-1">
                  <p className="font-oswald text-[9px] font-bold uppercase leading-[100%] tracking-[1.6px] text-primary">
                    {service.tag}
                  </p>
                </div>
                <div className="mt-3">
                  <h3 className="font-oswald text-[18px] font-bold uppercase leading-[1.05] text-dark sm:text-[20px]">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-3 flex-1 font-open-sans text-[14px] font-normal leading-[1.55] text-dark/70 sm:text-[15px]">
                  {service.description}
                </p>
                <div className="mt-6 mb-1">
                  <a
                    href="#contact"
                    className="inline-flex items-center font-oswald text-[12px] font-bold uppercase leading-[100%] tracking-[1.6px] text-dark transition hover:text-primary"
                  >
                    Get a Quote →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Highlights - Responsive grid */}
        <div className="grid grid-cols-1 gap-[2px] pt-5 sm:grid-cols-2 md:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="bg-dark px-6 py-5 text-white">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-white" />
                  <p className="font-oswald text-[11px] font-bold uppercase leading-[100%] tracking-[1.3px] text-white">
                    {item.title}
                  </p>
                </div>
                <p className="mt-1.5 font-open-sans text-[10px] leading-[1.5] text-white70">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}