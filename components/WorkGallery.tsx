"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, cubicBezier } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type GalleryItem = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  isLandscape?: boolean;
  isPortrait?: boolean;
};

const galleryItems: GalleryItem[] = [
  {
    src: "/images/our-work/1-new.jpg",
    alt: "Stone retaining wall with landscaping",
    width: 870,
    height: 580,
  },
  {
    src: "/images/our-work/2-new.jpg",
    alt: "Workers installing concrete blocks for wall",
    width: 500,
    height: 500,
  },
  {
    src: "/images/our-work/3-new.jpg",
    alt: "Modern garden with stone retaining wall",
    width: 500,
    height: 700,
    isPortrait: true,
  },
  {
    src: "/images/our-work/4-new.jpg",
    alt: "Excavator preparing ground for retaining wall",
    width: 500,
    height: 700,
    isPortrait: true,
  },
  {
    src: "/images/our-work/5-new.jpg",
    alt: "Landscaping with timber retaining wall",
    width: 500,
    height: 500,
  },
  {
    src: "/images/our-work/6-new.jpg",
    alt: "Mini excavator for wall excavation",
    width: 500,
    height: 500,
  },
  {
    src: "/images/our-work/7-new.jpg",
    alt: "Crew operating compact equipment for wall",
    width: 500,
    height: 700,
    isPortrait: true,
  },
  {
    src: "/images/our-work/8-new.jpg",
    alt: "Operator setting wall levels",
    width: 500,
    height: 700,
    isPortrait: true,
  },
  {
    src: "/images/our-work/9-new.jpg",
    alt: "Demolition and old timber wall removal",
    width: 800,
    height: 450,
    isLandscape: true,
  },
  {
    src: "/images/our-work/10-new.jpg",
    alt: "Machine shaping site levels for retaining wall",
    width: 800,
    height: 450,
    isLandscape: true,
  },
  {
    src: "/images/our-work/11-new.jpg",
    alt: "Excavator close-up",
    width: 500,
    height: 500,
  },
  {
    src: "/images/our-work/12-new.jpg",
    alt: "Team drilling wall supports",
    width: 500,
    height: 500,
  },
  {
    src: "/images/our-work/13-new.jpg",
    alt: "Final checks on completed retaining",
    width: 500,
    height: 500,
  },
  {
    src: "/images/our-work/14-new.jpg",
    alt: "Excavation and cleanup phase",
    width: 500,
    height: 500,
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
        y: 20,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: { trigger: grid, start: "top 85%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  // Mobile layout: exactly as requested
  const renderMobileLayout = () => {
    return (
      <>
        {/* Row 1: 2 square images (Img 1, Img 2) */}
        <div className="grid grid-cols-2 gap-2">
          <motion.div
            className="relative overflow-hidden rounded-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={galleryItems[0].src}
                alt={galleryItems[0].alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={galleryItems[1].src}
                alt={galleryItems[1].alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Row 2: 2 portrait images (Img 3, Img 4) */}
        <div className="grid grid-cols-2 gap-2">
          <motion.div
            className="relative overflow-hidden rounded-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={galleryItems[2].src}
                alt={galleryItems[2].alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={galleryItems[3].src}
                alt={galleryItems[3].alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Row 3: Landscape image (Img 9) - full width */}
        <motion.div
          className="relative overflow-hidden rounded-sm"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={galleryItems[8].src}
              alt={galleryItems[8].alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </motion.div>

        {/* Row 4: 2 square images (Img 5, Img 6) */}
        <div className="grid grid-cols-2 gap-2">
          <motion.div
            className="relative overflow-hidden rounded-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={galleryItems[4].src}
                alt={galleryItems[4].alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={galleryItems[5].src}
                alt={galleryItems[5].alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Row 5: 2 portrait images (Img 7, Img 8) */}
        <div className="grid grid-cols-2 gap-2">
          <motion.div
            className="relative overflow-hidden rounded-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={galleryItems[6].src}
                alt={galleryItems[6].alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={galleryItems[7].src}
                alt={galleryItems[7].alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Row 6: Landscape image (Img 10) - full width */}
        <motion.div
          className="relative overflow-hidden rounded-sm"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={galleryItems[9].src}
              alt={galleryItems[9].alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </motion.div>

        {/* Row 7: 2 square images (Img 11, Img 12) */}
        <div className="grid grid-cols-2 gap-2">
          <motion.div
            className="relative overflow-hidden rounded-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={galleryItems[10].src}
                alt={galleryItems[10].alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={galleryItems[11].src}
                alt={galleryItems[11].alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Row 8: 2 square images (Img 13, Img 14) */}
        <div className="grid grid-cols-2 gap-2">
          <motion.div
            className="relative overflow-hidden rounded-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={galleryItems[12].src}
                alt={galleryItems[12].alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={galleryItems[13].src}
                alt={galleryItems[13].alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </motion.div>
        </div>
      </>
    );
  };

  return (
    <section ref={sectionRef} className="bg-[#181818] py-20 text-white sm:py-24">
      <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-8">
        <div ref={headerRef} className="text-center">
          <p className="font-oswald font-semibold text-[14px] leading-[100%] tracking-[2.42px] text-center align-middle uppercase text-[#F7AC1D]">
            How It Works
          </p>
          <h2 className="mt-3 font-oswald font-bold text-[40px] leading-[1.1] text-center align-middle uppercase sm:text-[68px]">
            Our Work <span className="text-primary">Gallery</span>
          </h2>
        </div>

        {/* Mobile Layout (visible only on mobile) */}
        <div className="mt-8 flex flex-col gap-2 sm:hidden">
          {renderMobileLayout()}
        </div>

        {/* Desktop Layout (unchanged - visible only on desktop) */}
        <div 
          ref={gridRef} 
          className="mx-auto mt-10 hidden max-w-[1300px] grid-cols-12 auto-rows-[45px] gap-2 sm:mt-12 sm:auto-rows-[55px] sm:grid"
        >
          {galleryItems.map((item, index) => (
            <article
              key={`${item.src}-${index}`}
              className={`relative overflow-hidden rounded-sm ${
                item.isLandscape 
                  ? "col-span-6 row-span-2" 
                  : item.isPortrait
                  ? "col-span-3 row-span-3"
                  : "col-span-3 row-span-2"
              }`}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 1200px, (min-width: 640px) 560px, 100vw"
                />
              </motion.div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}