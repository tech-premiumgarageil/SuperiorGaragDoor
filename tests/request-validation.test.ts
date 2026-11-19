import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import {
  isSameOrigin,
  validateRequest,
} from "../src/lib/request-validation.ts";

const services = JSON.parse(
  readFileSync(new URL("../src/lib/services.json", import.meta.url), "utf8"),
) as {
  slug: string;
  title: string;
  image: string;
  faqs: unknown[];
  related: string[];
}[];
const slugs = services.map((s) => s.slug);
const valid = {
  name: " Test Customer ",
  phone: "+1 (312) 555-0100",
  zip: "60035",
  service: "garage-door-repair",
  details: " A door that will not close. ",
};

test("accepts valid requests and trims user-entered fields", () => {
  const result = validateRequest(valid, slugs);
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.data.name, "Test Customer");
    assert.equal(result.data.details, "A door that will not close.");
  }
});
test("checks the public host and port instead of Next's internal hostname", () => {
  assert.equal(
    isSameOrigin(
      "http://127.0.0.1:3000",
      "127.0.0.1:3000",
      "http://localhost:3000/api/service-request",
    ),
    true,
  );
  assert.equal(
    isSameOrigin(
      "https://superiorgaragedoorsusa.com",
      "superiorgaragedoorsusa.com",
      "https://localhost/api/service-request",
    ),
    true,
  );
  assert.equal(
    isSameOrigin(
      "https://other.example",
      "superiorgaragedoorsusa.com",
      "https://localhost/api/service-request",
    ),
    false,
  );
  assert.equal(
    isSameOrigin(
      "http://127.0.0.1:3001",
      "127.0.0.1:3000",
      "http://localhost:3000/api/service-request",
    ),
    false,
  );
  assert.equal(
    isSameOrigin(
      "null",
      "127.0.0.1:3000",
      "http://localhost:3000/api/service-request",
    ),
    false,
  );
});
test("rejects malformed and missing payloads without throwing", () => {
  for (const value of [null, undefined, 1, "request", [], {}, { name: 42 }])
    assert.equal(validateRequest(value, slugs).ok, false);
});
test("rejects a forged service instead of sending unrecognized requests", () => {
  assert.equal(
    validateRequest({ ...valid, service: "unlisted-service" }, slugs).ok,
    false,
  );
});
test("allows help choosing a service", () => {
  assert.equal(
    validateRequest({ ...valid, service: "not-sure" }, slugs).ok,
    true,
  );
});
test("requires a usable phone number", () => {
  for (const phone of [
    "123",
    "(312) CALL-NOW",
    "1".repeat(31),
    "+1234567890123456",
  ])
    assert.equal(validateRequest({ ...valid, phone }, slugs).ok, false);
});
test("accepts five-digit ZIPs and ZIP+4 but rejects other postal values", () => {
  assert.equal(
    validateRequest({ ...valid, zip: "60035-1234" }, slugs).ok,
    true,
  );
  for (const zip of ["6003", "600351", "abcde", "60035-extra"])
    assert.equal(validateRequest({ ...valid, zip }, slugs).ok, false);
});
test("limits message and name lengths", () => {
  assert.equal(
    validateRequest({ ...valid, details: "x".repeat(2000) }, slugs).ok,
    true,
  );
  assert.equal(
    validateRequest({ ...valid, details: "x".repeat(2001) }, slugs).ok,
    false,
  );
  assert.equal(
    validateRequest({ ...valid, name: "x".repeat(101) }, slugs).ok,
    false,
  );
});
test("all nine exported services have unique routes, three FAQs, valid related routes, and local images", () => {
  assert.equal(services.length, 9);
  assert.equal(new Set(slugs).size, 9);
  for (const service of services) {
    assert.equal(service.faqs.length, 3, service.title);
    assert.equal(service.related.length, 3, service.title);
    for (const slug of service.related)
      assert.ok(slugs.includes(slug), `${service.title}: ${slug}`);
    assert.ok(
      existsSync(new URL(`../public${service.image}`, import.meta.url)),
      service.image,
    );
  }
});
