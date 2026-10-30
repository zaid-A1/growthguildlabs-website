"use client";

import dynamic from "next/dynamic";
import {
  useEffect,
  useRef,
  useState,
  type PropsWithChildren,
  type RefObject,
} from "react";
import { hasWebGLSupport, prefersReducedMotion } from "@/lib/environment";
import { StaticJourney } from "./StaticJourney";
import { cn } from "@/lib/utils";

type JourneyCanvasProps = {
  active: boolean;
  progressRef: RefObject<number>;
  onError: () => void;
};

/**
 * Lazy-load the 3D canvas only when the browser can actually run it.
 * Nothing 3D is shipped to the client unless WebGL is usable.
 */
const JourneyCanvas = dynamic<JourneyCanvasProps>(
  () => import("./JourneyCanvas"),
  { ssr: false, loading: () => null }
);

type Mode = "initial" | "canvas" | "static";

/**
 * Orchestrates the homepage cinematic:
 *   sticky WebGL viewport + scroll-driven progress, with a designed CSS
 *   fallback (same sections, same content) when WebGL is unavailable or
 *   the visitor prefers reduced motion.
 */
export function CinematicJourney({
  children,
}: PropsWithChildren) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(0);
  const [mode, setMode] = useState<Mode>("initial");
  const [active, setActive] = useState(true);

  /* Decide the rendering mode once, after the first frame (not synchronously
     inside the effect, per the hooks-compiler setState rule). */
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMode(
        hasWebGLSupport() && !prefersReducedMotion() ? "canvas" : "static"
      );
    });
    return () => cancelAnimationFrame(id);
  }, []);

  /* Scroll-driven progress (rAF-throttled). */
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let raf = 0;
    const measure = () => {
      raf = 0;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = Math.max(rect.height - vh, 1);
      progressRef.current = Math.min(1, Math.max(0, (-rect.top) / total));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* Pause the canvas render loop when the journey leaves the viewport. */
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.02 }
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="relative" style={{ height: "calc(460vh)" }}>
      {/* Sticky viewport that the chapters scroll over */}
      <div
        aria-hidden="true"
        className="sticky top-0 h-dvh w-full overflow-hidden"
      >
        {mode === "canvas" ? (
          <div className="absolute inset-0">
            <JourneyCanvas
              active={active}
              progressRef={progressRef}
              onError={() => setMode("static")}
            />
          </div>
        ) : (
          <StaticJourney />
        )}

        {/* Readability vignette above the scene, below the content */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0",
            "bg-[linear-gradient(180deg,rgba(3,9,13,0.42)_0%,rgba(3,9,13,0)_22%,rgba(3,9,13,0)_58%,rgba(3,9,13,0.6)_100%)]"
          )}
        />
      </div>

      {children}
    </div>
  );
}
