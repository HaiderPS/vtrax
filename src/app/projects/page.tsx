import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MarqueeTape from "@/components/MarqueeTape";
import MediaSlot from "@/components/MediaSlot";
import BeforeAfter from "@/components/BeforeAfter";
import ProjectsGrid from "@/components/ProjectsGrid";
import GoogleReviews from "@/components/GoogleReviews";
import ServiceAreas from "@/components/ServiceAreas";
import AskJake from "@/components/AskJake";
import Badge from "@/components/Badge";
import { SEO, GALLERY, IMG } from "@/data/site";

export const metadata: Metadata = {
  title: SEO.projects.title,
  description: SEO.projects.description,
};

export default function ProjectsPage() {
  return (
    <div className="animate-fade bg-white">
      <PageHero
        badge="Projects & Sectors"
        bgSrc={IMG.hero}
        title={
          <>
            <span className="text-yellow">Our work</span> across the Illawarra
          </>
        }
        subtitle="A snapshot of VTRAX project experience: concrete sleeper, timber, block and multi-tier retaining walls, plus landscaping, across residential and trade sites."
      />
      <MarqueeTape />

      {/* Before & After interactive */}
      <section
        className="py-[clamp(56px,7vw,96px)]"
        style={{
          background:
            "radial-gradient(120% 90% at 85% 0%,rgba(255,203,5,0.07) 0%,rgba(255,203,5,0) 40%),radial-gradient(100% 80% at 0% 100%,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0) 50%),#0E0F11",
        }}
      >
        <div className="mx-auto max-w-shell px-8">
          <div className="mb-[18px]">
            <Badge tone="light">Completed Projects</Badge>
          </div>
          <h2 className="m-0 mb-3.5 font-oswald text-[clamp(28px,4vw,46px)] font-bold uppercase leading-[1.03] text-white">
            Before &amp; <span className="text-yellow">After</span>
          </h2>
          <p className="m-0 mb-[26px] max-w-[62ch] font-open text-[16px] leading-[1.65] text-[#9aa1a8]">
            Real jobs completed by VTRAX Projects across the Illawarra. Drag the
            slider to compare the before and after on each transformation.
          </p>
          <BeforeAfter />
        </div>
      </section>

      {/* Filterable project grid */}
      <section className="bg-white pb-[clamp(64px,8vw,110px)] pt-[clamp(48px,6vw,84px)]">
        <div className="mx-auto max-w-shell px-8">
          <ProjectsGrid />
        </div>
      </section>

      {/* Gallery */}
      <section
        className="py-[clamp(56px,7vw,96px)]"
        style={{
          background:
            "radial-gradient(120% 90% at 85% 0%,rgba(255,203,5,0.05) 0%,rgba(255,203,5,0) 42%),radial-gradient(110% 90% at 0% 100%,rgba(255,255,255,0.7) 0%,rgba(255,255,255,0) 55%),#F2F2EE",
        }}
      >
        <div className="mx-auto max-w-shell px-8">
          <div className="mb-[18px]">
            <Badge tone="dark">From the Field</Badge>
          </div>
          <h2 className="m-0 mb-9 font-oswald text-[clamp(28px,4vw,46px)] font-bold uppercase leading-[1.03] text-ink">
            Our work gallery
          </h2>
          <div className="grid auto-rows-[178px] grid-flow-dense grid-cols-2 gap-3.5 md:grid-cols-4">
            {GALLERY.map((g, i) => (
              <div
                key={i}
                className={`bento-tile relative min-h-0 ${g.span}`}
              >
                <MediaSlot src={g.img} alt={g.label} sizes="(max-width:768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />
      <ServiceAreas photoSrc={IMG.hero} />
      <AskJake />
    </div>
  );
}
