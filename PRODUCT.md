# Superior Garage Doors USA

<!-- impeccable:product-schema 1 -->

## Platform

Responsive web application.

## Stack

Next.js 16.4.6 App Router, React 19.2, TypeScript and plain CSS. Node.js 24 or newer. Fonts and five reference photographs are local assets. The approved [Paper file](https://app.paper.design/file/01M7NGKTX1SH1T9YZH3SP7SV5D/p-1-0) remains the visual reference.

## Product Purpose

Help Chicago homeowners and commercial property managers understand the service they need and start a garage-door service request. **Request service** is the primary action; the emergency call option is secondary. Scheduling and availability are confirmed separately.

## Operating Context

The office will be in Highland Park, Illinois. Its opening date and street address are undecided. Phone, email, street address, office ZIP code and hours remain clearly marked placeholders. The user still needs to provide actual business contact details and an integration destination.

The project is open in VS Code and runs locally. It uses the `main` branch and the repository [tech-premiumgarageil/SuperiorGaragDoor](https://github.com/tech-premiumgarageil/SuperiorGaragDoor). Hostinger is the selected deployment target; successful public deployment has not yet been verified. A repository alone does not host the Next.js server or request handler.

## Capabilities and Constraints

The homepage, `/services` index and nine service routes are implemented:

- Emergency Garage Door Services
- Garage Door Repair
- Garage Door Installation
- Garage Door Opener Repair
- Garage Door Opener Installation
- Commercial Garage Door
- Garage Door Spring Replacement
- Garage Door Cable Repair
- Garage Off-Track Repair

Each service page contains its own introduction, reasons to request service, helpful details, three expanded FAQs and related services. Service-specific forms keep the current service fixed. Shared navigation, mobile menu, request anchors, placeholder call feedback, 404, route metadata, sitemap and robots are implemented.

Forms use native controls, client/server validation, pending state and clear feedback. They POST to `/api/service-request`. An optional server-only `SERVICE_REQUEST_WEBHOOK_URL` forwards validated request JSON to an HTTPS destination. With that setting blank, valid requests receive HTTP 503 and explicitly report that nothing was sent. The application does not store or log submitted personal information. Live delivery to an actual business destination remains untested.

Public business settings come from `.env.local` using `.env.example`; public changes require a restart/rebuild. No supplied ratings, testimonials, credentials, warranties, response times or pricing are invented. Safety copy explains service needs without giving DIY repair instructions.

## Brand Commitments

Modern Local Pro: red, blue and white; the approved generalist roof-and-garage logo; Barlow, Barlow Condensed and Manrope. The business name follows the supplied domain. This is an established-identity port, with responsive interpolation and usable interaction states. `DESIGN.md` records the implemented visual system.

## Users

Assumed audience: Chicago homeowners and commercial property managers seeking help with a stuck, noisy, damaged or outdated garage door or opener. People may recognize a symptom without knowing the part or service name.

## Evidence on Hand

The user supplied the domain, locations, service list and approved Paper direction. Page content and logo/diagram geometry were compared with native Paper exports. The five user-selected photos originate at premiumgarageil.com; `image-sources.json` preserves source URLs. They remain illustrative references and are not company project evidence. Local font license texts are in `public/fonts/`.

Handoff checks passed lint, Next route type generation/TypeScript, nine Node validation/origin tests and the production build. All nine service routes prerendered. HTTP checks passed for routes, assets, 404, sitemap/robots and expected 400/403/503 request behavior. Homepage browser checks covered 320–1440px, including 390, 549, 800 and 1024px; all nine services were checked at 390px for wrapping, overflow and current-service selection. Menu/Escape, validation, pending state and phone placeholders were exercised.

Independent design review returned **ship**: all 13 captures were valid, 180 service-copy strings matched native Paper exports, logo/diagram paths matched and checked core color pairs met contrast thresholds. The reviewer did not independently rerun the tests or browser checks. This evidence does not establish formal accessibility conformance or live request delivery.
