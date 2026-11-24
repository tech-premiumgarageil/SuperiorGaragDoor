import existingServices from "./services.json";
import { site } from "./site";

type FAQ = { q: string; a: string };

type ServiceContent = {
  slug: string;
  title: string;
  short: string;
  image: string;
  intro: string;
  highlights: string[];
  details: string;
  faqs: FAQ[];
  heading?: string;
  emergency?: boolean;
};

export type Service = ServiceContent & {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
};

const imported: ServiceContent[] = [
  {
    slug: "garage-door-repair",
    title: "Garage Door Repair",
    short: "Repair for stuck, noisy, damaged, and off-track garage doors.",
    image: "/images/garage-service-card.png",
    intro:
      "From broken springs and snapped cables to faulty openers and off-track doors, request garage door repair in Highland Park, Chicago, or a nearby suburb.",
    highlights: [
      "Spring, cable, roller, and track inspection",
      "Diagnosis of opener and sensor issues",
      "Assessment of bent or damaged door panels",
      "Repair options for common door and opener brands",
    ],
    details:
      "From a noisy door that won’t open to a panel dented by a bumper, the first step is to identify what stopped working and why. Tell us when the issue started, what you hear or see, and whether the door is stuck open or closed.",
    faqs: [
      {
        q: "How fast can you get a technician out?",
        a: "Call or request service with your ZIP code so we can confirm availability for your area.",
      },
      {
        q: "Do you charge a service fee?",
        a: "Ask about diagnostic charges and the cost of your repair when you request service.",
      },
      {
        q: "Do you warranty your repairs?",
        a: "Ask about parts and labor terms for the specific repair before work begins.",
      },
    ],
  },
  {
    slug: "spring-replacement",
    title: "Garage Door Spring Replacement",
    short: "Replacement for broken torsion and extension springs.",
    image: "/images/spring-replacement.jpg",
    intro:
      "A broken spring can leave your door heavy, crooked, or unable to open. Request help identifying the right replacement for your door’s torsion or extension spring system.",
    highlights: [
      "Torsion and extension spring assessment",
      "Matched spring options for balanced doors",
      "Standard and high-cycle spring options",
      "Door balance check after replacement",
    ],
    details:
      "Springs do the heavy lifting. When one snaps, the opener cannot safely take on the extra load. On doors with two springs, replacing a worn pair together can help keep the door balanced. Ask about high-cycle springs if you use the garage throughout the day.",
    faqs: [
      {
        q: "Why replace both springs if only one broke?",
        a: "Springs installed together see similar wear. Replacing a worn pair helps keep the door balanced and can avoid a second visit.",
      },
      {
        q: "How long do garage door springs last?",
        a: "Springs are rated in open-and-close cycles. A typical standard rating is around 10,000 cycles. Check the rating of the specific spring you are considering.",
      },
      {
        q: "Can I replace a spring myself?",
        a: "Garage door springs are under significant tension. Leave spring replacement to a garage door professional.",
      },
    ],
  },
  {
    slug: "opener-repair",
    title: "Garage Door Opener Repair & Installation",
    short: "Troubleshoot, replace, or upgrade to a smart opener.",
    image: "/images/opener-repair.jpg",
    intro:
      "If your opener hums without lifting, the remote stops working, or you want a Wi-Fi upgrade, request help with your garage door opener.",
    highlights: [
      "LiftMaster, Chamberlain, Genie, and Sommer compatibility",
      "Belt, chain, and direct-drive opener options",
      "myQ-compatible smart opener options",
      "Remote, keypad, sensor, and Wi-Fi setup",
    ],
    details:
      "Modern openers can send door alerts and grant temporary access. The right model depends on your door’s size, weight, and how often you use it. Include the current opener model and the symptoms in your request so we can discuss repair and installation.",
    faqs: [
      {
        q: "How long does a garage door opener last?",
        a: "Service life depends on the model, usage, and door balance. Age and repair cost can help determine whether replacement makes sense.",
      },
      {
        q: "Do you install Wi-Fi smart openers?",
        a: "Ask about compatible options from LiftMaster, Chamberlain, and other manufacturers, along with support for remotes, keypads, and phone apps.",
      },
    ],
  },
  {
    slug: "cable-roller-repair",
    title: "Cable & Roller Repair",
    heading: "Garage Door Cable & Roller Repair",
    short: "Help with frayed cables, worn rollers, and noisy movement.",
    image: "/images/cable-roller-repair.jpg",
    intro:
      "Frayed cables or cracked rollers can make a garage door grind, jerk, or hang at an angle. Request an inspection to identify the damaged part and check the track.",
    highlights: [
      "Lift cable and drum inspection",
      "Steel and quiet nylon roller options",
      "Track alignment assessment",
      "Door balance and movement check",
    ],
    details:
      "Cables work with the springs to lift the door evenly. A frayed cable or a cable that unwinds from its drum can tilt the door or pull it off track. Worn rollers can cause rattling or jerky movement.",
    faqs: [
      {
        q: "My door is loud but still works. Do I need new rollers?",
        a: "Worn rollers can cause rumbling, but tracks and other hardware can make similar sounds. An inspection can identify the source.",
      },
      {
        q: "Can a frayed cable wait?",
        a: "A frayed cable can fail while the door moves. Stop using the door and request service.",
      },
    ],
  },
  {
    slug: "off-track-repair",
    title: "Off-Track Door Repair",
    heading: "Off-Track Garage Door Repair",
    short:
      "Inspect a crooked door and repair the parts that caused it to derail.",
    image: "/images/off-track-repair.jpg",
    intro:
      "An off-track garage door can fall or bind. Avoid forcing it, and request an inspection of the affected track, cables, rollers, and hinges.",
    highlights: [
      "Track straightening or replacement options",
      "Cable, roller, and hinge inspection",
      "Door balance and movement testing",
      "Frame and trim damage assessment",
    ],
    details:
      "Doors can leave their tracks after a bumper hit, a broken cable, or a worn roller jumping the rail. A repair should identify the cause and address the damaged components before the door goes back into service.",
    faqs: [
      {
        q: "Can I drive in until you get here?",
        a: "Keep the door still and park outside until it can be inspected.",
      },
    ],
  },
  {
    slug: "panel-replacement",
    title: "Panel Replacement",
    heading: "Garage Door Panel Replacement",
    short: "Replace damaged panels when a compatible section is available.",
    image: "/images/panel-replacement.webp",
    intro:
      "A bumper dent or storm damage does not always mean you need a whole new garage door. A compatible panel can restore the affected section.",
    highlights: [
      "Manufacturer and model identification",
      "Color, finish, and panel-profile matching",
      "Single-panel or door-section replacement options",
      "Door balance assessment after replacement",
    ],
    details:
      "Tell us which section is damaged and share the manufacturer, model, or photos if you have them. Some doors accept individual replacement sections. For discontinued styles or wider damage, replacing the whole door may be the better option.",
    faqs: [
      {
        q: "Will the new panel match my door?",
        a: "That depends on whether the manufacturer still produces a compatible panel and how much the existing finish has weathered.",
      },
    ],
  },
  {
    slug: "emergency-service",
    title: "Emergency Garage Door Service",
    short: "Request urgent help for a door that is stuck open or won’t close.",
    image: "/images/emergency-service.webp",
    intro:
      "A garage door stuck open, shut, or halfway can disrupt access and leave an opening unsecured. Call to check urgent service availability in Highland Park and nearby cities.",
    highlights: [
      "Doors stuck open, shut, or halfway",
      "Broken springs, snapped cables, and derailed doors",
      "Help assessing unsafe access",
      "Repair and temporary security options",
    ],
    details:
      "If a storm bent the track or your door stopped after a spring broke, keep people clear of the opening. Tell us whether the door blocks access or leaves your property unsecured so we can understand the urgency.",
    faqs: [
      {
        q: "Is there an after-hours surcharge?",
        a: "Call to confirm current hours, availability, and any charges for urgent service.",
      },
      {
        q: "What if you can’t fully fix the door on the first visit?",
        a: "Ask what can be done to secure the opening while any needed parts are ordered.",
      },
    ],
    emergency: true,
  },
];

