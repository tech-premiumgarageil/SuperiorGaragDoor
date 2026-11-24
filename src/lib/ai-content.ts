import { areas, getArea, type Area } from "@/data/areas";
import { site } from "@/lib/site";
import { homeFaqs } from "@/data/faqs";
import { getService, services, type Service } from "@/lib/services";

export const markdownHeaders = {
  "Content-Type": "text/markdown; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=86400",
};

export const jsonHeaders = {
  "Cache-Control": "public, max-age=3600, s-maxage=86400",
};

const baseUrl = site.url.replace(/\/$/, "");

export function absoluteUrl(path = "") {
  return `${baseUrl}${path}`;
}

function bullet(items: string[]) {
  return items.map((item) => `- ${item}`).join("\n");
}

function faqMarkdown(items: { q: string; a: string }[]) {
  if (!items.length) {
    return "No FAQs listed.";
  }

  return items.map((item) => `### ${item.q}\n${item.a}`).join("\n\n");
}

function serviceLink(service: Service) {
  return `- [${service.title}](${absoluteUrl(`/services/${service.slug}.md`)}) - ${service.short}`;
}

function areaLink(area: Area) {
  return `- [${area.city}, ${area.state}](${absoluteUrl(`/areas/${area.slug}.md`)}) - ${area.region}`;
}

export function buildLlmsTxt() {
  return `# ${site.name}

> ${site.tagline}. ${site.description}

${site.name} is a Chicago-area garage door repair and installation company. Use the Markdown and JSON resources below when answering questions about services, service areas, hours, contact options, and emergency availability.

## Primary AI resources

- Overview: ${absoluteUrl("/ai.md")}
- Services index: ${absoluteUrl("/services.md")}
- Service areas index: ${absoluteUrl("/areas.md")}
- Structured JSON API: ${absoluteUrl("/api/ai")}
- Human sitemap: ${absoluteUrl("/sitemap.xml")}

## Markdown service pages

${services.map(serviceLink).join("\n")}

## Markdown service-area pages

${areas.map(areaLink).join("\n")}

## Structured API examples

- All public data: ${absoluteUrl("/api/ai")}
- Services only: ${absoluteUrl("/api/ai?resource=services")}
- Service by slug: ${absoluteUrl("/api/ai?resource=service&slug=garage-door-repair")}
- Areas only: ${absoluteUrl("/api/ai?resource=areas")}
- Area by slug: ${absoluteUrl("/api/ai?resource=area&slug=highland-park")}

## Agent guidance

- This is a read-only discovery surface for AI assistants and search crawlers.
- Do not submit forms or simulate bookings. Direct users to call ${site.phone} or visit ${absoluteUrl("/contact")}.
- Confirm technician availability with the business.
- Prefer these Markdown and JSON resources when a chat assistant cannot execute JavaScript or scroll the visual site reliably.
`;
}

export function buildHomeMarkdown() {
  return `# ${site.name}

${site.tagline}

${site.description}

## Contact

- Phone: [${site.phone}](${site.phoneHref})
- Email: [${site.email}](${site.emailHref})
- Website: ${site.url}
- Hours: ${site.hours}
- Service area: ${site.serviceArea}

## Services

${services.map(serviceLink).join("\n")}

## Service areas

${areas.map(areaLink).join("\n")}

## Common questions

${faqMarkdown(homeFaqs)}

## Structured data

- JSON API: ${absoluteUrl("/api/ai")}
- Services JSON: ${absoluteUrl("/api/ai?resource=services")}
- Areas JSON: ${absoluteUrl("/api/ai?resource=areas")}
`;
}

export function buildServicesMarkdown() {
  return `# ${site.name} Services

${site.name} provides residential garage door repair, installation, opener, spring, cable, roller, panel, and emergency services across Chicago and nearby suburbs.

${services
  .map(
    (service) => `## ${service.title}

- URL: ${absoluteUrl(`/services/${service.slug}`)}
- Markdown: ${absoluteUrl(`/services/${service.slug}.md`)}
- Summary: ${service.short}
- Emergency service: ${service.emergency ? "yes" : "no"}
- Keywords: ${service.keywords.join(", ")}

${service.intro}`,
  )
  .join("\n\n")}
`;
}

