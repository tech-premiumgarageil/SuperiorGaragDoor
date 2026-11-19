import Link from "next/link";
import { Logo } from "./logo";
import { site } from "@/lib/site";

export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer className={`site-footer${compact ? " footer-compact" : ""}`}>
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo reversed />
          <p>
            Garage door services for homes and businesses in Chicago and
            Highland Park, Illinois.
          </p>
          <Link href="/">superiorgaragedoorsusa.com</Link>
        </div>
        {!compact && (
          <>
            <div className="footer-contact">
              <h2>Contact Superior</h2>
              <span className="placeholder-label">
                {site.phonePlaceholder ? "Phone placeholder" : "Phone"}
              </span>
              {site.phoneHref ? (
                <a href={site.phoneHref}>{site.phone}</a>
              ) : (
                <p>{site.phone}</p>
              )}
              <p>
                {site.emailPlaceholder && "Email placeholder · "}
                {site.emailHref ? (
                  <a href={site.emailHref}>{site.email}</a>
                ) : (
                  site.email
                )}
                <br />
                {site.hoursPlaceholder && "Hours placeholder · "}
                {site.hours}
              </p>
            </div>
            <div>
              <h2>Future Highland Park office</h2>
              <p>
                {site.street}
                <br />
                Highland Park, IL {site.zip}
              </p>
              <p className="footer-note">
                {site.addressPlaceholder && (
                  <>
                    Address placeholder
                    <br />
                  </>
                )}
                Opening date to be confirmed
              </p>
            </div>
          </>
        )}
        {compact && (
          <p className="footer-location">
            Chicago &amp; Highland Park, Illinois
            <br />
            <Link href="/services">Explore all services</Link>
          </p>
        )}
      </div>
    </footer>
  );
}
