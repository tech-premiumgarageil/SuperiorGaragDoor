import Link from "next/link";
import { areas } from "@/data/areas";
import { Icon } from "./icons";

export function AreasGrid({
  heading = "Highland Park, Chicago & Nearby Suburbs",
  showIndexLink = true,
}: {
  heading?: string;
  showIndexLink?: boolean;
}) {
  return (
    <section
      id="service-area"
      className="cv-auto bg-ink-900 text-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-container px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              {heading}
            </h2>
            <p className="mt-4 text-lg text-ink-200/80">
              Find your city for local service details, ZIP codes, and the
              garage door services available in your area.
            </p>
            {showIndexLink && (
              <Link
                href="/areas"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
              >
                View all service areas <Icon width="18" height="18" />
              </Link>
            )}
          </div>
          <div className="md:col-span-7">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="group flex items-center justify-between gap-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium hover:bg-brand hover:text-white hover:border-brand transition"
                  >
                    <span>{a.city}</span>
                    <Icon
                      width="16"
                      height="16"
                      className="text-ink-200 group-hover:text-white transition"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
