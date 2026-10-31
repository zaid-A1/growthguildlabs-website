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
    icon: "🛠️",
    title: "Built, not promised",
    detail:
      "Every entry in the ecosystem runs as packaged software today. Product pages describe verified capability — what ships inside the package — not hypothetical roadmaps or speculative intentions.",
  },
  {
    icon: "🏛️",
    title: "Separate products, separate identities",
    detail:
      "Five applications, five architectures, five names. The Connector is not ULTRON rebadged, and the Phone is not JARVIS wrapped in a webview. Each has its own codebase, runtime, and dedicated responsibility.",
  },
  {
    icon: "🛡️",
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

export default function AboutPage() {
  return (
    <>
      {/* ── Cinematic Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24">
        <div aria-hidden="true" className="absolute inset-0 page-hero-bg" />
        <div aria-hidden="true" className="cyber-grid opacity-[0.025]" />

        {/* Dynamic Nebulas */}
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
                className="relative rounded-2xl border border-cyan-electric/50 bg-void/90 p-2 nav-logo-glow"
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
            &ldquo;Exploring AI, software, and digital experiences that push ideas
            beyond the ordinary.&rdquo;
          </blockquote>

          <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-mist font-light">
            That statement is the project&apos;s guiding thesis — preserved here
            because it embodies the engineering spirit better than any corporate jargon could.
            Growth Guild Labs operates on transparency, shipping working code, and building durable software tools.
          </p>
        </div>
      </section>

      {/* ── People Behind Growth Guild Labs: Premium with Gradient Borders ── */}
      <section className="relative z-10 border-t border-hairline py-28 bg-void/40">
        <div className="container-guild">
          <Reveal>
            <SectionHeading
              eyebrow="LEADERSHIP & ENGINEERING"
              title="Who Builds Growth Guild Labs"
              lead="The identity is written where the products are: the shipped applications name their makers directly. Growth Guild Labs is the independent guild created by Zaid Uddin and Idrees Uddin."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {[
              {
                name: "Zaid Uddin",
                role: "CEO & Founder",
                initials: "ZU",
                accent: "#00E5FF",
                desc: "Lead system architect, PyQt6 core designer, and AI voice pipeline builder behind ULTRON 2.0, JARVIS 2.0, and F.R.I.D.A.Y.",
                note: "Sourced directly from the shipped executable manifests and protocol configurations.",
              },
              {
                name: "Idrees Uddin",
                role: "Co-founder",
                initials: "IU",
                accent: "#7C5CFF",
                desc: "Systems engineering, companion gateway bridging, hardware integration, and testing lead for the Android companion builds.",
                note: "Architect of the local pairing protocols and mobile telemetry sensor bridges.",
              },
            ].map((person, i) => (
              <Reveal key={person.name} delay={i * 120} className="h-full">
                <div
                  className="app-card h-full flex flex-col justify-between gap-10 p-8 sm:p-10 border transition-all duration-500 hover:scale-[1.01]"
                  style={{
                    borderColor: `${person.accent}44`,
                    boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${person.accent}12`,
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      aria-hidden="true"
                      className="grid size-16 place-items-center rounded-2xl border font-display text-xl font-bold shadow-lg"
                      style={{
                        borderColor: `${person.accent}66`,
                        backgroundColor: `${person.accent}15`,
                        color: person.accent,
                        boxShadow: `0 0 20px ${person.accent}25`,
                      }}
                    >
                      {person.initials}
                    </span>
                    <span
                      className="platform-pill border font-semibold"
                      style={{
                        borderColor: `${person.accent}55`,
                        color: person.accent,
                        backgroundColor: `${person.accent}10`,
                      }}
                    >
                      {person.role}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl font-extrabold text-ice-white">
                      {person.name}
                    </h3>
                    <p
                      className="mt-1 font-mono text-xs uppercase tracking-[0.24em] font-semibold"
                      style={{ color: person.accent }}
                    >
                      {person.role} // GROWTH GUILD LABS
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-mist font-light">
                      {person.desc}
                    </p>
                    <p className="mt-4 text-xs leading-relaxed text-muted-grey border-t border-white/10 pt-4">
                      {person.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principles: Icon + Text Layout ── */}
      <section className="relative z-10 border-t border-hairline py-28 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "55vw",
            height: "40vh",
            top: "10%",
            right: "-10%",
            background: "radial-gradient(ellipse, rgba(0,255,136,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="container-guild relative z-10">
          <Reveal className="max-w-3xl">
            <SectionHeading
              eyebrow="ENGINEERING PHILOSOPHY"
              title="Our Guiding Principles"
              lead="These are not corporate values written for a brochure — they are the rigid technical constraints every application in the guild is built under."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 80} className="h-full">
                <div className="app-card h-full p-8 flex flex-col justify-between gap-6 hover:border-cyan-electric/40">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0">
                      {principle.icon}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-ice-white">
                        {principle.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-mist font-light">
                        {principle.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Build: Direct Links ── */}
      <section className="relative z-10 border-t border-hairline py-24 bg-void/50">
        <div className="container-guild">
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

      {/* ── Contact & Social Channels ── */}
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
