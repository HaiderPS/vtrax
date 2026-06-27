"use client";

import { useRef } from "react";
import MediaSlot from "./MediaSlot";
import { WHY } from "@/data/site";

export default function WhyCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const glide = (delta: number) => {
    const el = trackRef.current;
    if (!el) return;
    if (animRef.current) clearInterval(animRef.current);
    el.style.scrollSnapType = "none";
    const start = el.scrollLeft;
    const target = Math.max(
      0,
      Math.min(el.scrollWidth - el.clientWidth, start + delta)
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
        el.style.scrollSnapType = "";
      }
    }, 16);
  };

  return (
    <>
      <div className="mb-[18px] flex justify-end gap-2.5">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => glide(-358)}
          className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full border border-black/[0.16] bg-white font-open text-[22px] leading-none text-ink transition-colors hover:border-ink hover:bg-ink hover:text-yellow"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => glide(358)}
          className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full border border-black/[0.16] bg-white font-open text-[22px] leading-none text-ink transition-colors hover:border-ink hover:bg-ink hover:text-yellow"
        >
          ›
        </button>
      </div>
      <div
        ref={trackRef}
        className="no-scrollbar flex gap-[18px] overflow-x-auto px-0.5 pb-2 pt-0.5"
        style={{ scrollSnapType: "x proximity" }}
      >
        {WHY.map((w) => (
          <div
            key={w.no}
            className="flex max-w-[340px] flex-[0_0_340px] flex-col border border-black/10 bg-white"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="bento-tile relative h-[220px]">
              <MediaSlot src={w.img} alt={w.title} sizes="340px" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top,rgba(14,15,17,0.82) 0%,rgba(14,15,17,0) 58%)",
                }}
              />
              <div className="absolute bottom-4 left-[18px] right-[18px]">
                <span className="font-open text-[12px] font-bold leading-none text-yellow">
                  {w.no}
                </span>
                <h3 className="m-0 mt-1.5 font-oswald text-[19px] font-bold uppercase leading-[1.15] text-white">
                  {w.title}
                </h3>
              </div>
            </div>
            <p className="m-0 flex-1 px-[22px] pb-6 pt-5 font-open text-[14.5px] leading-[1.6] text-[#5a5f65]">
              {w.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
