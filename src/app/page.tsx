import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/Badge";
import MarqueeTape from "@/components/MarqueeTape";
import MediaSlot from "@/components/MediaSlot";
import WhyCarousel from "@/components/WhyCarousel";
import GoogleReviews from "@/components/GoogleReviews";
import ServiceAreas from "@/components/ServiceAreas";
import ServiceLink from "@/components/ServiceLink";
import FaqAccordion from "@/components/FaqAccordion";
import AreaApplier from "@/components/AreaApplier";
import { HeroBg } from "@/components/PageHero";
import {
  OFFERS,
  SERVICES,
  serviceSlug,
  HOME_BEFORE_AFTER,
  HOME_GALLERY,
  CONTACT,
  IMG,
} from "@/data/site";

export default function HomePage() {
  return (
    <div className="animate-fade bg-white">
      <Suspense fallback={null}>
        <AreaApplier />
      </Suspense>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-ink">
        <HeroBg src={IMG.hero} />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,rgba(14,15,17,0.92) 0%,rgba(14,15,17,0.78) 45%,rgba(14,15,17,0.5) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background:
              "radial-gradient(120% 95% at 82% 0%,rgba(255,203,5,0.12) 0%,rgba(255,203,5,0) 46%),radial-gradient(90% 70% at 0% 100%,rgba(255,255,255,0.05) 0%,rgba(255,255,255,0) 55%)",
          }}
        />
        <div className="relative mx-auto max-w-shell px-8 pb-[88px] pt-32">
          <div className="mb-[26px]">
            <Badge tone="light">
              Illawarra Retaining Wall &amp; Excavation Specialists
            </Badge>
          </div>
          <h1 className="m-0 max-w-[15ch] font-oswald text-[clamp(42px,7vw,84px)] font-bold uppercase leading-[0.98] text-white">
            Retaining walls <span className="text-yellow">built right.</span>
          </h1>
          <p className="mt-7 max-w-[54ch] font-open text-[clamp(17px,1.5vw,20px)] leading-[1.6] text-[#AEB4BB]">
            Locally owned and operated across the Illawarra, VTRAX Projects builds
            structurally sound concrete sleeper, timber and block retaining walls,
            with proper footings, drainage and a clean, professional finish on
            every job.
          </p>
          <div className="mt-[38px] flex flex-wrap gap-3.5">
            <Link
              href="/contact"
              className="btn-primary px-[30px] py-[19px] text-[14px]"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/projects"
              className="btn-outline-light px-[30px] py-[19px] text-[14px]"
            >
              View Our Work
            </Link>
          </div>
        </div>
        <MarqueeTape />
      </section>

      {/* ===== WHY VTRAX ===== */}
      <section
        className="py-[clamp(64px,8vw,110px)]"
        style={{
          background:
            "radial-gradient(120% 90% at 85% 0%,rgba(255,203,5,0.05) 0%,rgba(255,203,5,0) 42%),radial-gradient(110% 90% at 0% 100%,rgba(255,255,255,0.7) 0%,rgba(255,255,255,0) 55%),#F2F2EE",
        }}
      >
        <div className="mx-auto max-w-shell px-8">
          <div className="mb-[42px] flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-[18px]">
                <Badge tone="dark">Why VTRAX?</Badge>
              </div>
              <h2 className="m-0 max-w-[20ch] font-oswald text-[clamp(30px,4.5vw,50px)] font-bold uppercase leading-[1.02] tracking-[0.005em] text-ink">
                <span className="text-yellow">Locally owned.</span> Illawarra
                built.
              </h2>
            </div>
            <div className="flex flex-none items-center gap-3.5 bg-yellow px-6 py-4 text-ink">
              <span className="font-oswald text-[44px] font-bold leading-[0.9]">
                8+
              </span>
              <span className="font-oswald text-[14px] font-bold uppercase leading-[1.1] tracking-[0.02em]">
                Years
                <br />
                Experience
              </span>
            </div>
          </div>
          <WhyCarousel />
        </div>
      </section>

      {/* ===== BLOCKQUOTE ===== */}
      <section className="bg-white pb-0 pt-[clamp(48px,6vw,72px)]">
        <div className="mx-auto flex max-w-shell flex-col items-start gap-[30px] px-8">
          <blockquote className="m-0 max-w-[60ch] border-l-[3px] border-yellow py-1.5 pl-[26px] font-open text-[clamp(19px,2.2vw,26px)] italic leading-[1.5] text-[#3f444a]">
            &ldquo;Every retaining wall is built with proper footing preparation,
            drainage and structural integrity to ensure long-term durability.&rdquo;
          </blockquote>
          <Link
            href="/contact"
            className="btn-primary px-9 py-5 text-[14px] tracking-[0.1em]"
          >
            Request a free site assessment
          </Link>
        </div>
      </section>

      {/* ===== WHAT WE OFFER ===== */}
      <section className="bg-white py-[clamp(64px,8vw,110px)]">
        <div className="mx-auto max-w-shell px-8">
          <div className="mb-[22px]">
            <Badge tone="dark">What We Offer</Badge>
          </div>
          <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
            <h2 className="m-0 max-w-[20ch] font-oswald text-[clamp(30px,4.5vw,50px)] font-bold uppercase leading-[1.02] tracking-[0.005em] text-ink">
              <span className="text-yellow">Retaining</span> wall and{" "}
              <span className="text-yellow">excavation</span> services
            </h2>
            <Link
              href="/services"
              className="cursor-pointer border border-black/20 bg-transparent px-[22px] py-[15px] font-open text-[13px] font-bold uppercase tracking-[0.06em] text-ink transition-colors hover:bg-ink hover:text-white"
            >
              All Services &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OFFERS.map((o, i) => (
              <ServiceLink
                key={o.no}
                slug={serviceSlug(SERVICES[i].title)}
                className="group flex flex-col overflow-hidden border border-black/10 bg-white transition-all hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(14,15,17,0.12)]"
              >
                <div className="bento-tile relative h-[190px]">
                  <MediaSlot src={o.img} alt={o.title} sizes="(max-width:768px) 100vw, 33vw" />
                  <span className="absolute left-3 top-3 bg-yellow px-[9px] py-1.5 font-open text-[12px] font-bold leading-none text-ink">
                    {o.no}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 px-6 pb-[26px] pt-6">
                  <h3 className="m-0 font-oswald text-[20px] font-bold uppercase leading-[1.2] text-ink">
                    {o.title}
                  </h3>
                  <p className="m-0 flex-1 font-open text-[14.5px] leading-[1.6] text-[#5a5f65]">
                    {o.text}
                  </p>
                  <span className="font-open text-[12px] font-bold uppercase leading-none tracking-[0.06em] text-ink">
                    Learn more &rarr;
                  </span>
                </div>
              </ServiceLink>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXCAVATION SEPARATOR ===== */}
      <section className="relative overflow-hidden bg-ink">
        <HeroBg src={IMG.excavationFootings} />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(14,15,17,0.8) 0%,rgba(14,15,17,0.74) 100%)",
          }}
        />
        <div className="relative mx-auto flex max-w-[920px] flex-col items-center px-8 py-[clamp(72px,9vw,120px)] text-center">
          <div className="mb-6">
            <Badge tone="light">Excavation Services</Badge>
          </div>
          <h2 className="m-0 max-w-[20ch] font-oswald text-[clamp(30px,4.6vw,54px)] font-bold uppercase leading-[1.04] tracking-[0.005em] text-white">
            We also offer expert excavation services for{" "}
            <span className="text-yellow">retaining wall installation</span>
          </h2>
          <p className="mt-6 max-w-[60ch] font-open text-[clamp(15px,1.4vw,18px)] leading-[1.7] text-[#C7CCD2]">
            Our team uses cutting-edge excavation equipment and machinery to
            efficiently prepare your site, ready for a structurally sound
            retaining wall installation.
          </p>
          <div className="mt-9">
            <Link
              href="/services"
              className="btn-primary px-8 py-[19px] text-[14px]"
            >
              See Our Excavation Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BEFORE & AFTER (static) ===== */}
      <section
        className="py-[clamp(64px,8vw,110px)]"
        style={{
          background:
            "radial-gradient(120% 90% at 85% 0%,rgba(255,203,5,0.05) 0%,rgba(255,203,5,0) 42%),radial-gradient(110% 90% at 0% 100%,rgba(255,255,255,0.7) 0%,rgba(255,255,255,0) 55%),#F2F2EE",
        }}
      >
        <div className="mx-auto max-w-shell px-8">
          <div className="mb-[22px]">
            <Badge tone="dark">Before &amp; After</Badge>
          </div>
          <h2 className="m-0 mb-3.5 max-w-[22ch] font-oswald text-[clamp(30px,4.5vw,50px)] font-bold uppercase leading-[1.02] tracking-[0.005em] text-ink">
            Real transformations across the Illawarra
          </h2>
          <p className="m-0 mb-11 max-w-[58ch] font-open text-[16px] leading-[1.65] text-[#4a4f55]">
            Recent VTRAX jobs, shown before and after.
          </p>
          <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2 md:grid-cols-3">
            {HOME_BEFORE_AFTER.map((b) => (
              <article key={b.title} className="border border-black/10 bg-white">
                <div className="grid grid-cols-2 gap-px bg-black/10">
                  <div className="relative h-[190px]">
                    <MediaSlot src={b.before} alt={b.beforeLabel} sizes="(max-width:768px) 50vw, 17vw" />
                    <span className="absolute left-3 top-3 bg-ink px-[9px] py-1.5 font-open text-[10px] font-bold uppercase leading-none tracking-[0.12em] text-white">
                      Before
                    </span>
                  </div>
                  <div className="relative h-[190px]">
                    <MediaSlot src={b.after} alt={b.afterLabel} sizes="(max-width:768px) 50vw, 17vw" />
                    <span className="absolute right-3 top-3 bg-yellow px-[9px] py-1.5 font-open text-[10px] font-bold uppercase leading-none tracking-[0.12em] text-ink">
                      After
                    </span>
                  </div>
                </div>
                <div className="px-6 pb-[26px] pt-[22px]">
                  <h3 className="m-0 mb-2 font-oswald text-[20px] font-bold uppercase leading-[1.2] text-ink">
                    {b.title}
                  </h3>
                  <p className="m-0 font-open text-[14.5px] leading-[1.6] text-[#5a5f65]">
                    {b.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-[clamp(40px,5vw,56px)] flex justify-center">
            <Link
              href="/projects"
              className="btn-primary px-9 py-[19px] text-[14px]"
            >
              View All Projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ PREVIEW ===== */}
      <section className="bg-white py-[clamp(64px,8vw,110px)]">
        <div className="mx-auto max-w-[880px] px-8">
          <div className="mb-[22px] text-center">
            <Badge tone="dark">FAQs</Badge>
          </div>
          <h2 className="m-0 mb-9 text-center font-oswald text-[clamp(30px,4.5vw,50px)] font-bold uppercase leading-[1.02] tracking-[0.005em] text-ink">
            Frequently asked questions
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="bg-white py-[clamp(56px,7vw,100px)]">
        <div className="mx-auto max-w-shell-wide px-6">
          <div className="mb-[22px] text-center">
            <Badge tone="dark">Gallery</Badge>
          </div>
          <h2 className="m-0 mb-10 text-center font-oswald text-[clamp(30px,4.5vw,50px)] font-bold uppercase leading-[1.02] tracking-[0.005em] text-ink">
            Our <span className="text-yellow">work gallery</span>
          </h2>
          <div className="grid auto-rows-[184px] grid-flow-dense grid-cols-2 gap-3.5 md:grid-cols-4">
            {HOME_GALLERY.map((g, i) => (
              <div
                key={i}
                className={`bento-tile relative min-h-0 rounded-[2px] ${g.span}`}
              >
                <MediaSlot src={g.img} alt={g.label} sizes="(max-width:768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />
      <ServiceAreas photoSrc={IMG.hero} />

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden bg-cream">
        <HeroBg src={IMG.qualityWorkmanship} opacity={0.13} />
        <div className="relative mx-auto max-w-[900px] px-8 py-[clamp(72px,9vw,120px)] text-center">
          <h2 className="m-0 font-oswald text-[clamp(30px,4.6vw,54px)] font-bold uppercase leading-[1.08] tracking-[0.005em] text-ink">
            Want to discuss your Illawarra retaining wall project?{" "}
            <span className="text-yellow-deep">Give us a call.</span>
          </h2>
          <div className="mt-[34px] flex flex-wrap justify-center gap-3.5">
            <Link href="/contact" className="btn-primary px-8 py-[19px] text-[14px]">
              Get a Quote
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="btn-outline-dark px-8 py-[19px] text-[14px]"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
