import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/empresa";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot", "CCBot"], disallow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
