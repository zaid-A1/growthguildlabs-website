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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,#071d24ee_0%,#03090d00_70%)]"
        />
        <div className="container-guild relative">
          <Reveal className="flex flex-col gap-6">
            <span className="eyebrow">DOWNLOAD CENTRE</span>
            <h1 className="max-w-4xl font-display text-[clamp(2.4rem,4.6vw,4.6rem)] font-bold leading-[1.03] text-ice-white text-balance">
              Genuine releases.
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-electric via-[#7fe9ff] to-neon-green">
                Direct from the guild.
              </span>
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-mist">
              Download the working release builds of all five Growth Guild Labs applications.
              Every file is mathematically verified with its official SHA-256 checksum,
              exact binary size, and step-by-step installation instructions.
            </p>
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
      <section className="border-t border-hairline py-20 bg-void/60">
        <div className="container-guild">
          <Reveal>
            <SectionHeading
              eyebrow="INTEGRITY & TRUST"
              title="How to verify your download"
              lead="Verify the SHA-256 checksum of your downloaded package before running it to guarantee you have received the exact, untampered build produced by Growth Guild Labs."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal className="panel p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="font-mono text-micro uppercase tracking-[0.28em] text-cyan-electric">
                  Windows PowerShell
                </p>
                <p className="mt-2 text-sm text-mist">
                  Open PowerShell in the folder where your file was downloaded and run:
                </p>
                <pre className="mt-4 overflow-x-auto rounded-xl border border-hairline bg-void/90 p-4 font-mono text-[0.8rem] text-ice-white">
                  <code>Get-FileHash -Algorithm SHA256 .\FRIDAY_AI_v1.0_Windows.zip</code>
                </pre>
              </div>
              <p className="mt-4 text-xs text-muted-grey">
                Compare the output string with the hash listed on this page.
              </p>
            </Reveal>

            <Reveal delay={100} className="panel p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="font-mono text-micro uppercase tracking-[0.28em] text-neon-green">
                  macOS / Linux / WSL Terminal
                </p>
                <p className="mt-2 text-sm text-mist">
                  Open your terminal and run sha256sum on the downloaded package:
                </p>
                <pre className="mt-4 overflow-x-auto rounded-xl border border-hairline bg-void/90 p-4 font-mono text-[0.8rem] text-ice-white">
                  <code>sha256sum ULTRON_2.0_Connect.apk</code>
                </pre>
              </div>
              <p className="mt-4 text-xs text-muted-grey">
                The computed hash must match the verified manifest hash character for character.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
