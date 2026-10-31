import type { Metadata } from "next";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Lab Notes — engineering notes from inside the guild",
  description:
    "Growth Guild Labs lab notes: an index that stays empty until real engineering notes are written. No filler articles, no fabricated updates.",
  path: "/lab-notes",
});

/* Subject areas that describe the shipped work. Clearly marked as
   *planned* writing, never as published entries. */
const PLANNED_SUBJECTS = [
  {
    label: "Interaction systems & Voice AI",
    detail:
      "Wake words (openWakeWord, Vosk), push-to-talk, Three.js HUDs, and 3D lip-synced viseme avatars — how the assistants are actually operated.",
  },
  {
    label: "Packaging & Companion Gateways",
    detail:
      "Standalone Windows executables (PyInstaller/PyQt6) and the local WebSocket pairing gateway powering the ULTRON 2.0 Connector.",
  },
  {
    label: "Autonomous Skills & Self-Extension",
    detail:
      "ULTRON 2.0's dynamic skill code generation, long-session memory compression, confirm-gates, and one-file FastMCP plugin growth.",
  },
];

export default function LabNotesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-40 pb-16">
        <div aria-hidden="true" className="absolute inset-0 page-hero-bg" />
        <div aria-hidden="true" className="cyber-grid opacity-[0.02]" />
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "50vw",
            height: "40vh",
            top: "-15%",
            right: "-10%",
            background: "radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="container-guild relative z-10 flex flex-col gap-6">
          <span className="eyebrow">LAB NOTES · ARCHIVE & TELEMETRY</span>
          <h1 className="max-w-4xl font-display text-[clamp(2.4rem,4.6vw,4.4rem)] font-bold leading-[1.03] text-ice-white text-balance">
            Notes land here as the work lands.
            <span
              className="block bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #00e5ff 0%, #39ff65 100%)" }}
            >
              Until then, the shelf stays empty.
            </span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-mist">
            This page is the archive for engineering notes, teardown-style
            write-ups and development journals from inside the project. It
            refuses to publish filler: entries appear only when they are
            actually written.
          </p>
        </div>
      </section>

      {/* ── Honest empty state ── */}
      <section className="pb-20 relative">
        <div className="container-guild">
          <Reveal className="terminal-window p-8 text-center sm:p-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="size-2 rounded-full bg-cyan-electric animate-pulse" aria-hidden="true" />
              <p className="font-mono text-micro uppercase tracking-[0.34em] text-cyan-electric">
                INDEX STATUS TELEMETRY
              </p>
            </div>
            <p className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-ice-white">
              0 notes published
            </p>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-mist">
              Nothing has been written for the archive yet. When the guild
              publishes its first engineering note, it will be indexed here —
              complete, dated and honest.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <span className="spec-chip spec-chip--lit" aria-hidden="true">
                EMPTY BY DESIGN
              </span>
              <span className="spec-chip" aria-hidden="true">
                NO FILLER ARTICLES
              </span>
              <span className="spec-chip" aria-hidden="true">
                VERIFIED LOGS ONLY
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Planned subjects ── */}
      <section className="border-t border-hairline py-24 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "45vw",
            height: "40vh",
            bottom: "-15%",
            left: "-10%",
            background: "radial-gradient(ellipse, rgba(124,92,255,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="container-guild relative z-10">
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow">PLANNED SUBJECTS — INTENT, NOT CONTENT</span>
            <h2 className="max-w-3xl font-display text-title text-ice-white">
              Where the first notes will come from
            </h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-mist">
              These are the work areas the shipped applications already
              occupy. Describing them is not the same as publishing notes —
              this list simply marks where writing will start.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PLANNED_SUBJECTS.map((s, idx) => (
              <Reveal key={s.label} delay={idx * 80} className="h-full">
                <div className="holo-card h-full p-7 flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-micro text-cyan-electric">0{idx + 1}</span>
                      <span className="font-mono text-[0.6rem] uppercase tracking-wider text-muted-grey">PLANNED</span>
                    </div>
                    <h3 className="font-display text-lg text-ice-white">
                      {s.label}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-mist">
                      {s.detail}
                    </p>
                  </div>
                  <div className="border-t border-hairline pt-3 font-mono text-[0.62rem] text-muted-grey">
                    GROWTH GUILD LABS // DEV TRACK
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="section-divider my-16" />

          {/* Connect band */}
          <div className="flex flex-col items-start gap-8">
            <Reveal className="flex flex-col gap-3">
              <span className="eyebrow">FOLLOW THE WORK IN REAL TIME</span>
              <p className="max-w-xl text-lg text-mist">
                Engineering progress is shared live across official broadcast channels.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <SocialLinks />
            </Reveal>
            <Reveal delay={150} className="flex flex-wrap gap-4">
              <CtaLink href="/downloads" ariaLabel="Download applications">
                Download apps
              </CtaLink>
              <CtaLink href="/ecosystem" variant="secondary" ariaLabel="View the ecosystem">
                Explore the ecosystem
              </CtaLink>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
