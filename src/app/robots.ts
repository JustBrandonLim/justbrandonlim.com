import type { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://justbrandonlim.com/sitemap.xml",
    host: "https://justbrandonlim.com",
  };
}
