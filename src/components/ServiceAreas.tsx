"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Badge from "./Badge";
import MediaSlot from "./MediaSlot";
import { AREA_TILES, AREA_IMAGES, IMG } from "@/data/site";

function PinIcon({ active = false }: { active?: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "#0E0F11" : "#FFCB05"}
      strokeWidth="2.2"
      className="flex-none"
    >
      <path d="M12 21s-7-6.3-7-11a7 7 0 1 1 14 0c0 4.7-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

/**
 * Map a `?area=` value onto the closest area tile. The footer uses slightly
 * different labels (e.g. "Dapto & Albion Park", "Corrimal / Fairy"), so we
 * fall back to a contains-match when there's no exact one.
 */
function matchTile(area: string | null): string {
  if (!area) return AREA_TILES[0];
  const a = area.toLowerCase();
  const exact = AREA_TILES.find((t) => t.toLowerCase() === a);
  if (exact) return exact;
  const loose = AREA_TILES.find(
    (t) => a.includes(t.toLowerCase()) || t.toLowerCase().includes(a)
  );
  return loose ?? AREA_TILES[0];
}

/** Presentational section — the selected area drives the photo + highlight. */
function AreaSectionView({
  active,
  onSelect,
  photoSrc,
}: {
  active: string;
  onSelect: (a: string) => void;
  photoSrc: string;
}) {
  const imgSrc = AREA_IMAGES[active] ?? photoSrc;

  return (
    <section className="bg-white py-[clamp(56px,7vw,100px)]">
      <div className="mx-auto grid max-w-shell grid-cols-1 items-stretch gap-12 px-8 md:grid-cols-2">
        <div className="flex flex-col">
          <div className="mb-[18px]">
            <Badge tone="dark">Service Areas</Badge>
          </div>
          <h2 className="m-0 mb-[18px] font-oswald font-bold uppercase leading-[1.04] tracking-[0.005em] text-ink text-[clamp(30px,4.2vw,48px)]">
            Illawarra <span className="text-yellow">&amp; South Coast</span>
          </h2>
          <p className="m-0 mb-[14px] max-w-[48ch] font-open text-[16px] leading-[1.65] text-[#4a4f55]">
            VTRAX Projects operates across the Illawarra, South Coast and South
            Sydney. Based in Lake Heights, we can be on-site quickly across all
            primary service areas.
          </p>
          <p className="m-0 mb-[30px] max-w-[48ch] font-open text-[14.5px] italic leading-[1.6] text-[#7a7f85]">
            For projects outside the Illawarra, contact Jake to confirm. We are
            open to travelling for projects where it makes sense.
          </p>
          <div className="mt-auto grid grid-cols-2 gap-px border border-black/10 bg-black/10">
            {AREA_TILES.map((a) => {
              const isActive = a === active;
              return (
                <button
                  key={a}
                  type="button"
                  onClick={() => onSelect(a)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-[11px] px-[18px] py-[17px] text-left font-open text-[12.5px] font-bold uppercase leading-[1.2] tracking-[0.06em] transition-colors ${
                    isActive
                      ? "bg-yellow text-ink"
                      : "bg-white text-ink hover:bg-panel"
                  }`}
                >
                  <PinIcon active={isActive} />
                  <span>{a}</span>
                </button>
              );
            })}
            <Link
              href="/contact"
              className="col-span-2 flex items-center gap-[11px] bg-ink px-[18px] py-[17px] text-left font-open text-[12.5px] font-bold uppercase leading-[1.2] tracking-[0.06em] text-white transition-colors hover:bg-black"
            >
              <PinIcon />
              <span className="text-yellow">+</span>
              <span>More on request</span>
            </Link>
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[2px]">
          <div key={imgSrc} className="absolute inset-0 animate-fade">
            <MediaSlot
              src={imgSrc}
              alt={`VTRAX retaining wall projects in ${active}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Reads the `?area=` param so the chosen location is pre-selected. */
function ServiceAreasInner({ photoSrc }: { photoSrc: string }) {
  const searchParams = useSearchParams();
  const areaParam = searchParams.get("area");
  const [active, setActive] = useState<string>(() => matchTile(areaParam));

  // Keep the selected tile in sync when the URL area changes (e.g. footer
  // area links navigating to /?area=Kiama on the same page).
  useEffect(() => {
    setActive(matchTile(areaParam));
  }, [areaParam]);

  return (
    <AreaSectionView active={active} onSelect={setActive} photoSrc={photoSrc} />
  );
}

/**
 * Service Areas — repeated near the foot of every page.
 * Clicking an area tile (or arriving via /?area=…) selects that area:
 * the tile highlights in brand yellow and the photo swaps to its image.
 */
export default function ServiceAreas({
  photoSrc = IMG.hero,
}: {
  photoSrc?: string;
}) {
  return (
    <Suspense
      fallback={
        <AreaSectionView
          active={AREA_TILES[0]}
          onSelect={() => {}}
          photoSrc={photoSrc}
        />
      }
    >
      <ServiceAreasInner photoSrc={photoSrc} />
    </Suspense>
  );
}
