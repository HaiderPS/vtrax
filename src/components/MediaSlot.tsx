import Image from "next/image";

/**
 * MediaSlot — a photo with the signature VTRAX hover-zoom ("bloom").
 * Fills its parent; the parent must establish height (and ideally
 * position via the bento/aspect wrapper around it).
 */
export default function MediaSlot({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`vt-bloom bg-ink-2 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
