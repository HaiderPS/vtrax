"use client";

import { useState } from "react";
import MediaSlot from "./MediaSlot";
import { PROJECTS, PROJECT_FILTERS, type ProjectCat } from "@/data/site";

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<ProjectCat>("all");

  const list =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <>
      {/* Filter chips */}
      <div className="mb-10 flex flex-wrap gap-2.5">
        {PROJECT_FILTERS.map((f) => {
          const on = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`cursor-pointer border px-[18px] py-[11px] font-open text-[12px] font-bold uppercase tracking-[0.08em] ${
                on
                  ? "border-ink bg-ink text-yellow"
                  : "border-black/[0.18] bg-white text-ink"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid — first item spans full width */}
      <div className="grid auto-rows-auto grid-cols-1 gap-[22px] md:grid-cols-2">
        {list.map((p, i) => {
          const wide = i === 0;
          return (
            <article
              key={p.title}
              className={`flex flex-col border border-black/[0.12] bg-white ${
                wide ? "md:col-span-2" : ""
              }`}
            >
              <div className={`relative ${wide ? "h-[320px]" : "h-[230px]"}`}>
                <MediaSlot
                  src={p.img}
                  alt={p.media}
                  sizes={wide ? "100vw" : "(max-width:768px) 100vw, 50vw"}
                />
              </div>
              <div className="flex flex-1 flex-col px-[26px] pb-7 pt-[26px]">
                <div className="font-open text-[11px] font-bold uppercase leading-none tracking-[0.14em] text-yellow">
                  {p.tag}
                </div>
                <h3 className="m-0 mb-[18px] mt-3 font-oswald text-[21px] font-bold uppercase leading-[1.15] text-ink">
                  {p.title}
                </h3>
                <dl className="m-0 mb-[18px] grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5">
                  <dt className="self-start font-open text-[10px] font-bold uppercase leading-[1.4] tracking-[0.1em] text-[#9aa1a8]">
                    Location
                  </dt>
                  <dd className="m-0 font-open text-[14px] font-medium leading-[1.45] text-ink">
                    {p.location}
                  </dd>
                  <dt className="self-start font-open text-[10px] font-bold uppercase leading-[1.4] tracking-[0.1em] text-[#9aa1a8]">
                    Sector
                  </dt>
                  <dd className="m-0 font-open text-[14px] font-medium leading-[1.45] text-ink">
                    {p.sector}
                  </dd>
                  <dt className="self-start font-open text-[10px] font-bold uppercase leading-[1.4] tracking-[0.1em] text-[#9aa1a8]">
                    Scope
                  </dt>
                  <dd className="m-0 font-open text-[14px] leading-[1.5] text-[#4a4f55]">
                    {p.scope}
                  </dd>
                </dl>
                <div className="mt-auto border-l-[3px] border-yellow bg-panel px-4 py-3.5">
                  <div className="mb-[5px] font-open text-[10px] font-bold uppercase leading-[1.4] tracking-[0.1em] text-ink">
                    Key Outcome
                  </div>
                  <div className="font-open text-[13.5px] leading-[1.55] text-[#4a4f55]">
                    {p.outcome}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
