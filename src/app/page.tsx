import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { CinematicJourney } from "@/components/journey/CinematicJourney";
import { HeroSection } from "@/components/HeroSection";
import { SceneRail, type SceneStop } from "@/components/fx/SceneRail";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { TerminalConsole } from "@/components/ui/TerminalConsole";
import { SocialShowcase } from "@/components/ui/SocialShowcase";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: `${SITE.name} — Build More. Grow Together.`,
  description:
    "Growth Guild Labs is an independent software project building five working AI applications — ULTRON 2.0, the ULTRON Connector, JARVIS 2.0, JARVIS 2.0 Phone and F.R.I.D.A.Y. AI. Explore the ecosystem.",
  path: "/",
});

/* ── Journey chapters ─────────────────────────────────────────────────── */

const SCENES: SceneStop[] = [
  { id: "scene-01", label: "Deep Space" },
  { id: "scene-02", label: "Close Orbit" },
  { id: "scene-03", label: "The Gateway" },
  { id: "scene-04", label: "The Laboratory" },
  { id: "scene-05", label: "Discovery" },
];

function Chapter({
  eyebrow,
  children,
  className,
  sceneId,
}: {
  eyebrow: string;
  children: React.ReactNode;
  className?: string;
  sceneId?: string;
}) {
  return (
    <section
      id={sceneId}
      className={`relative z-10 flex min-h-[88vh] items-center py-24 sm:min-h-[92vh] ${className ?? ""}`}
    >
      <div className="container-guild w-full">{children}</div>
      <span className="eyebrow absolute bottom-6 right-6 hidden sm:inline-flex">
        {eyebrow}
      </span>
    </section>
  );
}

const PRODUCT_TEASERS = [
  {
    id: "ultron-2",
    name: "ULTRON 2.0",
    platform: "Windows x64",
    role: "Quantum Core OS Intelligence",
    color: "#FFD700",
    accentBg: "rgba(255, 215, 0, 0.08)",
    borderColor: "rgba(255, 215, 0, 0.3)",
  },
  {
    id: "ultron-2-connector",
    name: "ULTRON 2.0 Connector",
    platform: "Android APK",
    role: "Encrypted Companion Gateway",
    color: "#00E5FF",
    accentBg: "rgba(0, 229, 255, 0.08)",
    borderColor: "rgba(0, 229, 255, 0.3)",
  },
  {
    id: "jarvis-2",
    name: "JARVIS 2.0",
    platform: "Windows x64",
    role: "3D Hologram Face Avatar",
    color: "#FF1744",
    accentBg: "rgba(255, 23, 68, 0.08)",
    borderColor: "rgba(255, 23, 68, 0.3)",
  },
  {
    id: "jarvis-2-phone",
    name: "JARVIS 2.0 Phone",
    platform: "Android APK",
    role: "Offline Vosk Voice Assistant",
    color: "#7C5CFF",
    accentBg: "rgba(124, 92, 255, 0.08)",
    borderColor: "rgba(124, 92, 255, 0.3)",
  },
  {
    id: "friday-ai",
    name: "F.R.I.D.A.Y. AI",
    platform: "Windows x64",
    role: "Gemini Live Voice Engine",
    color: "#00FF88",
    accentBg: "rgba(0, 255, 136, 0.08)",
    borderColor: "rgba(0, 255, 136, 0.3)",
  },
];

const TECH_STACK = [
  { name: "PyQt6", role: "Desktop UI Shell", color: "#00E5FF" },
  { name: "Gemini Live", role: "Native Voice AI", color: "#00FF88" },
  { name: "Vosk ASR", role: "Offline Speech Engine", color: "#FFD700" },
  { name: "three.js", role: "3D HUD & Avatars", color: "#7C5CFF" },
  { name: "FastMCP", role: "Extensible Tool Protocols", color: "#FF1744" },
  { name: "Playwright", role: "Autonomous Browser Control", color: "#39FF65" },
  { name: "Jetpack Compose", role: "Android Companion UI", color: "#00E5FF" },
  { name: "ML Kit", role: "High-Speed Barcode Pairing", color: "#FFD700" },
];

