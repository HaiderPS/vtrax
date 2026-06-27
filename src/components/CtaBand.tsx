import Link from "next/link";
import { CONTACT } from "@/data/site";

/**
 * CtaBand — bold yellow call-to-action band.
 * Available as a reusable section; drop into any page where a strong
 * mid-page conversion prompt is wanted.
 */
export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-yellow">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 110% at 100% 0%,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 46%),radial-gradient(90% 90% at 0% 100%,rgba(14,15,17,0.08) 0%,rgba(14,15,17,0) 50%)",
        }}
      />
      <div className="mx-auto grid max-w-shell grid-cols-1 items-center gap-8 px-8 py-[clamp(56px,7vw,88px)] md:grid-cols-2">
        <div>
          <div className="mb-4 font-open text-[12px] font-bold uppercase leading-none tracking-[0.2em] text-ink opacity-70">
            Free quote · Free site visit
          </div>
          <h2 className="m-0 max-w-[18ch] font-oswald text-[clamp(28px,4.2vw,48px)] font-bold uppercase leading-[1.02] tracking-[0.005em] text-ink">
            Got a slope, a wall or a yard that needs sorting?
          </h2>
        </div>
        <div className="flex flex-col items-start gap-[18px]">
          <p className="m-0 max-w-[42ch] font-open text-[17px] leading-[1.6] text-[#1c1f24]">
            Tell us about your block and we&apos;ll come out, assess the ground
            and give you a clear, no-obligation quote. Quickest answer is a quick
            call or text.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link
              href="/contact"
              className="inline-flex cursor-pointer items-center gap-2.5 rounded-[3px] bg-ink px-[28px] py-[18px] font-open text-[14px] font-bold uppercase tracking-[0.05em] text-yellow transition-transform hover:-translate-y-0.5 hover:bg-black"
              style={{ boxShadow: "0 6px 18px rgba(14,15,17,0.25)" }}
            >
              Get a Free Quote
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex cursor-pointer items-center gap-2.5 rounded-[3px] border-[1.5px] border-ink bg-transparent px-[28px] py-[18px] font-open text-[14px] font-bold uppercase tracking-[0.05em] text-ink no-underline transition-transform hover:-translate-y-0.5 hover:bg-ink/[0.08]"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
