import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ServiceAreas } from "@/components/ServiceAreas";

export const metadata = {
  title: "Service Areas | VTRAX",
  description: "VTRAX retaining wall services — find out which areas we cover across the region.",
};

export default function AreasPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ServiceAreas />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
