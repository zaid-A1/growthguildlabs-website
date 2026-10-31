import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { buildMetadata } from "@/lib/seo";
import { PRODUCTS, productHref } from "@/lib/products";

export const metadata: Metadata = buildMetadata({
  title: "About — the people and principles behind the guild",
  description:
    "Growth Guild Labs is an independent software project by Zaid Uddin and Idrees Uddin: five working AI applications, built as a guild and shown exactly as they are.",
  path: "/about",
});

const PRINCIPLES = [
  {
    title: "Built, not promised",
    detail:
      "Every entry in the ecosystem runs as packaged software today. Product pages describe verified capability — what ships inside the package — not roadmaps or intentions.",
  },
  {
    title: "Separate products, separate identities",
    detail:
      "Five applications, five pages, five names. The Connector is not ULTRON rebadged, and the Phone is not JARVIS wrapped in a web view. Each has its own stack and its own responsibility.",
  },
  {
    title: "Availability, stated honestly",
    detail:
      "All five applications are working and now publicly released as download packages. The Download Centre carries every build with its verified SHA-256 checksum, exact file size, and installation instructions — nothing is claimed that cannot be opened and run.",
  },
  {
    title: "The tagline is a method",
    detail:
      "Build More. Grow Together. It describes how the project works: more shipping, more shared momentum between the five applications — not a slogan standing in for work.",
  },
];

