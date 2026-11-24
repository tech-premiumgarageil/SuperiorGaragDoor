import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  title: ReactNode;
  description: string;
  image?: "wide" | "detail";
  children?: ReactNode;
};

export function PageHero({
  title,
  description,
  image = "wide",
  children,
}: PageHeroProps) {
  const imageSrc =
    image === "detail"
      ? "/images/garage-hardware-service.png"
      : "/images/garage-service-hero.png";

  return (
    <section className="relative isolate overflow-hidden bg-ink-900 text-white">
      <Image
        src={imageSrc}
        alt=""
        fill
        preload
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 photo-shade" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-ink-900 to-transparent" />
      <div className="mx-auto max-w-container px-6 py-20 md:py-28">
        <div className="animate-rise max-w-3xl">
          <h1 className="font-display text-5xl font-bold tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-100/80 md:text-xl">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
