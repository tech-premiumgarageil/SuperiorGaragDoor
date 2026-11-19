import serviceData from "./services.json";

export type Service = (typeof serviceData)[number];
export const services: Service[] = serviceData;
export const findService = (slug: string) =>
  services.find((service) => service.slug === slug);
export const serviceHref = (slug: string) => `/services/${slug}`;

export const serviceSummaries: Record<string, string> = {
  "emergency-garage-door-services":
    "Help for those can’t-wait garage door problems.",
  "garage-door-repair": "Grinding, sticking, or refusing to move? Start here.",
  "garage-door-installation": "Give your home a fresh look and a new way in.",
  "garage-door-opener-repair":
    "Troubleshoot remotes, sensors, and opener issues.",
  "garage-door-opener-installation":
    "Upgrade how your garage door opens and closes.",
  "commercial-garage-door":
    "Service and installation for your business property.",
  "garage-door-spring-replacement":
    "Replace worn or broken springs with professional help.",
  "garage-door-cable-repair": "Address frayed, loose, or damaged door cables.",
  "garage-off-track-repair": "Get a crooked or derailed door back on track.",
};
