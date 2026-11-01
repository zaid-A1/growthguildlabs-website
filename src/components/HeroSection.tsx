"use client";

import Image from "next/image";
import Link from "next/link";
import { Hologram3DCanvas } from "@/components/fx/Hologram3DCanvas";
import { sound } from "@/lib/proceduralAudio";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24"
    >
      {/* ── Deep Space Background Layers ── */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 90% at 50% 20%, #041017 0%, #02070b 45%, #010406 100%)",
          }}
        />

        {/* Ambient Nebula Blobs */}
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
        <div
          className="nebula-blob"
          style={{
            width: "40vw",
            height: "40vh",
            top: "25%",
            right: "5%",
            background:
              "radial-gradient(ellipse, rgba(0,255,136,0.08) 0%, rgba(57,255,101,0.02) 40%, transparent 70%)",
            animationDelay: "-22s",
            animationDuration: "38s",
          }}
        />
      </div>

      {/* Cyber Grid & Scanline */}
      <div aria-hidden="true" className="cyber-grid z-[1]" />
      <div aria-hidden="true" className="scan-line z-[5]" />

      {/* Radial Vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[4]"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 35%, rgba(1,4,6,0.65) 100%)",
        }}
      />

      {/* ── Main Hero Content ── */}
      <div className="container-guild relative z-10 flex flex-col items-center text-center">
        <div className="hero-rise flex flex-col items-center gap-7 max-w-4xl">

          {/* 3D WebGL Hologram Core Stage with Centered Logo */}
          <div className="relative my-1 flex items-center justify-center">
            {/* The 3D Interactive WebGL Hologram Canvas */}
            <div className="relative z-10">
              <Hologram3DCanvas size={280} color="#00e5ff" />
            </div>

            {/* Centered Logo Badge floating inside the 3D Core */}
            <div className="absolute z-20 pointer-events-none size-16 sm:size-20 rounded-2xl bg-void/80 p-2 border border-cyan-electric/50 shadow-[0_0_35px_rgba(0,229,255,0.4)] backdrop-blur-md flex items-center justify-center">
              <Image
                src="/brand/growth-guild-labs-logo.png"
                alt="Growth Guild Labs Logo"
                width={70}
                height={70}
                className="size-full object-contain filter drop-shadow-[0_0_12px_rgba(0,229,255,0.9)]"
                priority
              />
            </div>
          </div>

          {/* Hero Top Badge */}
          <div
            onMouseEnter={() => sound.playHover()}
            className="hero-badge transition-all duration-300 hover:border-cyan-electric/60 hover:shadow-[0_0_25px_rgba(0,229,255,0.3)] cursor-default"
          >
            <span className="text-sm">🚀</span>
            <span>GROWTH GUILD LABS — ADVANCED AI ECOSYSTEM</span>
          </div>

          {/* Giant Viral Headline */}
          <h1 className="font-display text-[clamp(2.9rem,7vw,6.2rem)] font-extrabold tracking-tight text-ice-white leading-[1.03] text-balance">
            The Future Is{" "}
            <span className="gradient-text-cyan font-black drop-shadow-[0_0_40px_rgba(0,229,255,0.45)]">
              Built.
            </span>
            <span className="block text-mist/90 text-[0.6em] font-medium tracking-normal mt-2 sm:mt-3">
              Not Waited For.
            </span>
          </h1>

          {/* Subtext */}
          <p className="max-w-2xl font-sans text-lg sm:text-xl text-mist leading-relaxed font-light text-pretty">
            Five production AI applications across Windows & Android. Built independently with PyQt6, Gemini Live voice engines, FastMCP tools, and 3D avatars.
          </p>

          {/* 3 Stats Bar in glass card */}
          <div className="glass-card mt-2 grid w-full max-w-2xl grid-cols-3 divide-x divide-white/10 px-4 py-5 sm:px-8 sm:py-6">
            <div className="flex flex-col items-center gap-1.5 px-2">
              <span className="stat-number text-[#00e5ff] drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]">
                5
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-mist/80">
                AI Assistants
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
                FastMCP Tools
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="#ecosystem-interactive"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="btn-neon font-bold text-sm tracking-[0.2em] px-8 py-3.5 shadow-lg"
            >
              Explore 3D Ecosystem →
            </a>
            <Link
              href="/downloads"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-mono text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ice-white backdrop-blur-md transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300 hover:shadow-[0_0_25px_rgba(0,255,136,0.2)]"
            >
              <span>Download Builds</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden flex-col items-center gap-2 sm:flex z-10 pointer-events-none"
      >
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-grey/70">
          Scroll to explore 3D core
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 top-0 h-3 animate-scan bg-cyan-electric/80" />
        </span>
      </div>

      {/* Bottom gradient blend */}
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
