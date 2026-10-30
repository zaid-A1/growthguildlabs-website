import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#03090d",
    theme_color: "#03090d",
    icons: [
      {
        src: "/brand/growth-guild-labs-logo.png",
        sizes: "288x288",
        type: "image/png",
      },
    ],
  };
}
