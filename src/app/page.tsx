import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { RequestForm } from "@/components/request-form";
import { PhoneAction } from "@/components/phone-action";
import { ServiceList } from "@/components/service-list";
import { GarageDiagram } from "@/components/garage-diagram";
import { ContactSection, LocationSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { findService, serviceHref } from "@/lib/services";
import { site } from "@/lib/site";

const cards = [
  {
    slug: "garage-door-repair",
    description: "Help for doors that are stuck, noisy, damaged, or off track.",
  },
  {
    slug: "garage-door-installation",
    description: "A new garage door for a new look and a better way in.",
  },
  {
    slug: "commercial-garage-door",
    description: "Installation and service for your business property.",
  },
];
export default function Home() {
  return (
    <>
      <main id="main-content">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="container hero-layout">
            <div className="home-hero-copy">
              <div className="home-photo">
                <Image
                  src="/images/hero.webp"
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                />
              </div>
              <h1 id="home-title">
                Garage Door Repair
                <br className="desktop-break" /> in Chicago, Illinois
              </h1>
              <p>
                <span className="desktop-hero-lead">
                  Garage door trouble? Let’s get you moving.
                  <br />
                </span>
                Repair, installation, and opener services for homes and
                businesses in Chicago and Highland Park.
              </p>
              <div className="hero-actions">
                <a href="#request-service" className="button button-primary">
                  Request service <Icon />
                </a>
                <a
                  href="#services"
                  className="button button-outline hero-explore"
                >
                  Explore services
                </a>
              </div>
              <div className="hero-locality">
                <span>
                  <Icon name="pin" width="16" height="16" />
                  Chicago &amp; Highland Park
                </span>
                <span>Residential + commercial</span>
              </div>
              <span className="mobile-photo-caption">
                Illustrative reference photography
              </span>
            </div>
            <RequestForm
              id="request-service"
              deliveryConfigured={!!process.env.SERVICE_REQUEST_WEBHOOK_URL}
            />
          </div>
          <span className="photo-caption">
            Illustrative reference photography
          </span>
        </section>
        <section className="emergency-band">
          <div className="container emergency-layout">
            <Icon name="bolt" width="40" height="46" />
            <div className="emergency-copy">
              <h2>Stuck outside? Door won’t close?</h2>
              <p>
                <Link href={serviceHref("emergency-garage-door-services")}>
                  Emergency Garage Door Services
                </Link>{" "}
                for those can’t-wait moments.
              </p>
            </div>
            <div className="emergency-action">
              <PhoneAction className="text-call" />
              <p>
                {site.phonePlaceholder && "Phone placeholder · "}availability to
                be confirmed
              </p>
            </div>
          </div>
        </section>
        <section className="photo-services">
          <div className="container">
            <div className="section-heading-row">
              <h2>Garage door solutions for every need</h2>
              <span>Illustrative reference photography</span>
            </div>
            <div className="photo-card-grid">
              {cards.map((card) => {
                const service = findService(card.slug)!;
                return (
                  <article className="photo-service-card" key={service.slug}>
                    <Link
                      href={serviceHref(service.slug)}
                      className="card-image"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                      />
                    </Link>
                    <div className="card-copy">
                      <h3>
                        <Link href={serviceHref(service.slug)}>
                          {service.title}
                        </Link>
                      </h3>
                      <p>{card.description}</p>
                      <Link
                        className="text-link"
                        href={serviceHref(service.slug)}
                      >
                        Explore service <Icon width="18" height="18" />
                        <span className="sr-only">: {service.title}</span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section id="services" className="all-services section">
          <div className="container">
            <div className="split-heading">
              <h2 className="condensed-heading">
                Big fixes. Small repairs.
                <br />
                Every way to a better garage.
              </h2>
              <p>
                From a snapped spring to a fresh installation, find the right
                service for your door.
              </p>
            </div>
            <ServiceList />
          </div>
        </section>
        <section id="how-we-help" className="problem-section section">
          <div className="container problem-layout">
            <div className="problem-copy">
              <h2 className="condensed-heading">
                You don’t have to
                <br className="desktop-break" /> know the part.
                <br />
                Just tell us the problem.
              </h2>
              <p>
                A garage door has a lot of moving parts. Whether yours is noisy,
                crooked, or won’t budge, we’ll help you find the right service.
              </p>
              <ul className="problem-list">
                {[
                  "Door won’t open or close",
                  "Loud, uneven, or jerky movement",
                  "Opener or remote not responding",
                ].map((text) => (
                  <li key={text}>
                    <Icon name="check" width="18" height="18" />
                    {text}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="text-link">
                Tell us what’s happening <Icon />
              </a>
            </div>
            <GarageDiagram />
          </div>
        </section>
        <LocationSection />
        <ContactSection />
      </main>
      <Footer compact />
    </>
  );
}
