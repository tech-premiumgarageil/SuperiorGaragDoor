import Link from "next/link";
import Image from "next/image";
import { Icon } from "./icons";
import { services } from "@/lib/services";

export function ServicesGrid({
  heading = "Every Service. One Phone Call.",
  showIndexLink = true,
}: {
  heading?: string;
  showIndexLink?: boolean;
}) {
  return (
    <section id="services" className="cv-auto bg-white py-20 md:py-28">
      <div className="mx-auto max-w-container px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink-900">
              {heading}
            </h2>
            <p className="mt-4 text-lg text-ink-400">
              Repairs, installations, and emergency service for garage doors
              across Highland Park, Chicago, and the suburbs.
            </p>
          </div>
          {showIndexLink && (
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-brand"
            >
              See all services <Icon width="18" height="18" />
            </Link>
          )}
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[2rem] border border-ink-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-ink-900 hover:shadow-xl"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/65 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                {s.emergency && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand-700 mb-3">
                    Emergency
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold text-ink-900 group-hover:text-brand-700 transition">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-ink-400 leading-relaxed">
                  {s.short}
                </p>
                <div className="mt-auto pt-8 flex items-center gap-2 text-sm font-semibold text-brand-700 group-hover:underline transition">
                  Learn more
                  <Icon
                    width="18"
                    height="18"
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
