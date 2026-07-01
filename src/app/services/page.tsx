import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import MarqueeTape from "@/components/MarqueeTape";
import MediaSlot from "@/components/MediaSlot";
import GoogleReviews from "@/components/GoogleReviews";
import ServiceAreas from "@/components/ServiceAreas";
import AskJake from "@/components/AskJake";
import Badge from "@/components/Badge";
import { SEO, SERVICES, STEPS, IMG } from "@/data/site";

export const metadata: Metadata = {
  title: SEO.services.title,
  description: SEO.services.description,
};

const STEP_SPANS = [
  "col-span-2 row-span-2",
  "col-span-2",
  "",
  "",
];
const STEP_TITLE_SIZE = ["text-[24px]", "text-[18px]", "text-[18px]", "text-[18px]"];

export default function ServicesPage() {
  return (
    <div className="animate-fade bg-white">
      <PageHero
        badge="Services & Capabilities"
        bgSrc={IMG.concreteSleeperWall}
        title={
          <>
            Retaining walls &amp; excavation{" "}
            <span className="text-yellow">done properly</span>
          </>
        }
        subtitle="From a single garden wall to a full sloped-block solution, with structurally sound work backed by professional plant and a methodical, risk-managed process."
      />
      <MarqueeTape />

      {/* Capability list + service articles */}
      <section className="bg-white py-[clamp(56px,7vw,100px)]">
        <div className="mx-auto flex max-w-shell flex-col gap-16 px-8">
          {/* Alternating service rows */}
          {SERVICES.map((s, i) => {
            const imageRight = i % 2 === 1;
            return (
              <article
                key={s.title}
                id={s.anchor}
                className="grid scroll-mt-[120px] grid-cols-1 items-start gap-11 md:grid-cols-2"
              >
                <div
                  className={`relative h-[360px] ${
                    imageRight ? "md:order-2" : ""
                  }`}
                >
                  <MediaSlot src={s.img} alt={s.title} />
                </div>
                <div className={imageRight ? "md:order-1" : ""}>
                  <div className="mb-4">
                    <Badge tone="dark">{s.no}</Badge>
                  </div>
                  <h2 className="m-0 mb-3.5 font-oswald text-[clamp(26px,3.4vw,38px)] font-bold uppercase leading-[1.05] text-ink">
                    {s.title}
                  </h2>
                  <p className="m-0 mb-[18px] font-open text-[16px] leading-[1.65] text-[#4a4f55]">
                    {s.text}
                  </p>
                  <Link
                    href="/contact"
                    className="cursor-pointer border-b-2 border-yellow pb-1 font-open text-[12px] font-bold uppercase tracking-[0.08em] text-ink"
                  >
                    Get a quote →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section
        className="py-[clamp(64px,8vw,110px)]"
        style={{
          background:
            "radial-gradient(120% 90% at 85% 0%,rgba(255,203,5,0.05) 0%,rgba(255,203,5,0) 42%),radial-gradient(110% 90% at 0% 100%,rgba(255,255,255,0.7) 0%,rgba(255,255,255,0) 55%),#F2F2EE",
        }}
      >
        <div className="mx-auto max-w-shell px-8">
          <div className="mb-[18px]">
            <Badge tone="dark">How It Works</Badge>
          </div>
          <h2 className="m-0 mb-3 max-w-[22ch] font-oswald text-[clamp(28px,4vw,46px)] font-bold uppercase leading-[1.03] tracking-[0.005em] text-ink">
            From first call to final clean-up <span className="text-yellow">handled!</span>
          </h2>
          <p className="m-0 mb-12 max-w-[58ch] font-open text-[16px] leading-[1.65] text-[#4a4f55]">
            Every VTRAX job runs through the same four stages, so nothing is
            missed, the ground is right, and you always know what is next.
          </p>
          <div className="grid auto-rows-[210px] grid-flow-dense grid-cols-2 gap-3.5 md:grid-cols-4">
            {STEPS.map((step, i) => (
              <div
                key={step.no}
                className={`bento-tile relative min-h-0 overflow-hidden ${STEP_SPANS[i]}`}
              >
                <MediaSlot src={step.img} alt={step.title} sizes="(max-width:768px) 100vw, 50vw" />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top,rgba(14,15,17,0.93) 0%,rgba(14,15,17,0.42) 58%,rgba(14,15,17,0.2) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="font-oswald text-[30px] font-bold leading-none text-yellow">
                    {step.no}
                  </div>
                  <div>
                    <h3
                      className={`m-0 mb-2 font-oswald ${STEP_TITLE_SIZE[i]} font-bold uppercase leading-[1.12] text-white`}
                    >
                      {step.title}
                    </h3>
                    <p className="m-0 mb-3 max-w-[44ch] font-open text-[13.5px] leading-[1.55] text-[#C7CCD2]">
                      {step.desc}
                    </p>
                    <span className="inline-block bg-yellow px-2.5 py-1.5 font-open text-[10px] font-bold uppercase leading-none tracking-[0.1em] text-ink">
                      {step.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />
      <ServiceAreas photoSrc={IMG.serviceArea} />
      <AskJake />
    </div>
  );
}