/* ── Home page ──────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <CinematicJourney>
        {/* 1 — Hero (Scene 01) */}
        <HeroSection />

        {/* 2 — Close orbit: what the guild is (Scene 02) */}
        <Chapter eyebrow="SCENE 02 · CLOSE ORBIT" sceneId="scene-02">
          <Reveal className="max-w-4xl flex flex-col gap-7">
            <div className="product-badge bg-cyan-electric/10 border border-cyan-electric/30 text-cyan-electric">
              <span>●</span>
              <span>SCENE 02 // CLOSE ORBIT</span>
            </div>

            <h2 className="font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-bold leading-[1.05] text-ice-white text-balance">
              One independent lab.
              <span className="block mt-1 text-mist">
                Five working applications —
                <span className="gradient-text-cyan"> built as a guild</span>,
                not a graveyard of demos.
              </span>
            </h2>

            <p className="max-w-3xl text-lg sm:text-xl leading-relaxed text-mist font-light">
              Every assistant in the ecosystem runs today: the flagship ULTRON 2.0 desktop
              build, the Android Connector companion, the dual-screen JARVIS 2.0 voice
              experiences, and F.R.I.D.A.Y. — a modular voice assistant built for high-performance productivity.
            </p>

            {/* Big feature list with icons */}
            <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
              {[
                {
                  icon: "⚡",
                  title: "High-Speed Execution",
                  desc: "Sub-second response times, compiled local binaries, and low-latency command routing.",
                },
                {
                  icon: "🤖",
                  title: "Autonomous Agent Workflows",
                  desc: "Tool-calling agents capable of executing complex multi-step automated tasks.",
                },
                {
                  icon: "🎙️",
                  title: "Gemini Live Voice AI",
                  desc: "Natural human-like vocal dialogue with real-time audio streaming.",
                },
                {
                  icon: "👁️",
                  title: "3D Hologram Avatars",
                  desc: "Real-time viseme lip-synchronization and interactive 3D HUD visuals.",
                },
                {
                  icon: "💻",
                  title: "Native PyQt6 Shells",
                  desc: "Hardware-accelerated desktop interfaces designed for power users.",
                },
                {
                  icon: "🌐",
                  title: "Encrypted Companion Gateways",
                  desc: "Zero-cloud local network pairing between your desktop and mobile phone.",
                },
              ].map((feat) => (
                <div
                  key={feat.title}
                  className="feature-row glass-card p-4 rounded-xl border border-white/5 hover:border-cyan-electric/30 transition-colors"
                >
                  <span className="text-2xl shrink-0 p-2 rounded-lg bg-white/5 border border-white/10">
                    {feat.icon}
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-ice-white">
                      {feat.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted-grey leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-4">
              <Link href="/downloads" className="btn-neon text-xs">
                Visit Download Center →
              </Link>
              <Link
                href="/about"
                className="font-mono text-xs uppercase tracking-[0.2em] text-mist hover:text-cyan-electric transition-colors"
              >
                Learn about the guild
              </Link>
            </div>
          </Reveal>
        </Chapter>

        {/* 3 — The gateway: visual product teaser grid (Scene 03) */}
        <Chapter eyebrow="SCENE 03 · THE GATEWAY" sceneId="scene-03">
          <Reveal className="flex flex-col items-start gap-8 w-full max-w-5xl">
            <div className="product-badge bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700]">
              <span>●</span>
              <span>SCENE 03 // THE GATEWAY</span>
            </div>

            <div className="max-w-3xl">
              <h2 className="font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-bold text-ice-white text-balance leading-[1.05]">
                Product discovery,
                <span className="block gradient-text-gold">
                  engineered as an ecosystem.
                </span>
              </h2>
              <p className="mt-4 text-lg text-mist font-light leading-relaxed">
                Four assistants live on Windows; two pair with Android companions via local gateways.
                Each application retains its own architecture, codebase, and dedicated identity.
              </p>
            </div>

            {/* Visual 5 App Cards Grid */}
            <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCT_TEASERS.map((app, i) => (
                <Link
                  key={app.id}
                  href={`/products/${app.id}`}
                  className="group relative overflow-hidden rounded-2xl border p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    backgroundColor: app.accentBg,
                    borderColor: app.borderColor,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-grey">0{i + 1}</span>
                    <span
                      className="platform-pill border"
                      style={{
                        color: app.color,
                        borderColor: `${app.color}44`,
                        backgroundColor: "rgba(0,0,0,0.4)",
                      }}
                    >
                      {app.platform}
                    </span>
                  </div>

                  <div className="mt-6">
                    <h3
                      className="font-display text-xl font-bold transition-colors group-hover:text-ice-white"
                      style={{ color: app.color }}
                    >
                      {app.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-mist/80">
                      {app.role}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="font-mono text-[0.68rem] uppercase tracking-wider text-muted-grey group-hover:text-ice-white transition-colors">
                      Inspect Profile
                    </span>
                    <span
                      className="font-mono text-sm transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: app.color }}
                    >
                      →
                    </span>
                  </div>
                </Link>
              ))}

              {/* View All Card */}
              <Link
                href="/ecosystem"
                className="group flex flex-col justify-between rounded-2xl border border-cyan-electric/20 bg-cyan-electric/5 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-electric/50"
              >
                <div>
                  <span className="font-mono text-xs text-cyan-electric">DIRECTORY</span>
                  <h3 className="mt-4 font-display text-xl font-bold text-ice-white group-hover:text-cyan-electric transition-colors">
                    Explore Ecosystem Map
                  </h3>
                  <p className="mt-2 text-xs text-mist/80 leading-relaxed">
                    View the full connectivity matrix, technical specifications, and runtime requirements.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-cyan-electric/20 pt-3 font-mono text-xs text-cyan-electric">
                  <span>Enter Directory</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </div>
          </Reveal>
        </Chapter>

        {/* 4 — The lab: Tech stack chips (Scene 04) */}
        <Chapter eyebrow="SCENE 04 · THE LABORATORY" sceneId="scene-04">
          <Reveal className="flex flex-col items-start gap-8 w-full max-w-4xl">
            <div className="product-badge bg-[#7C5CFF]/10 border border-[#7C5CFF]/30 text-[#7C5CFF]">
              <span>●</span>
              <span>SCENE 04 // THE LABORATORY</span>
            </div>

            <div className="max-w-3xl">
              <h2 className="font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-bold text-ice-white text-balance leading-[1.05]">
                Built with real parts.
                <span className="block text-mist font-light mt-1">
                  Engineered with production-grade tools.
                </span>
              </h2>
              <p className="mt-4 text-lg text-mist font-light leading-relaxed">
                No mockups. Every application in the lab is assembled using modern, robust frameworks
                and local neural engines designed for resilience and performance.
              </p>
            </div>

            {/* Glowing Tech Stack Chips */}
            <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.name}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-md transition-all duration-300 hover:border-cyan-electric/40 hover:bg-white/[0.05]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -top-10 -right-10 size-20 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity"
                    style={{ backgroundColor: tech.color }}
                  />
                  <p
                    className="font-mono text-sm font-bold tracking-wide"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </p>
                  <p className="mt-1 font-mono text-[0.68rem] text-muted-grey">
                    {tech.role}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/lab-notes" className="btn-neon text-xs">
                Explore Lab Notes →
              </Link>
            </div>
          </Reveal>
        </Chapter>

        {/* 5 — Discovery: Product Grid (Scene 05) */}
        <Chapter eyebrow="SCENE 05 · PRODUCT DISCOVERY" sceneId="scene-05">
          <Reveal className="flex flex-col items-start gap-8 w-full max-w-5xl">
            <div className="product-badge bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88]">
              <span>●</span>
              <span>SCENE 05 // PRODUCT DISCOVERY</span>
            </div>

            <div className="max-w-3xl">
              <h2 className="font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-bold text-ice-white text-balance leading-[1.05]">
                Meet the five
                <span className="block gradient-text-cyan">
                  that run the orbit.
                </span>
              </h2>
              <p className="mt-4 text-lg text-mist font-light leading-relaxed">
                Click any product to view its comprehensive architecture profile, tool capabilities,
                and direct binary download package.
              </p>
            </div>

            <ul className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((p, i) => (
                <li key={p.id}>
                  <Link
                    href={`/products/${p.id}`}
                    className="group flex flex-col justify-between h-full rounded-2xl border border-white/10 bg-void/70 p-6 backdrop-blur-md transition-all duration-500 hover:border-cyan-electric/50 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-cyan-electric">
                        0{i + 1} //
                      </span>
                      <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-grey">
                        {p.role}
                      </span>
                    </div>

                    <div className="my-6">
                      <h3 className="font-display text-2xl font-bold text-ice-white group-hover:text-cyan-electric transition-colors">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-xs text-mist/80 line-clamp-2 leading-relaxed">
                        {p.summary}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-3">
                      <span className="font-mono text-[0.7rem] uppercase tracking-wider text-cyan-electric">
                        View Product Profile
                      </span>
                      <span className="font-mono text-sm text-cyan-electric transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Chapter>

        {/* Fixed scene navigation rail */}
        <SceneRail scenes={SCENES} />
      </CinematicJourney>

      {/* ── NEW: WHAT WE BUILD SECTION (3 Columns) ── */}
      <section className="relative z-10 border-t border-hairline bg-void py-24 sm:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "60vw",
            height: "40vh",
            top: "-15%",
            left: "20%",
            background: "radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="container-guild relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
            <span className="hero-badge">OUR CORE PILLARS</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.6rem)] font-extrabold text-ice-white leading-[1.08]">
              What We Build
            </h2>
            <p className="text-lg text-mist font-light leading-relaxed">
              Three synchronized engineering disciplines that power the entire Growth Guild Labs ecosystem.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Column 1: AI Assistants */}
            <Reveal delay={0} className="h-full">
              <div className="app-card h-full flex flex-col justify-between">
                <div>
                  <div className="mb-6 inline-flex size-16 items-center justify-center rounded-2xl border border-cyan-electric/40 bg-cyan-electric/10 text-3xl shadow-[0_0_25px_rgba(0,229,255,0.2)]">
                    🤖
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ice-white">
                    AI Assistants
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-mist font-light">
                    Full-featured desktop intelligences that orchestrate multi-step tasks, manage local workflows, and execute code in real-time with zero friction.
                  </p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-electric">
                    ULTRON 2.0 // Quantum Core
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Column 2: Voice Control */}
            <Reveal delay={120} className="h-full">
              <div className="app-card h-full flex flex-col justify-between">
                <div>
                  <div className="mb-6 inline-flex size-16 items-center justify-center rounded-2xl border border-[#00FF88]/40 bg-[#00FF88]/10 text-3xl shadow-[0_0_25px_rgba(0,255,136,0.2)]">
                    🎙️
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ice-white">
                    Voice Control
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-mist font-light">
                    Sub-second voice synthesis, offline ASR wake-words, and natural conversational AI powered by native Gemini Live engines and three.js 3D avatars.
                  </p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#00FF88]">
                    JARVIS 2.0 // F.R.I.D.A.Y.
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Column 3: System Automation */}
            <Reveal delay={240} className="h-full">
              <div className="app-card h-full flex flex-col justify-between">
                <div>
                  <div className="mb-6 inline-flex size-16 items-center justify-center rounded-2xl border border-[#FFD700]/40 bg-[#FFD700]/10 text-3xl shadow-[0_0_25px_rgba(255,215,0,0.2)]">
                    ⚡
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ice-white">
                    System Automation
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-mist font-light">
                    56+ FastMCP tools, Playwright browser controllers, Office document generators, and cross-platform companion pairing gateways over local websockets.
                  </p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#FFD700]">
                    FASTAPI // PLAYWRIGHT MCP
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Tech Marquee Strip ── */}
      <TechMarquee />

      {/* ── Solid-background sections ── */}
      <div className="relative z-10 bg-void">

        {/* ── Ecosystem preview ── */}
        <section id="ecosystem-preview" className="scroll-mt-24 py-24 sm:py-32 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="nebula-blob"
            style={{
              width: "50vw",
              height: "40vh",
              top: "-10%",
              right: "-15%",
              background: "radial-gradient(ellipse, rgba(0,229,255,0.05) 0%, transparent 70%)",
            }}
          />
          <div className="container-guild relative z-10">
            <Reveal className="flex flex-col gap-6">
              <SectionHeading
                eyebrow="THE ECOSYSTEM"
                title="Five applications. One directory."
                lead="Each card opens a complete profile — what it does, what it is built from, and exactly how far it can be used today. Availability is stated honestly with verified SHA-256 manifests."
              />
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((p, i) => (
                <Reveal
                  key={p.id}
                  delay={i * 70}
                  className="h-full relative"
                >
                  <div className="absolute top-4 right-4 z-20 font-mono text-[0.65rem] font-bold text-cyan-electric/70">
                    [0{i + 1}]
                  </div>
                  <ProductCard product={p} className="h-full" priority={i === 0} />
                </Reveal>
              ))}
              {/* Ecosystem map tile */}
              <Reveal delay={PRODUCTS.length * 70} className="h-full">
                <div className="holo-card h-full flex flex-col justify-between p-6">
                  <div>
                    <p className="font-mono text-micro uppercase tracking-[0.3em] text-muted-grey">
                      How they connect
                    </p>
                    <ul className="mt-4 flex flex-col gap-3 text-sm text-mist">
                      <li className="flex items-center gap-3">
                        <span className="size-1.5 rounded-full bg-neon-green" style={{ boxShadow: "0 0 6px #39ff6588" }} aria-hidden="true" />
                        ULTRON 2.0 ↔ ULTRON 2.0 Connector — local pairing gateway
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="size-1.5 rounded-full bg-cyan-electric" style={{ boxShadow: "0 0 6px #00e5ff88" }} aria-hidden="true" />
                        JARVIS 2.0 ↔ JARVIS 2.0 Phone — one family, two screens
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="size-1.5 rounded-full bg-violet-400" style={{ boxShadow: "0 0 6px #7c5cff88" }} aria-hidden="true" />
                        F.R.I.D.A.Y. AI — the hands-free sibling in the same voice-line
                      </li>
                    </ul>
                  </div>
                  <CtaLink href="/ecosystem" variant="ghost" className="mt-6 self-start">
                    View the full directory
                  </CtaLink>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Terminal Sandbox ── */}
        <section className="border-t border-hairline py-20 bg-void/50">
          <div className="container-guild">
            <Reveal className="mb-10 flex flex-col gap-4">
              <span className="eyebrow">INTERACTIVE TELEMETRY SANDBOX</span>
              <h2 className="font-display text-title text-ice-white">
                Inspect the system in real time.
              </h2>
              <p className="max-w-2xl text-mist">
                Query our live node terminal. Type diagnostic queries or click the quick tags to inspect
                PyQt6 shell architecture, Vosk offline ASR engines, FastMCP tool pipelines, and release cryptographic hashes.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <TerminalConsole />
            </Reveal>
          </div>
        </section>

        {/* ── Stats Band: Bigger numbers with .stat-number ── */}
        <section className="border-t border-hairline py-20 bg-void/40">
          <div className="container-guild">
            <Reveal className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div className="stat-card glass-card">
                <p className="stat-number text-[#00E5FF] drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                  5
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-mist/90">
                  AI Applications
                </p>
              </div>
              <div className="stat-card glass-card">
                <p className="stat-number text-[#00FF88] drop-shadow-[0_0_20px_rgba(0,255,136,0.4)]">
                  2
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-mist/90">
                  Platforms (Win & Android)
                </p>
              </div>
              <div className="stat-card glass-card">
                <p className="stat-number text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                  56+
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-mist/90">
                  FastMCP Tools
                </p>
              </div>
              <div className="stat-card glass-card">
                <p className="stat-number text-[#7C5CFF] drop-shadow-[0_0_20px_rgba(124,92,255,0.4)]">
                  100%
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-mist/90">
                  Independent Guild
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── People Behind Growth Guild Labs: Premium with gradient borders ── */}
        <section className="border-t border-hairline py-24 sm:py-28 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="nebula-blob"
            style={{
              width: "45vw",
              height: "45vh",
              bottom: "-20%",
              left: "-10%",
              background: "radial-gradient(ellipse, rgba(124,92,255,0.07) 0%, transparent 70%)",
            }}
          />
          <div className="container-guild relative z-10 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="PEOPLE BEHIND GROWTH GUILD LABS"
                title="Two people, one guild."
                lead="Growth Guild Labs is an independent personal software project. No corporate backstory is invented here — this is simply who builds what you have just seen."
              />
              <div className="mt-8 flex flex-col gap-4">
                <p className="font-mono text-micro uppercase tracking-[0.28em] text-cyan-electric">
                  CONNECT WITH THE FOUNDERS ACROSS OFFICIAL CHANNELS
                </p>
                <CtaLink href="/about" variant="secondary" ariaLabel="Read more about our founding story">
                  Read the founding vision
                </CtaLink>
              </div>
            </Reveal>
            <Reveal delay={120} className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  name: "Zaid Uddin",
                  role: "CEO & Founder",
                  desc: "Lead system architect, PyQt6 core designer, and AI voice pipeline builder.",
                  initials: "ZU",
                  accent: "#00E5FF",
                },
                {
                  name: "Idrees Uddin",
                  role: "Co-founder",
                  desc: "Systems engineering, companion gateway bridging, and hardware testing lead.",
                  initials: "IU",
                  accent: "#7C5CFF",
                },
              ].map((person) => (
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
                    <p className="mt-3 text-xs leading-relaxed text-mist">
                      {person.desc}
                    </p>
                  </div>
                  <div className="border-t border-hairline pt-3 font-mono text-[0.62rem] text-muted-grey">
                    GROWTH GUILD LABS // LEADERSHIP
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── Official Social Broadcast Hubs ── */}
        <section className="border-t border-hairline py-20 bg-void/60">
          <div className="container-guild">
            <Reveal className="mb-10 flex flex-col gap-4">
              <span className="eyebrow">OFFICIAL BROADCAST CHANNELS</span>
              <h2 className="font-display text-title text-ice-white">
                Follow the live evolution.
              </h2>
              <p className="max-w-2xl text-mist">
                Real engineering progress, release previews, UI demonstrations, and live walkthroughs.
                Follow Growth Guild Labs on all verified social media platforms.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <SocialShowcase />
            </Reveal>
          </div>
        </section>

        {/* ── Lab notes teaser ── */}
        <section className="border-t border-hairline py-20">
          <div className="container-guild flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Reveal className="flex flex-col gap-4">
              <p className="eyebrow">LAB NOTES</p>
              <p className="max-w-xl text-lg text-mist">
                Engineering notes and development updates open here — written
                as the work lands, never fabricated to fill a page.
              </p>
            </Reveal>
            <Reveal delay={100} className="flex items-center gap-5">
              <Image
                src="/brand/growth-guild-labs-logo.png"
                alt="Growth Guild Labs emblem"
                width={56}
                height={56}
                className="rounded-lg border border-hairline bg-void/60 p-1 nav-logo-glow"
              />
              <CtaLink href="/lab-notes" variant="secondary" ariaLabel="Open Lab Notes">
                Lab notes index
              </CtaLink>
            </Reveal>
          </div>
        </section>

        {/* ── Final CTA: Dramatic, Bigger Text & Centered Layout ── */}
        <section className="border-t border-hairline py-28 relative overflow-hidden text-center">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 90% 80% at 50% 50%, #071f2a 0%, #02070b 60%, #010305 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="nebula-blob"
            style={{
              width: "70vw",
              height: "55vh",
              top: "-15%",
              left: "15%",
              background: "radial-gradient(ellipse, rgba(0,229,255,0.12) 0%, rgba(57,255,101,0.05) 50%, transparent 70%)",
            }}
          />
          <div className="container-guild relative z-10 flex flex-col items-center gap-8 max-w-4xl mx-auto">
            <Reveal className="flex flex-col items-center gap-5">
              <span className="hero-badge">THE FUTURE IS BUILT. NOT WAITED FOR.</span>
              <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.8rem)] font-extrabold text-ice-white leading-[1.04] text-balance">
                Start with the ecosystem.
                <span className="block gradient-text-cyan">
                  Then deploy your assistant.
                </span>
              </h2>
              <p className="max-w-2xl text-lg sm:text-xl text-mist font-light leading-relaxed">
                Direct verified binaries, full documentation, and cryptographic checksums ready for immediate use.
              </p>
            </Reveal>
            <Reveal delay={120} className="flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/ecosystem"
                className="btn-neon font-bold text-sm tracking-[0.2em] px-8 py-3.5 shadow-xl"
              >
                Explore Ecosystem
              </Link>
              <Link
                href="/downloads"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-md transition-all duration-300 hover:bg-emerald-400/20 hover:shadow-[0_0_30px_rgba(0,255,136,0.25)]"
              >
                <span>Download Apps</span>
                <span className="transition-transform group-hover:translate-y-0.5">↓</span>
              </Link>
              <Link
                href="/about"
                className="font-mono text-xs uppercase tracking-[0.2em] text-mist hover:text-cyan-electric transition-colors px-6 py-3"
              >
                Meet the Builders →
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
