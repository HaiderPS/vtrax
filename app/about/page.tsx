import type { Metadata } from "next";
import { AboutProjects } from "@/components/AboutProjects";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProcessSection } from "@/components/ProcessSection";
import { ReliabilitySection } from "@/components/ReliabilitySection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about VTRAX — 8+ years building retaining walls across Wollongong & South Coast NSW. Our process, reliability, and commitment to walls built right. License 497229c.",
  keywords: [
    "about VTRAX retaining walls",
    "retaining wall builder Wollongong",
    "licensed retaining wall contractor NSW",
    "retaining wall process NSW",
    "VTRAX experience",
  ],
  alternates: {
    canonical: "https://vtraxprojects.com.au/about",
  },
  openGraph: {
    title: "About VTRAX | Retaining Wall Specialists",
    description:
      "8+ years building retaining walls across Wollongong & South Coast NSW. Our process, reliability, and commitment to walls built right. License 497229c.",
    url: "https://vtraxprojects.com.au/about",
  },
  twitter: {
    title: "About VTRAX | Retaining Wall Specialists",
    description:
      "8+ years, 60+ walls completed. Learn about VTRAX — retaining wall specialists in Wollongong & South Coast NSW.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VTRAX",
  url: "https://vtraxprojects.com.au",
  logo: "https://vtraxprojects.com.au/images/vtrax_logo.png",
  image: "https://vtraxprojects.com.au/images/vtrax_about.jpg",
  description:
    "Retaining wall construction specialists with 8+ years experience across Wollongong and South Coast NSW. Concrete sleeper, block and timber walls.",
  telephone: "+61478563679",
  email: "vtraxprojects@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  foundingDate: "2016",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 1,
    maxValue: 10,
  },
  knowsAbout: [
    "Concrete Sleeper Retaining Walls",
    "Block Retaining Walls",
    "Timber Retaining Walls",
    "Drainage Installation",
    "Engineered Wall Systems",
    "Excavation and Site Works",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
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
