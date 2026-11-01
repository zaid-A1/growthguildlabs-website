import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { buildMetadata } from "@/lib/seo";
import { PRODUCTS, productHref } from "@/lib/products";

export const dynamic = "force-static";

export const metadata: Metadata = buildMetadata({
  title: "About — The People and Principles Behind the Guild",
  description:
    "Growth Guild Labs is an independent software project by Zaid Uddin and Idrees Uddin: five working AI applications, built as a guild and shown exactly as they are.",
  path: "/about",
});

const PRINCIPLES = [
  {
    icon: "⚙️",
    title: "Built, not promised",
    detail:
      "Every entry in the ecosystem runs as packaged software today. Product pages describe verified capability — what ships inside the package — not hypothetical roadmaps or speculative intentions.",
  },
  {
    icon: "🔷",
    title: "Separate products, separate identities",
    detail:
      "Five applications, five architectures, five names. The Connector is not ULTRON rebadged, and the Phone is not JARVIS wrapped in a webview. Each has its own codebase, runtime, and dedicated responsibility.",
  },
  {
    icon: "✅",
    title: "Availability, stated honestly",
    detail:
      "All five applications are built, packaged, and publicly downloadable. The Download Center carries every build with verified SHA-256 checksums, exact file sizes, and installation instructions — nothing is claimed that cannot be executed.",
  },
  {
    icon: "🚀",
    title: "The tagline is a method",
    detail:
      "Build More. Grow Together. It describes how the project functions: continuous shipping, shared architectural learnings across five applications — never empty marketing standing in for engineering.",
  },
];

