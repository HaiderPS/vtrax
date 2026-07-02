"use client";

import { useState } from "react";
import MediaSlot from "./MediaSlot";
import { STEPS } from "@/data/site";

const STEP_SPANS = ["col-span-2 row-span-2", "col-span-2", "", ""];
const STEP_TITLE_SIZE = ["text-[24px]", "text-[18px]", "text-[18px]", "text-[18px]"];

/**
 * "How It Works" bento. On phones (< sm) each tile is a 3D flip card:
 * tapping flips it to a back face showing only the step description
 * (no number/title). From sm up it stays the static bento (flip disabled).
 */
export default function HowItWorksGrid() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    // Flip is mobile-only; on larger screens the full card shows statically.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 640px)").matches
    )
      return;
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div className="grid auto-rows-[230px] grid-flow-dense grid-cols-1 gap-3.5 sm:auto-rows-[210px] sm:grid-cols-2 md:grid-cols-4">
      {STEPS.map((step, i) => {
        const isFlipped = flipped.has(i);
        return (
          <div
            key={step.no}
            className={`relative min-h-0 [perspective:1200px] ${STEP_SPANS[i]}`}
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-pressed={isFlipped}
              aria-label={`${step.title} — tap to ${
                isFlipped ? "hide" : "show"
              } details`}
              className="relative block h-full w-full cursor-pointer text-left transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] sm:cursor-default"
              style={{ transform: isFlipped ? "rotateY(180deg)" : undefined }}
            >
              {/* FRONT — image, number, title (+ desc/badge from sm up) */}
              <div className="bento-tile absolute inset-0 overflow-hidden [backface-visibility:hidden]">
                <MediaSlot
                  src={step.img}
                  alt={step.title}
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top,rgba(14,15,17,0.93) 0%,rgba(14,15,17,0.42) 58%,rgba(14,15,17,0.2) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:justify-between">
                  <div className="font-oswald text-[30px] font-bold leading-none text-yellow">
                    {step.no}
                  </div>
                  <div className="mt-2.5 sm:mt-0">
                    <h3
                      className={`m-0 mb-2 font-oswald ${STEP_TITLE_SIZE[i]} font-bold uppercase leading-[1.12] text-white`}
                    >
                      {step.title}
                    </h3>
                    {/* Description + yellow badge: hidden on mobile, shown from sm up */}
                    <p className="m-0 mb-3 hidden max-w-[44ch] font-open text-[13.5px] leading-[1.55] text-[#C7CCD2] sm:block">
                      {step.desc}
                    </p>
                    <span className="hidden bg-yellow px-2.5 py-1.5 font-open text-[10px] font-bold uppercase leading-none tracking-[0.1em] text-ink sm:inline-block">
                      {step.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* BACK (mobile flip target) — only the description text */}
              <div className="absolute inset-0 flex items-center overflow-hidden bg-ink p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:hidden">
                <p className="border-l-2 border-yellow pl-4 font-open text-[14.5px] leading-[1.6] text-[#C7CCD2]">
                  {step.desc}
                </p>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
