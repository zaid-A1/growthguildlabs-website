import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { CtaLink } from "@/components/ui/CtaLink";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { HeroSection } from "@/components/HeroSection";
import { InteractiveEcosystemShowcase } from "@/components/ui/InteractiveEcosystemShowcase";
import { LiveNeuralTerminal } from "@/components/ui/LiveNeuralTerminal";
import { ArchitectureBlueprint } from "@/components/ui/ArchitectureBlueprint";
import { PRODUCTS } from "@/lib/products";
import { SITE, SOCIAL_LINKS } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: `${SITE.name} — ${SITE.tagline}`,
  description:
    "Growth Guild Labs is an independent AI software lab founded by Zaid Uddin and Idrees Uddin. Exploring ULTRON 2.0, ULTRON Connector, JARVIS 2.0, JARVIS 2.0 Phone, and F.R.I.D.A.Y. AI across Windows and Android.",
  path: "/",
});

/* ── Core pillars data ──────────────────────────────────────────────────── */
const PILLARS = [
  {
    icon: "🤖",
    title: "AI Operating Intelligences",
    desc: "Hardware-accelerated desktop shells built with PyQt6 that orchestrate multi-step tasks, manage operating system processes, and run autonomous agents with zero friction.",
    accent: "#00E5FF",
    label: "ULTRON 2.0 // Quantum Core",
  },
  {
    icon: "🎙️",
    title: "Voice AI & 3D Holograms",
    desc: "Sub-second speech synthesis, offline Vosk ASR wake-words, and natural conversational AI powered by native Gemini Live voice engines and real-time 3D face avatars.",
    accent: "#00FF88",
    label: "JARVIS 2.0 // F.R.I.D.A.Y.",
  },
  {
    icon: "⚡",
    title: "System Automation & Gateways",
    desc: "56+ FastMCP tools, Playwright headless browser controllers, Office document generators, and zero-cloud encrypted WebSocket pairing gateways connecting desktop to Android.",
    accent: "#FFD700",
    label: "FASTAPI // PLAYWRIGHT MCP",
  },
];

/* ── Founders data ──────────────────────────────────────────────────────── */
const FOUNDERS = [
  {
    name: "Zaid Uddin",
    role: "CEO & Founder",
    desc: "Lead system architect, PyQt6 core designer, FastMCP action pipeline author, and AI voice intelligence engineer.",
    initials: "ZU",
    accent: "#00E5FF",
  },
  {
    name: "Idrees Uddin",
    role: "Co-founder",
    desc: "Systems engineering, companion gateway protocol bridging, Android architecture, and local network hardware testing lead.",
    initials: "IU",
    accent: "#7C5CFF",
  },
];

