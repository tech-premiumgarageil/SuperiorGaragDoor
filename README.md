# Superior Garage Doors USA

A Next.js site for Superior Garage Doors USA that uses BestPro’s layouts and photography with Superior’s brand. It includes a Highland Park homepage, service and area directories, 15 service pages, 17 city pages, and About, Reviews, and Contact pages. It uses Next.js 16.4.6, React 19.2, TypeScript, Tailwind CSS 3, and local fonts.

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

| Change                                          | File                                                                      |
| ----------------------------------------------- | ------------------------------------------------------------------------- |
| Homepage sections and copy                      | `src/app/page.tsx`                                                        |
| Colors, typography and shared styles            | `tailwind.config.ts`, `src/app/globals.css`                               |
| Service copy, slugs, photos and FAQs            | `src/lib/services.ts`, `src/lib/services.json`                            |
| City names, ZIP codes, and city copy            | `src/data/areas.ts`                                                       |
| Shared service-page layout                      | `src/app/services/[slug]/page.tsx`                                        |
| Business contact settings and placeholder logic | `src/lib/site.ts`                                                         |
| Request forms and delivery handler              | `src/components/request-form.tsx`, `src/app/api/service-request/route.ts` |
| Photography and source credits                  | `public/images/`, `image-sources.json`                                    |

See `DESIGN.md` for the implemented visual system and `PRODUCT.md` for product scope and remaining setup.

## Contact and request setup

Set Superior’s public contact details in `.env.local` with `NEXT_PUBLIC_PHONE_NUMBER`, `NEXT_PUBLIC_EMAIL_ADDRESS`, `NEXT_PUBLIC_STREET_ADDRESS`, `NEXT_PUBLIC_OFFICE_ZIP_CODE`, and `NEXT_PUBLIC_BUSINESS_HOURS`. The Highland Park office is described as **future**. Set `NEXT_PUBLIC_REVIEWS_URL` to Superior’s reviews profile and check `NEXT_PUBLIC_SITE_URL` against the production URL. Public `NEXT_PUBLIC_` values require a development-server restart or a production rebuild.

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

## Assets

The 11 images copied from the local BestPro repository include the hero, service card, area, and hardware photos. The original Superior installation and commercial images also appear on their service pages. `image-sources.json` preserves the original Superior photo credits.

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