const FOUNDERS = [
  {
    name: "Zaid Uddin",
    role: "CEO & Founder",
    accent: "#00e5ff",
    accentGlow: "rgba(0,229,255,0.3)",
    bio: "Lead architect across all five products. Built the PyQt6 voice pipeline, FastMCP plugin engine, Three.js HUD layers, autonomous skill codegen system, and multi-session memory architecture that powers the guild.",
    tags: ["PyQt6", "FastMCP", "Three.js", "Voice AI", "Python"],
    initial: "Z",
  },
  {
    name: "Idrees Uddin",
    role: "Co-Founder",
    accent: "#7c5cff",
    accentGlow: "rgba(124,92,255,0.3)",
    bio: "Systems engineering & gateway bridging. Designed the WebSocket companion gateway, Android pairing protocol, cross-platform release pipeline, and hardware-sensor integration layer.",
    tags: ["Systems", "WebSocket", "Android", "Hardware", "Gateway"],
    initial: "I",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Cinematic Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24">
        <div aria-hidden="true" className="absolute inset-0 page-hero-bg" />
        <div aria-hidden="true" className="cyber-grid opacity-[0.025]" />

        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "55vw",
            height: "45vh",
            top: "-15%",
            left: "-10%",
            background: "radial-gradient(ellipse, rgba(0,229,255,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "45vw",
            height: "40vh",
            bottom: "-10%",
            right: "-10%",
            background: "radial-gradient(ellipse, rgba(124,92,255,0.08) 0%, transparent 70%)",
            animationDelay: "-14s",
          }}
        />

        <div className="container-guild relative z-10 flex flex-col items-start gap-7 max-w-4xl">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl blur-xl opacity-80"
                style={{ background: "rgba(0,229,255,0.35)" }}
              />
              <Image
                src="/brand/growth-guild-labs-logo.png"
                alt="Growth Guild Labs Logo"
                width={76}
                height={76}
                className="relative rounded-2xl border border-cyan-electric/50 bg-void/90 p-2"
                priority
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="hero-badge">ABOUT THE GUILD</span>
              <span className="font-mono text-[0.68rem] uppercase tracking-widest text-muted-grey">
                Independent Software Engineering
              </span>
            </div>
          </div>

          <h1 className="font-display text-[clamp(2.6rem,5.6vw,5rem)] font-extrabold tracking-tight text-ice-white leading-[1.03] text-balance">
            Two Builders. One Guild.
            <span className="block gradient-text-cyan drop-shadow-[0_0_30px_rgba(0,229,255,0.4)]">
              Five Working Applications.
            </span>
          </h1>

          <blockquote className="glass-card max-w-3xl border-l-4 border-l-cyan-electric p-6 text-lg sm:text-xl leading-relaxed text-ice-white font-light">
            &ldquo;Exploring AI, software, and digital experiences that push ideas beyond the ordinary.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── Founders Section ── */}
      <section className="relative py-28 border-t border-hairline overflow-hidden">
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "60vw",
            height: "40vh",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="container-guild relative z-10">
          <Reveal className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="eyebrow">THE BUILDERS</span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ice-white">
              Meet the Guild
            </h2>
            <p className="max-w-xl text-base sm:text-lg text-mist font-light leading-relaxed">
              Two engineers. Every line of code, every voice pipeline, every HUD layer — built and shipped by this team.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {FOUNDERS.map((founder) => (
              <Reveal key={founder.name}>
                <div
                  className="relative overflow-hidden rounded-3xl border bg-panel p-8 flex flex-col gap-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_var(--f-glow)]"
                  style={
                    {
                      borderColor: `${founder.accent}33`,
                      "--f-glow": founder.accentGlow,
                    } as React.CSSProperties
                  }
                >
                  {/* Corner radial glow */}
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-bl-full opacity-15"
                    style={{
                      background: `radial-gradient(circle at top right, ${founder.accent}, transparent)`,
                    }}
                  />

                  {/* Top accent line */}
                  <div
                    className="absolute inset-x-0 top-0 h-0.5 rounded-t-3xl"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${founder.accent}, transparent)`,
                    }}
                  />

                  {/* Avatar + Name */}
                  <div className="flex items-center gap-5">
                    <div
                      className="relative size-16 rounded-2xl flex items-center justify-center text-2xl font-display font-black border"
                      style={{
                        background: `radial-gradient(circle, ${founder.accent}22, transparent)`,
                        borderColor: `${founder.accent}44`,
                        color: founder.accent,
                        boxShadow: `0 0 20px ${founder.accent}33`,
                      }}
                    >
                      {founder.initial}
                    </div>
                    <div>
                      <h3
                        className="font-display text-xl font-bold text-ice-white"
                        style={{ textShadow: `0 0 20px ${founder.accent}55` }}
                      >
                        {founder.name}
                      </h3>
                      <p
                        className="font-mono text-[0.72rem] uppercase tracking-widest mt-0.5"
                        style={{ color: founder.accent }}
                      >
                        {founder.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm leading-relaxed text-mist font-light">
                    {founder.bio}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {founder.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider"
                        style={{
                          borderColor: `${founder.accent}33`,
                          color: founder.accent,
                          background: `${founder.accent}0d`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guild Principles ── */}
      <section className="relative py-28 border-t border-hairline overflow-hidden">
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "50vw",
            height: "35vh",
            top: "-10%",
            right: "-5%",
            background: "radial-gradient(ellipse, rgba(124,92,255,0.07) 0%, transparent 70%)",
            animationDelay: "-20s",
          }}
        />
        <div className="container-guild relative z-10">
          <Reveal className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="eyebrow">HOW WE WORK</span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ice-white">
              Guild Principles
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="group relative rounded-2xl border border-hairline bg-panel p-8 flex flex-col gap-4 transition-all duration-300 hover:border-cyan-electric/30 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(0,229,255,0.08)]">
                  <div
                    className="absolute inset-x-0 top-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(90deg, transparent, #00e5ff, transparent)" }}
                  />
                  <span className="text-3xl">{p.icon}</span>
                  <h3 className="font-display text-xl font-bold text-ice-white group-hover:text-cyan-electric transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-mist/90 font-light">
                    {p.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products strip ── */}
      <section className="relative py-28 border-t border-hairline overflow-hidden">
        <div className="container-guild relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="THE SHIPPED ARTIFACTS"
              title="Five Applications, All Real"
              lead="Each is a separate product with its own dedicated profile, its own stack, and its own job."
            />
          </Reveal>

          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 glass-card">
            <ul className="divide-y divide-white/5">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <Link
                    href={productHref(p.id)}
                    className="group flex items-center justify-between gap-6 px-7 py-6 transition-colors duration-300 hover:bg-cyan-electric/[0.04]"
                  >
                    <div className="min-w-0 flex items-center gap-4">
                      <span
                        className="size-2.5 rounded-full shrink-0"
                        style={{
                          background:
                            p.accent === "gold" ? "#FFD700" :
                            p.accent === "cyan" ? "#00E5FF" :
                            p.accent === "red" ? "#FF1744" : "#7C5CFF",
                          boxShadow: `0 0 10px ${
                            p.accent === "gold" ? "#FFD700" :
                            p.accent === "cyan" ? "#00E5FF" :
                            p.accent === "red" ? "#FF1744" : "#7C5CFF"
                          }`,
                        }}
                        aria-hidden="true"
                      />
                      <div>
                        <span className="block font-display text-xl font-bold text-ice-white group-hover:text-cyan-electric transition-colors">
                          {p.name}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-grey font-mono">
                          {p.role} · {p.platform}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="hidden sm:inline-flex spec-chip text-xs">
                        {p.chips[0]}
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-mono text-base text-muted-grey transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-electric"
                      >
                        →
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Contact & Social ── */}
      <section
        className="relative z-10 border-t border-hairline py-28 overflow-hidden text-center"
        style={{ background: "radial-gradient(ellipse 90% 80% at 50% 50%, #061922 0%, #02070b 60%, #010305 100%)" }}
      >
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "60vw",
            height: "45vh",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="container-guild relative z-10 flex flex-col items-center gap-8 max-w-3xl mx-auto">
          <Reveal className="flex flex-col items-center gap-4">
            <span className="hero-badge">OFFICIAL BROADCAST CHANNELS</span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ice-white">
              Connect in Public
            </h2>
            <p className="text-base sm:text-lg text-mist font-light leading-relaxed">
              We share updates, release notes, and progress logs across our verified social channels.
            </p>
          </Reveal>

          <Reveal delay={100} className="w-full flex justify-center">
            <SocialLinks />
          </Reveal>

          <Reveal delay={150} className="mt-4 flex flex-wrap items-center justify-center gap-5">
            <Link href="/downloads" className="btn-neon font-bold text-xs tracking-widest px-8 py-3.5">
              Download All Applications
            </Link>
            <Link
              href="/ecosystem"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-mono text-xs uppercase tracking-widest text-ice-white hover:border-cyan-electric/40 hover:bg-cyan-electric/10 transition-all"
            >
              <span>Explore Ecosystem</span>
              <span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
