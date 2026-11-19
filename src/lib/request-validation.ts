export type ServiceRequest = {
  name: string;
  phone: string;
  zip: string;
  service: string;
  details: string;
};
export type RequestValidation =
  | { ok: true; data: ServiceRequest }
  | { ok: false; errors: Partial<Record<keyof ServiceRequest, string>> };

export function isSameOrigin(
  origin: string | null,
  host: string | null,
  requestUrl: string,
): boolean {
  if (!origin) return true;
  try {
    const expected = new URL(requestUrl);
    // Next's internal request URL can use localhost while the browser uses 127.0.0.1.
    // Preserve the incoming Host, including its port, when checking the browser Origin.
    if (host) expected.host = host;
    return origin === expected.origin;
  } catch {
    return false;
  }
}

export function validateRequest(
  input: unknown,
  serviceSlugs: readonly string[],
): RequestValidation {
  const value =
    input && typeof input === "object" && !Array.isArray(input)
      ? (input as Record<string, unknown>)
      : {};
  const string = (key: string) =>
    typeof value[key] === "string" ? value[key].trim() : "";
  const data: ServiceRequest = {
    name: string("name"),
    phone: string("phone"),
    zip: string("zip"),
    service: string("service"),
    details: string("details"),
  };
  const errors: Partial<Record<keyof ServiceRequest, string>> = {};
  if (data.name.length < 2 || data.name.length > 100)
    errors.name = "Enter your full name (2–100 characters).";
  const digits = data.phone.replace(/\D/g, "");
  if (
    !/^[+\d\s().-]+$/.test(data.phone) ||
    digits.length < 10 ||
    digits.length > 15 ||
    data.phone.length > 30
  )
    errors.phone = "Enter a valid phone number with 10–15 digits.";
  if (!/^\d{5}(-\d{4})?$/.test(data.zip))
    errors.zip = "Enter a valid US ZIP code.";
  if (!serviceSlugs.includes(data.service) && data.service !== "not-sure")
    errors.service = "Choose a service.";
  if (data.details.length > 2000)
    errors.details = "Keep the message under 2,000 characters.";
  return Object.keys(errors).length
    ? { ok: false, errors }
    : { ok: true, data };
}
