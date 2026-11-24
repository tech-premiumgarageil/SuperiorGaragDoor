import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { WhyUs } from "@/components/WhyUs";
import { PageHero } from "@/components/PageHero";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: site.description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Garage Door Service.{" "}
            <span className="text-accent">Highland Park & Beyond.</span>
          </>
        }
        description={site.description}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-container px-6 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-900">
              How we can help.
            </h2>
            <div className="mt-6 space-y-4 text-ink-700 text-lg leading-relaxed">
              <p>
                A garage door is one of the largest moving parts of your home.
                From a stubborn opener to a bent track or a damaged panel, we
                help homeowners and businesses find the service that fits.
              </p>
              <p>
                Tell us how the door is moving, what has changed, and which
                parts you can identify. Those details help us understand whether
                you need a repair, replacement, or installation.
              </p>
              <p>
                We serve Highland Park, Chicago, and nearby suburbs, from
                Lincoln Park three-flats to Lake Forest homes. Include your ZIP
                code so we can confirm local availability.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Repairs",
                label: "Springs, cables, panels, and tracks",
                href: "/services/garage-door-repair",
              },
              {
                title: "Installation",
                label: "New garage doors and openers",
                href: "/services/garage-door-installation",
              },
              {
                title: "Commercial",
                label: "Service for business properties",
                href: "/services/commercial-garage-door",
              },
              {
                title: "Emergency",
                label: "Help for doors that are stuck",
                href: "/services/emergency-service",
              },
            ].map((s) => (
              <Link
                href={s.href}
                key={s.title}
                className="rounded-3xl border border-ink-100 bg-ink-50/50 p-4 hover:border-ink-900 sm:p-7"
              >
                <div className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                  {s.title}
                </div>
                <div className="mt-2 text-sm text-ink-500">{s.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <CtaBand />
    </>
  );
}
