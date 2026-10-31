import type { Metadata } from "next";
import { DownloadCenter } from "@/components/downloads/DownloadCenter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RELEASES } from "@/lib/releases";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMetadata({
  title: "Application Downloads — Genuine Releases for Windows & Android",
  description:
    "Official application downloads for Growth Guild Labs assistants: ULTRON 2.0, ULTRON 2.0 Connector, JARVIS 2.0, JARVIS 2.0 Phone and F.R.I.D.A.Y. AI with verified SHA-256 checksums.",
  path: "/downloads",
});

export default function DownloadsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-40 pb-16">
        {/* Background */}
        <div aria-hidden="true" className="absolute inset-0 page-hero-bg" />
        <div aria-hidden="true" className="cyber-grid opacity-[0.02]" />

        {/* Nebula accent */}
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "55vw",
            height: "45vh",
            top: "-20%",
            left: "-15%",
            background: "radial-gradient(ellipse, rgba(57,255,101,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="container-guild relative z-10">
          <Reveal className="flex flex-col gap-6">
            <span className="eyebrow">DOWNLOAD CENTRE</span>
            <h1 className="max-w-4xl font-display text-[clamp(2.4rem,4.6vw,4.6rem)] font-bold leading-[1.03] text-ice-white text-balance">
              Genuine releases.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #00e5ff 0%, #39ff65 100%)",
                }}
              >
                Direct from the guild.
              </span>
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-mist">
              Download the working release builds of all five Growth Guild Labs applications.
              Every file is mathematically verified with its official SHA-256 checksum,
              exact binary size, and step-by-step installation instructions.
            </p>

            {/* Integrity badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "5 / 5 Packages Verified", color: "#39ff65" },
                { label: "SHA-256 Checksums", color: "#00e5ff" },
                { label: "Windows & Android", color: "#ffb300" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.2em]"
                  style={{
                    borderColor: `${b.color}44`,
                    color: b.color,
                    background: `${b.color}10`,
                  }}
                >
                  <span className="size-1.5 rounded-full animate-pulse" style={{ background: b.color }} aria-hidden="true" />
                  {b.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Main Download Centre ── */}
      <section className="pb-24">
        <div className="container-guild">
          <DownloadCenter releases={RELEASES} />
        </div>
      </section>

      {/* ── Verification Guide ── */}
      <section className="border-t border-hairline py-20 relative">
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "40vw",
            height: "35vh",
            bottom: "-10%",
            right: "-10%",
            background: "radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="container-guild relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="INTEGRITY & TRUST"
              title="How to verify your download"
              lead="Verify the SHA-256 checksum of your downloaded package before running it to guarantee you have received the exact, untampered build produced by Growth Guild Labs."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal className="terminal-window">
              <div className="terminal-titlebar">
                <div className="terminal-dot bg-[#ff5f57]" />
                <div className="terminal-dot bg-[#febc2e]" />
                <div className="terminal-dot bg-[#28c840]" />
                <span className="ml-3 font-mono text-[0.65rem] text-muted-grey">Windows PowerShell</span>
              </div>
              <div className="p-5">
                <p className="font-mono text-micro uppercase tracking-[0.28em] text-cyan-electric mb-2">
                  Windows PowerShell
                </p>
                <p className="text-sm text-mist mb-4">
                  Open PowerShell in the folder where your file was downloaded and run:
                </p>
                <pre className="overflow-x-auto rounded-xl border border-hairline bg-void/90 p-4 font-mono text-[0.8rem] text-neon-green">
                  <code>Get-FileHash -Algorithm SHA256 .\FRIDAY_AI_v1.0_Windows.zip</code>
                </pre>
                <p className="mt-4 text-xs text-muted-grey">
                  Compare the output string with the hash listed on this page.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100} className="terminal-window">
              <div className="terminal-titlebar">
                <div className="terminal-dot bg-[#ff5f57]" />
                <div className="terminal-dot bg-[#febc2e]" />
                <div className="terminal-dot bg-[#28c840]" />
                <span className="ml-3 font-mono text-[0.65rem] text-muted-grey">Terminal / Shell</span>
              </div>
              <div className="p-5">
                <p className="font-mono text-micro uppercase tracking-[0.28em] text-neon-green mb-2">
                  macOS / Linux / WSL Terminal
                </p>
                <p className="text-sm text-mist mb-4">
                  Open your terminal and run sha256sum on the downloaded package:
                </p>
                <pre className="overflow-x-auto rounded-xl border border-hairline bg-void/90 p-4 font-mono text-[0.8rem] text-neon-green">
                  <code>sha256sum ULTRON_2.0_Connect.apk</code>
                </pre>
                <p className="mt-4 text-xs text-muted-grey">
                  The computed hash must match the verified manifest hash character for character.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
