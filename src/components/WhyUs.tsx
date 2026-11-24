import Image from "next/image";

export function WhyUs() {
  const points = [
    {
      title: "Find the cause",
      body: "A stuck, noisy, or crooked door can have several causes. Tell us what changed so we can narrow down what needs attention.",
    },
    {
      title: "Repair the right part",
      body: "Get help with broken springs, worn rollers, snapped cables, damaged panels, and opener issues.",
    },
    {
      title: "Choose a new door",
      body: "Compare styles, materials, and opener features that fit the way you use your garage.",
    },
    {
      title: "Plan for your property",
      body: "Tell us about the door and access requirements so we can discuss options for your home or business.",
    },
  ];
  return (
    <section
      id="how-we-help"
      className="cv-auto overflow-hidden bg-ink-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-container px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink-900">
              Help for every part of your garage door.
            </h2>
            <p className="mt-4 text-lg text-ink-400">
              Start with what you are seeing. We can help you find the service
              that fits.
            </p>
            <div className="relative mt-8 hidden aspect-[4/5] overflow-hidden rounded-[2rem] md:block">
              <Image
                src="/images/garage-service-card.png"
                alt="Technician servicing a residential garage door"
                fill

                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
            </div>
          </div>
          <div className="md:col-span-8 grid gap-5 sm:grid-cols-2">
            {points.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-ink-100 bg-white p-7"
              >
                <h3 className="font-display text-xl font-bold text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
