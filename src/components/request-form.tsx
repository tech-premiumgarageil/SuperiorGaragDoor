"use client";

import { useId, useState, type FormEvent } from "react";
import { services } from "@/lib/services";
import { validateRequest } from "@/lib/request-validation";
import { Icon } from "./icons";

export function RequestForm({
  serviceSlug,
  detailed = false,
  id,
  deliveryConfigured = false,
}: {
  serviceSlug?: string;
  detailed?: boolean;
  id?: string;
  deliveryConfigured?: boolean;
}) {
  const uid = useId();
  const selected = services.find((s) => s.slug === serviceSlug);
  const [pending, setPending] = useState(false);
  const [feedback, setFeedback] = useState<{
    message: string;
    success: boolean;
  } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    const result = validateRequest(
      fields,
      services.map((s) => s.slug),
    );
    setFeedback(null);
    if (!result.ok) {
      setErrors(result.errors);
      const first = Object.keys(result.errors)[0];
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setErrors({});
    setPending(true);
    try {
      const response = await fetch("/api/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, website: fields.website || "" }),
      });
      const body = await response.json();
      setFeedback({
        message:
          body.message || "Your request could not be sent. Please try again.",
        success: response.ok,
      });
      if (response.ok) form.reset();
    } catch {
      setFeedback({
        message:
          "Your request was not sent. Check your connection and try again.",
        success: false,
      });
    } finally {
      setPending(false);
    }
  }
  const fieldError = (name: string) =>
    errors[name] ? (
      <span className="field-error" id={`${uid}-${name}-error`}>
        {errors[name]}
      </span>
    ) : null;
  return (
    <section
      className="request-panel"
      id={id}
      aria-labelledby={`${uid}-heading`}
    >
      <div className="form-intro">
        <h2 id={`${uid}-heading`}>
          {selected || detailed
            ? "Request service"
            : "Request garage door service"}
        </h2>
        {selected ? (
          <p className="selected-service">{selected.title}</p>
        ) : (
          <p>
            {detailed
              ? "A little information gets the conversation started."
              : "Tell us how we can help. Start your request here."}
          </p>
        )}
      </div>
      <form onSubmit={submit} className="request-form" aria-busy={pending}>
        <label htmlFor={`${uid}-name`}>
          Full name
          <input
            id={`${uid}-name`}
            name="name"
            aria-label="Full name"
            autoComplete="name"
            placeholder="Your name"
            required
            minLength={2}
            maxLength={100}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${uid}-name-error` : undefined}
          />
          {fieldError("name")}
        </label>
        <label htmlFor={`${uid}-phone`}>
          Phone number
          <input
            id={`${uid}-phone`}
            type="tel"
            name="phone"
            aria-label="Phone number"
            autoComplete="tel"
            placeholder="Your phone number"
            required
            maxLength={30}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? `${uid}-phone-error` : undefined}
          />
          {fieldError("phone")}
        </label>
        {selected ? (
          <input type="hidden" name="service" value={selected.slug} />
        ) : (
          <label htmlFor={`${uid}-service`}>
            Service needed
            <select
              id={`${uid}-service`}
              name="service"
              aria-label="Service needed"
              defaultValue=""
              required
              aria-invalid={!!errors.service}
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option value={s.slug} key={s.slug}>
                  {s.title}
                </option>
              ))}
              <option value="not-sure">Not sure — help me choose</option>
            </select>
            {fieldError("service")}
          </label>
        )}
        <label htmlFor={`${uid}-zip`}>
          ZIP code
          <input
            id={`${uid}-zip`}
            name="zip"
            aria-label="ZIP code"
            autoComplete="postal-code"
            inputMode="numeric"
            pattern="[0-9]{5}(-[0-9]{4})?"
            placeholder="Your ZIP code"
            required
            maxLength={10}
            aria-invalid={!!errors.zip}
            aria-describedby={errors.zip ? `${uid}-zip-error` : undefined}
          />
          {fieldError("zip")}
        </label>
        {(selected || detailed) && (
          <label htmlFor={`${uid}-details`}>
            {selected
              ? "Tell us about your door (optional)"
              : "What’s happening? (optional)"}
            <textarea
              id={`${uid}-details`}
              name="details"
              placeholder={
                selected
                  ? "Describe the problem or project."
                  : "Tell us about your door or project."
              }
              maxLength={2000}
              rows={3}
            />
            {fieldError("details")}
          </label>
        )}
        <div className="form-honeypot" aria-hidden="true">
          <label>
            Leave this field empty
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>
        <button
          className="button button-primary form-submit"
          type="submit"
          disabled={pending}
        >
          {pending ? "Sending request…" : "Request service"}
          <Icon />
        </button>
        {feedback && (
          <p
            className={`form-feedback${feedback.success ? " form-success" : ""}`}
            role="status"
          >
            {feedback.message}
          </p>
        )}
        <p className="form-footnote">
          {selected
            ? "Scheduling and availability are confirmed separately."
            : "For urgent issues, use the emergency call option."}
        </p>
        {!deliveryConfigured && (
          <p className="form-preview-note">
            Contact setup pending. Requests will not be delivered until the
            service connection is configured.
          </p>
        )}
      </form>
    </section>
  );
}
