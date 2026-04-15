"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type GalleryItem = {
  src: string;
  alt: string;
  className: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: "https://plus.unsplash.com/premium_photo-1686231456386-3b53c9249973?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Stone retaining wall with landscaping",
    className: "col-span-3 row-span-3",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1686167991331-e4219337805f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    alt: "Workers installing concrete blocks for wall",
    className: "col-span-4 row-span-3",
  },
  {
    src: "https://images.unsplash.com/photo-1763465254142-0319dd841259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhbGwlMjByZXRhaW5pbmd8ZW58MHx8MHx8fDA%3D",
    alt: "Modern garden with stone retaining wall",
    className: "col-span-2 row-span-3",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1663127434414-1e595c97ceeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdhbGwlMjByZXRhaW5pbmd8ZW58MHx8MHx8fDA%3D",
    alt: "Excavator preparing ground for retaining wall",
    className: "col-span-3 row-span-3",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661499214488-7ad039396e58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
    alt: "Landscaping with timber retaining wall",
    className: "col-span-3 row-span-3",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1755612257207-0355d6da1e02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    alt: "Mini excavator for wall excavation",
    className: "col-span-3 row-span-3",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1733760125474-0cf0d3aac257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    alt: "Crew operating compact equipment for wall",
    className: "col-span-3 row-span-3",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1733760180239-ef05b25dd5ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    alt: "Operator setting wall levels",
    className: "col-span-3 row-span-3",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1736194027680-bb88156ee144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
    alt: "Demolition and old timber wall removal",
    className: "col-span-5 row-span-4",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1755613636964-0c7ad899c913?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
    alt: "Machine shaping site levels for retaining wall",
    className: "col-span-7 row-span-4",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1686090449194-04ac2af9f758?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    alt: "Excavator close-up",
    className: "col-span-3 row-span-3",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1733760180239-ef05b25dd5ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8",
    alt: "Team drilling wall supports",
    className: "col-span-2 row-span-3",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1764178474698-1de4adeb8a36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    alt: "Final checks on completed retaining",
    className: "col-span-3 row-span-3",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1686782502385-2de1281e9b0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    alt: "Excavation and cleanup phase",
    className: "col-span-4 row-span-3",
  },
];

export function WorkGallery() {
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
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      });
      gsap.from(Array.from(grid.children), {
        opacity: 0,
        scale: 0.95,
        duration: 0.55,
        stagger: 0.04,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: grid, start: "top 82%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#181818] py-16 text-white sm:py-20">
      <div className="mx-auto w-full max-w-[980px] px-6 lg:px-8">
        <div ref={headerRef} className="text-center">
          <p
            className="font-oswald font-semibold text-[11px] leading-[100%] tracking-[2.42px] text-center align-middle uppercase text-[#F7AC1D]"
          >
            How It Works
          </p>
          <h2
            className="mt-2 font-oswald font-bold text-[54px] leading-[51.3px] text-center align-middle uppercase"
          >
            Our Work <span className="text-primary">Gallery</span>
          </h2>
        </div>

        <div ref={gridRef} className="mx-auto mt-8 grid max-w-[560px] grid-cols-12 auto-rows-[30px] gap-1.5 sm:mt-10 sm:auto-rows-[36px]">
          {galleryItems.map((item, index) => (
            <article
              key={`${item.src}-${index}`}
              className={`${item.className} relative overflow-hidden bg-white10`}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 560px, 100vw"
                />
              </motion.div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
