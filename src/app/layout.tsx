import type { Metadata, Viewport } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyCallBar } from "@/components/StickyCallBar";
import { JsonLd } from "@/components/JsonLd";
import { areas } from "@/data/areas";
import { site } from "@/lib/site";
import "./globals.css";

const homeTitle = `Garage Door Repair in Highland Park, IL | ${site.name}`;
const heroImage = {
  url: "/images/garage-service-hero-bright.png",
  width: 1672,
  height: 941,
  alt: "Garage door technician working on a residential garage door",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: homeTitle, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: homeTitle,
    description: site.description,
    images: [heroImage],
  },
  twitter: { card: "summary_large_image", images: [heroImage.url] },
};

export const viewport: Viewport = {
  themeColor: "#153B64",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#localbusiness`,
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}${heroImage.url}`,
  telephone: site.phoneHref ? site.phone : undefined,
  email: site.emailHref ? site.email : undefined,
  areaServed: areas.map(({ city }) => ({ "@type": "City", name: city })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col bg-white text-ink-700">
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <StickyCallBar />
        <JsonLd data={localBusiness} />
      </body>
    </html>
  );
}
