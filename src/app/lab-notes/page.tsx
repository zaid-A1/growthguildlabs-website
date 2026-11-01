import type { Metadata } from "next";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Lab Notes — engineering notes from inside the guild",
  description:
    "Growth Guild Labs lab notes: an index that stays empty until real engineering notes are written. No filler articles, no fabricated updates.",
  path: "/lab-notes",
});

const PLANNED_SUBJECTS = [
  {
    icon: "🎙️",
    label: "Interaction systems & Voice AI",
    detail:
      "Wake words (openWakeWord, Vosk), push-to-talk, Three.js HUDs, and 3D lip-synced viseme avatars — how the assistants are actually operated.",
  },
  {
    icon: "📦",
    label: "Packaging & Companion Gateways",
    detail:
      "Standalone Windows executables (PyInstaller/PyQt6) and the local WebSocket pairing gateway powering the ULTRON 2.0 Connector.",
  },
  {
    icon: "🧠",
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
        <div className="container-guild relative z-10 flex flex-col items-start gap-6 max-w-3xl">
          <span className="eyebrow">ENGINEERING DISPATCH</span>
          <h1 className="font-display text-[clamp(2.4rem,4.6vw,4.4rem)] font-bold leading-[1.03] text-ice-white text-balance">
            Lab Notes.{" "}
            <span className="gradient-text-cyan drop-shadow-[0_0_25px_rgba(0,229,255,0.35)]">
              Real entries only.
            </span>
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-mist font-light leading-relaxed">
            This page will hold engineering notes as they are actually written — no filler articles,
            no AI-generated summaries, no fabricated posts. An entry only appears when it is finished.
          </p>
        </div>
      </section>

      {/* ── Empty state ── */}
      <section className="py-20 border-t border-hairline">
        <div className="container-guild max-w-2xl mx-auto">
          <Reveal>
            <div
              className="relative rounded-3xl border bg-panel overflow-hidden flex flex-col items-center text-center gap-6 px-10 py-16"
              style={{ borderColor: "rgba(0,229,255,0.15)", boxShadow: "0 0 60px rgba(0,229,255,0.05)" }}
            >
              {/* Top accent line */}
              <div
                className="absolute inset-x-0 top-0 h-0.5"
                style={{ background: "linear-gradient(90deg, transparent, #00e5ff, transparent)" }}
              />

              <div
                className="size-16 rounded-2xl border border-cyan-electric/20 flex items-center justify-center text-3xl"
                style={{ background: "rgba(0,229,255,0.05)" }}
              >
                📋
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-display text-2xl font-bold text-ice-white">
                  No entries yet.
                </h2>
                <p className="text-sm text-mist font-light leading-relaxed">
                  The lab index is empty because no engineering notes have been written yet.
                  This is intentional — Growth Guild Labs does not publish content it has not created.
                </p>
              </div>

              <div
                className="w-full rounded-xl border px-6 py-4 font-mono text-[0.72rem] text-left"
                style={{ borderColor: "rgba(0,229,255,0.15)", background: "rgba(0,229,255,0.03)" }}
              >
                <span className="text-cyan-electric">$</span>{" "}
                <span className="text-neon-green">ls ./lab-notes/</span>
                <br />
                <span className="text-muted-grey italic">// empty — writing in progress</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Planned subjects ── */}
      <section className="py-24 border-t border-hairline">
        <div className="container-guild max-w-3xl mx-auto">
          <Reveal className="flex flex-col items-start gap-3 mb-12">
            <span className="eyebrow">WHAT IS BEING WRITTEN</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ice-white">
              Planned subjects
            </h2>
            <p className="text-sm text-mist font-light">
              These are the subject areas currently being documented. They describe verified shipped work — not plans.
            </p>
          </Reveal>

          <div className="flex flex-col gap-5">
            {PLANNED_SUBJECTS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="group flex items-start gap-5 rounded-2xl border border-hairline bg-panel p-7 transition-all duration-300 hover:border-cyan-electric/25 hover:-translate-y-0.5">
                  <span className="text-2xl mt-0.5">{s.icon}</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-base font-semibold text-ice-white group-hover:text-cyan-electric transition-colors duration-300">
                      {s.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-mist/90 font-light">
                      {s.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-24 border-t border-hairline overflow-hidden text-center"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, #061922 0%, #02070b 60%)" }}
      >
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "50vw",
            height: "35vh",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="container-guild relative z-10 flex flex-col items-center gap-6 max-w-xl mx-auto">
          <p className="font-mono text-[0.72rem] uppercase tracking-widest text-muted-grey">
            While you wait — the actual products are available now
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ice-white">
            Five shipped applications
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaLink href="/ecosystem" ariaLabel="View the ecosystem">
              View the Ecosystem
            </CtaLink>
            <CtaLink href="/downloads" variant="secondary" ariaLabel="Download">
              Download Center
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
