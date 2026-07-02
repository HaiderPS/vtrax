/**
 * Badge — the small "● LABEL" pill used as a section eyebrow.
 * `tone="light"` renders for dark backgrounds; `tone="dark"` for light ones.
 */
export default function Badge({
  children,
  tone = "dark",
  filled = false,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  filled?: boolean;
}) {
  const border =
    tone === "light" ? "border-white/20" : "border-black/[0.14]";
  const text = tone === "light" ? "text-[#E9EDF1]" : "text-[#1d2024]";
  const bg = filled ? "bg-ink/35 border-white/[0.28]" : "";
  return (
    <span
      className={`inline-flex items-center gap-[9px] rounded-[2px] border ${border} ${bg} px-[14px] py-2`}
    >
      <span className="block h-[5px] w-[5px] rounded-full bg-yellow" />
      <span
        className={`font-inter text-[11px] font-semibold uppercase leading-[1.3] tracking-[0.16em] ${text}`}
      >
        {children}
      </span>
    </span>
  );
}
