import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";

export const metadata = {
  title: "Services | VTRAX",
  description: "Retaining wall construction, drainage, and site assessment services by VTRAX.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
