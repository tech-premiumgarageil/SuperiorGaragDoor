export type Area = {
  slug: string;
  city: string;
  state: string;
  region:
    | "Chicago"
    | "North Shore"
    | "Western Suburbs"
    | "Northwest Suburbs"
    | "Near West";
  zips: string[];
  intro: string;
  neighborhoods?: string[];
};

export const areas: Area[] = [
  {
    slug: "highland-park",
    city: "Highland Park",
    state: "IL",
    region: "North Shore",
    zips: ["60035"],
    intro:
      "Highland Park's mix of mid-century, traditional, and modern homes call for different door styles. Explore garage door repair, opener service, and new doors for Highland Park homes and businesses.",
  },
  {
    slug: "chicago",
    city: "Chicago",
    state: "IL",
    region: "Chicago",
    zips: [
      "60601",
      "60614",
      "60622",
      "60625",
      "60630",
      "60640",
      "60647",
      "60657",
    ],
    intro:
      "From Lincoln Park brownstones to West Loop new builds, request garage door repair and installation across Chicago.",
    neighborhoods: [
      "Lincoln Park",
      "Lakeview",
      "Wicker Park",
      "Logan Square",
      "West Loop",
      "Bucktown",
      "Bridgeport",
      "Hyde Park",
    ],
  },
  {
    slug: "naperville",
    city: "Naperville",
    state: "IL",
    region: "Western Suburbs",
    zips: ["60540", "60563", "60564", "60565"],
    intro:
      "Naperville homes deserve doors as polished as their curb appeal. Request residential garage door installation or repair in Naperville.",
  },
  {
    slug: "oak-park",
    city: "Oak Park",
    state: "IL",
    region: "Near West",
    zips: ["60301", "60302", "60304"],
    intro:
      "Historic Oak Park homes often have unique door sizes — ask about custom-fit installations and repairs suited to the architecture.",
  },
  {
    slug: "evanston",
    city: "Evanston",
    state: "IL",
    region: "North Shore",
    zips: ["60201", "60202", "60203"],
    intro:
      "Garage door service in Evanston — from Northwestern faculty homes near the lake to historic brick two-flats.",
  },
  {
    slug: "schaumburg",
    city: "Schaumburg",
    state: "IL",
    region: "Northwest Suburbs",
    zips: ["60173", "60193", "60194", "60195"],
    intro:
      "Garage door repair and installation in Schaumburg — single-family homes, townhomes, and HOA-approved replacements.",
  },
  {
    slug: "arlington-heights",
    city: "Arlington Heights",
    state: "IL",
    region: "Northwest Suburbs",
    zips: ["60004", "60005", "60006"],
    intro:
      "Request garage door spring repairs or a new carriage-house door for your Arlington Heights home.",
  },
  {
    slug: "skokie",
    city: "Skokie",
    state: "IL",
    region: "North Shore",
    zips: ["60076", "60077"],
    intro:
      "Garage door service in Skokie — repairs, openers, and full door replacements.",
  },
  {
    slug: "cicero",
    city: "Cicero",
    state: "IL",
    region: "Near West",
    zips: ["60804"],
    intro: "Garage door repair in Cicero — residential and small commercial.",
  },
  {
    slug: "wilmette",
    city: "Wilmette",
    state: "IL",
    region: "North Shore",
    zips: ["60091"],
    intro:
      "Premium garage doors and meticulous service for Wilmette homes — including custom carriage and modern aluminum styles.",
  },
  {
    slug: "winnetka",
    city: "Winnetka",
    state: "IL",
    region: "North Shore",
    zips: ["60093"],
    intro:
      "Explore designer garage doors and request installation or repairs for your Winnetka home.",
  },
  {
    slug: "glenview",
    city: "Glenview",
    state: "IL",
    region: "North Shore",
    zips: ["60025", "60026"],
    intro: "Request garage door repair and new installations in Glenview.",
  },
  {
    slug: "lake-forest",
    city: "Lake Forest",
    state: "IL",
    region: "North Shore",
    zips: ["60045"],
    intro:
      "Custom carriage-house and estate doors in Lake Forest, along with garage door repairs and opener service.",
  },
  {
    slug: "wheaton",
    city: "Wheaton",
    state: "IL",
    region: "Western Suburbs",
    zips: ["60187", "60189"],
    intro: "Wheaton garage door repair, installation, and opener service.",
  },
  {
    slug: "downers-grove",
    city: "Downers Grove",
    state: "IL",
    region: "Western Suburbs",
    zips: ["60515", "60516"],
    intro:
      "Request spring replacement, opener service, or panel repair in Downers Grove.",
  },
  {
    slug: "elmhurst",
    city: "Elmhurst",
    state: "IL",
    region: "Western Suburbs",
    zips: ["60126"],
    intro:
      "Superior Garage Doors USA offers repair, installation, and opener service in Elmhurst.",
  },
  {
    slug: "hinsdale",
    city: "Hinsdale",
    state: "IL",
    region: "Western Suburbs",
    zips: ["60521"],
    intro:
      "Premium and custom garage doors in Hinsdale — from Tudor-style carriage doors to fully glazed modern designs.",
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
