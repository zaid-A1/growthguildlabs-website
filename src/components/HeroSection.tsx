"use client";

import dynamic from "next/dynamic";
import { CtaLink } from "@/components/ui/CtaLink";
import { TypewriterCycle } from "@/components/ui/InteractiveElements";
import { SITE } from "@/lib/site";

const ParticleField = dynamic(
  () => import("@/components/fx/ParticleField").then((m) => m.ParticleField),
  { ssr: false }
);

const ArcReactorCanvas = dynamic(
  () => import("@/components/fx/ArcReactorCanvas").then((m) => m.ArcReactorCanvas),
  { ssr: false }
);

const HERO_PHRASES = [
  "ULTRON 2.0",
  "JARVIS 2.0",
  "F.R.I.D.A.Y. AI",
  "the future",
];

/**
 * Home hero — massively upgraded with ambient particles, an arc-reactor
 * visual, a typewriter cycle, and layered cinematic depth.
 * All 3D and animation is SSR-safe and reduced-motion friendly.
 */
export function HeroSection() {
  return (
    <section
      id="scene-01"
      data-scene="Deep Space"
      className="relative flex min-h-[92vh] items-end pb-24 sm:min-h-[96vh] sm:items-center sm:pb-0 overflow-hidden"
    >
      {/* Ambient particle field layer */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <ParticleField />
      </div>

      {/* Arc reactor — decorative right side glow */}
      <div
        className="pointer-events-none absolute right-[-80px] top-1/2 -translate-y-1/2 z-0 hidden lg:block"
        aria-hidden="true"
      >
        <ArcReactorCanvas size={520} color="#00e5ff" className="opacity-25" />
      </div>
      {/* Secondary reactor — gold accent */}
      <div
        className="pointer-events-none absolute right-[20%] bottom-[-60px] z-0 hidden xl:block"
        aria-hidden="true"
      >
        <ArcReactorCanvas size={240} color="#ffb300" className="opacity-15" />
      </div>

      {/* Multi-layer depth gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(0,229,255,0.06) 0%, transparent 65%)," +
            "radial-gradient(ellipse 40% 40% at 85% 20%, rgba(57,255,101,0.04) 0%, transparent 60%)," +
            "linear-gradient(180deg, rgba(3,9,13,0) 0%, rgba(3,9,13,0.35) 100%)",
        }}
      />

      {/* Grid overlay — subtle HUD feel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Content ── */}
      <div className="container-guild relative z-10 w-full">
        <div className="hero-rise flex flex-col items-start gap-7">
          <span className="eyebrow">SCENE 01 · DEEP SPACE</span>

          <span className="spec-chip spec-chip--lit">
            {SITE.name} — {SITE.tagline}
          </span>

          {/* Main headline */}
          <h1 className="max-w-5xl font-display text-hero font-bold text-ice-white text-balance leading-[1.02]">
            The future is{" "}
            <span className="relative inline-block">
              built
              {/* Underline glow */}
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[2px] w-full"
                style={{
                  background:
                    "linear-gradient(90deg, #00e5ff, #39ff65, transparent)",
                  boxShadow: "0 0 12px #00e5ff88",
                }}
              />
            </span>
            .
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #00e5ff 0%, #7fe9ff 40%, #39ff65 100%)",
                textShadow: "none",
              }}
            >
              Not waited for.
            </span>
          </h1>

          {/* Typewriter secondary line */}
          <p className="max-w-xl font-mono text-[0.95rem] leading-relaxed text-mist">
            Powering{" "}
            <TypewriterCycle
              phrases={HERO_PHRASES}
              color="#00e5ff"
              speed={55}
            />
            {" "}— built from scratch, for real.
          </p>

          {/* Description */}
          <p className="max-w-xl text-[1.05rem] leading-relaxed text-mist text-pretty">
            {SITE.marketingLine}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-6 border-t border-hairline pt-6">
            {[
              { n: "5", label: "Applications" },
              { n: "2", label: "Platforms" },
              { n: "1", label: "Guild" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-cyan-electric">
                  {s.n}
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-grey">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-2 flex flex-wrap gap-4">
            <CtaLink
              href="/ecosystem"
              ariaLabel="Explore the Growth Guild Labs ecosystem"
            >
              Explore the ecosystem
            </CtaLink>
            <CtaLink
              href="#ecosystem-preview"
              variant="secondary"
              ariaLabel="Discover our products — jump to the product preview below"
            >
              Discover our products
            </CtaLink>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex z-10"
      >
        <span className="font-mono text-micro uppercase tracking-[0.34em] text-muted-grey">
          The journey continues
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 top-0 h-3 animate-scan bg-cyan-electric/80" />
        </span>
      </div>
    </section>
  );
}
