"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a Meta Pixel PageView on client-side route changes.
 *
 * The inline pixel snippet in the root layout already fires PageView once on
 * the initial document load. Because this is a Next.js app, later navigations
 * never reload the document, so without this the pixel would only ever record
 * the first page a visitor lands on. The first render here is skipped so the
 * landing page is not counted twice.
 */
export default function MetaPixel() {
  const pathname = usePathname();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
