import { AboutProjects } from "@/components/AboutProjects";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProcessSection } from "@/components/ProcessSection";
import { ReliabilitySection } from "@/components/ReliabilitySection";

export const metadata = {
  title: "About | VTRAX",
  description: "Learn about VTRAX — our reliability, process, and commitment to quality retaining wall construction.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <AboutProjects />
        <ReliabilitySection />
        <ProcessSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
