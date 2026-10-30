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
    label: "Interaction systems",
    detail:
      "Wake words, push-to-talk, HUDs and avatars — how the assistants are actually operated.",
  },
  {
    label: "Packaging & pairing",
    detail:
      "Exe packaging and the desktop-to-phone gateway used by the ULTRON 2.0 Connector.",
  },
  {
    label: "Reliability & self-extension",
    detail:
      "Long-session memory, undo and confirm-gates, and one-file plugin growth.",
  },
];

export default function LabNotesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-40 pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_50%_at_80%_0%,#071d24ee_0%,transparent_70%)]"
        />
        <div className="container-guild relative flex flex-col gap-6">
          <span className="eyebrow">LAB NOTES · INDEX</span>
          <h1 className="max-w-4xl font-display text-[clamp(2.4rem,4.6vw,4.4rem)] font-bold leading-[1.03] text-ice-white text-balance">
            Notes land here as the work lands.
            <span className="block text-muted-grey">Until then, the shelf stays empty.</span>
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
      <section className="pb-20">
        <div className="container-guild">
          <Reveal className="panel hud-frame relative p-10 text-center sm:p-14">
            <p
              className="font-mono text-micro uppercase tracking-[0.34em] text-muted-grey"
              aria-hidden="true"
              style={{ "--frame-accent": "#00e5ff55" } as React.CSSProperties}
            >
              Index status
            </p>
            <p className="mt-6 font-display text-[clamp(1.7rem,3vw,2.6rem)] text-ice-white">
              0 notes published
            </p>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-mist">
              Nothing has been written for the archive yet. When the guild
              publishes its first engineering note, it will be indexed here —
              complete, dated and honest.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <span className="spec-chip" aria-hidden="true">
                EMPTY BY DESIGN
              </span>
              <span className="spec-chip" aria-hidden="true">
                NO FILLER
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Planned subjects (intent, not content) ── */}
      <section className="border-t border-hairline py-24">
        <div className="container-guild">
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
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PLANNED_SUBJECTS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="h-full">
                <div className="panel h-full flex flex-col gap-3 p-7">
                  <span
                    className="font-mono text-micro text-muted-grey"
                    aria-hidden="true"
                  >
                    PLANNED · 0{i + 1}
                  </span>
                  <h3 className="font-display text-lg text-ice-white">
                    {s.label}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-mist">
                    {s.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-12 flex flex-wrap gap-4">
            <CtaLink href="/ecosystem" ariaLabel="Explore the ecosystem while the archive grows">
              Explore the ecosystem meanwhile
            </CtaLink>
          </Reveal>
        </div>
      </section>

      {/* ── Follow the build ── */}
      <section className="border-t border-hairline bg-[linear-gradient(180deg,#03090d,#071d24_130%)] py-20">
        <div className="container-guild flex flex-col items-start gap-8">
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow">FOLLOW THE BUILD</span>
            <h2 className="max-w-2xl font-display text-title text-ice-white">
              The closest thing to lab notes today
            </h2>
            <p className="max-w-xl text-[15px] leading-relaxed text-mist">
              Progress shows up on the social channels before it becomes a
              written note. That is the honest cadence of the project for now.
            </p>
          </Reveal>
          <Reveal delay={110}>
            <SocialLinks />
          </Reveal>
        </div>
      </section>
    </>
  );
}
