import { AboutProjects } from "@/components/AboutProjects";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProcessSection } from "@/components/ProcessSection";
import { ReliabilitySection } from "@/components/ReliabilitySection";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Services } from "@/components/Services";
import { WorkGallery } from "@/components/WorkGallery";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutProjects />
        <Services />
        <BeforeAfter />
        <ReliabilitySection />
        <ProcessSection />
        <WorkGallery />
        <FaqSection />
        <ServiceAreas />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
