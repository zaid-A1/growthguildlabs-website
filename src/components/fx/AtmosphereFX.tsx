"use client";

import { useEffect, useRef } from "react";

/**
 * Global atmosphere FX:
 *  - a soft cyan spotlight that trails the pointer (fine pointers only),
 *  - a gradient scroll-progress beam across the very top of the page.
 *
 * Both are pure overlays: transform-only, no layout reads per frame,
 * and both are switched off entirely for reduced-motion visitors
 * (the CSS also hides them under `prefers-reduced-motion`).
 */
export function AtmosphereFX() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const beamRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const beam = beamRef.current;
    const fine = window.matchMedia?.("(pointer: fine)").matches ?? false;
    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    let raf = 0;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let seen = false;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!seen) {
        seen = true;
        current.x = target.x;
        current.y = target.y;
        if (glow) glow.style.opacity = "1";
      }
      if (!raf) raf = requestAnimationFrame(step);
    };

    const onScroll = () => {
      if (!beam) return;
      const doc = document.documentElement;
      const max = Math.max(doc.scrollHeight - window.innerHeight, 1);
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      beam.style.transform = `scaleX(${p})`;
    };

    const step = () => {
      raf = 0;
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      if (glow) glow.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      const dx = Math.abs(current.x - target.x) + Math.abs(current.y - target.y);
      if (dx > 0.3 && !reduce) raf = requestAnimationFrame(step);
    };

    const wire = [] as Array<() => void>;
    if (fine && !reduce) {
      window.addEventListener("mousemove", onMove, { passive: true });
      wire.push(() => window.removeEventListener("mousemove", onMove));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    wire.push(() => window.removeEventListener("scroll", onScroll));
    onScroll();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      for (const off of wire) off();
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden="true"
        className="cursor-glow opacity-0"
        style={{ opacity: 0 }}
      />
      <div ref={beamRef} aria-hidden="true" className="scroll-beam" />
    </>
  );
}
