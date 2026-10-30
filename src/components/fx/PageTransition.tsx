"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Full-page cinematic transition — a flash sweep that plays on route change.
 * Works with Next.js App Router by watching the pathname.
 */
export function PageTransition() {
  const pathname = usePathname();
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const raf = requestAnimationFrame(() => {
      setAnimating(true);
      timer = setTimeout(() => setAnimating(false), 600);
    });
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [pathname]);

  if (!animating) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[200]"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.06) 50%, transparent 100%)",
        animation: "page-swipe 0.6s cubic-bezier(0.19,1,0.22,1) both",
      }}
    />
  );
}
