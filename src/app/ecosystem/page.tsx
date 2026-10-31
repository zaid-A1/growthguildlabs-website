import type { Metadata } from "next";
import { CtaLink } from "@/components/ui/CtaLink";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProductsJSONLD } from "@/components/seo/ProductsJSONLD";
import { PRODUCTS } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ecosystem — five working AI applications",
  description:
    "The Growth Guild Labs directory: ULTRON 2.0, ULTRON 2.0 Connector, JARVIS 2.0, JARVIS 2.0 Phone and F.R.I.D.A.Y. AI — five separate products with honest availability.",
  path: "/ecosystem",
});

const PLATFORM_COLORS: Record<string, string> = {
  gold: "#ffb300",
  cyan: "#00e5ff",
  red: "#ff1744",
  violet: "#7c5cff",
};

export default function EcosystemPage() {
  return (
    <>
      <ProductsJSONLD products={PRODUCTS} />

      {/* ── Premium Directory Hero ── */}
      <section className="relative overflow-hidden pt-40 pb-20">
        {/* Backgrounds */}
        <div aria-hidden="true" className="absolute inset-0 page-hero-bg" />
        <div aria-hidden="true" className="cyber-grid opacity-[0.025]" />

        {/* Accent nebula */}
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "50vw",
            height: "40vh",
            top: "-20%",
            right: "-10%",
            background: "radial-gradient(ellipse, rgba(57,255,101,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="container-guild relative">
          <Reveal className="flex flex-col gap-6">
            <span className="eyebrow">THE DIRECTORY</span>
            <h1 className="max-w-3xl font-display text-[clamp(2.6rem,5vw,5rem)] font-bold leading-[1.02] text-ice-white text-balance">
              Five applications.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #00e5ff 0%, #39ff65 100%)",
                }}
              >
                Zero filler.
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-mist">
              Every product in this directory runs — verified against actual shipped builds.
              Products are never merged: ULTRON 2.0 has its own Connector, JARVIS 2.0
              has its own Phone. Availability is shown exactly as it stands today.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge label="All five released" />
              <StatusBadge label="Windows & Android" tone="calm" />
            </div>
          </Reveal>

          {/* Quick product mini-nav */}
          <Reveal delay={100} className="mt-10 flex flex-wrap gap-2">
            {PRODUCTS.map((p) => (
              <a
                key={p.id}
                href={`/products/${p.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-void/60 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-grey hover:border-cyan-electric/40 hover:text-ice-white transition-colors backdrop-blur-sm"
              >
                <span
                  className="size-1.5 rounded-full shrink-0"
                  style={{
                    background: PLATFORM_COLORS[p.accent],
                    boxShadow: `0 0 6px ${PLATFORM_COLORS[p.accent]}88`,
                  }}
                  aria-hidden="true"
                />
                {p.name}
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Product Cards Grid ── */}
      <section className="pb-20">
        <div className="container-guild">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 70} className="h-full">
                <ProductCard product={p} className="h-full" priority={i < 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ecosystem Connection Map ── */}
      <section className="border-t border-hairline py-24 relative">
        <div
          aria-hidden="true"
          className="nebula-blob"
          style={{
            width: "40vw",
            height: "40vh",
            top: "20%",
            left: "-15%",
            background: "radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="container-guild relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="SYSTEM MAP"
              title="How the products relate — and where each one ends."
              lead="Pairings are real: verified parts exist inside the builds for these connections. Integration claims beyond what ships in the files are not made."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* ULTRON pair */}
            <Reveal className="holo-card flex flex-col gap-5 p-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-micro uppercase tracking-[0.26em] text-[#ffb300]">ULTRON 2.0</span>
                <span className="font-mono text-micro text-muted-grey">↔</span>
                <span className="font-mono text-micro uppercase tracking-[0.26em] text-cyan-electric">Connector</span>
              </div>
              <h3 className="font-display text-[1.5rem] text-ice-white">
                Desktop ↔ Android gateway
              </h3>
              <p className="text-[15px] leading-relaxed text-mist">
                The desktop build embeds a FastAPI + WebSocket gateway with
                device pairing, capability tracking and a command router. The
                Connector app pairs over the local network through an
                authenticated, revocable handshake.
              </p>
              {/* Connection visualization */}
              <div className="flex items-center gap-3 rounded-xl border border-hairline bg-void/60 p-3">
                <div className="flex flex-col items-center">
                  <div className="size-8 rounded-lg border border-[#ffb300]/40 bg-[#ffb300]/10 grid place-items-center">
                    <span className="font-mono text-[0.6rem] font-bold text-[#ffb300]">PC</span>
                  </div>
                  <span className="mt-1 font-mono text-[0.5rem] text-muted-grey">ULTRON 2.0</span>
                </div>
                <div className="flex-1 flex items-center gap-1">
                  <div className="flex-1 h-px bg-gradient-to-r from-[#ffb300]/40 to-cyan-electric/40" />
                  <span className="font-mono text-[0.55rem] text-muted-grey px-2">WebSocket</span>
                  <div className="flex-1 h-px bg-gradient-to-l from-[#ffb300]/40 to-cyan-electric/40" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="size-8 rounded-lg border border-cyan-electric/40 bg-cyan-electric/10 grid place-items-center">
                    <span className="font-mono text-[0.6rem] font-bold text-cyan-electric">📱</span>
                  </div>
                  <span className="mt-1 font-mono text-[0.5rem] text-muted-grey">Connector</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <CtaLink href="/products/ultron-2" variant="ghost">ULTRON 2.0</CtaLink>
                <CtaLink href="/products/ultron-2-connector" variant="ghost">Connector</CtaLink>
              </div>
            </Reveal>

            {/* JARVIS pair */}
            <Reveal delay={100} className="holo-card flex flex-col gap-5 p-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-micro uppercase tracking-[0.26em] text-[#ff1744]">JARVIS 2.0</span>
                <span className="font-mono text-micro text-muted-grey">↔</span>
                <span className="font-mono text-micro uppercase tracking-[0.26em] text-violet-400">Phone</span>
              </div>
              <h3 className="font-display text-[1.5rem] text-ice-white">
                Desktop ↔ Android family
              </h3>
              <p className="text-[15px] leading-relaxed text-mist">
                The same assistant personality in two deliberate shapes: the
                Windows build with its live 3D avatar, and the Android build
                with offline local voice recognition and a floating HUD.
                Separate packages, separate responsibilities.
              </p>
              {/* Family visualization */}
              <div className="flex items-center gap-3 rounded-xl border border-hairline bg-void/60 p-3">
                <div className="flex flex-col items-center">
                  <div className="size-8 rounded-lg border border-[#ff1744]/40 bg-[#ff1744]/10 grid place-items-center">
                    <span className="font-mono text-[0.6rem] font-bold text-[#ff1744]">🖥</span>
                  </div>
                  <span className="mt-1 font-mono text-[0.5rem] text-muted-grey">JARVIS 2.0</span>
                </div>
                <div className="flex-1 flex items-center gap-1">
                  <div className="flex-1 h-px bg-gradient-to-r from-[#ff1744]/40 to-violet-500/40" />
                  <span className="font-mono text-[0.55rem] text-muted-grey px-2">Family</span>
                  <div className="flex-1 h-px bg-gradient-to-l from-[#ff1744]/40 to-violet-500/40" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="size-8 rounded-lg border border-violet-500/40 bg-violet-500/10 grid place-items-center">
                    <span className="font-mono text-[0.6rem] font-bold text-violet-400">📱</span>
                  </div>
                  <span className="mt-1 font-mono text-[0.5rem] text-muted-grey">Phone</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <CtaLink href="/products/jarvis-2" variant="ghost">JARVIS 2.0</CtaLink>
                <CtaLink href="/products/jarvis-2-phone" variant="ghost">JARVIS 2.0 Phone</CtaLink>
              </div>
            </Reveal>
          </div>

          {/* Honest availability note */}
          <Reveal delay={80} className="mt-6 holo-card flex flex-col gap-4 p-7 lg:p-9">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-neon-green animate-pulse" aria-hidden="true" />
              <p className="font-mono text-micro uppercase tracking-[0.28em] text-neon-green">
                Availability, stated plainly
              </p>
            </div>
            <p className="max-w-3xl text-[15px] leading-relaxed text-mist">
              All five applications are built, packaged and now publicly
              available for direct download. Every release carries a verified
              SHA-256 checksum and full installation instructions. Windows
              releases ship as self-contained ZIP archives; Android releases
              are signed APKs ready to sideload.
            </p>
            <a
              href="/downloads"
              className="inline-flex items-center gap-2 font-mono text-[0.8rem] uppercase tracking-[0.2em] text-cyan-electric hover:text-neon-green transition-colors"
            >
              Go to the Download Centre →
            </a>
          </Reveal>

          <Reveal delay={120} className="mt-10 flex flex-wrap items-center gap-4">
            <CtaLink href="/downloads" ariaLabel="Go to the Download Centre">
              Download the apps
            </CtaLink>
            <CtaLink href="/products/friday-ai" variant="secondary" ariaLabel="View F.R.I.D.A.Y. AI">
              Start with F.R.I.D.A.Y. AI
            </CtaLink>
            <CtaLink href="/about" variant="ghost" ariaLabel="About Growth Guild Labs">
              About the project
            </CtaLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
