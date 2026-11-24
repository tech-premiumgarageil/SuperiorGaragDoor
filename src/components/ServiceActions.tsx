import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function CallLink({
  className,
  children,
}: {
  className: string;
  children?: ReactNode;
}) {
  if (!site.phoneHref) return null;
  return (
    <a className={className} href={site.phoneHref}>
      {children ?? `Call ${site.phone}`}
    </a>
  );
}

export function RequestLink({
  href = "/contact#request-service",
  className,
  children,
}: {
  href?: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
