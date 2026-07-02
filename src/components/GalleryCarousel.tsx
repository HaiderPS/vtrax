"use client";

import { useRef } from "react";
import MediaSlot from "./MediaSlot";

type GalleryItem = { img: string; label: string };

/**
 * GalleryCarousel — the "Our Work Gallery" tiles.
 * On phones (< sm) it is a one-image-at-a-time snap carousel with arrows;
 * from sm up it reflows into the original 2-col / 3-col grid.
 */
export default function GalleryCarousel({ items }: { items: GalleryItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const glide = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    if (animRef.current) clearInterval(animRef.current);
    el.style.scrollSnapType = "none";
    // Advance by exactly one full-width slide (slide width + gap).
    const first = el.firstElementChild as HTMLElement | null;
    const step = (first ? first.getBoundingClientRect().width : el.clientWidth) + 14;
    const start = el.scrollLeft;
    const target = Math.max(
      0,
      Math.min(el.scrollWidth - el.clientWidth, start + dir * step)
    );
    const t0 = Date.now();
    const dur = 380;
    const ease = (p: number) => 1 - Math.pow(1 - p, 3);
    animRef.current = setInterval(() => {
      const p = Math.min(1, (Date.now() - t0) / dur);
      el.scrollLeft = start + (target - start) * ease(p);
      if (p >= 1) {
        if (animRef.current) clearInterval(animRef.current);
        animRef.current = null;
        el.style.scrollSnapType = "x mandatory";
      }
    }, 16);
  };

  return (
    <>
      {/* Mobile-only carousel arrows */}
      <div className="mb-3.5 flex justify-end gap-2.5 sm:hidden">
        <button
          type="button"
          aria-label="Previous image"
          onClick={() => glide(-1)}
          className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full border border-black/[0.16] bg-white font-open text-[22px] leading-none text-ink transition-colors hover:border-ink hover:bg-ink hover:text-yellow"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={() => glide(1)}
          className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full border border-black/[0.16] bg-white font-open text-[22px] leading-none text-ink transition-colors hover:border-ink hover:bg-ink hover:text-yellow"
        >
          ›
        </button>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex gap-3.5 overflow-x-auto sm:grid sm:grid-cols-2 sm:overflow-visible md:grid-cols-3"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((g, i) => (
          <div
            key={i}
            className="bento-tile relative aspect-square min-h-0 w-full flex-[0_0_100%] overflow-hidden rounded-[2px] sm:w-auto sm:flex-none"
            style={{ scrollSnapAlign: "start" }}
          >
            <MediaSlot
              src={g.img}
              alt={g.label}
              sizes="(max-width:640px) 100vw, (max-width:768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </>
  );
}
