import { SOCIAL_LINKS } from "@/lib/site";

/** Small pill row of verified external destinations (about page, contact). */
export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-3">
      {SOCIAL_LINKS.map((s) => (
        <li key={s.platform}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="spec-chip transition-colors hover:border-cyan-electric/70 hover:text-ice-white"
            aria-label={`${s.platform} — ${s.handle} (opens in a new tab)`}
          >
            <span aria-hidden="true" className="text-cyan-electric">
              ↗
            </span>
            {s.platform} · {s.handle}
          </a>
        </li>
      ))}
    </ul>
  );
}
