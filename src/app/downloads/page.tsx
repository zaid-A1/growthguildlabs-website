import type { Metadata } from "next";
import { DownloadAppCard } from "@/components/downloads/DownloadAppCard";
import { Reveal } from "@/components/ui/Reveal";
import { RELEASES } from "@/lib/releases";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMetadata({
  title: "Download Center — Official Verified Releases",
  description:
    "Official application downloads for Growth Guild Labs assistants: ULTRON 2.0, ULTRON 2.0 Connector, JARVIS 2.0, JARVIS 2.0 Phone and F.R.I.D.A.Y. AI with verified SHA-256 checksums.",
  path: "/downloads",
});

const INTEGRITY_BADGES = [
  { icon: "✅", label: "SHA-256 Verified", color: "#00FF88" },
  { icon: "🔒", label: "Signed Release", color: "#00E5FF" },
  { icon: "📦", label: "Official Source", color: "#FFD700" },
  { icon: "⚡", label: "Direct Download", color: "#39FF65" },
  { icon: "🛡️", label: "No Adware", color: "#7C5CFF" },
];

export default function DownloadsPage() {
  const windowsReleases = RELEASES.filter((r) => r.platform === "Windows");
  const androidReleases = RELEASES.filter((r) => r.platform === "Android");

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
        {/* Backgrounds */}
        <div aria-hidden="true" className="absolute inset-0 page-hero-bg" />
        <div aria-hidden="true" className="cyber-grid opacity-[0.025]" />

        {/* Dynamic Nebulas */}
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "60vw",
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
            width: "50vw",
            height: "40vh",
            bottom: "-10%",
            right: "-10%",
            background: "radial-gradient(ellipse, rgba(0,255,136,0.08) 0%, transparent 70%)",
            animationDelay: "-15s",
          }}
        />

        <div className="container-guild relative z-10 text-center flex flex-col items-center">
          <Reveal className="flex flex-col items-center gap-6 max-w-4xl">
            <div className="hero-badge">
              <span>●</span>
              <span>GROWTH GUILD LABS // RELEASE ARTIFACTS</span>
            </div>

            <h1 className="font-display text-[clamp(2.6rem,5.8vw,5rem)] font-extrabold tracking-tight text-ice-white leading-[1.04] text-balance">
              Download{" "}
              <span className="gradient-text-cyan drop-shadow-[0_0_30px_rgba(0,229,255,0.4)]">
                Center
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-mist font-light tracking-wide max-w-2xl">
              All applications. Verified. Direct.
            </p>

            {/* 5 Integrity Badges */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {INTEGRITY_BADGES.map((b) => (
                <div
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.16em] backdrop-blur-md transition-transform hover:scale-105"
                  style={{
                    borderColor: `${b.color}40`,
                    color: b.color,
                    background: `${b.color}0d`,
                    boxShadow: `0 0 16px ${b.color}15`,
                  }}
                >
                  <span>{b.icon}</span>
                  <span>{b.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Split Layout: Windows Apps | Android Apps ── */}
      <section className="relative z-10 pb-28">
        <div className="container-guild">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Left Column: Windows Apps (3 cards) */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3.5">
                  <span className="grid size-10 place-items-center rounded-xl bg-cyan-electric/10 border border-cyan-electric/30 text-xl">
                    💻
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-ice-white">
                      Windows 64-Bit Desktop
                    </h2>
                    <p className="font-mono text-[0.68rem] uppercase tracking-wider text-muted-grey">
                      Native compiled PyQt6 shells
                    </p>
                  </div>
                </div>
                <span className="platform-pill border border-cyan-electric/40 bg-cyan-electric/10 text-cyan-electric">
                  3 Apps
                </span>
              </div>

              <div className="grid gap-6">
                {windowsReleases.map((release) => (
                  <DownloadAppCard
                    key={release.productId}
                    release={release}
                    accentColor="#00e5ff"
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Android Apps (2 cards) */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3.5">
                  <span className="grid size-10 place-items-center rounded-xl bg-emerald-400/10 border border-emerald-400/30 text-xl">
                    📱
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-ice-white">
                      Android Companion APKs
                    </h2>
                    <p className="font-mono text-[0.68rem] uppercase tracking-wider text-muted-grey">
                      Jetpack Compose & Offline Vosk
                    </p>
                  </div>
                </div>
                <span className="platform-pill border border-emerald-400/40 bg-emerald-400/10 text-emerald-400">
                  2 Apps
                </span>
              </div>

              <div className="grid gap-6">
                {androidReleases.map((release) => (
                  <DownloadAppCard
                    key={release.productId}
                    release={release}
                    accentColor="#00FF88"
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Verification Guide Section with Terminal Window Styling ── */}
      <section className="relative z-10 border-t border-hairline py-24 bg-void/60">
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "50vw",
            height: "35vh",
            bottom: "-10%",
            left: "25%",
            background: "radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="container-guild relative z-10">
          <Reveal className="text-center max-w-2xl mx-auto flex flex-col items-center gap-4 mb-14">
            <span className="eyebrow">INTEGRITY & TRUST</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ice-white">
              Verify Before Execution
            </h2>
            <p className="text-sm sm:text-base text-mist font-light leading-relaxed">
              Every release is cryptographically signed and hashed. Verify the checksum to guarantee untampered binary integrity.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Windows PowerShell Terminal */}
            <Reveal className="terminal-window">
              <div className="terminal-titlebar">
                <div className="terminal-dot bg-[#ff5f57]" />
                <div className="terminal-dot bg-[#febc2e]" />
                <div className="terminal-dot bg-[#28c840]" />
                <span className="ml-3 font-mono text-[0.68rem] text-muted-grey">
                  Windows PowerShell 7 / 5.1
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-micro uppercase tracking-[0.25em] text-cyan-electric">
                    Command Syntax
                  </span>
                  <span className="font-mono text-[0.62rem] text-muted-grey">SHA256 Algorithm</span>
                </div>
                <p className="text-xs text-mist/90 mb-4 font-light">
                  Open PowerShell in the folder where your download was saved and execute:
                </p>
                <div className="relative overflow-x-auto rounded-xl border border-hairline bg-void/90 p-4 font-mono text-[0.78rem] text-neon-green">
                  <code>Get-FileHash -Algorithm SHA256 .\ULTRON_2.0_Windows_x64.zip</code>
                </div>
                <div className="mt-4 flex items-start gap-2 text-[0.72rem] text-muted-grey">
                  <span className="text-cyan-electric">ℹ</span>
                  <span>
                    Ensure the resulting <span className="font-mono text-mist">Hash</span> string exactly matches the checksum published above.
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Linux / macOS Terminal */}
            <Reveal delay={100} className="terminal-window">
              <div className="terminal-titlebar">
                <div className="terminal-dot bg-[#ff5f57]" />
                <div className="terminal-dot bg-[#febc2e]" />
                <div className="terminal-dot bg-[#28c840]" />
                <span className="ml-3 font-mono text-[0.68rem] text-muted-grey">
                  macOS / Linux / WSL Terminal
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-micro uppercase tracking-[0.25em] text-[#00FF88]">
                    Command Syntax
                  </span>
                  <span className="font-mono text-[0.62rem] text-muted-grey">sha256sum Coreutils</span>
                </div>
                <p className="text-xs text-mist/90 mb-4 font-light">
                  Open your terminal and run the standard checksum verification utility:
                </p>
                <div className="relative overflow-x-auto rounded-xl border border-hairline bg-void/90 p-4 font-mono text-[0.78rem] text-neon-green">
                  <code>sha256sum ULTRON_2.0_Connect.apk</code>
                </div>
                <div className="mt-4 flex items-start gap-2 text-[0.72rem] text-muted-grey">
                  <span className="text-emerald-400">ℹ</span>
                  <span>
                    Output will display the hash followed by filename; characters must match exactly.
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
