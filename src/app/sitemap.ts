import type { MetadataRoute } from "next";
import { services, serviceHref } from "@/lib/services";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/services`, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({
      url: site.url + serviceHref(s.slug),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
