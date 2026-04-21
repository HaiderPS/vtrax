"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
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


const mobileRow8Images = [
  {
    src: "/images/our-work/13-new.jpg", 
    alt: "Final checks on completed retaining",
  },
  {
    src: "/images/mobi99.jpg", 
    alt: "Excavation and cleanup phase",
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

  const renderMobileLayout = () => {
    return (
      <div className="flex flex-col gap-2">
        {/* Row 1: 2 images - Both with same height */}
        <div className="grid grid-cols-2 gap-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
            <Image
              src={galleryItems[0].src}
              alt={galleryItems[0].alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
            <Image
              src={galleryItems[1].src}
              alt={galleryItems[1].alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>

        {/* Row 2: 2 images - both portrait */}
        <div className="grid grid-cols-2 gap-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
            <Image
              src={galleryItems[2].src}
              alt={galleryItems[2].alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
            <Image
              src={galleryItems[3].src}
              alt={galleryItems[3].alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>

        {/* Row 3: 1 image - landscape (full width) */}
        <div className="w-full">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm">
            <Image
              src={galleryItems[8].src}
              alt={galleryItems[8].alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Row 4: 2 images - portrait & portrait (taller height) */}
        <div className="grid grid-cols-2 gap-2">
          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm">
            <Image
              src={galleryItems[4].src}
              alt={galleryItems[4].alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm">
            <Image
              src={galleryItems[5].src}
              alt={galleryItems[5].alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>

        {/* Row 5: 2 images - portrait & portrait */}
        <div className="grid grid-cols-2 gap-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
            <Image
              src={galleryItems[6].src}
              alt={galleryItems[6].alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
            <Image
              src={galleryItems[7].src}
              alt={galleryItems[7].alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>

        {/* Row 6: 2 images - both with same height */}
        <div className="grid grid-cols-2 gap-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
            <Image
              src={galleryItems[10].src}
              alt={galleryItems[10].alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
            <Image
              src={galleryItems[11].src}
              alt={galleryItems[11].alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>

        {/* Row 7: 1 image - landscape (full width) */}
        <div className="w-full">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm">
            <Image
              src={galleryItems[9].src}
              alt={galleryItems[9].alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Row 8: CUSTOM IMAGES - You can change these images freely */}
        <div className="grid grid-cols-2 gap-2">
          {/* First custom image */}
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
            <Image
              src={mobileRow8Images[0].src}
              alt={mobileRow8Images[0].alt}
              fill
              className="object-cover object-top"
              sizes="50vw"
            />
          </div>
          {/* Second custom image */}
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
            <Image
              src={mobileRow8Images[1].src}
              alt={mobileRow8Images[1].alt}
              fill
              className="object-cover object-top"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
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
        <div className="mt-8 sm:hidden">
          {renderMobileLayout()}
        </div>

        {/* Desktop Layout (unchanged) */}
        <div
          ref={gridRef}
          className="mx-auto mt-10 hidden max-w-[1300px] flex-col gap-2 sm:mt-12 sm:flex"
        >
          {/* Row 1: portrait | square | portrait | portrait - ALL SAME HEIGHT */}
          <div className="grid h-[320px] grid-cols-12 gap-2">
            <div className="relative col-span-3 overflow-hidden rounded-sm opacity-80">
              <Image
                src={galleryItems[0].src}
                alt={galleryItems[0].alt}
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative col-span-5 overflow-hidden rounded-sm opacity-80">
              <Image
                src={galleryItems[1].src}
                alt={galleryItems[1].alt}
                fill
                className="object-cover"
                sizes="41vw"
              />
            </div>
            <div className="relative col-span-2 overflow-hidden rounded-sm opacity-80">
              <Image
                src={galleryItems[2].src}
                alt={galleryItems[2].alt}
                fill
                className="object-cover"
                sizes="16vw"
              />
            </div>
            <div className="relative col-span-2 overflow-hidden rounded-sm opacity-80">
              <Image
                src={galleryItems[3].src}
                alt={galleryItems[3].alt}
                fill
                className="object-cover"
                sizes="16vw"
              />
            </div>
          </div>

          {/* Row 2: 4 equal portrait images */}
          <div className="grid h-[320px] grid-cols-4 gap-2">
            {galleryItems.slice(4, 8).map((item, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-sm opacity-80">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            ))}
          </div>

          {/* Row 3: 2 half-width landscape images — h400px */}
          <div className="grid h-[400px] grid-cols-2 gap-2">
            {galleryItems.slice(8, 10).map((item, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-sm opacity-80">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            ))}
          </div>

          {/* Row 4: 4 equal portrait images */}
          <div className="grid h-[320px] grid-cols-4 gap-2">
            {galleryItems.slice(10, 14).map((item, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-sm opacity-80">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}