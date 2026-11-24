import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "./icons";

export function ReviewsSection({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  return (
    <section
      className="border-t border-ink-100 bg-white py-16 md:py-20"
      aria-labelledby="reviews-title"
    >
      <div className="mx-auto flex max-w-container flex-wrap items-end justify-between gap-6 px-6">
        <div>
          <h2
            id="reviews-title"
            className="font-display text-4xl font-bold tracking-tight text-ink-900 md:text-5xl"
          >
            Customer Reviews
          </h2>
          <p className="mt-4 text-lg text-ink-400">
            {site.reviewsHref
              ? "See reviews from Superior Garage Doors USA customers."
              : "Superior customer reviews will be posted here as they become available."}
          </p>
        </div>
        {site.reviewsHref ? (
          <a
            href={site.reviewsHref}
            className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline"
          >
            Read reviews <Icon width="18" height="18" />
          </a>
        ) : !standalone ? (
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline"
          >
            Visit the reviews page <Icon width="18" height="18" />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
