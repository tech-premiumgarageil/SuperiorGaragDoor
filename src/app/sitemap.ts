import type { MetadataRoute } from "next";
import { getSiteUrls } from "@/lib/site-urls";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getSiteUrls().map((siteUrl) => ({
    ...siteUrl,
    lastModified: now,
  }));
}
