import Link from "next/link";
import { services, serviceHref, serviceSummaries } from "@/lib/services";
import { Icon, serviceIcon } from "./icons";

export function ServiceList({
  includeEmergency = false,
}: {
  includeEmergency?: boolean;
}) {
  const list = includeEmergency
    ? services
    : [
        ...services.filter(
          (s) =>
            !s.slug.startsWith("emergency") && !s.slug.startsWith("commercial"),
        ),
        ...services.filter((s) => s.slug.startsWith("commercial")),
      ];
  return (
    <div className="service-list">
      {list.map((service) => (
        <Link
          className="service-row"
          href={serviceHref(service.slug)}
          key={service.slug}
        >
          <span className="service-row-icon">
            <Icon name={serviceIcon(service.slug)} width="36" height="36" />
          </span>
          <span className="service-row-copy">
            <h3>{service.title}</h3>
            <span>{serviceSummaries[service.slug]}</span>
          </span>
          <Icon className="service-row-arrow" />
        </Link>
      ))}
    </div>
  );
}