export default function AboutPage() {
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
            width: "45vw",
            height: "40vh",
            top: "-15%",
            left: "-10%",
            background: "radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="container-guild relative z-10 flex flex-col gap-6">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-xl blur-lg opacity-70"
                style={{ background: "rgba(0,229,255,0.3)" }}
              />
              <Image
                src="/brand/growth-guild-labs-logo.png"
                alt="Growth Guild Labs logo"
                width={72}
                height={72}
                className="relative rounded-xl border border-cyan-electric/40 bg-void/80 p-1 nav-logo-glow"
                priority
              />
            </div>
            <span className="eyebrow">ABOUT THE PROJECT</span>
          </div>
          <h1 className="max-w-4xl font-display text-[clamp(2.4rem,4.6vw,4.4rem)] font-bold leading-[1.03] text-ice-white text-balance">
            Two builders. One guild.
            <span
              className="block bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #00e5ff 0%, #39ff65 100%)" }}
            >
              Five working applications.
            </span>
          </h1>
          <blockquote className="max-w-2xl border-l-2 border-cyan-electric/50 pl-5 text-lg leading-relaxed text-mist">
            &ldquo;Exploring AI, software, and digital experiences that push ideas
            beyond the ordinary.&rdquo;
          </blockquote>
          <p className="max-w-2xl text-[15px] leading-relaxed text-muted-grey">
            That statement is the project&apos;s own description — kept here
            because it says more than a corporate backstory could, and
            because there is no corporate backstory to borrow.
          </p>
        </div>
      </section>

      {/* ── People ── */}
      <section className="border-t border-hairline py-24">
        <div className="container-guild">
          <Reveal>
            <SectionHeading
              eyebrow="PEOPLE"
              title="Who is behind Growth Guild Labs"
              lead="The identity is written where the products are: the shipped applications name their makers directly. Growth Guild Labs is the shared heading for a set of five working AI applications created by Zaid Uddin and Idrees Uddin."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {[
              {
                name: "Zaid Uddin",
                role: "CEO & Founder",
                initials: "ZU",
                desc: "Lead system architect, PyQt6 core designer, and AI voice pipeline builder behind ULTRON 2.0 and F.R.I.D.A.Y.",
              },
              {
                name: "Idrees Uddin",
                role: "Co-founder",
                initials: "IU",
                desc: "Systems engineering, companion gateway bridging, and hardware testing lead for the Android companion builds.",
              },
            ].map((person, i) => (
              <Reveal key={person.name} delay={i * 100} className="h-full">
                <div className="person-card h-full flex flex-col justify-between gap-12">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      aria-hidden="true"
                      className="grid size-14 place-items-center rounded-2xl border border-cyan-electric/40 bg-cyan-electric/10 font-display text-lg font-bold text-cyan-electric"
                    >
                      {person.initials}
                    </span>
                    <span className="spec-chip">{person.role}</span>
                  </div>
                  <div>
                    <p className="font-display text-2xl text-ice-white">
                      {person.name}
                    </p>
                    <p className="mt-1 font-mono text-micro uppercase tracking-[0.24em] text-cyan-electric">
                      {person.role}
                    </p>
                    <p className="mt-3 text-[14px] leading-relaxed text-mist">
                      {person.desc}
                    </p>
                    <p className="mt-3 text-[13px] leading-relaxed text-muted-grey">
                      Named in the shipped product files — &ldquo;The CEO and Founder
                      is Zaid Uddin, and the Co-Founder is Idrees Uddin&rdquo; —
                      which is exactly why this site can say it in these words.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we build ── */}
      <section className="border-t border-hairline py-24">
        <div className="container-guild">
          <Reveal>
            <SectionHeading
              eyebrow="WHAT WE BUILD"
              title="Five applications, all real"
              lead="Each is a separate product with its own page, its own stack and its own job. Open any of them for the full, verified profile."
            />
          </Reveal>
          <div className="mt-10 overflow-hidden rounded-2xl border border-hairline">
            <ul className="divide-y divide-hairline">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <Link
                    href={productHref(p.id)}
                    className="group flex items-center justify-between gap-6 px-6 py-5 transition-colors duration-300 hover:bg-cyan-electric/5"
                  >
                    <div className="min-w-0 flex items-center gap-3">
                      <span
                        className="size-2 rounded-full shrink-0"
                        style={{
                          background: p.accent === "gold" ? "#ffb300" :
                            p.accent === "cyan" ? "#00e5ff" :
                            p.accent === "red" ? "#ff1744" : "#7c5cff",
                        }}
                        aria-hidden="true"
                      />
                      <div>
                        <span className="block font-display text-lg text-ice-white">
                          {p.name}
                        </span>
                        <span className="mt-0.5 block text-[13px] text-muted-grey">
                          {p.role}
                        </span>
                      </div>
                    </div>
                    <span className="hidden flex-wrap justify-end gap-2 sm:flex">
                      {p.chips.slice(0, 2).map((chip) => (
                        <span key={chip} className="spec-chip">
                          {chip}
                        </span>
                      ))}
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-mono text-sm text-muted-grey transition-transform duration-500 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="border-t border-hairline py-24 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "45vw",
            height: "40vh",
            top: "10%",
            right: "-15%",
            background: "radial-gradient(ellipse, rgba(57,255,101,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="container-guild relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="PRINCIPLES"
              title="The rules this site keeps"
              lead="These are not marketing values — they are the constraints these pages were written under."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 70} className="h-full">
                <div className="holo-card h-full p-7">
                  <h3 className="font-display text-xl text-ice-white">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-mist">
                    {principle.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        className="border-t border-hairline py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #03090d, #071d24 130%)" }}
      >
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "50vw",
            height: "40vh",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="container-guild relative z-10 flex flex-col items-start gap-8">
          <Reveal className="flex flex-col gap-5">
            <span className="eyebrow">SAY HELLO</span>
            <h2 className="max-w-2xl font-display text-title text-ice-white">
              The fastest way in is the same way the work is shown —
              <span className="text-cyan-electric"> in public.</span>
            </h2>
            <p className="max-w-xl text-[15px] leading-relaxed text-mist">
              No contact form is wired up yet — this site is a static build
              with no backend. The social routes below reach the builders
              directly.
            </p>
          </Reveal>
          <Reveal delay={110}>
            <SocialLinks />
          </Reveal>
          <Reveal delay={160} className="flex flex-wrap gap-4">
            <CtaLink href="/downloads" ariaLabel="Download all five applications">
              Download the apps
            </CtaLink>
            <CtaLink href="/ecosystem" variant="secondary" ariaLabel="Explore the ecosystem">
              Explore the ecosystem
            </CtaLink>
            <CtaLink href="/feedback" variant="ghost" ariaLabel="The feedback routes that work today">
              Feedback routes
            </CtaLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
