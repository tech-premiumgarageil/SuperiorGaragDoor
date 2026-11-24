import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { areas, getArea } from "@/data/areas";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { BookingEmbed } from "@/components/BookingEmbed";
import { CallLink, RequestLink } from "@/components/ServiceActions";
import { Icon } from "@/components/icons";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  const title = `Garage Door Repair in ${area.city}, ${area.state}`;
  const description = `Garage door repair, spring replacement, opener installation, and emergency service in ${area.city}, ${area.state}.`;
  return {
    title,
    description,
    keywords: [
      `garage door repair ${area.city}`,
      `garage door near me ${area.city}`,
      `garage door spring replacement ${area.city}`,
      `garage door opener ${area.city}`,
      `emergency garage door repair ${area.city}`,
    ],
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: { title, description, url: `${site.url}/areas/${area.slug}` },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const localFaqs = [
    {
      q: `How fast can you get to ${area.city}?`,
      a: `Request service with your ZIP code and a description of the issue. We can confirm availability in ${area.city} after hearing from you.`,
    },
    {
      q: `Do you service ${area.city} on weekends?`,
      a: `Check our contact page for the current business hours, or call to ask about urgent service.`,
    },
    {
      q: `What ZIP codes do you cover near ${area.city}?`,
      a: `We cover ${area.zips.join(", ")} and the surrounding zones. Include your ZIP code when you request service so we can confirm coverage.`,
    },
    {
      q: `Which garage door brands do you install in ${area.city}?`,
      a: `Ask about door and opener options, including Clopay, Amarr, Wayne Dalton, Haas, CHI, LiftMaster, Chamberlain, and Genie. Compatibility depends on your current setup.`,
    },
  ];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: `${site.url}/areas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.city,
        item: `${site.url}/areas/${area.slug}`,
      },
    ],
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-900 py-20 text-white md:py-28">
        <Image
          src="/images/garage-service-hero.png"
          alt=""
          fill
          preload
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 photo-shade" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-ink-900 to-transparent" />
        <div className="mx-auto max-w-container px-6">
          <nav className="text-xs text-ink-200 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/areas" className="hover:text-brand">
              Service Areas
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{area.city}</span>
          </nav>
          <div className="animate-rise max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              {area.region}
            </span>
            <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
              Garage Door Repair in{" "}
              <span className="text-accent">
                {area.city}, {area.state}.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200/80">
              {area.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CallLink className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white hover:bg-brand-700 transition" />
              <RequestLink
                href="#request-service"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-base font-semibold hover:bg-white/10 transition"
              >
                Request Service <Icon width="18" height="18" />
              </RequestLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-container px-6 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-ink-900">
              Services available in {area.city}
            </h2>
            <p className="mt-3 text-ink-400">
              Browse the garage door services you can request in {area.city}.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-start justify-between gap-4 rounded-2xl border border-ink-100 bg-white p-5 hover:border-ink-900 hover:shadow-lg transition"
                >
                  <div>
                    <div className="font-display font-bold text-ink-900 group-hover:text-brand-700 transition">
                      {s.title}
                    </div>
                    <div className="mt-1 text-sm text-ink-400">{s.short}</div>
                  </div>
                  <Icon width="18" height="18" className="text-brand-700" />
                </Link>
              ))}
            </div>

            {
              <div className="mt-10 rounded-3xl bg-ink-50 p-7">
                <h3 className="font-display text-xl font-bold text-ink-900">
                  {area.neighborhoods
                    ? `Neighborhoods we serve in ${area.city}`
                    : `ZIP codes in ${area.city}`}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.neighborhoods?.map((n) => (
                    <span
                      key={n}
                      className="rounded-full bg-white border border-ink-100 px-3 py-1.5 text-xs font-medium text-ink-700"
                    >
                      {n}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs text-ink-400">
                  ZIPs: {area.zips.join(", ")}
                </p>
              </div>
            }
          </div>

          <aside className="order-first md:order-none md:col-span-5">
            <div className="md:sticky md:top-28">
              <div className="rounded-[2rem] bg-ink-900 p-1">
                <BookingEmbed />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <FAQ items={localFaqs} heading={`${area.city} — FAQ`} />

      <section className="bg-white py-16 md:py-20 border-t border-ink-100">
        <div className="mx-auto max-w-container px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-900">
            Nearby cities we also serve
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {areas
              .filter((a) => a.slug !== area.slug)
              .slice(0, 12)
              .map((a) => (
                <Link
                  key={a.slug}
                  href={`/areas/${a.slug}`}
                  className="rounded-full border border-ink-100 bg-white px-4 py-2 text-sm font-medium text-ink-700 hover:border-ink-900 hover:text-ink-900 transition"
                >
                  {a.city}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Garage Door Issue in ${area.city}?`}
        subtitle="Call us or request service with your ZIP code and a description of the issue."
      />

      <JsonLd data={breadcrumb} />
    </>
  );
}
