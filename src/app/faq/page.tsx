import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MarqueeTape from "@/components/MarqueeTape";
import FaqAccordion from "@/components/FaqAccordion";
import GoogleReviews from "@/components/GoogleReviews";
import ServiceAreas from "@/components/ServiceAreas";
import AskJake from "@/components/AskJake";
import { SEO, IMG } from "@/data/site";

export const metadata: Metadata = {
  title: SEO.faq.title,
  description: SEO.faq.description,
};

export default function FaqPage() {
  return (
    <div className="animate-fade bg-white">
      <PageHero
        badge="Common Questions"
        bgSrc={IMG.blockRetainingWall}
        title={
          <>
            <span className="text-yellow">Frequently</span> asked
          </>
        }
        subtitle="Straight answers to what Illawarra homeowners ask most when planning a local retaining wall project."
      />
      <MarqueeTape />

      <section className="bg-white py-[clamp(56px,7vw,96px)]">
        <div className="mx-auto max-w-[880px] px-8">
          <FaqAccordion />
        </div>
      </section>

      <GoogleReviews />
      <ServiceAreas photoSrc={IMG.hero} />
      <AskJake />
    </div>
  );
}
