import type { Metadata, Viewport } from "next";
import { Header } from "@/components/header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Garage Door Repair in Chicago, IL | Superior Garage Doors USA",
    template: "%s | Superior Garage Doors USA",
  },
  description:
    "Garage door repair, installation, opener services, and commercial garage door service for Chicago and Highland Park, Illinois. Request service from Superior Garage Doors USA.",
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: site.name,
    description:
      "Garage door services for Chicago and Highland Park, Illinois.",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 800,
        alt: "Residential garage door",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = {
  themeColor: "#153B64",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/manrope-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/barlow-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
