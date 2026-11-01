"use client";

import Link from "next/link";
import { useCallback, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { sound } from "@/lib/proceduralAudio";

type CtaVariant = "primary" | "secondary" | "ghost";

const BASE =
  "group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 " +
  "font-mono text-[0.78rem] font-semibold uppercase tracking-[0.22em] " +
  "transition-all duration-500 ease-(--ease-cinematic) " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-electric";

const VARIANTS: Record<CtaVariant, string> = {
  primary:
    "bg-cyan-electric/12 text-ice-white border border-cyan-electric/55 " +
    "hover:bg-cyan-electric/22 hover:border-cyan-electric hover:shadow-glow-cyan " +
    "[&_span]:transition-transform duration-500 " +
    "hover:[&_span.arrow]:translate-x-1",
  secondary:
    "border border-hairline-strong text-mist hover:border-ice-white/60 hover:text-ice-white " +
    "hover:[&_span.arrow]:translate-x-1 [&_span]:transition-transform duration-500",
  ghost:
    "text-mist hover:text-ice-white [&_span]:transition-transform duration-500 " +
    "hover:[&_span.arrow]:translate-x-1",
};

interface CtaLinkProps {
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

/**
 * Consistent call-to-action with magnetic subtle pull on fine pointers:
 * the button leans a few pixels toward the cursor while it hovers, then
 * settles back. Procedural audio feedback on hover & click.
 */
export function CtaLink({
  href,
  children,
  variant = "primary",
  external = false,
  className,
  ariaLabel,
}: CtaLinkProps) {
  const cls = cn(BASE, VARIANTS[variant], "magnetic", className);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    if (
      typeof matchMedia !== "function" ||
      !matchMedia("(pointer: fine)").matches ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
    el.style.setProperty("--mag-x", `${(dx * 12).toFixed(1)}px`);
    el.style.setProperty("--mag-y", `${(dy * 7).toFixed(1)}px`);
  }, []);

  const onPointerLeave = useCallback((e: React.PointerEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--mag-x", "0px");
    e.currentTarget.style.setProperty("--mag-y", "0px");
  }, []);

  const onPointerEnter = useCallback(() => {
    sound.playHover();
  }, []);

  const onClick = useCallback(() => {
    sound.playClick();
  }, []);

  const inner = (
    <>
      <span className="label">{children}</span>
      <span className="arrow text-[1.05em]" aria-hidden="true">
        →
      </span>
    </>
  );
  const handlers = { onPointerMove, onPointerLeave, onPointerEnter, onClick };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(cls, variant === "primary" && "cta-shimmer")}
        aria-label={ariaLabel}
        {...handlers}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(cls, variant === "primary" && "cta-shimmer")}
      aria-label={ariaLabel}
      {...handlers}
    >
      {inner}
    </Link>
  );
}
