"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Link to a specific service on /services (e.g. #timber-retaining-walls).
 *
 * Cross-page: behaves as a normal Next <Link> — SPA navigation, and
 * ServiceRows' mount effect scrolls + highlights from the URL hash.
 *
 * Same page (already on /services): Next <Link> updates the hash via
 * history.pushState, which does NOT fire a native `hashchange`, so ServiceRows
 * wouldn't react. We intercept the click, update the hash ourselves and
 * dispatch `hashchange` manually so it works in-page too.
 */
export default function ServiceLink({
  slug,
  className,
  children,
}: {
  slug: string;
  className?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/services") return; // cross-page: let <Link> handle it
    e.preventDefault();
    if (window.location.hash.slice(1) !== slug) {
      // Update the URL without the browser's native (instant) anchor jump.
      window.history.pushState(null, "", `/services#${slug}`);
    }
    // Notify ServiceRows to scroll + highlight (also covers re-clicking the
    // already-selected service, where the hash doesn't change).
    window.dispatchEvent(new Event("hashchange"));
  };

  return (
    <Link
      href={`/services#${slug}`}
      scroll={false}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
}
