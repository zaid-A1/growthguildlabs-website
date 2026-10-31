import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProductsJSONLD } from "@/components/seo/ProductsJSONLD";
import { PRODUCTS, ACCENTS, productHref } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMetadata({
  title: "Ecosystem — Five Working AI Applications",
  description:
    "The Growth Guild Labs directory: ULTRON 2.0, ULTRON 2.0 Connector, JARVIS 2.0, JARVIS 2.0 Phone and F.R.I.D.A.Y. AI — five verified architectures built for high-performance computing.",
  path: "/ecosystem",
});

const PLATFORM_COLORS: Record<string, string> = {
  gold: "#FFD700",
  cyan: "#00E5FF",
  red: "#FF1744",
  violet: "#7C5CFF",
};

export default function EcosystemPage() {
  return (
    <>
      <ProductsJSONLD products={PRODUCTS} />

      {/* ── Premium Directory Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24">
        {/* Backgrounds */}
        <div aria-hidden="true" className="absolute inset-0 page-hero-bg" />
        <div aria-hidden="true" className="cyber-grid opacity-[0.028]" />

        {/* Dynamic Nebulas */}
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "55vw",
            height: "45vh",
            top: "-15%",
            right: "-10%",
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
            left: "-10%",
            background: "radial-gradient(ellipse, rgba(124,92,255,0.09) 0%, transparent 70%)",
            animationDelay: "-18s",
          }}
        />

        <div className="container-guild relative z-10">
          <Reveal className="flex flex-col items-start gap-6 max-w-4xl">
            <div className="hero-badge">
              <span>●</span>
              <span>GROWTH GUILD LABS // ARCHITECTURE DIRECTORY</span>
            </div>

            <h1 className="font-display text-[clamp(2.6rem,5.8vw,5.2rem)] font-extrabold tracking-tight text-ice-white leading-[1.02] text-balance">
              The Ecosystem.{" "}
              <span className="gradient-text-cyan drop-shadow-[0_0_35px_rgba(0,229,255,0.4)]">
                Five Applications.
              </span>{" "}
              Zero Filler.
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-mist font-light">
              Every system in this directory runs today. Nothing is a renamed copy: ULTRON 2.0 has its own companion gateway, JARVIS 2.0 has its own mobile client, and F.R.I.D.A.Y. runs on Gemini Live native speech.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <StatusBadge label="All 5 Released" tone="lit" />
              <StatusBadge label="Windows 64-bit & Android" tone="calm" />
              <StatusBadge label="Verified Checksums" tone="calm" />
            </div>
          </Reveal>

          {/* Quick Product Navigation Pills */}
          <Reveal delay={100} className="mt-10 flex flex-wrap gap-2.5">
            {PRODUCTS.map((p) => {
              const color = PLATFORM_COLORS[p.accent] || "#00E5FF";
              return (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-mist hover:text-ice-white backdrop-blur-md transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: `${color}33`,
                  }}
                >
                  <span
                    className="size-1.5 rounded-full shrink-0 group-hover:scale-125 transition-transform"
                    style={{
                      background: color,
                      boxShadow: `0 0 8px ${color}`,
                    }}
                    aria-hidden="true"
                  />
                  <span>{p.name}</span>
                </a>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ── Product Section: Full-Width App Cards with Rich Details ── */}
      <section className="relative z-10 pb-28">
        <div className="container-guild flex flex-col gap-10">
          {PRODUCTS.map((p, i) => {
            const accent = ACCENTS[p.accent];
            const color = accent.color;

            return (
              <div
                id={p.id}
                key={p.id}
                className="app-card scroll-mt-28 flex flex-col gap-8 p-7 sm:p-10 transition-all duration-500 hover:border-cyan-electric/50"
                style={{
                  borderColor: `${color}33`,
                  boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 30px ${color}10`,
                }}
              >
                {/* Top Ambient Glow Line */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                    opacity: 0.6,
                  }}
                />

                <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
                  {/* Left Column: Product Information */}
                  <div className="flex flex-col justify-between gap-6">
                    <div>
                      {/* Meta badges */}
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-muted-grey">
                          0{i + 1} //
                        </span>
                        <span
                          className="platform-pill border font-bold"
                          style={{
                            color: color,
                            borderColor: `${color}55`,
                            backgroundColor: `${color}15`,
                          }}
                        >
                          {p.platform}
                        </span>
                        {p.chips.map((chip) => (
                          <span key={chip} className="spec-chip text-mist/80 bg-white/5 border-white/10">
                            {chip}
                          </span>
                        ))}
                      </div>

                      {/* Header with image */}
                      <div className="mt-5 flex items-center gap-5">
                        <div
                          className="relative size-16 sm:size-20 shrink-0 overflow-hidden rounded-2xl border bg-void/80 p-2 shadow-xl"
                          style={{ borderColor: `${color}44` }}
                        >
                          <Image
                            src={p.image}
                            alt={p.imageAlt}
                            fill
                            sizes="80px"
                            className="object-contain p-1"
                          />
                        </div>
                        <div>
                          <h2
                            className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-ice-white"
                          >
                            {p.name}
                          </h2>
                          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-grey">
                            {p.packaging}
                          </p>
                        </div>
                      </div>

                      <p className="mt-5 text-base sm:text-lg leading-relaxed text-mist font-light">
                        {p.summary}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-2 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/products/${p.id}`}
                        className="btn-neon font-bold text-xs tracking-widest px-6 py-3"
                      >
                        Architecture Profile →
                      </Link>
                      <Link
                        href="/downloads"
                        className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-300 hover:bg-emerald-400/20 transition-all shadow-[0_0_20px_rgba(0,255,136,0.2)]"
                      >
                        <span>Download Binary</span>
                        <span>↓</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Architectural Stack & Capabilities */}
                  <div className="flex flex-col justify-between gap-5 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
                    <div>
                      <span className="font-mono text-micro uppercase tracking-[0.25em] text-muted-grey block mb-3">
                        Verified Technical Stack
                      </span>
                      <div className="grid grid-cols-2 gap-2.5">
                        {p.stack.slice(0, 4).map((item) => (
                          <div
                            key={item.label}
                            className="rounded-xl border border-white/5 bg-white/[0.02] p-3"
                          >
                            <span className="font-mono text-[0.62rem] uppercase tracking-wider text-muted-grey block">
                              {item.label}
                            </span>
                            <span className="font-mono text-xs font-semibold text-ice-white mt-0.5 block truncate">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Shipped Capabilities */}
                    <div className="border-t border-white/10 pt-4">
                      <span className="font-mono text-micro uppercase tracking-[0.25em] text-muted-grey block mb-2.5">
                        Core Capabilities
                      </span>
                      <ul className="space-y-1.5 text-xs text-mist/90">
                        {p.featureGroups[0]?.capabilities.slice(0, 3).map((cap) => (
                          <li key={cap.title} className="flex items-start gap-2">
                            <span style={{ color: color }} className="mt-0.5">▸</span>
                            <span>
                              <strong className="text-ice-white font-medium">{cap.title}</strong> — {cap.detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Upgraded Connection Map: Highly Visual with Lines & Arrows ── */}
      <section className="relative z-10 border-t border-hairline py-28 overflow-hidden bg-void/50">
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "60vw",
            height: "45vh",
            top: "20%",
            left: "20%",
            background: "radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="container-guild relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
            <span className="eyebrow">SYSTEM TOPOLOGY & GATEWAYS</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-ice-white">
              Ecosystem Connectivity Matrix
            </h2>
            <p className="text-base sm:text-lg text-mist font-light leading-relaxed">
              How our applications communicate. All companion bindings use local zero-trust channels without external cloud relays.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">

            {/* Matrix Card 1: ULTRON Pair */}
            <Reveal className="app-card p-8 flex flex-col justify-between gap-6 border-cyan-electric/30">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FFD700]">
                    <span>●</span>
                    <span>Pair 01: Desktop ↔ Mobile Gateway</span>
                  </div>
                  <span className="platform-pill border border-[#FFD700]/40 bg-[#FFD700]/10 text-[#FFD700]">
                    Local WebSocket
                  </span>
                </div>

                <div className="my-8 flex items-center justify-between gap-3">
                  {/* Left Node */}
                  <div className="flex flex-col items-center text-center">
                    <div className="size-16 rounded-2xl border border-[#FFD700]/50 bg-[#FFD700]/10 grid place-items-center shadow-[0_0_20px_rgba(255,215,0,0.25)]">
                      <span className="text-2xl">💻</span>
                    </div>
                    <span className="mt-2 font-display text-sm font-bold text-ice-white">ULTRON 2.0</span>
                    <span className="font-mono text-[0.62rem] text-muted-grey">Windows x64 Host</span>
                  </div>

                  {/* Animated Connecting Line with Arrows */}
                  <div className="flex-1 flex flex-col items-center gap-1.5 px-3">
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-cyan-electric font-semibold">
                      FastAPI + WSS
                    </span>
                    <div className="relative w-full flex items-center">
                      <div className="h-0.5 w-full bg-gradient-to-r from-[#FFD700] via-cyan-electric to-[#00FF88]" />
                      <span className="absolute left-1/2 -translate-x-1/2 -top-2 size-4 rounded-full bg-cyan-electric/20 border border-cyan-electric animate-ping" />
                    </div>
                    <span className="font-mono text-[0.58rem] text-muted-grey">
                      QR Barcode Handshake
                    </span>
                  </div>

                  {/* Right Node */}
                  <div className="flex flex-col items-center text-center">
                    <div className="size-16 rounded-2xl border border-cyan-electric/50 bg-cyan-electric/10 grid place-items-center shadow-[0_0_20px_rgba(0,229,255,0.25)]">
                      <span className="text-2xl">📱</span>
                    </div>
                    <span className="mt-2 font-display text-sm font-bold text-ice-white">Connector</span>
                    <span className="font-mono text-[0.62rem] text-muted-grey">Android Client</span>
                  </div>
                </div>

                <p className="text-sm text-mist/90 leading-relaxed font-light">
                  ULTRON 2.0 hosts an encrypted local FastAPI WebSocket server. The Android Connector scans a dynamic token on screen to securely bridge hardware sensors, remote camera controls, and push actions.
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <Link href="/products/ultron-2" className="text-xs font-mono text-cyan-electric hover:underline">
                  ULTRON Profile →
                </Link>
                <Link href="/products/ultron-2-connector" className="text-xs font-mono text-cyan-electric hover:underline">
                  Connector Profile →
                </Link>
              </div>
            </Reveal>

            {/* Matrix Card 2: JARVIS Pair */}
            <Reveal delay={120} className="app-card p-8 flex flex-col justify-between gap-6 border-red-500/30">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF1744]">
                    <span>●</span>
                    <span>Pair 02: Dual-Screen Voice Intelligence</span>
                  </div>
                  <span className="platform-pill border border-[#FF1744]/40 bg-[#FF1744]/10 text-[#FF1744]">
                    Cross-Platform Family
                  </span>
                </div>

                <div className="my-8 flex items-center justify-between gap-3">
                  {/* Left Node */}
                  <div className="flex flex-col items-center text-center">
                    <div className="size-16 rounded-2xl border border-[#FF1744]/50 bg-[#FF1744]/10 grid place-items-center shadow-[0_0_20px_rgba(255,23,68,0.25)]">
                      <span className="text-2xl">🖥️</span>
                    </div>
                    <span className="mt-2 font-display text-sm font-bold text-ice-white">JARVIS 2.0</span>
                    <span className="font-mono text-[0.62rem] text-muted-grey">3D Viseme Avatar</span>
                  </div>

                  {/* Animated Connecting Line with Arrows */}
                  <div className="flex-1 flex flex-col items-center gap-1.5 px-3">
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-violet-400 font-semibold">
                      Shared Persona & Memory
                    </span>
                    <div className="relative w-full flex items-center">
                      <div className="h-0.5 w-full bg-gradient-to-r from-[#FF1744] via-violet-500 to-[#7C5CFF]" />
                      <span className="absolute left-1/2 -translate-x-1/2 -top-2 size-4 rounded-full bg-violet-500/20 border border-violet-400 animate-ping" />
                    </div>
                    <span className="font-mono text-[0.58rem] text-muted-grey">
                      Long-Term Persistence
                    </span>
                  </div>

                  {/* Right Node */}
                  <div className="flex flex-col items-center text-center">
                    <div className="size-16 rounded-2xl border border-[#7C5CFF]/50 bg-[#7C5CFF]/10 grid place-items-center shadow-[0_0_20px_rgba(124,92,255,0.25)]">
                      <span className="text-2xl">📱</span>
                    </div>
                    <span className="mt-2 font-display text-sm font-bold text-ice-white">JARVIS Phone</span>
                    <span className="font-mono text-[0.62rem] text-muted-grey">Offline Vosk ASR</span>
                  </div>
                </div>

                <p className="text-sm text-mist/90 leading-relaxed font-light">
                  A unified conversational AI identity delivered across form factors. The desktop build features a real-time lip-synced 3D face mesh, while the mobile client runs offline speech detection with 16 interactive HUD toys.
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <Link href="/products/jarvis-2" className="text-xs font-mono text-cyan-electric hover:underline">
                  JARVIS Profile →
                </Link>
                <Link href="/products/jarvis-2-phone" className="text-xs font-mono text-cyan-electric hover:underline">
                  Phone Profile →
                </Link>
              </div>
            </Reveal>

          </div>

          {/* Bottom Action Strip */}
          <Reveal delay={150} className="mt-14 flex flex-wrap items-center justify-center gap-5">
            <Link href="/downloads" className="btn-neon font-bold text-xs tracking-widest px-8 py-3.5">
              Download All Five Releases →
            </Link>
            <Link
              href="/about"
              className="font-mono text-xs uppercase tracking-widest text-mist hover:text-cyan-electric transition-colors px-6 py-3"
            >
              Read Guild Principles
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
