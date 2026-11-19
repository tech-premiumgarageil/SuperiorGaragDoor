"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";
import { Icon } from "./icons";
import { site } from "@/lib/site";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#how-we-help", label: "How we help" },
  { href: "/#service-area", label: "Service area" },
  { href: "/#contact", label: "Contact" },
];
export function Header() {
  const pathname = usePathname();
  const requestHref = pathname.startsWith("/services/")
    ? "#request-service"
    : "/#request-service";
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="service-strip">
        <div className="container strip-inner">
          <span>Garage door service for Chicago &amp; Highland Park, IL</span>
          <span className="strip-secondary">Residential &amp; commercial</span>
        </div>
      </div>
      <div className="navigation">
        <div className="container navigation-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <Link href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <div className="header-phone">
              <span className="placeholder-label">
                {site.phonePlaceholder ? "Phone placeholder" : "Call Superior"}
              </span>
              {site.phoneHref ? (
                <a href={site.phoneHref}>{site.phone}</a>
              ) : (
                <span>{site.phone}</span>
              )}
            </div>
            <Link className="button button-primary" href={requestHref}>
              Request service <Icon />
            </Link>
          </div>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            onClick={() => setOpen(false)}
          >
            {link.label}
            <Icon />
          </Link>
        ))}
        <Link
          href={requestHref}
          className="button button-primary"
          onClick={() => setOpen(false)}
        >
          Request service <Icon />
        </Link>
      </nav>
    </header>
  );
}
