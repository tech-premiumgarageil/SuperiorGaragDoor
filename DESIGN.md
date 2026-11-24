---
name: Superior Garage Doors USA
description: Superior's red, blue, and white identity in a BestPro-inspired layout.
colors:
  service-red: "#D62E34"
  service-red-hover: "#B71E26"
  workwear-blue: "#153B64"
  siding-white: "#FFFFFF"
  pale-surface: "#F2F5F8"
  body-ink: "#172B40"
  muted-ink: "#536477"
  divider: "#CCD5DF"
  blue-surface-text: "#D7E4F1"
  footer-blue: "#0D2C4D"
typography:
  display:
    fontFamily: "Barlow, sans-serif"
    fontSize: "96px"
    fontWeight: 700
    lineHeight: "0.95"
    letterSpacing: "-0.025em"
  display-mobile:
    fontFamily: "Barlow, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: "0.95"
  service-display:
    fontFamily: "Barlow, sans-serif"
    fontSize: "60px"
    fontWeight: 700
    lineHeight: "60px"
  service-display-mobile:
    fontFamily: "Barlow, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: "48px"
  headline:
    fontFamily: "Barlow, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: "48px"
    letterSpacing: "-0.015em"
  wordmark:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: "30px"
    letterSpacing: "0.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "28px"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "20px"
rounded:
  field: "4px"
  button: "999px"
  panel: "8px"
  service-card: "32px"
  hero-panel: "16px"
spacing:
  field-block: "11px"
  field-inline: "14px"
  form-gap: "17px"
  panel-mobile: "24px"
  panel-desktop: "32px"
  gutter-mobile: "24px"
  gutter-desktop: "64px"
components:
  button-primary:
    backgroundColor: "{colors.service-red}"
    textColor: "{colors.siding-white}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "15px 20px"
  button-primary-hover:
    backgroundColor: "{colors.service-red-hover}"
    textColor: "{colors.siding-white}"
  field:
    backgroundColor: "{colors.siding-white}"
    textColor: "{colors.body-ink}"
    rounded: "{rounded.field}"
    padding: "11px 14px"
  hero-panel:
    backgroundColor: "{colors.siding-white}"
    rounded: "{rounded.hero-panel}"
    padding: "32px"
  service-photo-card:
    backgroundColor: "{colors.siding-white}"
    rounded: "{rounded.service-card}"
---

# Design System: Superior Garage Doors USA

## Layout

The BestPro homepage composition uses a full-width photo, a two-column headline and request panel, four service shortcuts, photo cards, a service information section, reviews, service areas, FAQs, and a closing contact band. About, Contact, Reviews, Services, and Service Areas use the reference’s photo headers and page layouts. Highland Park leads the homepage and area directory.

The reference uses a 1200px content width and 24px gutters. Service cards display in three columns at 1024px and above, two columns from 640px, and one column on smaller screens. On mobile, the hero request form follows the headline and actions. The bottom bar keeps calling and requesting service within reach.

## Brand

Superior’s existing navy, red, and white palette, logo, and typefaces carry through the port. Tailwind colors are declared in `tailwind.config.ts`. Local fonts, photo overlays, request fields, and keyboard focus styles live in `src/app/globals.css`. Barlow 700 leads headings, Barlow Condensed 700 serves the wordmark, and Manrope serves body copy.

The red call button has white text. Dark heroes use pale blue accent type and a navy gradient over the photos. White service cards have clipped photo headers. The form uses a white panel with persistent labels and visible pending, validation, and delivery states.

## Photos and reviews

The 11 BestPro photos retain their original filenames. Superior’s installation and commercial services use their existing photographs. Image colors in headings and callouts come from Superior’s palette. The Reviews page points to Superior’s reviews when a profile is configured.
