import Image from "next/image";
import { Icon } from "./icons";
import { CallLink, RequestLink } from "@/components/ServiceActions";

export function CtaBand({
  title = "Ready When You Are.",
  subtitle = "When your garage door needs attention, call us or start a service request online.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section
      id="contact"
      className="cv-auto relative isolate overflow-hidden bg-brand-700 text-white"
    >
      <Image
        src="/images/garage-hardware-service.png"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-700/95 to-brand-700/90" />
      <div className="mx-auto grid max-w-container gap-8 px-6 py-16 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-white">{subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 md:justify-end">
          <CallLink className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-4 text-base font-semibold text-white hover:bg-ink-700 transition" />
          <RequestLink className="inline-flex items-center gap-2 rounded-full border border-white/75 px-7 py-4 text-base font-semibold text-white hover:bg-white hover:text-ink-900 transition">
            Request Service <Icon width="18" height="18" />
          </RequestLink>
        </div>
      </div>
    </section>
  );
}
