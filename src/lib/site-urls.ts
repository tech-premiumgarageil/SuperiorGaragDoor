import { areas } from "@/data/areas";
import { site } from "@/lib/site";
import { allServices } from "@/lib/services";

export type SiteUrl = {
  url: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

const staticPaths = [
  "",
  "/services",
  "/areas",
  "/about",
  "/contact",
  "/reviews",
];

const aiPaths = ["/llms.txt", "/ai.md", "/services.md", "/areas.md", "/api/ai"];

export function getSiteUrls(): SiteUrl[] {
  const base = site.url;

  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1.0 : 0.8,
    })),
    ...aiPaths.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...allServices.map((service) => ({
      url: `${base}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...allServices.map((service) => ({
      url: `${base}/services/${service.slug}.md`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...areas.map((area) => ({
      url: `${base}/areas/${area.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...areas.map((area) => ({
      url: `${base}/areas/${area.slug}.md`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
