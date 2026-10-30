import Image from "next/image";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { CinematicJourney } from "@/components/journey/CinematicJourney";
import { HeroSection } from "@/components/HeroSection";
import { SceneRail, type SceneStop } from "@/components/fx/SceneRail";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${SITE.name} — Build More. Grow Together.`,
  description:
    "Growth Guild Labs is an independent software project building five working AI assistants — ULTRON 2.0, the ULTRON Connector, JARVIS 2.0, JARVIS 2.0 Phone and F.R.I.D.A.Y. AI. Explore the ecosystem.",
  path: "/",
});

/* ── Journey chapters (content stays HTML, readable without WebGL) ─────── */

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
      className={`relative z-10 flex min-h-[86vh] items-center py-20 sm:min-h-[90vh] ${className ?? ""}`}
    >
      <div className="container-guild">{children}</div>
      <span className="eyebrow absolute bottom-6 right-6 hidden sm:inline-flex">
        {eyebrow}
      </span>
    </section>
  );
}

/* ── Home page ──────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <CinematicJourney>
        {/* 1 — Hero (Scene 01) */}
        <HeroSection />

        {/* 2 — Close orbit: what the guild is (Scene 02) */}
        <Chapter eyebrow="SCENE 02 · CLOSE ORBIT" sceneId="scene-02">
          <Reveal className="max-w-3xl flex flex-col gap-6">
            <h2 className="font-display text-display leading-[1.06] text-balance">
              One independent lab.
              <span className="block text-mist">
                Five working applications —
                <span className="text-cyan-electric"> built as a guild</span>,
                not a graveyard of demos.
              </span>
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-mist">
              Every assistant in the ecosystem runs: the ULTRON 2.0 desktop
              build, the Connector app that pairs with it, the two JARVIS
              voice experiences, and F.R.I.D.A.Y. — a hands-free assistant
              whose skills grow one file at a time.
            </p>
            <p className="max-w-2xl text-[15px] leading-relaxed text-muted-grey">
              All five builds are now packaged and available for direct
              download. The{" "}
              <a href="/downloads" className="text-cyan-electric underline underline-offset-2 hover:text-neon-green transition-colors">
                Download Centre
              </a>{" "}
              carries verified SHA-256 checksums and step-by-step installation
              instructions for every release.
            </p>
          </Reveal>
        </Chapter>

        {/* 3 — The gateway (Scene 03) */}
        <Chapter eyebrow="SCENE 03 · THE GATEWAY" sceneId="scene-03">
          <Reveal className="flex flex-col items-start gap-7">
            <span className="eyebrow">PASSING THROUGH</span>
            <h2 className="max-w-3xl font-display text-display text-ice-white text-balance">
              Product discovery,
              <span className="block text-cyan-electric text-glow-cyan">
                engineered as an ecosystem.
              </span>
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-mist">
              Four assistants live on Windows; two of them pair with Android
              companions through local gateways. Each product keeps its own
              identity — nothing is a renamed copy of anything else.
            </p>
            <CtaLink href="/ecosystem" ariaLabel="Open the full ecosystem directory">
              Open the ecosystem directory
            </CtaLink>
          </Reveal>
        </Chapter>

        {/* 4 — The lab (Scene 04) */}
        <Chapter eyebrow="SCENE 04 · THE LABORATORY" sceneId="scene-04">
          <Reveal className="flex flex-col items-start gap-7">
            <span className="eyebrow">INSIDE THE WORK</span>
            <h2 className="max-w-3xl font-display text-display text-ice-white text-balance">
              Built with real parts:
              <span className="block text-mist">
                PyQt6 shells, Gemini live voice, Vosk offline speech,
                three.js HUDs, MCP-structured tool calls.
              </span>
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-mist">
              How these systems are assembled is the story the lab notes will
              tell — engineering notes, experiments and development updates
              from inside the project.
            </p>
            <CtaLink href="/lab-notes" variant="secondary" ariaLabel="Read the Growth Guild Labs lab notes">
              Enter the lab notes
            </CtaLink>
          </Reveal>
        </Chapter>

        {/* 5 — Discovery (Scene 05) */}
        <Chapter eyebrow="SCENE 05 · PRODUCT DISCOVERY" sceneId="scene-05" className="z-10">
          <Reveal className="flex flex-col items-start gap-7">
            <span className="eyebrow">FIVE ORBITS, ONE CORE</span>
            <h2 className="max-w-3xl font-display text-display text-ice-white text-balance">
              Meet the five
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-electric via-[#9ad9ff] to-neon-green">
                that run the orbit
              </span>
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((p, i) => (
                <li key={p.id}>
                  <a
                    href={`/products/${p.id}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-hairline bg-void/55 px-5 py-4 backdrop-blur-sm transition-colors duration-500 hover:border-cyan-electric/45"
                  >
                    <span className="font-mono text-micro text-muted-grey">
                      0{i + 1}
                    </span>
                    <span className="font-display text-[1.05rem] text-ice-white transition-colors group-hover:text-cyan-electric">
                      {p.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-mono text-sm text-muted-grey transition-transform duration-500 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </Chapter>

        {/* Fixed scene navigation (wide viewports). */}
        <SceneRail scenes={SCENES} />
      </CinematicJourney>

      {/* ── Solid-background sections below the journey ─────────────────── */}
      <div className="relative z-10 bg-void">
        {/* Ecosystem preview */}
        <section id="ecosystem-preview" className="scroll-mt-24 py-24 sm:py-32">
          <div className="container-guild">
            <Reveal className="flex flex-col gap-6">
              <SectionHeading
                eyebrow="THE ECOSYSTEM"
                title="Five applications. One directory."
                lead="Each card opens a complete profile — what it does, what it is built from, and exactly how far it can be used today. Availability is stated only as far as it is verified."
              />
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((p, i) => (
                <Reveal
                  key={p.id}
                  delay={i * 70}
                  className="h-full"
                >
                  <ProductCard product={p} className="h-full" priority={i === 0} />
                </Reveal>
              ))}
              {/* Ecosystem map tile */}
              <Reveal delay={PRODUCTS.length * 70} className="h-full">
                <div className="panel flex h-full flex-col justify-between p-6">
                  <div>
                    <p className="font-mono text-micro uppercase tracking-[0.3em] text-muted-grey">
                      How they connect
                    </p>
                    <ul className="mt-4 flex flex-col gap-3 text-sm text-mist">
                      <li className="flex items-center gap-3">
                        <span className="size-1.5 rounded-full bg-neon-green" aria-hidden="true" />
                        ULTRON 2.0 ↔ ULTRON 2.0 Connector — local pairing gateway
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="size-1.5 rounded-full bg-cyan-electric" aria-hidden="true" />
                        JARVIS 2.0 ↔ JARVIS 2.0 Phone — one family, two screens
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="size-1.5 rounded-full bg-violet-400" aria-hidden="true" />
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

        {/* ── Stats band ── */}
        <section className="border-t border-hairline py-16">
          <div className="container-guild">
            <Reveal className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { value: "5", label: "AI Applications", color: "#00e5ff" },
                { value: "2", label: "Platforms", color: "#39ff65" },
                { value: "56+", label: "Tool Modules", color: "#ffb300" },
                { value: "1", label: "Independent Guild", color: "#7c5cff" },
              ].map((stat) => (
                <div key={stat.label} className="panel flex flex-col items-center gap-2 p-6 text-center">
                  <span
                    className="font-display text-[clamp(2rem,3.5vw,3rem)] font-bold leading-none"
                    style={{ color: stat.color, textShadow: `0 0 24px ${stat.color}55` }}
                  >
                    {stat.value}
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-grey">
                    {stat.label}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* People */}
        <section className="border-t border-hairline py-24 sm:py-28">
          <div className="container-guild grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="PEOPLE BEHIND GROWTH GUILD LABS"
                title="Two people, one guild."
                lead="Growth Guild Labs is an independent personal software project. No corporate backstory is invented here — this is simply who builds what you have just seen."
              />
              <div className="mt-8">
                <SocialLinks />
              </div>
            </Reveal>
            <Reveal delay={120} className="grid gap-5 sm:grid-cols-2">
              {[
                { name: "Zaid Uddin", note: "Founder" },
                { name: "Idrees Uddin", note: "Co-founder" },
              ].map((person, i) => (
                <div key={person.name} className="panel flex flex-col justify-between gap-10 p-7">
                  <span
                    aria-hidden="true"
                    className="grid size-12 place-items-center rounded-xl border border-cyan-electric/40 bg-cyan-electric/10 font-display text-lg font-bold text-cyan-electric"
                  >
                    {person.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="font-display text-xl text-ice-white">{person.name}</p>
                    <p className="mt-1.5 font-mono text-micro uppercase tracking-[0.26em] text-muted-grey">
                      {person.note}
                    </p>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted-grey">
                    {i === 0
                      ? "Named founder inside the shipped product identity files."
                      : "Named co-founder inside the shipped product identity files."}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Lab notes teaser */}
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
                className="rounded-lg border border-hairline bg-void/60 p-1"
              />
              <CtaLink href="/lab-notes" variant="secondary" ariaLabel="Open Lab Notes">
                Lab notes index
              </CtaLink>
            </Reveal>
          </div>
        </section>

        {/* Final CTA band */}
        <section className="border-t border-hairline bg-[linear-gradient(180deg,#03090d,#071d24_120%)] py-24">
          <div className="container-guild flex flex-col items-start gap-8">
            <Reveal className="flex flex-col gap-5">
              <span className="eyebrow">THE FUTURE IS BUILT. NOT WAITED FOR.</span>
              <h2 className="max-w-2xl font-display text-title text-ice-white">
                Start with the ecosystem —
                <span className="text-cyan-electric"> then find your assistant.</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="flex flex-wrap gap-4">
              <CtaLink href="/ecosystem" ariaLabel="Explore the ecosystem">
                Explore the ecosystem
              </CtaLink>
              <CtaLink href="/downloads" variant="secondary" ariaLabel="Download applications">
                Download apps
              </CtaLink>
              <CtaLink href="/about" variant="ghost" ariaLabel="About Growth Guild Labs">
                Meet the people
              </CtaLink>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
