import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findService, services, serviceHref } from "@/lib/services";
import { site } from "@/lib/site";
import { RequestForm } from "@/components/request-form";
import { PhoneAction } from "@/components/phone-action";
import { Icon } from "@/components/icons";
import { Footer } from "@/components/footer";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return { title: "Service not found", robots: { index: false } };
  return {
    title: `${service.title} in Chicago, IL`,
    description: service.description,
    alternates: { canonical: serviceHref(slug) },
    openGraph: {
      title: `${service.title} in Chicago, IL | ${site.name}`,
      description: service.description,
      url: serviceHref(slug),
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();
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
        item: `${site.url}${serviceHref(slug)}`,
      },
    ],
  };
  return (
    <>
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c"),
          }}
        />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol className="container">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li aria-current="page">{service.title}</li>
          </ol>
        </nav>
        <section className="service-hero">
          <div className="container hero-layout">
            <div className="service-hero-copy">
              <div className="service-photo">
                <Image src={service.image} alt="" fill priority sizes="100vw" />
              </div>
              <h1>
                {service.title}
                <span className="service-location-title">
                  <br />
                  in Chicago, Illinois
                </span>
              </h1>
              <p>{service.description}</p>
              <div className="hero-actions">
                <a href="#request-service" className="button button-primary">
                  Request service <Icon />
                </a>
                <PhoneAction />
              </div>
              <p className="hero-fine-print">
                {site.phonePlaceholder && "Phone placeholder · "}Chicago &amp;
                Highland Park
                <br />
                Illustrative reference photography
              </p>
            </div>
            <RequestForm
              id="request-service"
              serviceSlug={service.slug}
              deliveryConfigured={!!process.env.SERVICE_REQUEST_WEBHOOK_URL}
            />
          </div>
        </section>
        <section className="service-explanation section">
          <div className="container explanation-layout">
            <div>
              <h2>{service.intro}</h2>
              <p>{service.explanation}</p>
              <h3 className="list-heading">
                Common reasons to request this service
              </h3>
              <ul className="check-list">
                {service.reasons.map((reason) => (
                  <li key={reason}>
                    <Icon name="check" width="18" height="18" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="service-details">
              <h3>Details that help us understand your request</h3>
              <ul className="check-list">
                {service.details.map((detail) => (
                  <li key={detail}>
                    <Icon name="check" width="18" height="18" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <p className="service-note">{service.note}</p>
            </aside>
          </div>
        </section>
        <section className="faq-section section">
          <div className="container faq-layout">
            <h2>{service.faqHeading}</h2>
            <div className="faq-list">
              {service.faqs.map((faq) => (
                <article key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="related-section section">
          <div className="container">
            <h2>Related garage door services</h2>
            <div className="related-grid">
              {service.related.map((relatedSlug) => {
                const related = findService(relatedSlug)!;
                return (
                  <Link
                    className="related-service"
                    href={serviceHref(related.slug)}
                    key={related.slug}
                  >
                    <h3>{related.title}</h3>
                    <span>
                      Explore service <Icon />
                    </span>
                  </Link>
                );
              })}
            </div>
            <p className="related-note">
              Not sure which service fits? Describe the issue in your request.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
