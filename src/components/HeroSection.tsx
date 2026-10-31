"use client";

import Image from "next/image";
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
 * Home hero — massively upgraded cinematic experience with:
 * - Deep space background with multi-layer nebula
 * - Animated cyber grid overlay
 * - Full-logo brand mark with glow
 * - Arc reactor decorative elements
 * - Staged typewriter headline
 */
export function HeroSection() {
  return (
    <section
      id="scene-01"
      data-scene="Deep Space"
      className="relative flex min-h-[96vh] items-end pb-24 sm:min-h-screen sm:items-center sm:pb-0 overflow-hidden"
    >
      {/* ── Deep Space Background ── */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        {/* Base dark space gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #010407 0%, #02080d 30%, #03090d 60%, #071218 100%)",
          }}
        />
        {/* Nebula blob 1 — cyan */}
        <div
          className="nebula-blob"
          style={{
            width: "70vw",
            height: "55vh",
            top: "-10%",
            left: "-20%",
            background:
              "radial-gradient(ellipse, rgba(0,229,255,0.12) 0%, rgba(0,229,255,0.04) 40%, transparent 70%)",
            animationDelay: "0s",
          }}
        />
        {/* Nebula blob 2 — violet */}
        <div
          className="nebula-blob"
          style={{
            width: "60vw",
            height: "50vh",
            bottom: "-15%",
            right: "-15%",
            background:
              "radial-gradient(ellipse, rgba(124,92,255,0.1) 0%, rgba(124,92,255,0.03) 45%, transparent 70%)",
            animationDelay: "-12s",
            animationDuration: "50s",
          }}
        />
        {/* Nebula blob 3 — green accent */}
        <div
          className="nebula-blob"
          style={{
            width: "40vw",
            height: "40vh",
            top: "30%",
            right: "10%",
            background:
              "radial-gradient(ellipse, rgba(57,255,101,0.06) 0%, transparent 70%)",
            animationDelay: "-25s",
            animationDuration: "35s",
          }}
        />
      </div>

      {/* ── Cyber Grid ── */}
      <div aria-hidden="true" className="cyber-grid z-[1]" />

      {/* ── Ambient Particle Field ── */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <ParticleField />
      </div>

      {/* ── Arc Reactor Decorative — right side ── */}
      <div
        className="pointer-events-none absolute right-[-60px] top-1/2 -translate-y-1/2 z-[3] hidden lg:block"
        aria-hidden="true"
      >
        <ArcReactorCanvas size={560} color="#00e5ff" className="opacity-20" />
      </div>
      {/* Secondary reactor — gold */}
      <div
        className="pointer-events-none absolute right-[22%] bottom-[-40px] z-[3] hidden xl:block"
        aria-hidden="true"
      >
        <ArcReactorCanvas size={220} color="#ffb300" className="opacity-12" />
      </div>
      {/* Tertiary reactor — violet */}
      <div
        className="pointer-events-none absolute left-[-40px] top-[10%] z-[3] hidden xl:block"
        aria-hidden="true"
      >
        <ArcReactorCanvas size={180} color="#7c5cff" className="opacity-10" />
      </div>

      {/* ── Vignette overlay ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[4]"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 30% 50%, transparent 45%, rgba(2,6,10,0.6) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="container-guild relative z-10 w-full">
        <div className="hero-rise flex flex-col items-start gap-6 max-w-4xl">

          {/* Eyebrow with logo */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-xl blur-md"
                style={{ background: "rgba(0,229,255,0.3)" }}
              />
              <Image
                src="/brand/growth-guild-labs-logo.png"
                alt="Growth Guild Labs logo"
                width={52}
                height={52}
                className="relative rounded-xl border border-cyan-electric/40 bg-void/80 p-1 nav-logo-glow"
                priority
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="eyebrow">SCENE 01 · DEEP SPACE</span>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-cyan-electric/70">
                {SITE.name}
              </span>
            </div>
          </div>

          {/* Spec chip */}
          <span className="spec-chip spec-chip--lit">
            {SITE.tagline}
          </span>

          {/* Main headline */}
          <h1 className="font-display text-hero font-bold text-ice-white leading-[1.02] text-balance">
            The future is{" "}
            <span className="relative inline-block">
              built
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-full"
                style={{
                  background:
                    "linear-gradient(90deg, #00e5ff, #39ff65, transparent)",
                  boxShadow: "0 0 16px #00e5ff88, 0 0 32px #00e5ff44",
                }}
              />
            </span>
            .<br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #00e5ff 0%, #7fe9ff 40%, #39ff65 100%)",
              }}
            >
              Not waited for.
            </span>
          </h1>

          {/* Typewriter line */}
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
              { n: "5", label: "AI Applications", color: "#00e5ff" },
              { n: "2", label: "Platforms", color: "#39ff65" },
              { n: "56+", label: "Tool Modules", color: "#ffb300" },
              { n: "1", label: "Independent Guild", color: "#7c5cff" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span
                  className="font-display text-3xl font-bold"
                  style={{ color: s.color, textShadow: `0 0 20px ${s.color}88` }}
                >
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
              href="/downloads"
              variant="secondary"
              ariaLabel="Download our applications"
            >
              Download apps
            </CtaLink>
            <CtaLink
              href="#ecosystem-preview"
              variant="ghost"
              ariaLabel="Discover our products"
            >
              Discover products
            </CtaLink>
          </div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex z-10"
      >
        <span className="font-mono text-micro uppercase tracking-[0.34em] text-muted-grey">
          The journey continues
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 top-0 h-4 animate-scan bg-cyan-electric/80" />
        </span>
      </div>

      {/* ── Bottom gradient fade ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-40"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(3,9,13,0.8) 100%)",
        }}
      />
    </section>
  );
}
