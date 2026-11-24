import type { Metadata } from "next";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Garage Door Services in Highland Park, IL",
  description:
    "Garage door repair, spring replacement, opener installation, cable and roller repair, and emergency service in Highland Park, Chicago, and the suburbs.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        title={
          <>
            Garage Door Services{" "}
            <span className="text-accent">in Highland Park.</span>
          </>
        }
        description="Whether a spring broke or you’re ready to upgrade to a custom carriage door, find the right service for your home or business."
        image="detail"
      />
      <ServicesGrid heading="Everything we service." showIndexLink={false} />
      <CtaBand />
    </>
  );
}
