import Link from "next/link";
import { Logo } from "./logo";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/data/areas";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact / Request Service" },
];

const footerLink = "text-ink-200 hover:text-white hover:underline";

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-200">
      <div className="mx-auto max-w-container px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo reversed />
            <p className="mt-4 text-sm leading-relaxed">{site.description}</p>
            <div className="mt-5 space-y-1 break-words text-sm">
              {site.phoneHref && (
                <a
                  className={`block font-semibold ${footerLink}`}
                  href={site.phoneHref}
                >
                  {site.phone}
                </a>
              )}
              {site.emailHref && (
                <a className={`block ${footerLink}`} href={site.emailHref}>
                  {site.email}
                </a>
              )}
              {!site.hoursPlaceholder && <p>{site.hours}</p>}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map(({ slug, title }) => (
                <li key={slug}>
                  <Link className={footerLink} href={`/services/${slug}`}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Service Areas
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
              {areas.map(({ slug, city }) => (
                <li key={slug}>
                  <Link className={footerLink} href={`/areas/${slug}`}>
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link className={footerLink} href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/20 pt-6 text-xs">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
