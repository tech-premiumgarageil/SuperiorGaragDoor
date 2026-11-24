import Link from "next/link";

const items = [
  {
    label: "Residential",
    detail: "Repair and installation",
    href: "/services/garage-door-repair",
  },
  {
    label: "Commercial",
    detail: "Doors for your business",
    href: "/services/commercial-garage-door",
  },
  {
    label: "Highland Park",
    detail: "Explore our service areas",
    href: "/areas",
  },
  {
    label: "Emergency",
    detail: "Request urgent service",
    href: "/services/emergency-service",
  },
];

export function TrustBar() {
  return (
    <section
      className="border-y border-ink-100 bg-white"
      aria-label="Garage door service at a glance"
    >
      <div className="mx-auto grid max-w-container grid-cols-2 gap-px bg-ink-100 md:grid-cols-4">
        {items.map(({ label, detail, href }) => (
          <Link
            key={href}
            href={href}
            className="bg-white px-4 py-7 text-center hover:bg-ink-50"
          >
            <span className="block font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              {label}
            </span>
            <span className="mt-1 block text-sm text-ink-400">{detail}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
