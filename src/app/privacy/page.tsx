import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy — stated plainly",
  description:
    "What actually happens when you visit the Growth Guild Labs website: a static build with no accounts, no analytics, and no data layer of its own.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-40 pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_20%_0%,#071d24ee_0%,transparent_70%)]"
        />
        <div className="container-guild relative flex flex-col gap-6">
          <span className="eyebrow">PRIVACY</span>
          <h1 className="max-w-3xl font-display text-[clamp(2.4rem,4.6vw,4.4rem)] font-bold leading-[1.03] text-ice-white text-balance">
            Privacy,
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-electric to-neon-green">
              stated plainly.
            </span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-mist">
            This statement covers {SITE.name}&apos;s website for the site&apos;s own
            factual surface: what it is, what it does, and what it doesn&apos;t
            do. When facts about the site or its hosting change, this page
            changes with them.
          </p>
        </div>
      </section>

      {/* ── Sections ── */}
      <section className="pb-24">
        <div className="container-guild flex flex-col gap-6">
          <Reveal className="panel p-8 sm:p-10">
            <span className="eyebrow">SCOPE</span>
            <h2 className="mt-4 font-display text-[1.5rem] text-ice-white">
              This covers the website and download packages
            </h2>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-mist">
              This statement describes this website and the download verification process.
              The five applications are packaged and verified with published SHA-256 checksums
              in the Download Centre. Android companion packages connect directly over your local
              Wi-Fi network to the desktop gateway without requiring any external cloud relay.
            </p>
          </Reveal>

          <Reveal delay={60} className="panel p-8 sm:p-10">
            <span className="eyebrow">WHAT THE SITE IS</span>
            <h2 className="mt-4 font-display text-[1.5rem] text-ice-white">
              A static site with no data layer
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-[15px] leading-relaxed text-mist">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-electric" />
                Pages are statically generated and served as ordinary
                files — no accounts, no login and no user database exist.
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-electric" />
                As written, the site sets no cookies, runs no analytics and
                contains no advertising of any kind.
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-electric" />
                There are no server-side forms. The feedback page is honest
                about this: no form is connected, so nothing can be
                submitted through this site.
              </li>
            </ul>
          </Reveal>

          <Reveal delay={80} className="panel p-8 sm:p-10">
            <span className="eyebrow">WHAT REACHES THIRD PARTIES</span>
            <h2 className="mt-4 font-display text-[1.5rem] text-ice-white">
              The unavoidable basics
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-[15px] leading-relaxed text-mist">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-electric" />
                Any web request exposes your IP address to the host serving
                the site. The production host has not been chosen yet, so no
                specific hosting or log-retention policy is claimed here.
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-electric" />
                Fonts are self-hosted at build time by the framework — no
                font subsetting requests go to Google or any other font
                service when you browse the site.
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-electric" />
                All images and artwork load from this site&apos;s own domain;
                they are not served from social platforms or stock services.
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-electric" />
                The social links are ordinary outbound links. Followed
                destinations operate under their own privacy policies, not
                this one.
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100} className="panel p-8 sm:p-10">
            <span className="eyebrow">CHANGES</span>
            <h2 className="mt-4 font-display text-[1.5rem] text-ice-white">
              Kept accurate, kept current
            </h2>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-mist">
              This page under-promises on purpose. If hosting is added, a
              form is connected, or analytics are ever introduced, each
              change will be described here before or when it happens.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
