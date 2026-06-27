"use client";

import { useEffect, useRef } from "react";

// Trustindex widget — pulls live Google reviews. Same widget token as the
// original VTRAX site. To swap, change TRUSTINDEX_WIDGET_ID below.
const TRUSTINDEX_WIDGET_ID = "3b46d1873dcd9227361672ad678";

export default function GoogleReviews() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = widgetRef.current;
    if (!target) return;
    // Don't inject twice (StrictMode double-mount / re-render).
    if (target.querySelector("script[data-trustindex]")) return;

    const script = document.createElement("script");
    script.src = `https://cdn.trustindex.io/loader.js?${TRUSTINDEX_WIDGET_ID}`;
    script.async = true;
    script.defer = true;
    script.setAttribute("data-trustindex", "true");
    target.appendChild(script);
  }, []);

  return (
    <section className="border-t border-black/[0.07] bg-white py-[clamp(56px,7vw,96px)]">
      <div className="mx-auto max-w-shell-wide px-6">
        {/* Live Google reviews rendered by Trustindex */}
        <div ref={widgetRef} />
      </div>
    </section>
  );
}
