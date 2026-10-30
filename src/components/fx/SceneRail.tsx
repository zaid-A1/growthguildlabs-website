"use client";

import { useEffect, useState } from "react";

export interface SceneStop {
  id: string;
  label: string;
}

/**
 * Fixed scene-navigation rail for the home cinematic (wide viewports).
 * Click a dot to jump to that scene; the dot lights up as the scene
 * enters mid-viewport. Pure anchor links — usable without JS.
 */
export function SceneRail({ scenes }: { scenes: SceneStop[] }) {
  const [activeId, setActiveId] = useState<string>(scenes[0]?.id ?? "");

  useEffect(() => {
    const targets = scenes
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    let raf = 0;
    const evaluate = () => {
      raf = 0;
      const mid = window.innerHeight * 0.5;
      let best = targets[0]!;
      let bestDist = Number.POSITIVE_INFINITY;
      for (const el of targets) {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - mid);
        if (dist < bestDist) {
          best = el;
          bestDist = dist;
        }
      }
      requestAnimationFrame(() => setActiveId(best.id));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(evaluate);
    };

    if (typeof IntersectionObserver !== "undefined") {
      const io = new IntersectionObserver(onScroll, {
        rootMargin: "-42% 0px -42% 0px",
      });
      targets.forEach((t) => io.observe(t));
      window.addEventListener("scroll", onScroll, { passive: true });
      evaluate();
      return () => {
        io.disconnect();
        window.removeEventListener("scroll", onScroll);
        if (raf) cancelAnimationFrame(raf);
      };
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [scenes]);

  return (
    <nav aria-label="Journey scenes" className="scene-rail">
      {scenes.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          aria-label={`Scene: ${s.label}`}
          data-active={activeId === s.id ? "true" : "false"}
        >
          <span className="scene-rail-label">{s.label}</span>
          <span className="scene-rail-dot" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
