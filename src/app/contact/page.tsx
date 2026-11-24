import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BookingEmbed } from "@/components/BookingEmbed";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Request Service",
  description:
    "Contact Superior Garage Doors USA for garage door repair, installation, and opener service in Highland Park and nearby communities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Let’s Get Your Door{" "}
            <span className="text-accent">Working Again.</span>
          </>
        }
        description="Call or start a service request online. Include your ZIP code and a description of what is happening with your garage door."
      />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-12 px-6 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="font-display text-3xl font-bold text-ink-900 md:text-4xl">
              Reach us directly
            </h2>
            <div className="mt-8 space-y-6">
              {site.phoneHref && (
                <a
                  href={site.phoneHref}
                  className="block rounded-3xl bg-brand p-7 text-white transition hover:bg-brand-700"
                >
                  <span className="block text-xs font-semibold uppercase tracking-widest">
                    Phone
                  </span>
                  <span className="mt-2 block font-display text-3xl font-bold sm:text-4xl md:text-5xl">
                    {site.phone}
                  </span>
                  <span className="mt-2 block text-sm">
                    Call for urgent service and availability.
                  </span>
                </a>
              )}
              {site.emailHref && (
                <a
                  href={site.emailHref}
                  className="block rounded-3xl border border-ink-100 bg-white p-7 transition hover:border-ink-900"
                >
                  <span className="block text-xs font-semibold uppercase tracking-widest text-ink-400">
                    Email
                  </span>
                  <span className="mt-2 block break-words font-display text-2xl font-bold text-ink-900">
                    {site.email}
                  </span>
                  <span className="mt-2 block text-sm text-ink-500">
                    For questions, quotes, and follow-ups.
                  </span>
                </a>
              )}
              {!site.hoursPlaceholder && (
                <div className="rounded-3xl border border-ink-100 bg-ink-50/50 p-7">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-400">
                    Hours
                  </h3>
                  <p className="mt-2 font-display text-2xl font-bold text-ink-900">
                    {site.hours}
                  </p>
                  <p className="mt-2 text-sm text-ink-500">
                    Serving {site.serviceArea}.
                  </p>
                </div>
              )}
              <div className="rounded-3xl border border-ink-100 bg-ink-50/50 p-7">
                <h3 className="font-display text-2xl font-bold text-ink-900">
                  Future Highland Park office
                </h3>
                {!site.addressPlaceholder && (
                  <address className="mt-2 not-italic">
                    {site.street}
                    <br />
                    Highland Park, IL{" "}
                    {site.zip === "[ZIP CODE]" ? "" : site.zip}
                  </address>
                )}
                <p className="mt-2 text-sm text-ink-500">
                  Opening date to be confirmed.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-[2rem] bg-ink-900 p-1">
              <BookingEmbed />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
