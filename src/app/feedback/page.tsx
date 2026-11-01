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
  { icon: "🐛", label: "Bug reports & telemetry" },
  { icon: "🧠", label: "AI skill creation requests" },
  { icon: "📡", label: "Companion pairing feedback" },
  { icon: "🚀", label: "Release priority requests" },
  { icon: "🔩", label: "Hardware & sensor suggestions" },
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
          <p className="max-w-xl text-base sm:text-lg text-mist font-light leading-relaxed">
            No contact form exists here yet — and none will be faked. Every real route
            to the builders is listed below.
          </p>
        </div>
      </section>

      {/* ── Useful topics ── */}
      <section className="py-20 border-t border-hairline">
        <div className="container-guild max-w-3xl mx-auto">
          <Reveal className="flex flex-col items-center text-center gap-4 mb-12">
            <span className="eyebrow">TOPICS WE ACTUALLY RESPOND TO</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ice-white">
              What to send us
            </h2>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {USEFUL_TOPICS.map((t, i) => (
              <Reveal key={t.label} delay={i * 70}>
                <div className="group flex items-center gap-4 rounded-2xl border border-hairline bg-panel px-6 py-5 transition-all duration-300 hover:border-cyan-electric/30 hover:bg-cyan-electric/[0.04] hover:-translate-y-0.5">
                  <span className="text-2xl">{t.icon}</span>
                  <span className="font-display text-sm font-semibold text-ice-white group-hover:text-cyan-electric transition-colors">
                    {t.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social channels ── */}
      <section
        className="relative py-28 border-t border-hairline overflow-hidden text-center"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, #061922 0%, #02070b 60%)" }}
      >
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "55vw",
            height: "40vh",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse, rgba(0,229,255,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="container-guild relative z-10 flex flex-col items-center gap-8 max-w-2xl mx-auto">
          <Reveal className="flex flex-col items-center gap-3">
            <span className="hero-badge">REACH THE GUILD</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ice-white">
              Live Channels
            </h2>
            <p className="text-sm sm:text-base text-mist font-light leading-relaxed">
              These are the verified places where Zaid and Idrees actively read messages and post updates.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <SocialLinks />
          </Reveal>
          <Reveal delay={140} className="flex flex-wrap justify-center gap-4">
            <CtaLink href="/ecosystem" ariaLabel="Explore the ecosystem">
              Explore the Ecosystem
            </CtaLink>
            <CtaLink href="/downloads" variant="secondary" ariaLabel="Download Center">
              Download Center
            </CtaLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
