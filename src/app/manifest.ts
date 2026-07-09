import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BUSINESS.name} | Fence Contractor Shreveport, LA`,
    short_name: "Southern Home Improvements",
    description:
      "Fence contractor in Shreveport, LA — wood, vinyl, chain link, and aluminum fencing, custom gates, decks and pergolas.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f1e6",
    theme_color: "#f6f1e6",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
