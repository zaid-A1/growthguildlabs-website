"use client";

import { useEffect, useRef, type PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface TiltProps {
  className?: string;
  /** Maximum tilt in degrees. Keep small — this is a nudge, not a gimmick. */
  max?: number;
  glare?: boolean;
  glareStrength?: number;
}

/**
 * Pointer-reactive 3D tilt for cards and framed imagery.
 * Fine pointers only; disabled entirely for reduced-motion visitors.
 * All updates are direct CSS-variable writes — no re-renders.
 */
export function Tilt({
  children,
  className,
  max = 3.4,
  glare = true,
  glareStrength = 0.09,
}: PropsWithChildren<TiltProps>) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof matchMedia !== "function") return;
    if (!matchMedia("(pointer: fine)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let gx = 70;
    let gy = 8;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      tx = -ny * max * 2;
      ty = nx * max * 2;
      gx = (nx + 0.5) * 100;
      gy = (ny + 0.5) * 100;
      if (!raf) {
        raf = requestAnimationFrame(apply);
      }
    };

    const apply = () => {
      raf = 0;
      el.style.setProperty("--tilt-x", `${tx.toFixed(2)}deg`);
      el.style.setProperty("--tilt-y", `${ty.toFixed(2)}deg`);
      el.style.setProperty("--gx", `${gx.toFixed(1)}%`);
      el.style.setProperty("--gy", `${gy.toFixed(1)}%`);
      el.dataset.tilting = "true";
    };

    const onEnter = () => {
      el.classList.add("tilt-move");
    };
    const onLeave = () => {
      el.classList.remove("tilt-move");
      tx = 0;
      ty = 0;
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
      el.style.removeProperty("--gx");
      el.style.removeProperty("--gy");
      el.dataset.tilting = "false";
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [max]);

  return (
    <div ref={ref} className={cn("tilt relative", className)} data-tilting="false">
      {children}
      {glare ? (
        <span
          aria-hidden="true"
          className="tilt-glare"
          style={{ background: `radial-gradient(42% 42% at var(--gx, 70%) var(--gy, 8%), rgba(255,255,255,${glareStrength}), transparent 70%)` }}
        />
      ) : null}
    </div>
  );
}
