import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ServiceAreas } from "@/components/ServiceAreas";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "VTRAX builds retaining walls across Wollongong, Shellharbour, Kiama, Dapto, Albion Park, Corrimal, Woonona, Bulli, South Coast NSW, and South Sydney. Get a free quote today.",
  keywords: [
    "retaining wall Wollongong",
    "retaining wall Shellharbour",
    "retaining wall Kiama",
    "retaining wall Dapto",
    "retaining wall Albion Park",
    "retaining wall Corrimal",
    "retaining wall South Coast NSW",
    "retaining wall South Sydney",
    "retaining wall Illawarra",
    "retaining wall builder near me NSW",
  ],
  alternates: {
    canonical: "https://vtraxprojects.com.au/areas",
  },
  openGraph: {
    title: "Service Areas | VTRAX Retaining Walls",
    description:
      "VTRAX services Wollongong, Shellharbour, Kiama, Dapto, South Coast NSW, and South Sydney. Find out if we cover your area — free quotes available.",
    url: "https://vtraxprojects.com.au/areas",
  },
  twitter: {
    title: "Service Areas | VTRAX Retaining Walls",
    description:
      "VTRAX services Wollongong, Shellharbour, Kiama, South Coast NSW, South Sydney, and more. Free quotes.",
  },
};

const areasSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://vtraxprojects.com.au",
  name: "VTRAX",
  url: "https://vtraxprojects.com.au",
  telephone: "+61478563679",
  areaServed: [
    {
      "@type": "City",
      name: "Wollongong",
      containedInPlace: { "@type": "State", name: "New South Wales" },
    },
    {
      "@type": "City",
      name: "Shellharbour",
      containedInPlace: { "@type": "State", name: "New South Wales" },
    },
    {
      "@type": "City",
      name: "Kiama",
      containedInPlace: { "@type": "State", name: "New South Wales" },
    },
    {
      "@type": "City",
      name: "Dapto",
      containedInPlace: { "@type": "State", name: "New South Wales" },
    },
    {
      "@type": "City",
      name: "Albion Park",
      containedInPlace: { "@type": "State", name: "New South Wales" },
    },
    {
      "@type": "City",
      name: "Corrimal",
      containedInPlace: { "@type": "State", name: "New South Wales" },
    },
    {
      "@type": "City",
      name: "Woonona",
      containedInPlace: { "@type": "State", name: "New South Wales" },
    },
    {
      "@type": "City",
      name: "Bulli",
      containedInPlace: { "@type": "State", name: "New South Wales" },
    },
    {
      "@type": "AdministrativeArea",
      name: "South Coast NSW",
    },
    {
      "@type": "AdministrativeArea",
      name: "South Sydney",
    },
  ],
};

export default function AreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areasSchema) }}
      />
      <Navbar />
      <main className="pt-20">
        <ServiceAreas />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
