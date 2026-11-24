"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { Logo } from "./logo";
import { Icon } from "./icons";

const links = [
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Service Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/60 bg-white/95 backdrop-blur">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="hidden bg-ink-900 text-xs text-white md:block">
        <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-6 py-2">
          <span>Serving {site.serviceArea}</span>
          {!site.hoursPlaceholder && <span>{site.hours}</span>}
        </div>
      </div>
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
        <Logo />
        <nav
          className="hidden items-center gap-3 text-sm font-semibold text-ink-700 md:flex lg:gap-8"
          aria-label="Main navigation"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className="whitespace-nowrap hover:text-brand-700"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {site.phoneHref ? (
            <a
              className="hidden whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 lg:inline-flex"
              href={site.phoneHref}
            >
              {site.phone}
            </a>
          ) : (
            <Link
              className="hidden whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 lg:inline-flex"
              href="/contact#request-service"
            >
              Request Service
            </Link>
          )}
          <button
            ref={toggle}
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-100 text-ink-900 md:hidden"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-72px)] overflow-auto border-b border-ink-100 bg-white px-6 py-3 md:hidden"
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            className="flex min-h-11 items-center justify-between border-b border-ink-100 py-2 font-semibold text-ink-900 last:border-0"
            href={href}
            onClick={() => setOpen(false)}
            aria-current={pathname === href ? "page" : undefined}
          >
            {label} <Icon width="18" height="18" />
          </Link>
        ))}
      </nav>
    </header>
  );
}