/* ── Home page ──────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ══ 1. HERO WITH 3D WEBGL HOLOGRAM ═══════════════════════════════ */}
      <HeroSection />

      {/* ══ 2. INTERACTIVE 3D ECOSYSTEM TELEMETRY SHOWCASE ═══════════════ */}
      <section id="ecosystem-interactive" className="scroll-mt-24 py-20 sm:py-28 relative z-10 border-t border-hairline bg-void overflow-hidden">
        <div className="container-guild">
          <Reveal className="mb-10 text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
            <span className="hero-badge">3D HOLOGRAM MATRIX</span>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4.2rem)] font-extrabold text-ice-white leading-[1.05]">
              Real Systems.
              <span className="block gradient-text-cyan">Tested & Verified in 3D.</span>
            </h2>
            <p className="text-base sm:text-lg text-mist font-light leading-relaxed">
              Rotate the interactive WebGL hologram core below, switch between the five applications, and inspect live runtime architecture, cryptographic checksums, and package manifests.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <InteractiveEcosystemShowcase />
          </Reveal>
        </div>
      </section>

      {/* ══ TECH MARQUEE STRIP ═══════════════════════════════════════════ */}
      <TechMarquee />

      {/* ══ 3. CORE ENGINEERING PILLARS ══════════════════════════════════ */}
      <section className="relative z-10 border-t border-hairline bg-void py-24 sm:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "60vw",
            height: "40vh",
            top: "-10%",
            left: "20%",
            background: "radial-gradient(ellipse, rgba(124,92,255,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="container-guild relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
            <span className="hero-badge">ENGINEERING FOUNDATIONS</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.6rem)] font-extrabold text-ice-white leading-[1.08]">
              What We Build
            </h2>
            <p className="text-lg text-mist font-light leading-relaxed">
              Three synchronized disciplines powering the entire Growth Guild Labs ecosystem.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 100} className="h-full">
                <div className="app-card h-full flex flex-col justify-between">
                  <div>
                    <div
                      className="mb-6 inline-flex size-16 items-center justify-center rounded-2xl text-3xl border"
                      style={{
                        borderColor: `${pillar.accent}40`,
                        backgroundColor: `${pillar.accent}10`,
                        boxShadow: `0 0 25px ${pillar.accent}20`,
                      }}
                    >
                      {pillar.icon}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-ice-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-mist font-light">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-8 border-t border-white/10 pt-4">
                    <span
                      className="font-mono text-xs uppercase tracking-widest"
                      style={{ color: pillar.accent }}
                    >
                      {pillar.label}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. INTERACTIVE CROSS-PLATFORM ARCHITECTURE BLUEPRINT ═════════ */}
      <section className="relative z-10 border-t border-hairline bg-void py-20 sm:py-28 overflow-hidden">
        <div className="container-guild">
          <Reveal>
            <ArchitectureBlueprint />
          </Reveal>
        </div>
      </section>

      {/* ══ 5. LIVE WORKING NEURAL TERMINAL ══════════════════════════════ */}
      <section id="terminal" className="relative z-10 border-t border-hairline bg-void/50 py-20 sm:py-28 overflow-hidden">
        <div className="container-guild">
          <Reveal className="mb-10 max-w-3xl">
            <span className="eyebrow">LIVE NEURAL COMMAND TERMINAL</span>
            <h2 className="font-display text-title text-ice-white mt-2">
              Inspect & Query the Kernel Directly.
            </h2>
            <p className="mt-2 text-mist text-sm sm:text-base leading-relaxed">
              Test real system commands in our live simulated environment. Query PyQt6 runtime states, Vosk ASR offline models, FastMCP tool pipelines, and release cryptographic hashes.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <LiveNeuralTerminal />
          </Reveal>
        </div>
      </section>

      {/* ══ 6. COMPLETE PRODUCT DIRECTORY ════════════════════════════════ */}
      <section className="relative z-10 border-t border-hairline bg-void py-24 sm:py-32 overflow-hidden">
        <div className="container-guild">
          <Reveal className="mb-14">
            <SectionHeading
              eyebrow="THE ECOSYSTEM"
              title="Five applications. One directory."
              lead="Each card opens a complete profile — what it does, what it is built from, and verified SHA-256 releases."
            />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 70} className="h-full relative">
                <div className="absolute top-4 right-4 z-20 font-mono text-[0.65rem] font-bold text-cyan-electric/70">
                  [0{i + 1}]
                </div>
                <ProductCard product={p} className="h-full" priority={i === 0} />
              </Reveal>
            ))}

            {/* Ecosystem Directory Map Card */}
            <Reveal delay={PRODUCTS.length * 70} className="h-full">
              <div className="holo-card h-full flex flex-col justify-between p-6">
                <div>
                  <p className="font-mono text-micro uppercase tracking-[0.3em] text-cyan-electric font-bold">
                    Connectivity Map
                  </p>
                  <ul className="mt-4 flex flex-col gap-3 text-sm text-mist">
                    <li className="flex items-center gap-3">
                      <span className="size-1.5 rounded-full bg-neon-green shrink-0 shadow-[0_0_8px_#39ff65]" />
                      ULTRON 2.0 ↔ ULTRON Connector: Local pairing gateway
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="size-1.5 rounded-full bg-cyan-electric shrink-0 shadow-[0_0_8px_#00e5ff]" />
                      JARVIS 2.0 ↔ JARVIS Phone: One family, two screens
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="size-1.5 rounded-full bg-violet-400 shrink-0 shadow-[0_0_8px_#7c5cff]" />
                      F.R.I.D.A.Y. AI: Hands-free desk voice engine
                    </li>
                  </ul>
                </div>
                <CtaLink href="/ecosystem" variant="secondary" className="mt-6 self-start">
                  Open Complete Matrix
                </CtaLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ 7. FOUNDERS & LEADERSHIP ═════════════════════════════════════ */}
      <section className="relative z-10 border-t border-hairline bg-void py-24 sm:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "45vw",
            height: "45vh",
            bottom: "-20%",
            left: "-10%",
            background: "radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="container-guild relative z-10 grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="flex flex-col justify-center gap-6">
            <SectionHeading
              eyebrow="PEOPLE BEHIND GROWTH GUILD LABS"
              title="Two people, one guild."
              lead="Growth Guild Labs is an independent personal software project founded by Zaid Uddin and Idrees Uddin. No corporate backstory — just real engineering."
            />
            <div className="flex flex-col gap-4 mt-2">
              <p className="font-mono text-micro uppercase tracking-[0.28em] text-cyan-electric">
                OFFICIAL VERIFIED DESTINATIONS
              </p>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spec-chip hover:border-cyan-electric hover:text-white transition-colors"
                  >
                    {s.platform} ↗
                  </a>
                ))}
              </div>
              <CtaLink href="/about" variant="secondary" className="self-start mt-2">
                Read Founding Story
              </CtaLink>
            </div>
          </Reveal>

          <Reveal delay={120} className="grid gap-6 sm:grid-cols-2 content-start">
            {FOUNDERS.map((person) => (
              <div
                key={person.name}
                className="person-card flex flex-col justify-between gap-8 border transition-all duration-500 hover:scale-[1.02]"
                style={{
                  borderColor: `${person.accent}33`,
                  boxShadow: `0 0 25px ${person.accent}10`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="grid size-14 place-items-center rounded-2xl border font-display text-lg font-bold"
                    style={{
                      borderColor: `${person.accent}66`,
                      backgroundColor: `${person.accent}15`,
                      color: person.accent,
                    }}
                  >
                    {person.initials}
                  </span>
                  <span
                    className="font-mono text-[0.62rem] uppercase tracking-wider px-2.5 py-1 rounded-full border"
                    style={{
                      borderColor: `${person.accent}44`,
                      color: person.accent,
                      backgroundColor: `${person.accent}0d`,
                    }}
                  >
                    VERIFIED BUILDER
                  </span>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-ice-white">{person.name}</p>
                  <p
                    className="mt-1 font-mono text-micro uppercase tracking-[0.26em]"
                    style={{ color: person.accent }}
                  >
                    {person.role}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-mist">{person.desc}</p>
                </div>
                <div className="border-t border-hairline pt-3 font-mono text-[0.62rem] text-muted-grey">
                  GROWTH GUILD LABS // LEADERSHIP
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══ 8. HIGH-IMPACT FINAL CTA ═════════════════════════════════════ */}
      <section className="relative z-10 border-t border-hairline bg-void overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,229,255,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="container-guild relative z-10 py-28 sm:py-36 flex flex-col items-center text-center gap-8">
          <Reveal className="flex flex-col items-center gap-6 max-w-3xl">
            <span className="hero-badge">READY FOR DEPLOYMENT</span>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.6rem)] font-extrabold text-ice-white leading-[1.05] text-balance">
              The Future Is Built.
              <span className="block gradient-text-cyan">Experience It Now.</span>
            </h2>
            <p className="text-lg text-mist font-light leading-relaxed max-w-xl">
              Five working production applications. Verified Windows x64 binaries, Android APKs, and open source documentation.
            </p>
          </Reveal>

          <Reveal delay={100} className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/downloads"
              className="btn-neon font-bold text-sm tracking-[0.2em] px-10 py-4 shadow-lg"
            >
              Open Download Center →
            </Link>
            <a
              href="https://github.com/zaid-A1/growthguildlabs-website"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-mono text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ice-white backdrop-blur-md transition-all duration-300 hover:border-cyan-electric/50 hover:bg-cyan-electric/10 hover:text-cyan-electric"
            >
              <span>GitHub Repository</span>
              <span>↗</span>
            </a>
          </Reveal>

          <Reveal delay={200}>
            <Image
              src="/brand/growth-guild-labs-logo.png"
              alt="Growth Guild Labs emblem"
              width={64}
              height={64}
              className="rounded-2xl border border-hairline bg-void/80 p-2 nav-logo-glow opacity-70 hover:opacity-100 transition-opacity"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
