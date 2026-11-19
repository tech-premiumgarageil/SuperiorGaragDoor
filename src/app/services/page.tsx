import type { Metadata } from "next";
import Link from "next/link";
import { ServiceList } from "@/components/service-list";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Garage Door Services in Chicago, IL",
  description:
    "Explore all nine Superior Garage Doors USA services for Chicago and Highland Park, from emergency repair to new garage doors and openers.",
  alternates: { canonical: "/services" },
};
export default function ServicesPage() {
  return (
    <>
      <main id="main-content">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol className="container">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">Services</li>
          </ol>
        </nav>
        <section className="services-index section">
          <div className="container">
            <div className="split-heading">
              <h1>
                Every way to a<br />
                better garage.
              </h1>
              <p>
                Repair, installation, and opener services for homes and
                businesses in Chicago and Highland Park. Find the service that
                fits your door.
              </p>
            </div>
            <ServiceList includeEmergency />
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
