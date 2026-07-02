import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MarqueeTape from "@/components/MarqueeTape";
import MediaSlot from "@/components/MediaSlot";
import GoogleReviews from "@/components/GoogleReviews";
import ServiceAreas from "@/components/ServiceAreas";
import AskJake from "@/components/AskJake";
import Badge from "@/components/Badge";
import { SEO, EQUIPMENT, CONTACT, IMG } from "@/data/site";

export const metadata: Metadata = {
  title: SEO.about.title,
  description: SEO.about.description,
};

const SCALE = [
  { n: "8+ yrs", t: "On the tools across the region" },
  { n: "60km", t: "Service radius of Wollongong" },
  { n: "60+", t: "Retaining walls completed" },
  { n: "Full kit", t: "Excavation & wall plant owned" },
];

const HSEQ = [
  {
    kicker: "Health & Safety",
    title: "Safe systems of work",
    points: [
      "Site-specific SWMS before works start",
      "Service location & dial-before-you-dig checks",
      "Exclusion zones around plant",
    ],
  },
  {
    kicker: "Environment",
    title: "Site & stormwater control",
    points: [
      "Sediment & erosion control on site",
      "Stormwater & ag-drainage managed",
      "Spoil removed and disposed responsibly",
    ],
  },
  {
    kicker: "Quality",
    title: "Built to last",
    points: [
      "Correct footings & structural set-out",
      "Laser-levelled and compacted bases",
      "Final inspection & clean hand-over",
    ],
  },
  {
    kicker: "Compliance",
    title: "Covered & accountable",
    points: [
      "Publicly insured & compliant",
      `NSW Contractor Licence ${CONTACT.licence}, current to Jun 2029`,
      `Registered ABN ${CONTACT.abn}`,
      "Direct accountability, one operator, one standard",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="animate-fade bg-white">
      <PageHero
        badge="About VTRAX Projects"
        bgSrc={IMG.aboutHero}
        title={
          <>
            Locally owned. <span className="text-yellow">Illawarra</span> built.
          </>
        }
        subtitle="VTRAX Projects is a locally owned retaining wall installations and landscaping company servicing the Illawarra region. We specialise in excavation, retaining walls, and landscaping, delivering reliable and precise work for homeowners across Wollongong, Shellharbour, Kiama, and the South Coast."
        subtitle2="Founded by Jake Agius, VTRAX Projects is built on practical industry experience, professional equipment, and a commitment to delivering every project safely, efficiently, and to the highest standard."
      />
      <MarqueeTape />

      {/* Mission / Approach / Promise */}
      <section className="bg-white py-[clamp(64px,8vw,110px)]">
        <div className="mx-auto grid max-w-shell grid-cols-1 gap-[18px] px-5 sm:px-8 md:grid-cols-2">
          <div className="relative col-span-1 overflow-hidden bg-ink p-[clamp(32px,4vw,46px)] md:col-span-2">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 160% at 100% 0%,rgba(255,203,5,0.16) 0%,rgba(255,203,5,0) 48%)",
              }}
            />
            <div className="relative max-w-[60ch]">
              <h2 className="m-0 mb-3.5 font-oswald text-[13px] font-bold uppercase leading-none tracking-[0.16em] text-yellow">
                Our Mission
              </h2>
              <p className="m-0 font-open text-[clamp(17px,1.9vw,22px)] leading-[1.55] text-white">
                To deliver reliable, structurally sound retaining walls and
                earthworks across the Illawarra. Long-lasting results with a
                clean, professional finish that homeowners across the region can
                trust.
              </p>
            </div>
          </div>
          <div className="border-t-4 border-yellow bg-panel px-5 sm:px-8 py-[38px]">
            <h2 className="m-0 mb-3 font-oswald text-[14px] font-bold uppercase leading-none tracking-[0.14em] text-ink">
              Our Approach
            </h2>
            <p className="m-0 font-open text-[16px] leading-[1.65] text-[#4a4f55]">
              Do the groundwork properly. Correct footings, drainage and
              compaction on every job, because the parts you can&apos;t see are
              what keep a wall standing for decades.
            </p>
          </div>
          <div className="border-t-4 border-yellow bg-panel px-5 sm:px-8 py-[38px]">
            <h2 className="m-0 mb-3 font-oswald text-[14px] font-bold uppercase leading-none tracking-[0.14em] text-ink">
              Our Promise
            </h2>
            <p className="m-0 font-open text-[16px] leading-[1.65] text-[#4a4f55]">
              Direct, honest dealings from the person doing the work. Free site
              visits, clear quotes and a tidy site handed back at the end, with
              no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Capability & Scale */}
      <section
        className="py-[clamp(64px,8vw,110px)]"
        style={{
          background:
            "radial-gradient(120% 90% at 85% 0%,rgba(255,203,5,0.05) 0%,rgba(255,203,5,0) 42%),radial-gradient(110% 90% at 0% 100%,rgba(255,255,255,0.7) 0%,rgba(255,255,255,0) 55%),#F2F2EE",
        }}
      >
        <div className="mx-auto grid max-w-shell grid-cols-1 items-center gap-12 px-5 sm:px-8 md:grid-cols-2">
          <div>
            <div className="mb-[18px]">
              <Badge tone="dark">Capability &amp; Scale</Badge>
            </div>
            <h2 className="m-0 mb-[22px] font-oswald text-[clamp(28px,4vw,44px)] font-bold uppercase leading-[1.04] tracking-[0.005em] text-ink">
              The footprint{" "}
              <span className="text-yellow">
                plant and capacity behind the work
              </span>
            </h2>
            <p className="m-0 mb-7 font-open text-[16px] leading-[1.65] text-[#4a4f55]">
              From a Lake Heights base we cover the Illawarra and beyond,
              owner-operated, fully equipped and built to keep jobs moving on
              schedule.
            </p>
            <div className="grid grid-cols-2 gap-px border border-black/[0.12] bg-black/[0.12]">
              {SCALE.map((s) => (
                <div key={s.n} className="bg-white p-6">
                  <div className="font-open text-[28px] font-bold leading-none text-ink">
                    {s.n}
                  </div>
                  <div className="mt-1.5 font-open text-[13px] font-medium leading-[1.4] text-[#5a5f65]">
                    {s.t}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[420px]">
            <MediaSlot
              src={IMG.capabilityScale}
              alt="VTRAX operator securing the Kobelco SK17SR for transport"
            />
          </div>
        </div>
      </section>

      {/* Plant & Machinery */}
      <section className="bg-white py-[clamp(56px,7vw,96px)]">
        <div className="mx-auto max-w-shell px-5 sm:px-8">
          <div className="mb-[18px]">
            <Badge tone="dark">Plant &amp; Machinery</Badge>
          </div>
          <h2 className="m-0 mb-9 font-oswald text-[clamp(26px,3.6vw,40px)] font-bold uppercase leading-[1.04] text-ink">
            Reliably <span className="text-yellow">efficient</span> professional
          </h2>
          <div className="grid grid-cols-1 items-stretch gap-[18px] md:grid-cols-2">
            <div className="bento-tile relative min-h-[320px] border border-black/10">
              <MediaSlot
                src={IMG.excavationEquipment}
                alt="Kobelco SK17SR mini excavator on site"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top,rgba(14,15,17,0.85),rgba(14,15,17,0) 55%)",
                }}
              />
              <div className="absolute bottom-5 left-[22px] right-[22px]">
                <div className="mb-2 font-open text-[11px] font-bold uppercase leading-none tracking-[0.14em] text-yellow">
                  Lead machine
                </div>
                <div className="font-oswald text-[24px] font-bold uppercase leading-[1.05] text-white">
                  Kobelco SK17SR
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              {EQUIPMENT.map((eq) => (
                <div
                  key={eq.name}
                  className="flex flex-col justify-center border border-black/[0.12] bg-white p-5"
                >
                  <div className="font-oswald text-[16px] font-bold uppercase leading-[1.25] text-ink">
                    {eq.name}
                  </div>
                  <div className="mt-1.5 font-open text-[13px] leading-[1.5] text-[#6b7177]">
                    {eq.use}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HSEQ Control System */}
      <section
        className="py-[clamp(64px,8vw,110px)]"
        style={{
          background:
            "radial-gradient(120% 90% at 85% 0%,rgba(255,203,5,0.07) 0%,rgba(255,203,5,0) 40%),radial-gradient(100% 80% at 0% 100%,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0) 50%),#0E0F11",
        }}
      >
        <div className="mx-auto max-w-shell px-5 sm:px-8">
          <div className="mb-[18px]">
            <Badge tone="light">HSEQ Control System</Badge>
          </div>
          <h2 className="m-0 mb-4 max-w-[24ch] font-oswald text-[clamp(28px,4vw,46px)] font-bold uppercase leading-[1.03] tracking-[0.005em] text-white">
            Simple process <span className="text-yellow">professional results</span>
          </h2>
          <p className="m-0 mb-11 max-w-[60ch] font-open text-[16px] leading-[1.65] text-[#9aa1a8]">
            VTRAX applies practical Health, Safety, Environment and Quality
            controls on every site, sized for residential and trade work, and
            documented before the machine turns up.
          </p>
          <div className="grid grid-cols-1 items-stretch gap-3.5 md:grid-cols-2">
            <div className="bento-tile relative min-h-[320px] border border-white/10">
              <MediaSlot
                src={IMG.excavationFootings}
                alt="Site prepared and documented before works"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top,rgba(14,15,17,0.88),rgba(14,15,17,0.12) 60%)",
                }}
              />
              <div className="absolute bottom-[22px] left-[22px] right-[22px]">
                <div className="mb-2 font-open text-[11px] font-bold uppercase leading-none tracking-[0.14em] text-yellow">
                  On every site
                </div>
                <div className="font-oswald text-[22px] font-bold uppercase leading-[1.1] text-white">
                  Documented before the machine arrives
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {HSEQ.map((c) => (
                <div key={c.kicker} className="bg-ink-2 px-[26px] py-8">
                  <div className="font-open text-[11px] font-bold uppercase leading-none tracking-[0.16em] text-yellow">
                    {c.kicker}
                  </div>
                  <h3 className="m-0 mb-3 mt-3.5 font-oswald text-[18px] font-bold uppercase leading-[1.25] text-white">
                    {c.title}
                  </h3>
                  <ul className="m-0 list-disc pl-[18px] font-open text-[14px] leading-[1.7] text-[#AEB4BB]">
                    {c.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />
      <ServiceAreas photoSrc={IMG.serviceArea} />
      <AskJake />
    </div>
  );
}
