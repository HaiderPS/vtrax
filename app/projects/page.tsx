import type { Metadata } from "next";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WorkGallery } from "@/components/WorkGallery";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse completed VTRAX retaining wall projects across Wollongong & South Coast NSW. Before & after transformations, concrete sleeper, block, and timber wall galleries.",
  keywords: [
    "retaining wall projects NSW",
    "retaining wall before after Wollongong",
    "completed retaining walls Illawarra",
    "retaining wall gallery NSW",
    "VTRAX projects",
  ],
  alternates: {
    canonical: "https://vtraxprojects.com.au/projects",
  },
  openGraph: {
    title: "Retaining Wall Projects | VTRAX",
    description:
      "Browse completed VTRAX retaining wall projects. Before & after transformations and work gallery across Wollongong & South Coast NSW.",
    url: "https://vtraxprojects.com.au/projects",
  },
  twitter: {
    title: "Retaining Wall Projects | VTRAX",
    description:
      "Before & after retaining wall transformations and completed project gallery — Wollongong & South Coast NSW.",
  },
};

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "VTRAX Retaining Wall Projects",
  description:
    "Gallery of completed retaining wall projects by VTRAX across Wollongong and South Coast NSW.",
  url: "https://vtraxprojects.com.au/projects",
  provider: {
    "@type": "LocalBusiness",
    name: "VTRAX",
    url: "https://vtraxprojects.com.au",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
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
