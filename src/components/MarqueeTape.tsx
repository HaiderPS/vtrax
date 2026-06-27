import { MARQUEE_STATS } from "@/data/site";

function Diamond() {
  return (
    <span className="inline-flex items-center text-[9px] text-ink opacity-55">
      &#9670;
    </span>
  );
}

function StatRun({ keyPrefix }: { keyPrefix: string }) {
  return (
    <>
      {MARQUEE_STATS.map((s, i) => (
        <span key={keyPrefix + i} className="contents">
          <div className="inline-flex items-center gap-[14px] whitespace-nowrap px-[34px] py-4">
            <span className="font-oswald text-[22px] font-bold leading-none text-ink">
              {s.n}
            </span>
            <span className="font-open text-[12px] font-semibold uppercase leading-[1.2] tracking-[0.08em] text-ink">
              {s.t}
            </span>
          </div>
          <Diamond />
        </span>
      ))}
    </>
  );
}

/** Infinite yellow stat marquee shown under every page hero. */
export default function MarqueeTape() {
  return (
    <div className="vt-tape border-t border-black/[0.14] bg-yellow">
      <div className="vt-tape-track">
        <StatRun keyPrefix="a" />
        <StatRun keyPrefix="b" />
      </div>
    </div>
  );
}
