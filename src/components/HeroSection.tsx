"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const ParticleField = dynamic(
  () => import("@/components/fx/ParticleField").then((m) => m.ParticleField),
  { ssr: false }
);

const ArcReactorCanvas = dynamic(
  () => import("@/components/fx/ArcReactorCanvas").then((m) => m.ArcReactorCanvas),
  { ssr: false }
);

/**
 * HeroSection — World-class AI company showcase
 * Apple × Marvel × Vercel aesthetic with triple glow rings, scan-lines, and deep space nebulas.
 */
export function HeroSection() {
  return (
    <section
      id="scene-01"
      data-scene="Deep Space"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24"
    >
      {/* ── Deep Space Background ── */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 90% at 50% 20%, #041017 0%, #02070b 45%, #010406 100%)",
          }}
        />

        {/* Nebula blob 1 — Cyan (Top left/center) */}
        <div
          className="nebula-blob"
          style={{
            width: "65vw",
            height: "55vh",
            top: "-10%",
            left: "-15%",
            background:
              "radial-gradient(ellipse, rgba(0,229,255,0.14) 0%, rgba(0,229,255,0.03) 45%, transparent 70%)",
            animationDuration: "35s",
          }}
        />

        {/* Nebula blob 2 — Violet (Bottom right) */}
        <div
          className="nebula-blob"
          style={{
            width: "55vw",
            height: "50vh",
            bottom: "-15%",
            right: "-10%",
            background:
              "radial-gradient(ellipse, rgba(124,92,255,0.12) 0%, rgba(124,92,255,0.02) 50%, transparent 70%)",
            animationDelay: "-14s",
            animationDuration: "42s",
          }}
        />

        {/* Nebula blob 3 — Emerald Green (Center right) */}
        <div
          className="nebula-blob"
          style={{
            width: "45vw",
            height: "45vh",
            top: "25%",
            right: "5%",
            background:
              "radial-gradient(ellipse, rgba(0,255,136,0.08) 0%, rgba(57,255,101,0.02) 40%, transparent 70%)",
            animationDelay: "-22s",
            animationDuration: "38s",
          }}
        />
      </div>

      {/* ── Cyber Grid ── */}
      <div aria-hidden="true" className="cyber-grid z-[1]" />

      {/* ── Animated Scan Line across the Hero ── */}
      <div aria-hidden="true" className="scan-line z-[5]" />

      {/* ── Ambient Particle Field ── */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <ParticleField />
      </div>

      {/* ── Arc Reactor Decorative Canvases ── */}
      <div
        className="pointer-events-none absolute right-[-80px] top-1/2 -translate-y-1/2 z-[3] hidden xl:block opacity-25"
        aria-hidden="true"
      >
        <ArcReactorCanvas size={580} color="#00e5ff" />
      </div>
      <div
        className="pointer-events-none absolute left-[-60px] top-[18%] z-[3] hidden xl:block opacity-15"
        aria-hidden="true"
      >
        <ArcReactorCanvas size={280} color="#7c5cff" />
      </div>

      {/* ── Vignette & Radial Focus Overlay ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[4]"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 35%, rgba(1,4,6,0.7) 100%)",
        }}
      />

      {/* ── Centered Hero Content ── */}
      <div className="container-guild relative z-10 flex flex-col items-center text-center">
        <div className="hero-rise flex flex-col items-center gap-7 max-w-4xl">

          {/* Large Centered Logo with Triple Glow Rings (Cyan, Violet, Green) */}
          <div className="relative my-2 flex items-center justify-center">
            {/* Outer Green Glow Ring */}
            <div
              className="glow-ring absolute size-40 sm:size-48 border border-emerald-400/20"
              style={{
                boxShadow: "0 0 35px rgba(0,255,136,0.15), inset 0 0 25px rgba(0,255,136,0.08)",
                animationDuration: "4.5s",
                animationDelay: "-1.5s",
              }}
            />
            {/* Middle Violet Glow Ring */}
            <div
              className="glow-ring absolute size-32 sm:size-40 border border-violet-500/30"
              style={{
                boxShadow: "0 0 30px rgba(124,92,255,0.2), inset 0 0 20px rgba(124,92,255,0.1)",
                animationDuration: "3.5s",
                animationDelay: "-0.75s",
              }}
            />
            {/* Inner Cyan Glow Ring */}
            <div
              className="glow-ring absolute size-24 sm:size-32 border border-cyan-electric/40"
              style={{
                boxShadow: "0 0 35px rgba(0,229,255,0.35), inset 0 0 25px rgba(0,229,255,0.2)",
                animationDuration: "2.8s",
              }}
            />

            {/* Logo Core */}
            <div className="relative z-10 size-18 sm:size-22 rounded-2xl bg-void/90 p-2.5 border border-cyan-electric/50 shadow-2xl backdrop-blur-xl">
              <Image
                src="/brand/growth-guild-labs-logo.png"
                alt="Growth Guild Labs Logo"
                width={80}
                height={80}
                className="size-full object-contain filter drop-shadow-[0_0_12px_rgba(0,229,255,0.8)]"
                priority
              />
            </div>
          </div>

          {/* Hero Badge */}
          <div className="hero-badge transition-all duration-300 hover:border-cyan-electric/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]">
            <span className="text-sm">🚀</span>
            <span>GROWTH GUILD LABS — BUILD MORE. GROW TOGETHER.</span>
          </div>

          {/* Giant Headline: "The Future Is Built. Not Waited For." */}
          <h1 className="font-display text-[clamp(2.9rem,7.2vw,6.4rem)] font-extrabold tracking-tight text-ice-white leading-[1.03] text-balance">
            The Future Is{" "}
            <span className="gradient-text-cyan font-black drop-shadow-[0_0_35px_rgba(0,229,255,0.4)]">
              Built.
            </span>
            <span className="block text-mist/90 text-[0.62em] font-medium tracking-normal mt-2 sm:mt-3">
              Not Waited For.
            </span>
          </h1>

          {/* Subtext */}
          <p className="max-w-2xl font-sans text-lg sm:text-xl text-mist leading-relaxed font-light text-pretty">
            5 working AI applications. 2 platforms. One independent guild.
          </p>

          {/* Three Stats in a Row: 5 Apps | 2 Platforms | 56+ Tools */}
          <div className="glass-card mt-2 grid w-full max-w-2xl grid-cols-3 divide-x divide-white/10 px-4 py-5 sm:px-8 sm:py-6">
            <div className="flex flex-col items-center gap-1.5 px-2">
              <span className="stat-number text-[#00e5ff] drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]">
                5
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-mist/80">
                Apps
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5 px-2">
              <span className="stat-number text-[#00FF88] drop-shadow-[0_0_20px_rgba(0,255,136,0.5)]">
                2
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-mist/80">
                Platforms
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5 px-2">
              <span className="stat-number text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                56+
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-mist/80">
                Tools
              </span>
            </div>
          </div>

          {/* Two CTA Buttons: Explore Ecosystem + Download Apps */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/ecosystem"
              className="btn-neon font-bold text-sm tracking-[0.2em] px-8 py-3.5 shadow-lg"
            >
              Explore Ecosystem
              <span className="ml-1 text-base transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/downloads"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-mono text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ice-white backdrop-blur-md transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300 hover:shadow-[0_0_25px_rgba(0,255,136,0.2)]"
            >
              <span>Download Apps</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden flex-col items-center gap-2 sm:flex z-10"
      >
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-grey/70">
          Scroll to explore
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 top-0 h-3 animate-scan bg-cyan-electric/80" />
        </span>
      </div>

      {/* ── Bottom gradient blend into next section ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-32"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(3,9,13,0.95) 100%)",
        }}
      />
    </section>
  );
}
