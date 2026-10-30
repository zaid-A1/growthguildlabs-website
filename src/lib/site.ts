/**
 * Site-wide constants: identity, navigation, social destinations.
 * Every value here is either supplied by the project owner or required
 * by the site structure — nothing fabricated.
 */

export const SITE = {
  name: "Growth Guild Labs",
  shortName: "GGL",
  tagline: "Build More. Grow Together.",
  taglineNote:
    "Growth Guild Labs is the shared heading for a set of five working AI applications created by Zaid Uddin and Idrees Uddin.",
  description:
    "Growth Guild Labs is an independent software project building five working AI assistants and their mobile companions. Explore the ecosystem and the people behind it.",
  marketingLine:
    "Exploring AI, software, and digital experiences that push ideas beyond the ordinary.",
  heroHeadline: "THE FUTURE IS BUILT. NOT WAITED FOR.",

  // The production domain is not chosen yet. NEXT_PUBLIC_SITE_URL overrides it.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/downloads", label: "Downloads" },
  { href: "/lab-notes", label: "Lab Notes" },
  { href: "/about", label: "About" },
  { href: "/feedback", label: "Feedback" },
];

export interface SocialLink {
  platform: string;
  href: string;
  handle: string;
}

/** Supplied by the owner — verified destinations only. */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Instagram",
    handle: "@growthguild_189",
    href: "https://www.instagram.com/growthguild_189/",
  },
  {
    platform: "YouTube",
    handle: "@growthguildlabs189",
    href: "https://youtube.com/@growthguildlabs189",
  },
  {
    platform: "Threads",
    handle: "@growthguild_189",
    href: "https://www.threads.com/@growthguild_189/",
  },
  {
    platform: "Facebook",
    handle: "Growth Guild Labs page",
    href: "https://www.facebook.com/share/19MHYoVmAh/",
  },
];

export const PEOPLE = [
  { name: "Zaid Uddin", note: "Founder" },
  { name: "Idrees Uddin", note: "Co-founder" },
] as const;

/** The previous website is reference-only and must never be touched or deployed to. */
export const LEGACY_SITE_URL = "https://growthguildlabs.netlify.app/";
