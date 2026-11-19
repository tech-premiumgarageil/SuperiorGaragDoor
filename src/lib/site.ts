const configuredPhone = process.env.NEXT_PUBLIC_PHONE_NUMBER?.trim() || "";
const configuredEmail = process.env.NEXT_PUBLIC_EMAIL_ADDRESS?.trim() || "";

export const site = {
  name: "Superior Garage Doors USA",
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
  street: process.env.NEXT_PUBLIC_STREET_ADDRESS?.trim() || "[STREET ADDRESS]",
  zip: process.env.NEXT_PUBLIC_OFFICE_ZIP_CODE?.trim() || "[ZIP CODE]",
  hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS?.trim() || "[BUSINESS HOURS]",
  phonePlaceholder: !configuredPhone,
  emailPlaceholder: !configuredEmail,
  addressPlaceholder: !process.env.NEXT_PUBLIC_STREET_ADDRESS?.trim(),
  hoursPlaceholder: !process.env.NEXT_PUBLIC_BUSINESS_HOURS?.trim(),
};
