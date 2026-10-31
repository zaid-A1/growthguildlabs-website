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
  { label: "Bug reports & telemetry" },
  { label: "AI skill creation requests" },
  { label: "Companion pairing feedback" },
  { label: "Release priority requests" },
  { label: "Hardware & sensor suggestions" },
];

export default function FeedbackPage() {
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
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="container-guild relative z-10 flex flex-col items-center gap-6 text-center">
          <span className="eyebrow">COMMUNICATION & FEEDBACK</span>
          <h1 className="max-w-3xl font-display text-[clamp(2.4rem,4.6vw,4.4rem)] font-bold leading-[1.03] text-ice-white text-balance">
            Feedback is welcome.{" "}
            <span
              className="block bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #00e5ff 0%, #39ff65 100%)" }}
            >
              Direct channels that work.
            </span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-mist">
            Growth Guild Labs prioritizes real interactions over simulated web forms.
            Reach the creators directly on verified social channels.
          </p>
        </div>
      </section>

      {/* ── Honest status ── */}
      <section className="pb-24 relative">
        <div className="container-guild flex flex-col gap-6">
          <Reveal className="holo-card p-8 sm:p-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="size-2 rounded-full bg-neon-green animate-pulse" aria-hidden="true" />
              <p className="font-mono text-micro uppercase tracking-[0.28em] text-neon-green">
                Direct Communication Philosophy
              </p>
            </div>
            <p className="max-w-3xl text-[15px] leading-relaxed text-mist">
              This website is a modern static build — there is no backend database collecting your
              personal info, and no simulated forms that disappear into the void. Instead, we provide
              direct, verified routes to talk to the creators, test builds, and report telemetry.
            </p>
            <p className="max-w-3xl text-[15px] leading-relaxed text-mist mt-2">
              Every message sent through our official social media channels reaches Zaid Uddin and
              Idrees Uddin directly.
            </p>
          </Reveal>

          {/* Social routes */}
          <Reveal delay={100} className="holo-card p-8 sm:p-10">
            <div className="flex flex-col gap-6">
              <span className="eyebrow">VERIFIED DIRECT ROUTES</span>
              <h2 className="font-display text-[1.6rem] text-ice-white">
                Connect with Growth Guild Labs
              </h2>
              <SocialLinks />
            </div>
          </Reveal>

          {/* Useful feedback topics */}
          <Reveal delay={160} className="holo-card p-8 sm:p-10">
            <div className="flex flex-col gap-5">
              <span className="eyebrow">VALUABLE TOPICS</span>
              <div className="flex flex-wrap gap-2">
                {USEFUL_TOPICS.map((t) => (
                  <span key={t.label} className="spec-chip spec-chip--lit">
                    {t.label}
                  </span>
                ))}
              </div>
              <p className="max-w-3xl text-[15px] leading-relaxed text-mist">
                The ecosystem is actively evolving. Feedback on autonomous skill generation,
                Vosk offline recognition accuracy, companion gateway latency, and new feature
                suggestions are the most impactful contributions you can make today.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} className="flex flex-wrap gap-4 mt-4">
            <CtaLink href="/downloads" ariaLabel="Download application packages">
              Download the apps
            </CtaLink>
            <CtaLink href="/ecosystem" variant="secondary" ariaLabel="Explore the ecosystem">
              Explore the ecosystem
            </CtaLink>
            <CtaLink href="/privacy" variant="ghost" ariaLabel="Read the privacy statement">
              Privacy statement
            </CtaLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
