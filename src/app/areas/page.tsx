import type { Metadata } from "next";
import { AreasGrid } from "@/components/AreasGrid";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Service Areas in Highland Park, Chicago & the Suburbs",
  description:
    "Explore garage door service in Highland Park, Chicago, and 15 nearby communities, from Lake Forest to Naperville and Hinsdale.",
  alternates: { canonical: "/areas" },
};

export default function AreasIndex() {
  return (
    <>
      <PageHero
        title={
          <>
            Highland Park, Chicago,{" "}
            <span className="text-accent">and Nearby Suburbs.</span>
          </>
        }
        description="Find your city to see local garage door services and ZIP codes, or call to confirm coverage."
      />
      <AreasGrid heading="Find your city." showIndexLink={false} />
      <CtaBand />
    </>
  );
}