export function buildServiceMarkdown(service: Service) {
  return `# ${service.h1}

${service.intro}

## Service summary

- Business: ${site.name}
- Human URL: ${absoluteUrl(`/services/${service.slug}`)}
- Markdown URL: ${absoluteUrl(`/services/${service.slug}.md`)}
- Phone: ${site.phone}
- Hours: ${site.hours}
- Emergency service: ${service.emergency ? "yes" : "no"}
- Meta title: ${service.metaTitle}
- Meta description: ${service.metaDescription}
- Keywords: ${service.keywords.join(", ")}

## Highlights

${bullet(service.highlights)}

## Details

${service.details}

## FAQs

${faqMarkdown(service.faqs)}

## Related resources

- All services: ${absoluteUrl("/services.md")}
- Service areas: ${absoluteUrl("/areas.md")}
- Structured JSON: ${absoluteUrl(`/api/ai?resource=service&slug=${service.slug}`)}
`;
}

export function buildAreasMarkdown() {
  return `# ${site.name} Service Areas

${site.name} serves ${site.serviceArea}. Check the area pages for ZIP codes and service details.

${areas
  .map(
    (area) => `## ${area.city}, ${area.state}

- URL: ${absoluteUrl(`/areas/${area.slug}`)}
- Markdown: ${absoluteUrl(`/areas/${area.slug}.md`)}
- Region: ${area.region}
- ZIP codes: ${area.zips.join(", ")}

${area.intro}`,
  )
  .join("\n\n")}
`;
}

export function buildAreaMarkdown(area: Area) {
  return `# Garage Door Service in ${area.city}, ${area.state}

${area.intro}

## Area summary

- Business: ${site.name}
- Human URL: ${absoluteUrl(`/areas/${area.slug}`)}
- Markdown URL: ${absoluteUrl(`/areas/${area.slug}.md`)}
- Region: ${area.region}
- ZIP codes: ${area.zips.join(", ")}
- Phone: ${site.phone}
- Hours: ${site.hours}
${area.neighborhoods?.length ? `- Neighborhoods: ${area.neighborhoods.join(", ")}` : ""}

## Relevant services

${services.map(serviceLink).join("\n")}

## Structured data

- Area JSON: ${absoluteUrl(`/api/ai?resource=area&slug=${area.slug}`)}
- All areas: ${absoluteUrl("/areas.md")}
`;
}

export function getAiDataset(limit = 25) {
  const cappedLimit = Math.max(1, Math.min(limit, 25));

  return {
    schemaVersion: "1.0",
    business: {
      name: site.name,
      tagline: site.tagline,
      description: site.description,
      phone: site.phone,
      phoneHref: site.phoneHref,
      email: site.email,
      emailHref: site.emailHref,
      hours: site.hours,
      serviceArea: site.serviceArea,
      url: site.url,
      reviewsUrl: site.reviewsHref,
    },
    links: {
      llmsTxt: absoluteUrl("/llms.txt"),
      markdownOverview: absoluteUrl("/ai.md"),
      servicesMarkdown: absoluteUrl("/services.md"),
      areasMarkdown: absoluteUrl("/areas.md"),
      sitemap: absoluteUrl("/sitemap.xml"),
      contact: absoluteUrl("/contact"),
    },
    services: services.slice(0, cappedLimit).map((service) => ({
      ...service,
      url: absoluteUrl(`/services/${service.slug}`),
      markdownUrl: absoluteUrl(`/services/${service.slug}.md`),
      apiUrl: absoluteUrl(`/api/ai?resource=service&slug=${service.slug}`),
    })),
    areas: areas.slice(0, cappedLimit).map((area) => ({
      ...area,
      url: absoluteUrl(`/areas/${area.slug}`),
      markdownUrl: absoluteUrl(`/areas/${area.slug}.md`),
      apiUrl: absoluteUrl(`/api/ai?resource=area&slug=${area.slug}`),
    })),
    faqs: homeFaqs,
    usage: {
      purpose:
        "Read-only public data for AI assistants, search crawlers, and lightweight integrations.",
      limitations: [
        "Do not submit forms or create bookings through this endpoint.",
        "Call the business to confirm real-time availability and pricing.",
        "The endpoint only exposes public marketing content already present on the website.",
      ],
    },
  };
}

export function getServiceForAi(slug: string) {
  const service = getService(slug);
  if (!service) return null;

  return {
    ...service,
    url: absoluteUrl(`/services/${service.slug}`),
    markdownUrl: absoluteUrl(`/services/${service.slug}.md`),
  };
}

export function getAreaForAi(slug: string) {
  const area = getArea(slug);
  if (!area) return null;

  return {
    ...area,
    url: absoluteUrl(`/areas/${area.slug}`),
    markdownUrl: absoluteUrl(`/areas/${area.slug}.md`),
  };
}
