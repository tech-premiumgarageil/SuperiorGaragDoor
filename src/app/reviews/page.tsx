import type { Metadata } from "next";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Customer reviews for Superior Garage Doors USA in Highland Park, Chicago, and nearby suburbs.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Superior Garage Doors{" "}
            <span className="text-accent">Customer Reviews</span>
          </>
        }
        description="Reviews for garage door repair and installation in Highland Park and nearby communities."
      />
      <ReviewsSection standalone />
      <CtaBand />
    </>
  );
}
