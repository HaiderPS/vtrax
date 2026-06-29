import Link from "next/link";
import Image from "next/image";
import ServiceLink from "./ServiceLink";
import { NAV, FOOTER_AREAS, CONTACT, IMG, SERVICES, serviceSlug } from "@/data/site";

// Footer service list mirrors the Services page (single source of truth).
const FOOTER_SERVICES = SERVICES.map((s) => s.title);

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-[18px] font-open text-[11px] font-bold uppercase leading-none tracking-[0.14em] text-yellow">
      {children}
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-4 border-yellow bg-ink">
      <div className="mx-auto grid max-w-shell grid-cols-2 gap-9 px-8 pb-9 pt-16 md:grid-cols-3 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <div className="mb-[18px] flex items-center gap-3">
            <Image
              src={IMG.logoWhite}
              alt="VTRAX Projects"
              width={170}
              height={56}
              className="h-14 w-auto"
            />
          </div>
          <p className="m-0 max-w-[34ch] font-open text-[14px] leading-[1.65] text-[#9aa1a8]">
            Locally owned retaining wall &amp; excavation specialists, building
            structurally sound walls across the Illawarra.
          </p>
        </div>

        {/* Explore */}
        <div>
          <ColHeading>Explore</ColHeading>
          <div className="flex flex-col items-start gap-3">
            {NAV.map((n) => (
              <Link
                key={n.key}
                href={n.href}
                className="font-open text-[14px] font-medium leading-none text-[#C7CCD2] transition-colors hover:text-yellow"
              >
                {n.label === "About" ? "About Us" : n.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <ColHeading>Services</ColHeading>
          <div className="flex flex-col items-start gap-3">
            {FOOTER_SERVICES.map((s) => (
              <ServiceLink
                key={s}
                slug={serviceSlug(s)}
                className="text-left font-open text-[14px] font-medium leading-[1.4] text-[#C7CCD2] transition-colors hover:text-yellow"
              >
                {s}
              </ServiceLink>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div>
          <ColHeading>Service Areas</ColHeading>
          <div className="flex flex-col items-start gap-3">
            {FOOTER_AREAS.map((a) => (
              <Link
                key={a}
                href={`/?area=${encodeURIComponent(a)}`}
                className="text-left font-open text-[14px] font-medium leading-[1.4] text-[#C7CCD2] transition-colors hover:text-yellow"
              >
                {a}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <ColHeading>Contact</ColHeading>
          <div className="flex flex-col gap-3">
            <a
              href={CONTACT.phoneHref}
              className="font-open text-[18px] font-bold leading-none text-white no-underline"
            >
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.emailHref}
              className="break-all font-open text-[14px] font-medium leading-[1.3] text-[#C7CCD2] no-underline"
            >
              {CONTACT.email}
            </a>
            <span className="font-open text-[14px] leading-[1.55] text-[#9aa1a8]">
              Illawarra, NSW · {CONTACT.hours}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-shell flex-wrap justify-between gap-3 px-8 py-5">
          <span className="font-open text-[12.5px] leading-none text-[#6b7177]">
            © {year} VTRAX Projects. ABN {CONTACT.abn} · NSW Contractor Licence{" "}
            {CONTACT.licence}. All rights reserved.
          </span>
          <span className="font-open text-[12.5px] leading-none text-[#6b7177]">
            Free quotes &amp; site visits · Public liability insured
          </span>
        </div>
      </div>
    </footer>
  );
}
