"use client";

import { useState } from "react";
import { FAQS } from "@/data/site";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3.5">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border border-black/[0.12] bg-white">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-[18px] border-none bg-none px-6 py-[22px] text-left"
            >
              <span className="font-open text-[17px] font-semibold leading-[1.35] tracking-[0.01em] text-ink">
                {f.q}
              </span>
              <span className="flex h-[26px] w-[26px] flex-none items-center justify-center bg-yellow font-open text-[18px] font-bold leading-none text-ink">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div
                className="px-6 pb-6 font-open text-[15px] leading-[1.7] text-[#4a4f55]"
                style={{ animation: "vtAcc .52s cubic-bezier(0.34,1.56,0.64,1)" }}
              >
                {f.a}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
