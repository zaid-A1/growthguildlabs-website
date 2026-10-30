import type { Metadata } from "next";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Feedback — how to reach the guild",
  description:
    "This static site has no feedback form yet, and none is faked. Here are the routes that actually reach the builders of Growth Guild Labs today.",
  path: "/feedback",
});

const USEFUL_TOPICS = [
  { label: "Bug reports" },
  { label: "Product ideas" },
  { label: "Release priorities" },
  { label: "Site content" },
];

export default function FeedbackPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-40 pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_50%_at_50%_0%,#071d24ee_0%,transparent_72%)]"
        />
        <div className="container-guild relative flex flex-col items-center gap-6 text-center">
          <span className="eyebrow">FEEDBACK</span>
          <h1 className="max-w-3xl font-display text-[clamp(2.4rem,4.6vw,4.4rem)] font-bold leading-[1.03] text-ice-white text-balance">
            Feedback is welcome.
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-electric to-neon-green">
              The form isn&apos;t wired yet.
            </span>
          </h1>
        </div>
      </section>

      {/* ── Honest status ── */}
      <section className="pb-20">
        <div className="container-guild flex flex-col gap-6">
          <Reveal className="panel flex flex-col gap-4 p-8 sm:p-10">
            <p className="font-mono text-micro uppercase tracking-[0.28em] text-neon-green">
              Stated plainly
            </p>
            <p className="max-w-3xl text-[15px] leading-relaxed text-mist">
              This website is a static build — there is no backend behind it,
              and no feedback form is connected. Rather than ship a form that
              disappears into the void, or fake a “message sent” screen, this
              page lists the routes that actually work.
            </p>
            <p className="max-w-3xl text-[15px] leading-relaxed text-mist">
              Every message sent through the channels below reaches the
              builders.
            </p>
          </Reveal>

          {/* Social routes */}
          <Reveal delay={100} className="panel p-8 sm:p-10">
            <div className="flex flex-col gap-5">
              <span className="eyebrow">ROUTES THAT WORK TODAY</span>
              <h2 className="font-display text-[1.6rem] text-ice-white">
                Reach the guild directly
              </h2>
              <SocialLinks />
            </div>
          </Reveal>

          {/* What feedback is useful for */}
          <Reveal delay={160} className="panel p-8 sm:p-10">
            <div className="flex flex-col gap-5">
              <span className="eyebrow">WHAT&apos;S USEFUL</span>
              <div className="flex flex-wrap gap-2">
                {USEFUL_TOPICS.map((t) => (
                  <span key={t.label} className="spec-chip spec-chip--lit">
                    {t.label}
                  </span>
                ))}
              </div>
              <p className="max-w-3xl text-[15px] leading-relaxed text-mist">
                The ecosystem is still growing its public surface. Comments on
                the products, the site&apos;s honesty policy and the thing you&apos;d
                want next are the most valuable feedback the guild can get
                right now.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} className="flex flex-wrap gap-4">
            <CtaLink href="/ecosystem" ariaLabel="Explore the ecosystem">
              Explore the ecosystem
            </CtaLink>
            <CtaLink href="/privacy" variant="secondary" ariaLabel="Read the privacy statement">
              How this site handles data
            </CtaLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
