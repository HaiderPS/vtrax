"use client";

import { useState } from "react";
import MediaSlot from "./MediaSlot";
import { BEFORE_AFTER } from "@/data/site";

export default function BeforeAfter() {
  const [job, setJob] = useState(0);
  const [pos, setPos] = useState(50);
  const active = BEFORE_AFTER[job];
  const clip = 100 - pos;

  return (
    <>
      <div className="mb-[22px] flex flex-wrap gap-2.5">
        {BEFORE_AFTER.map((_, i) => {
          const on = job === i;
          return (
            <button
              key={i}
              type="button"
              onClick={() => {
                setJob(i);
                setPos(50);
              }}
              className={`cursor-pointer border px-[18px] py-[11px] font-open text-[12px] font-bold uppercase tracking-[0.08em] ${
                on
                  ? "border-ink bg-ink text-yellow"
                  : "border-black/[0.18] bg-white text-ink"
              }`}
            >
              Job {i + 1}
            </button>
          );
        })}
      </div>

      <div className="relative h-[clamp(280px,42vw,460px)] w-full overflow-hidden border border-white/[0.08] bg-ink-2">
        <div className="absolute inset-0">
          <MediaSlot src={active.after} alt={active.afterLabel} sizes="100vw" />
        </div>
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${clip}% 0 0)` }}
        >
          <MediaSlot src={active.before} alt={active.beforeLabel} sizes="100vw" />
        </div>
        <div
          className="pointer-events-none absolute bottom-0 top-0 w-[3px] -translate-x-[1.5px] bg-yellow"
          style={{ left: `${pos}%` }}
        />
        <span className="absolute left-[14px] top-[14px] bg-ink px-2.5 py-1.5 font-open text-[10px] font-bold uppercase leading-none tracking-[0.12em] text-white">
          Before
        </span>
        <span className="absolute right-[14px] top-[14px] bg-yellow px-2.5 py-1.5 font-open text-[10px] font-bold uppercase leading-none tracking-[0.12em] text-ink">
          After
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="mt-[18px] w-full cursor-pointer"
        style={{ accentColor: "#FFCB05" }}
        aria-label="Compare before and after"
      />
      <div className="mt-3.5 font-open text-[16px] font-semibold leading-[1.4] tracking-[0.02em] text-white">
        {active.title}
      </div>
    </>
  );
}
