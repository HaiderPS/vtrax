import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "FAQ | VTRAX",
  description: "Frequently asked questions about VTRAX retaining wall services, process, and pricing.",
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <FaqSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
