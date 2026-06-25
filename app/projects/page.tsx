import { BeforeAfter } from "@/components/BeforeAfter";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WorkGallery } from "@/components/WorkGallery";

export const metadata = {
  title: "Projects | VTRAX",
  description: "Browse VTRAX retaining wall projects — before & after transformations and completed work gallery.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <BeforeAfter />
        <WorkGallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
