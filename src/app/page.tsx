import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyUs } from "@/components/WhyUs";
import { AreasGrid } from "@/components/AreasGrid";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CtaBand } from "@/components/CtaBand";
import { FAQ } from "@/components/FAQ";
import { homeFaqs } from "@/data/faqs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyUs />
      <ReviewsSection />
      <AreasGrid />
      <FAQ items={homeFaqs} />
      <CtaBand />
    </>
  );
}
