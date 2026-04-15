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
    title: "Reliable Setup",
    detail: "Tracked machines and safe cut control",
    icon: ShieldCheck,
  },
  {
    title: "Built to Code Standards",
    detail: "Drainage, footing, and alignment discipline",
    icon: ClipboardCheck,
  },
  {
    title: "Tipped Track",
    detail: "Tight-access machinery for local sites",
    icon: Truck,
  },
  {
    title: "Latest Site Equipment",
    detail: "Fast setup with quality finish outcomes",
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
    <section ref={sectionRef} id="services" className="scroll-mt-24 bg-[#EFEFEF] py-14 text-dark sm:py-16">
      <div className="mx-auto w-full max-w-[980px] px-6 lg:px-8">
        <div ref={headerRef} className="max-w-[500px]">
          <p className="font-oswald text-[8px] font-bold uppercase leading-[100%] tracking-[2px] text-primary">
            Services
          </p>
          <h2 className="mt-2 font-display text-[54px] uppercase leading-[0.86] sm:text-[60px]">
            Retaining Wall <span className="text-primary">Services</span>
          </h2>
          <p className="mt-2 max-w-[460px] font-open-sans text-[10px] font-normal leading-[1.6] text-dark/70 sm:text-[11px]">
            Reliable and structurally sound retaining wall solutions across the
            Illawarra. Every wall is built with proper footing preparation,
            drainage, and structural integrity.
          </p>
        </div>

        <div ref={gridRef} className="mt-7 grid gap-x-0 gap-y-0 border border-dark/10 bg-white md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group border-b border-r border-dark/10 p-3 transition hover:bg-primary/5"
            >
              <div className="relative h-[142px] overflow-hidden bg-dark">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 300px, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="pt-2">
                <p className="font-oswald text-[7px] font-bold uppercase leading-[100%] tracking-[1.6px] text-primary">
                  {service.tag}
                </p>
                <h3 className="mt-1 max-w-[250px] font-oswald text-[19px] font-bold uppercase leading-[1.05] text-dark">
                  {service.title}
                </h3>
                <p className="mt-2 font-open-sans text-[9px] font-normal leading-[1.55] text-dark/70 sm:text-[10px]">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-3 inline-flex items-center font-oswald text-[8px] font-bold uppercase leading-[100%] tracking-[1.6px] text-dark transition hover:text-primary"
                >
                  Get a Quote →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-px bg-dark/15 pt-3 sm:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="bg-dark px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Icon className="h-3.5 w-3.5 text-primary" />
                  <p className="font-oswald text-[9px] font-bold uppercase leading-[100%] tracking-[1.3px] text-white">
                    {item.title}
                  </p>
                </div>
                <p className="mt-1 text-[8px] leading-[1.5] text-white70">
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
