import Link from "next/link";
import { CtaLink } from "@/components/ui/CtaLink";
import { PRODUCTS } from "@/lib/products";

/**
 * 404 — not found. Cinematic treatment: HUD overlay, mission-abort framing,
 * and quick escape routes to real pages.
 */
export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden py-20">
      {/* Ambient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 40%, rgba(0,229,255,0.05) 0%, transparent 70%)," +
            "radial-gradient(30% 30% at 80% 20%, rgba(255,23,68,0.04) 0%, transparent 60%)",
        }}
      />

      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Scan line animation */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden opacity-[0.04]"
      >
        <div
          className="absolute inset-x-0 h-32 animate-scan"
          style={{ background: "linear-gradient(180deg, transparent, rgba(0,229,255,0.6), transparent)" }}
        />
      </div>

      <div className="container-guild relative z-10 flex flex-col items-center gap-8 text-center">
        {/* HUD frame: error code */}
        <div className="relative">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.4em] text-muted-grey">
            MISSION STATUS
          </span>

          <div
            className="relative mt-4 overflow-hidden rounded-2xl border border-[#ff174433] bg-[#0a0c0e] px-12 py-8"
            style={{ boxShadow: "0 0 60px rgba(255,23,68,0.08), inset 0 0 40px rgba(255,23,68,0.03)" }}
          >
            {/* Accent line top */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #ff1744, transparent)" }}
            />

            <p
              className="font-display text-[6rem] font-bold leading-none tracking-tighter sm:text-[8rem]"
              style={{ color: "#ff1744", textShadow: "0 0 40px #ff174460, 0 0 80px #ff174420" }}
            >
              404
            </p>

            {/* Accent line bottom */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #ff1744, transparent)" }}
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-3">
          <h1 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] text-ice-white">
            Deep space — signal lost.
          </h1>
          <p className="max-w-xl text-[15px] leading-relaxed text-mist">
            The page you&apos;re looking for isn&apos;t in this orbit. It may have moved,
            or perhaps it hasn&apos;t been built yet. Here are the real coordinates:
          </p>
        </div>

        {/* Escape routes */}
        <div className="flex flex-wrap justify-center gap-3">
          <CtaLink href="/" ariaLabel="Return to the home page">
            Return to base
          </CtaLink>
          <CtaLink href="/ecosystem" variant="secondary" ariaLabel="Open the ecosystem">
            Ecosystem directory
          </CtaLink>
        </div>

        {/* Quick product links */}
        <div className="mt-6 w-full max-w-lg">
          <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-grey">
            Or jump to a product
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {PRODUCTS.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/products/${p.id}`}
                  className="group flex items-center gap-3 rounded-xl border border-hairline bg-void/60 px-4 py-2.5 text-sm text-mist transition-all hover:border-cyan-electric/40 hover:text-ice-white hover:bg-cyan-electric/5"
                >
                  <span
                    className="size-2 rounded-full shrink-0"
                    style={{
                      background:
                        p.accent === "gold" ? "#FFD700" :
                        p.accent === "cyan" ? "#00E5FF" :
                        p.accent === "red" ? "#FF1744" : "#7C5CFF",
                    }}
                  />
                  {p.name}
                  <span className="ml-auto font-mono text-xs text-muted-grey group-hover:text-cyan-electric transition-colors">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
