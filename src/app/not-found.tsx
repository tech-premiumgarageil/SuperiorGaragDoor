import Link from "next/link";
import { CallLink } from "@/components/ServiceActions";

export default function NotFound() {
  return (
    <section className="bg-ink-900 text-white min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-container px-6 py-20 text-center">
        <div className="font-display text-7xl md:text-9xl font-bold text-accent">
          404
        </div>
        <h1 className="mt-6 font-display text-3xl md:text-4xl font-bold">
          Page not found
        </h1>
        <p className="mt-4 text-ink-200/80">
          The page you&rsquo;re looking for doesn&rsquo;t exist — but
          we&rsquo;re still here to help with your garage door.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-700 transition"
          >
            Back to home
          </Link>
          <CallLink className="rounded-full border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition" />
        </div>
      </div>
    </section>
  );
}
