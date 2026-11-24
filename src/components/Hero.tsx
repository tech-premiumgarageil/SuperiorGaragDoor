import Image from "next/image";
import { Icon } from "./icons";
import { BookingEmbed } from "@/components/BookingEmbed";
import { CallLink, RequestLink } from "@/components/ServiceActions";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 text-white">
      <Image
        src="/images/garage-service-hero-bright.png"
        alt="Garage door technician servicing a residential door in bright daylight"
        fill
        preload
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 home-photo-shade" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink-900 to-transparent" />
      <div className="relative mx-auto max-w-container px-6 py-20 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="animate-rise md:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-ink-900/65 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Serving Highland Park and surrounding suburbs
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              <span className="text-accent">Highland Park&rsquo;s</span>
              <br />
              Garage Door Pros.
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-100/80 leading-relaxed">
              Repairs, installations, and emergency garage door service for
              homes and businesses in Highland Park, Chicago, and nearby
              suburbs.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CallLink className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white hover:bg-brand-700 transition" />
              <RequestLink
                href="#request-service"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                Request Service
                <Icon width="18" height="18" />
              </RequestLink>
            </div>
          </div>
          <div className="animate-rise-delay text-sm md:col-span-5">
            <BookingEmbed compact />
          </div>
        </div>
      </div>
    </section>
  );
}
