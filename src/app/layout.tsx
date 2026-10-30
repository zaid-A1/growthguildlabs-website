import type { Metadata, Viewport } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/NavMenu";
import { Footer } from "@/components/Footer";
import { AtmosphereFX } from "@/components/fx/AtmosphereFX";
import { PageTransition } from "@/components/fx/PageTransition";
import { SITE, SOCIAL_LINKS } from "@/lib/site";
import "@/styles/globals.css";

/* Procedural film-grain tile (SVG turbulence, data-URI, no request). */
const GRAIN_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")";

/* Fonts are self-hosted by next/font — no late-loading layout shift. */
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Growth Guild Labs",
    "ULTRON 2.0",
    "ULTRON 2.0 Connector",
    "JARVIS 2.0",
    "JARVIS 2.0 Phone",
    "F.R.I.D.A.Y. AI",
    "AI assistant",
    "independent software project",
  ],
  authors: [
    { name: "Zaid Uddin" },
    { name: "Idrees Uddin" },
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#03090d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    founder: [
      { "@type": "Person", name: "Zaid Uddin" },
      { "@type": "Person", name: "Idrees Uddin" },
    ],
    sameAs: SOCIAL_LINKS.map((s) => s.href),
  };

  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    slogan: SITE.tagline,
  };

  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col bg-void text-ice-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:border focus:border-cyan-electric focus:bg-void focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-ice-white"
        >
          Skip to content
        </a>

        <SiteHeader />

        {/* Cinematic finisher layers — decorative only, hidden from AT. */}
        <div
          aria-hidden="true"
          className="fx-grain"
          style={{ backgroundImage: GRAIN_URI }}
        />
        <div aria-hidden="true" className="fx-vignette" />
        <AtmosphereFX />
        <PageTransition />

        <main id="main" className="flex flex-col flex-1">
          {children}
        </main>
        <Footer />

        <script
          type="application/ld+json"
          // Structured data — organisation facts are true and verified.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </body>
    </html>
  );
}
