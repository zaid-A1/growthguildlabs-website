"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Wrapper that gives any element a subtle magnetic pull toward the cursor.
 * The element physically moves toward the pointer, giving a premium tactile feel.
 */
export function MagneticWrapper({
  children,
  strength = 0.3,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      if (
        !window.matchMedia("(pointer: fine)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    },
    [strength]
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
    el.style.transition = "transform 0.5s cubic-bezier(0.19,1,0.22,1)";
  }, []);

  const onEnter = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.15s linear";
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
    >
      {children}
    </div>
  );
}

/**
 * Glowing counter that animates from 0 to `value` when it enters the viewport.
 */
export function AnimatedCounter({
  value,
  label,
  suffix = "",
  color = "#00e5ff",
}: {
  value: number;
  label: string;
  suffix?: string;
  color?: string;
}) {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplayed(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 text-center">
      <span
        className="font-display text-[clamp(2.2rem,4vw,3.8rem)] font-bold leading-none tabular-nums"
        style={{ color }}
      >
        {displayed}
        {suffix}
      </span>
      <span className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-muted-grey">
        {label}
      </span>
    </div>
  );
}

/**
 * Typewriter text that cycles through phrases.
 */
export function TypewriterCycle({
  phrases,
  color = "#00e5ff",
  speed = 60,
  pauseMs = 2200,
}: {
  phrases: string[];
  color?: string;
  speed?: number;
  pauseMs?: number;
}) {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setReduced(true));
      return () => cancelAnimationFrame(raf);
    }
    const phrase = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < phrase.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, pauseMs, speed]);

  if (reduced) {
    return <span style={{ color }}>{phrases[0]}</span>;
  }

  const currentPhrase = phrases[phraseIdx] ?? "";
  const displayedText = currentPhrase.slice(0, charIdx);

  return (
    <span style={{ color }}>
      {displayedText}
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[1.1em] w-0.5 animate-pulse align-middle"
        style={{ background: color }}
      />
    </span>
  );
}
