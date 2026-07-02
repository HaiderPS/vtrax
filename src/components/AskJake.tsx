import Link from "next/link";
import { CONTACT } from "@/data/site";

/** "Ask Jake" dark CTA band, shown near the foot of inner pages. */
export default function AskJake() {
  return (
    <section className="bg-white pb-[clamp(56px,7vw,90px)]">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="relative flex flex-wrap items-center justify-between gap-6 overflow-hidden bg-ink p-[clamp(34px,4vw,48px)]">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 140% at 100% 0%,rgba(255,203,5,0.14) 0%,rgba(255,203,5,0) 46%)",
            }}
          />
          <div className="relative">
            <div className="mb-3 font-inter text-[11px] font-bold uppercase leading-none tracking-[0.18em] text-yellow">
              Still got questions?
            </div>
            <div className="max-w-[22ch] font-oswald text-[clamp(22px,2.8vw,32px)] font-bold uppercase leading-[1.1] text-white">
              Have a question? Ask Jake directly.
            </div>
          </div>
          <div className="relative flex flex-wrap gap-3.5">
            <Link
              href="/contact"
              className="btn-primary px-[26px] py-[17px] text-[13px] tracking-[0.06em]"
            >
              Get in touch
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="btn-outline-light px-[26px] py-[17px] text-[13px] tracking-[0.06em]"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
