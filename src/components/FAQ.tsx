import { JsonLd } from "./JsonLd";
import { Icon } from "./icons";

type Item = { q: string; a: string };

export function FAQ({
  items,
  heading = "Frequently Asked Questions",
  withSchema = true,
  dark = false,
}: {
  items: Item[];
  heading?: string;
  withSchema?: boolean;
  dark?: boolean;
}) {
  return (
    <section
      className={
        dark
          ? "cv-auto bg-ink-900 text-white py-20 md:py-28"
          : "cv-auto bg-ink-50 py-20 md:py-28"
      }
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          className={`font-display text-4xl md:text-5xl font-bold tracking-tight ${dark ? "text-white" : "text-ink-900"}`}
        >
          {heading}
        </h2>
        <div className="mt-10 divide-y divide-ink-200/60">
          {items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary
                className={`flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold ${dark ? "text-white" : "text-ink-900"}`}
              >
                {item.q}
                <Icon
                  name="plus"
                  className={
                    dark
                      ? "text-accent transition group-open:rotate-45"
                      : "text-brand-700 transition group-open:rotate-45"
                  }
                />
              </summary>
              <p
                className={`mt-3 text-base leading-relaxed ${dark ? "text-ink-200" : "text-ink-500"}`}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
      {withSchema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: i.a },
            })),
          }}
        />
      )}
    </section>
  );
}
