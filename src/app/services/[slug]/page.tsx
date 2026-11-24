import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { allServices, services, getService } from "@/lib/services";
import { areas } from "@/data/areas";
import { site } from "@/lib/site";
import { FAQ } from "@/components/FAQ";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { BookingEmbed } from "@/components/BookingEmbed";
import { CallLink, RequestLink } from "@/components/ServiceActions";
import { Icon } from "@/components/icons";

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${site.url}/services/${service.slug}`,
      images: [{ url: service.image, alt: service.title }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phoneHref ? site.phone : undefined,
      url: site.url,
    },
    areaServed: areas.map((a) => ({ "@type": "City", name: a.city })),
    description: service.metaDescription,
    url: `${site.url}/services/${service.slug}`,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${site.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${site.url}/services/${service.slug}`,
      },
    ],
  };

  const otherServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-900 py-20 text-white md:py-28">
        <Image
          src={service.image}
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
            <Link href="/services" className="hover:text-brand">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="animate-rise md:col-span-8">
              {service.emergency && (
                <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-white/30 px-3 py-1 text-xs font-semibold text-white mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Emergency service
                </span>
              )}
              <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
                {service.h1}
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-ink-100/80 leading-relaxed">
                {service.intro}
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
            <div className="animate-rise-delay hidden rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md md:col-span-4 md:block">
              <div className="text-xs font-semibold uppercase tracking-widest text-accent">
                What to expect
              </div>
              <div className="mt-4 space-y-3 text-sm text-ink-100/[0.85]">
                {service.highlights.slice(0, 3).map((highlight) => (
                  <div key={highlight} className="flex gap-3">
                    <Icon
                      name="check"
                      width="18"
                      height="18"
                      className="text-accent"
                    />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-container px-6 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-ink-900">
              What&rsquo;s included
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-ink-50/40 p-4 text-sm text-ink-800"
                >
                  <Icon
                    name="check"
                    width="18"
                    height="18"
                    className="text-brand-700"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 prose prose-lg max-w-none text-ink-700">
              <p className="leading-relaxed">{service.details}</p>
            </div>

            <div className="mt-12 rounded-3xl bg-ink-900 text-white p-8">
              <h3 className="font-display text-2xl font-bold">
                Available in Highland Park and nearby cities
              </h3>
              <p className="mt-2 text-ink-200/80 text-sm">
                Explore the cities where you can request{" "}
                {service.title.toLowerCase()}:
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/areas/${a.slug}`}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs hover:bg-brand hover:text-white hover:border-brand transition"
                  >
                    {a.city}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="order-first md:order-none md:col-span-5">
            <div className="md:sticky md:top-28">
              <div className="rounded-[2rem] bg-ink-900 p-1">
                <BookingEmbed serviceSlug={service.slug} />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <FAQ items={service.faqs} heading={`${service.title} — FAQ`} />

      <section className="bg-white py-16 md:py-20 border-t border-ink-100">
        <div className="mx-auto max-w-container px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-900">
            Other services
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-2xl border border-ink-100 bg-white p-5 hover:border-ink-900 hover:shadow-lg transition"
              >
                <div className="font-display font-bold text-ink-900">
                  {s.title}
                </div>
                <div className="mt-1 text-sm text-ink-400">{s.short}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      <JsonLd data={[serviceJsonLd, breadcrumb]} />
    </>
  );
}
