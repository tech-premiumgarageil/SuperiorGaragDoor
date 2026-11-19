# Superior Garage Doors USA

A responsive Next.js implementation of the approved [Paper website](https://app.paper.design/file/01M7NGKTX1SH1T9YZH3SP7SV5D/p-1-0): homepage, service index and nine service pages. Uses Next.js 16.4.6, React 19.2, TypeScript, plain CSS, local fonts and local photography.

## Run locally

Requires **Node.js 24 or newer** and npm.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000). Stop the server with Ctrl+C.

In VS Code, choose **File → Open Folder** and select this project folder. After installing dependencies, choose **Terminal → Run Task → Start website** to start the same development server. The **Build website** task runs a production build.

## Edit the website

| Change                                                         | File                                                                      |
| -------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Homepage sections and copy                                     | `src/app/page.tsx`                                                        |
| Colors, typography, layout and responsive rules                | `src/app/globals.css`                                                     |
| All nine services: copy, slugs, photos, FAQs and related links | `src/lib/services.json`                                                   |
| Shared service-page layout                                     | `src/app/services/[slug]/page.tsx`                                        |
| Business contact settings and placeholder logic                | `src/lib/site.ts`, `.env.example`                                         |
| Request forms and delivery handler                             | `src/components/request-form.tsx`, `src/app/api/service-request/route.ts` |
| Photography and source credits                                 | `public/images/`, `image-sources.json`                                    |

See `DESIGN.md` for the implemented visual system and `PRODUCT.md` for product scope and remaining setup.

## Contact and request setup

Phone, email, street address, office ZIP code and hours are conspicuous placeholders until supplied. The Highland Park office is described as **future**. Enter the real values in `.env.local` using the names in `.env.example`; check `NEXT_PUBLIC_SITE_URL` against the eventual production URL. Public `NEXT_PUBLIC_` values require a development-server restart or a production rebuild.

`SERVICE_REQUEST_WEBHOOK_URL` is server-only and intentionally blank by default. In this state the form reports that contact setup is pending; a valid submission receives HTTP 503 and clear **not sent** feedback. This application does not store or log submitted personal information.

To connect delivery, supply an HTTPS webhook destination in `.env.local` and restart/rebuild. It receives a JSON POST with `name`, `phone`, `zip`, `service` (slug), `details`, `serviceName`, `source` and `submittedAt`. The handler validates requests, checks browser origin, limits body size and waits up to eight seconds for the destination. A successful HTTP response from the destination produces a sent confirmation; failures produce not-sent feedback. Scheduling and availability remain separate. **Live delivery to a business destination has not been tested.** Actual contact details and an integration destination are still required.

## Check and build

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

`typecheck` generates Next route types before running TypeScript. `npm start` serves the production build at [http://127.0.0.1:3000](http://127.0.0.1:3000); stop the development server first if it uses that port.

Handoff verification passed lint, type checking, nine validation/origin tests and the production build. All nine service pages prerendered successfully. Browser checks covered the homepage at 320, 390, 549, 800, 1024 and 1440px, all service pages at 390px, navigation, Escape, form validation, pending state and phone-placeholder behavior. HTTP checks covered routes, local images/fonts, 404, sitemap/robots and request responses (invalid service: 400; cross-origin: 403; valid request without a webhook: 503). Independent design review returned **ship** after comparing captures, service copy and SVG geometry with Paper. This is scoped verification, not a formal accessibility conformance assessment.

## Assets

The five local photographs come from the user-selected [Premium Garage Door website](https://premiumgarageil.com/) and remain labeled illustrative reference photography. They are not presented as Superior company projects. `image-sources.json` credits each original URL and its design role; the local mapping is:

| Local file         | Credited original                                        |
| ------------------ | -------------------------------------------------------- |
| `hero.webp`        | `Premium-Garage-Door-47.webp`                            |
| `repair.jpg`       | `Premium-Garage-Door-53.jpg`                             |
| `installation.jpg` | `Premium-Garage-Door-Overlay_Carriage_House-Doors-2.jpg` |
| `commercial.webp`  | `commerical-customer.webp`                               |
| `hardware.jpg`     | `rolling-garage-doors.jpg`                               |

Barlow, Barlow Condensed and Manrope are served locally. Their SIL Open Font License texts are in `public/fonts/barlow-OFL.txt`, `public/fonts/barlowcondensed-OFL.txt` and `public/fonts/manrope-OFL.txt`.

## GitHub and hosting

The project uses `main` and the repository [tech-premiumgarageil/SuperiorGaragDoor](https://github.com/tech-premiumgarageil/SuperiorGaragDoor). To upload future changes from this folder:

```sh
git add .
git commit -m "Update website"
git push -u origin main
```

`.gitignore` excludes dependencies, build outputs, local environment files and review captures. Keep real environment settings in the hosting service's environment configuration.

A GitHub repository alone does not publish the Next.js server or request endpoint. Install dependencies with `npm ci`, build with `npm run build` and run with `npm start` (or the host's native Next.js adapter). The start script binds to loopback; a host requiring a public bind address must use its supported start command. Hostinger is the selected deployment target; successful public deployment has not yet been verified.

For Hostinger, select the Next.js framework, Node.js 24 and build command `npm run build` (which uses Webpack). Configuration lives in `next.config.mjs` so Node can load it directly, including when an older Linux system requires Next.js's WebAssembly compiler fallback. If a previous deployment failed while loading `next.config.ts`, redeploy the latest `main` commit. The configuration change bypasses TypeScript config compilation; it does not upgrade the host's GLIBC library.
