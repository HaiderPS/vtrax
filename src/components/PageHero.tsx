import Image from "next/image";
import Badge from "./Badge";

/** Background photo used behind dark heroes/separators.
 *  `prominent` renders it sharp (no blur) so the image reads clearly;
 *  otherwise it is softly blurred behind a heavier scrim. */
export function HeroBg({
  src,
  opacity,
  prominent = false,
}: {
  src: string;
  opacity?: number;
  prominent?: boolean;
}) {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={opacity !== undefined ? { opacity } : undefined}
    >
      <div
        className={
          prominent
            ? "absolute inset-0 scale-[1.04]"
            : "absolute -inset-3 scale-[1.08] blur-[3px]"
        }
      >
        <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
      </div>
    </div>
  );
}

/** Dark page hero header used on About / Services / Projects / FAQ / Contact. */
export default function PageHero({
  badge,
  title,
  subtitle,
  subtitle2,
  bgSrc,
}: {
  badge: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  subtitle2?: React.ReactNode;
  bgSrc: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-[92px] pt-32">
      <HeroBg src={bgSrc} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,rgba(14,15,17,0.93) 0%,rgba(14,15,17,0.82) 50%,rgba(14,15,17,0.66) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 95% at 82% 0%,rgba(255,203,5,0.10) 0%,rgba(255,203,5,0) 42%),radial-gradient(110% 85% at 0% 100%,rgba(255,255,255,0.05) 0%,rgba(255,255,255,0) 52%)",
        }}
      />
      <div className="relative mx-auto max-w-shell px-8">
        <div className="mb-[22px]">
          <Badge tone="light" filled>
            {badge}
          </Badge>
        </div>
        <h1 className="m-0 max-w-[20ch] font-oswald font-bold uppercase leading-none text-white text-[clamp(38px,6vw,72px)]">
          {title}
        </h1>
        <p className="mt-[26px] max-w-[56ch] font-open leading-[1.65] text-[#AEB4BB] text-[clamp(16px,1.4vw,19px)]">
          {subtitle}
        </p>
        {subtitle2 ? (
          <p className="mt-[18px] max-w-[56ch] font-open leading-[1.65] text-[#AEB4BB] text-[clamp(16px,1.4vw,19px)]">
            {subtitle2}
          </p>
        ) : null}
      </div>
    </section>
  );
}
