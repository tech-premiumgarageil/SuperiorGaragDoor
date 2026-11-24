const configuredPhone = process.env.NEXT_PUBLIC_PHONE_NUMBER?.trim() || "";
const configuredEmail = process.env.NEXT_PUBLIC_EMAIL_ADDRESS?.trim() || "";
const configuredReviews = process.env.NEXT_PUBLIC_REVIEWS_URL?.trim() || "";
const configuredStreet =
  process.env.NEXT_PUBLIC_STREET_ADDRESS?.trim().replace(
    /,\s*Highland Park,?\s*IL$/i,
    "",
  ) || "";

export const site = {
  name: "Superior Garage Doors USA",
  tagline: "Garage door service in Highland Park and nearby suburbs",
  description:
    "Superior Garage Doors USA provides garage door repair, installation, opener service, and commercial service in Highland Park, Chicago, and nearby suburbs.",
  serviceArea: "Highland Park, Chicago & nearby suburbs",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL || "https://superiorgaragedoorsusa.com"
  ).replace(/\/$/, ""),
  phone: configuredPhone || "[PHONE NUMBER]",
  phoneHref: /^\+?[\d\s().-]{7,25}$/.test(configuredPhone)
    ? `tel:${configuredPhone.replace(/[^\d+]/g, "")}`
    : null,
  email: configuredEmail || "[EMAIL ADDRESS]",
  emailHref: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(configuredEmail)
    ? `mailto:${configuredEmail}`
    : null,
  reviewsHref: /^https:\/\/[^\s]+$/i.test(configuredReviews)
    ? configuredReviews
    : null,
  street: configuredStreet || "[STREET ADDRESS]",
  zip: process.env.NEXT_PUBLIC_OFFICE_ZIP_CODE?.trim() || "[ZIP CODE]",
  hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS?.trim() || "[BUSINESS HOURS]",
  phonePlaceholder: !configuredPhone,
  emailPlaceholder: !configuredEmail,
  addressPlaceholder: !configuredStreet,
  hoursPlaceholder: !process.env.NEXT_PUBLIC_BUSINESS_HOURS?.trim(),
};
