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

export default function EcosystemPage() {
  return (
    <>
      <ProductsJSONLD products={PRODUCTS} />

      {/* Directory hero */}
      <section className="relative overflow-hidden pt-40 pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_78%_0%,#071d24ee_0%,#03090d00_70%)]"
        />
        <div className="container-guild relative">
          <Reveal className="flex flex-col gap-6">
            <span className="eyebrow">THE DIRECTORY</span>
            <h1 className="max-w-3xl font-display text-[clamp(2.4rem,4.6vw,4.6rem)] font-bold leading-[1.03] text-ice-white text-balance">
              Five applications.
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-electric to-neon-green">
                Zero filler.
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-mist">
              Everything in this directory runs — verified against the actual
              shipped builds. Products are never merged: ULTRON 2.0 has its
              own Connector, JARVIS 2.0 has its own Phone. Availability is
              shown exactly as it stands today.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge label="All five released" />
              <StatusBadge label="Windows &amp; Android" tone="calm" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product directory */}
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

      {/* How the ecosystem connects */}
      <section className="border-t border-hairline py-24">
        <div className="container-guild">
          <Reveal>
            <SectionHeading
              eyebrow="SYSTEM MAP"
              title="How the products relate — and where each one ends."
              lead="Pairings are real: verified parts exist inside the builds for these connections. Integration claims beyond what ships in the files are not made."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal className="panel flex flex-col gap-5 p-8">
              <div className="flex items-center gap-3 font-mono text-micro uppercase tracking-[0.26em]">
                <span className="text-[#ffb300]">UL</span>
                <span className="text-muted-grey">pairing bridge</span>
                <span aria-hidden="true" className="text-muted-grey">—</span>
                <span className="text-cyan-electric">CN</span>
              </div>
              <h3 className="font-display text-[1.5rem] text-ice-white">
                ULTRON 2.0 ↔ ULTRON 2.0 Connector
              </h3>
              <p className="text-[15px] leading-relaxed text-mist">
                The desktop build embeds a FastAPI + WebSocket gateway with
                device pairing, capability tracking and a command router. The
                Connector app pairs with it over the local network through an
                authenticated, revocable handshake.
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <CtaLink href="/products/ultron-2" variant="ghost">
                  ULTRON 2.0
                </CtaLink>
                <CtaLink href="/products/ultron-2-connector" variant="ghost">
                  Connector
                </CtaLink>
              </div>
            </Reveal>

            <Reveal delay={100} className="panel flex flex-col gap-5 p-8">
              <div className="flex items-center gap-3 font-mono text-micro uppercase tracking-[0.26em]">
                <span className="text-[#ff1744]">JA</span>
                <span className="text-muted-grey">family line</span>
                <span aria-hidden="true" className="text-muted-grey">—</span>
                <span className="text-violet-400">PH</span>
              </div>
              <h3 className="font-display text-[1.5rem] text-ice-white">
                JARVIS 2.0 ↔ JARVIS 2.0 Phone
              </h3>
              <p className="text-[15px] leading-relaxed text-mist">
                The same assistant personality in two deliberate shapes: the
                Windows build with its live 3D avatar, and the Android build
                with offline local voice recognition and a floating HUD.
                Separate packages, separate responsibilities.
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <CtaLink href="/products/jarvis-2" variant="ghost">
                  JARVIS 2.0
                </CtaLink>
                <CtaLink href="/products/jarvis-2-phone" variant="ghost">
                  JARVIS 2.0 Phone
                </CtaLink>
              </div>
            </Reveal>
          </div>

          {/* Honest note — updated to reflect public release */}
          <Reveal delay={80} className="panel mt-6 flex flex-col gap-4 p-7 lg:p-9">
            <p className="font-mono text-micro uppercase tracking-[0.28em] text-neon-green">
              Availability, stated plainly
            </p>
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
            <CtaLink href="/products/friday-ai" variant="secondary" ariaLabel="View F.R.I.D.A.Y. AI product page">
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
