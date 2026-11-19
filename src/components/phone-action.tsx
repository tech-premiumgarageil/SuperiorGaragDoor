"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Icon } from "./icons";

export function PhoneAction({
  className = "button button-outline",
}: {
  className?: string;
}) {
  const [notice, setNotice] = useState(false);
  const content = (
    <>
      Call {site.phone}
      <Icon />
    </>
  );
  if (site.phoneHref)
    return (
      <a className={className} href={site.phoneHref}>
        {content}
      </a>
    );
  return (
    <span className="phone-action">
      <button
        type="button"
        className={className}
        aria-expanded={notice}
        onClick={() => setNotice(!notice)}
      >
        {content}
      </button>
      {notice && (
        <span role="status" className="phone-notice">
          Phone number to be added. Use the service request form below.
        </span>
      )}
    </span>
  );
}
