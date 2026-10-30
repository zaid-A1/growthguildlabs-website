import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/site";
import { PRODUCTS, productHref } from "@/lib/products";

/** Site footer: brand, products, project links, social destinations. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-hairline bg-void/95">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
      >
        <div className="container-guild h-px bg-gradient-to-r from-transparent via-cyan-electric/55 to-transparent" />
      </div>

      <div className="container-guild py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/brand/ggl-emblem-badge.png"
                alt="Growth Guild Labs badge"
                width={40}
                height={40}
                className="rounded-lg border border-cyan-electric/30 bg-void/60 p-0.5"
              />
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-lg font-semibold tracking-wide text-ice-white">
                  GROWTH GUILD LABS
                </span>
                <span className="font-mono text-micro uppercase tracking-[0.3em] text-cyan-electric">
                  Build More. Grow Together.
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-mist">
              An independent software project by Zaid Uddin and Idrees Uddin —
              a guild of five working AI applications and the companions that
              connect them.
            </p>
          </div>

          <nav aria-label="Footer products">
            <p className="font-mono text-micro uppercase tracking-[0.3em] text-muted-grey">
              Ecosystem
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <Link
                    href={productHref(p.id)}
                    className="link-glow text-sm text-mist"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer project">
            <p className="font-mono text-micro uppercase tracking-[0.3em] text-muted-grey">
              Project
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-glow text-sm text-mist">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="link-glow text-sm text-mist">
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="font-mono text-micro uppercase tracking-[0.3em] text-muted-grey">
              Follow the build
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-ice-white"
                    aria-label={`${SITE.name} on ${s.platform} — handle ${s.handle} (opens in a new tab)`}
                  >
                    <span
                      aria-hidden="true"
                      className="grid size-6 place-items-center rounded-md border border-hairline-strong font-mono text-[0.6rem] uppercase text-cyan-electric transition-colors group-hover:border-cyan-electric/60"
                    >
                      {s.platform.slice(0, 2)}
                    </span>
                    {s.platform}
                    <span aria-hidden="true" className="text-[0.68rem] text-muted-grey">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-hairline pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-muted-grey">
            © {year} {SITE.name}. An independent personal software project.
          </p>
          <p className="font-mono text-micro uppercase tracking-[0.24em] text-muted-grey">
            People behind the guild: Zaid Uddin · Idrees Uddin
          </p>
        </div>
      </div>
    </footer>
  );
}