function withMetadata(content: ServiceContent): Service {
  const heading = content.heading || content.title;
  return {
    ...content,
    h1: `${heading} in Highland Park, IL`,
    metaTitle: `${heading} in Highland Park, IL | ${site.name}`,
    metaDescription: content.intro,
    keywords: [
      `${heading.toLowerCase()} Highland Park`,
      `${heading.toLowerCase()} Chicago`,
    ],
  };
}

const existingPhotos: Record<string, string> = {
  "emergency-garage-door-services": "/images/emergency-service.webp",
  "garage-door-opener-repair": "/images/opener-repair.jpg",
  "garage-door-opener-installation": "/images/opener-repair.jpg",
  "garage-door-spring-replacement": "/images/spring-replacement.jpg",
  "garage-door-cable-repair": "/images/cable-roller-repair.jpg",
  "garage-off-track-repair": "/images/off-track-repair.jpg",
};

const previous = existingServices
  .filter((service) => service.slug !== "garage-door-repair")
  .map((service) =>
    withMetadata({
      slug: service.slug,
      title: service.title,
      short: service.description,
      image: existingPhotos[service.slug] ?? service.image,
      intro: service.description,
      highlights: service.reasons,
      details: service.explanation,
      faqs: service.faqs.map(({ question, answer }) => ({
        q: question,
        a: answer,
      })),
      emergency: service.slug === "emergency-garage-door-services",
    }),
  );

const extraCatalogSlugs = [
  "garage-door-installation",
  "commercial-garage-door",
];

export const services = [
  ...imported.map(withMetadata),
  ...previous.filter(({ slug }) => extraCatalogSlugs.includes(slug)),
];

export const allServices = [
  ...services,
  ...previous.filter(({ slug }) => !extraCatalogSlugs.includes(slug)),
];

export const serviceSlugs = allServices.map(({ slug }) => slug);

export const getService = (slug?: string) =>
  allServices.find((service) => service.slug === slug);
