import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Highland Hills Baptist Church",
    short_name: "HHBC",
    description:
      "Independent Baptist church in Highland, Michigan. Plan your visit, watch sermons, and see service times.",
    start_url: "/",
    display: "standalone",
    background_color: "#061a34",
    theme_color: "#061a34",
    icons: [{ src: "/favicon.png", sizes: "any", type: "image/png" }],
  };
}
