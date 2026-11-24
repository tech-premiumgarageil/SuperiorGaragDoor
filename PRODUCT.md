# Superior Garage Doors USA

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16.4.6 App Router, React 19.2, TypeScript, Tailwind CSS 3, and custom CSS. Node.js 24 or newer. The BestPro Garage Doors layouts and images are local assets in this project. The approved [Paper file](https://app.paper.design/file/01M7NGKTX1SH1T9YZH3SP7SV5D/p-1-0) records Superior's brand assets and palette.

## Product Purpose

Help Highland Park and Chicago homeowners and commercial property managers find the service they need and start a garage door service request. Highland Park is the primary homepage location. **Request service** is the primary action. Scheduling and availability are confirmed separately.

## Operating Context

The office will be in Highland Park, Illinois. Its opening date is to be confirmed. Public contact details come from environment settings.

The project is open in VS Code and runs locally. It uses the `main` branch and the repository [tech-premiumgarageil/SuperiorGaragDoor](https://github.com/tech-premiumgarageil/SuperiorGaragDoor). Hostinger is the selected deployment target; successful public deployment has not yet been verified. A repository alone does not host the Next.js server or request handler.

## Capabilities and Constraints

The site includes the homepage, service and area indexes, 17 city pages, and About, Contact, and Reviews. The service directory combines the seven BestPro service pages with Superior’s installation and commercial offerings. Six earlier service URLs remain available for a total of 15 individual service pages.

Service pages have individual photos, information, FAQs, related services, and a form that selects the current service. City pages list their ZIP codes and available services. Sitemap, robots, Markdown versions, and a read-only JSON API expose the site's public content.

Forms use native controls, client/server validation, pending state and clear feedback. They POST to `/api/service-request`. An optional server-only `SERVICE_REQUEST_WEBHOOK_URL` forwards validated request JSON to an HTTPS destination. With that setting blank, valid requests receive HTTP 503 and explicitly report that nothing was sent. The application does not store or log submitted personal information. Live delivery to an actual business destination remains untested.

Public business settings come from the environment and require a restart or rebuild. Set `NEXT_PUBLIC_REVIEWS_URL` to link the Reviews page to Superior’s verified reviews. Service availability, rates, and terms are confirmed by Superior.

## Brand Commitments

Modern Local Pro: red, blue and white; the approved generalist roof-and-garage logo; Barlow, Barlow Condensed and Manrope. The business name follows the supplied domain. This is an established-identity port, with responsive interpolation and usable interaction states. `DESIGN.md` records the implemented visual system.

## Users

Highland Park and Chicago homeowners and commercial property managers seeking help with a stuck, noisy, damaged or outdated garage door or opener. People may recognize a symptom without knowing the part or service name.

## Evidence on Hand

BestPro’s 11 image files were copied from its local repository. The original Superior assets and credits are retained in `public/images/` and `image-sources.json`. Local font license texts are in `public/fonts/`.
