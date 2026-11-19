import { site } from "@/lib/site";
import { RequestForm } from "./request-form";
import { Icon } from "./icons";

export function LocationSection() {
  return (
    <section id="service-area" className="location-section">
      <div className="container location-layout">
        <div>
          <h2 className="condensed-heading">
            Your Chicago garage door team.
            <br />A new home in Highland Park.
          </h2>
          <p>
            Serving homes and businesses in Chicago and Highland Park, Illinois.
            Our future office will be in Highland Park.
          </p>
        </div>
        <div className="office-address">
          <Icon name="pin" width="40" height="46" />
          <div>
            <h3>Future Highland Park office</h3>
            <address>
              {site.street}
              <br />
              Highland Park, IL {site.zip}
            </address>
            <p className="placeholder-label">
              {site.addressPlaceholder && "Address placeholder · "}Opening date
              to be confirmed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-layout">
        <div className="contact-copy">
          <h2 className="condensed-heading">
            LET’S GET YOUR
            <br />
            DOOR MOVING.
          </h2>
          <p>
            Tell us what you need and where you’re located. Start with a repair,
            an installation, or a question.
          </p>
          <dl>
            <div>
              <dt>{site.phonePlaceholder ? "Phone placeholder" : "Phone"}</dt>
              <dd>
                {site.phoneHref ? (
                  <a href={site.phoneHref}>{site.phone}</a>
                ) : (
                  site.phone
                )}
              </dd>
            </div>
            <div>
              <dt>{site.emailPlaceholder ? "Email placeholder" : "Email"}</dt>
              <dd>
                {site.emailHref ? (
                  <a href={site.emailHref}>{site.email}</a>
                ) : (
                  site.email
                )}
              </dd>
            </div>
            <div>
              <dt>{site.hoursPlaceholder ? "Hours placeholder" : "Hours"}</dt>
              <dd>{site.hours}</dd>
            </div>
          </dl>
        </div>
        <RequestForm
          detailed
          deliveryConfigured={!!process.env.SERVICE_REQUEST_WEBHOOK_URL}
        />
      </div>
    </section>
  );
}
