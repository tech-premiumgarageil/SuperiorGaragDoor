---
name: Superior Garage Doors USA
description: Modern Local Pro — the approved Paper identity implemented in Next.js.
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
    fontSize: "56px"
    fontWeight: 600
    lineHeight: "62px"
    letterSpacing: "-0.015em"
  display-mobile:
    fontFamily: "Barlow, sans-serif"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: "44px"
  service-display:
    fontFamily: "Barlow, sans-serif"
    fontSize: "52px"
    fontWeight: 600
    lineHeight: "58px"
  service-display-mobile:
    fontFamily: "Barlow, sans-serif"
    fontSize: "38px"
    fontWeight: 600
    lineHeight: "43px"
  headline:
    fontFamily: "Barlow, sans-serif"
    fontSize: "44px"
    fontWeight: 600
    lineHeight: "50px"
    letterSpacing: "-0.015em"
  condensed-headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "52px"
    fontWeight: 600
    lineHeight: "55px"
    letterSpacing: "-0.015em"
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
  button: "5px"
  panel: "8px"
  service-card: "10px"
  hero-panel: "12px"
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

## Overview

**Creative North Star: "Modern Local Pro"**

This Next.js port preserves the approved [Paper website](https://app.paper.design/file/01M7NGKTX1SH1T9YZH3SP7SV5D/p-1-0): white siding, blue workwear and red service-truck cues, a residential photo hero, a clear service request panel and direct service explanations. The incumbent identity is retained; `src/app/globals.css` is the implementation source of truth.

**Key Characteristics:**

- Barlow hero and service headings, Barlow Condensed lower homepage headings and wordmark, Manrope reading text.
- Red primary actions, blue structure, generous white and pale surfaces.
- A softly lifted desktop hero form; quiet, mostly flat surrounding sections.
- Illustrative photography, visibly marked contact placeholders and a future office.

## Colors

### Primary

Service red marks Request service, roof geometry and diagram highlights. Its darker hover token gives primary buttons a visible interaction state.

### Secondary

Workwear blue anchors headings, navigation, garage geometry and broad service/contact sections. Footer blue supplies the deeper footer foundation.

### Neutral

Siding white carries forms, cards and reversed identity details. Pale surface groups orientation and FAQ content. Body ink and muted ink divide primary from supporting reading text; divider defines fields and quiet structural boundaries. Blue surface text supports reading on dark sections.

**The Action Hierarchy Rule.** Request service receives the strongest red treatment. Exploration and call controls remain secondary.

## Typography

All three families are served from `public/fonts/` with `font-display: swap` and sans-serif fallbacks.

| Role                                    | Desktop | Mobile  |
| --------------------------------------- | ------- | ------- |
| Homepage H1, Barlow 600                 | 56/62px | 40/44px |
| Service H1, Barlow 600                  | 52/58px | 38/43px |
| Standard H2, Barlow 600                 | 44/50px | 34/39px |
| Lower homepage H2, Barlow Condensed 600 | 52/55px | 38/41px |
| Photo-card title, Barlow 600            | 27/33px | 25/30px |
| Hero form title, Barlow 600             | 30/36px | 26/32px |
| Body, Manrope 400                       | 16/28px | 16/28px |

The desktop homepage hero body uses Barlow 19/30px; mobile switches to Manrope 16/26px. Card descriptions use Manrope 14/23px. Desktop navigation uses Barlow 16px at 600. The wordmark uses Barlow Condensed 700. Intermediate widths adapt headline sizes and spacing to preserve hierarchy.

## Layout

Content is centered in a maximum 1440px container. Default desktop gutters are 64px, reducing to 40px at 1250px, 32px at 1000px and 24px at 767px. Additional adjustments at 800px maintain a usable tablet header and hero. These CSS rules interpolate the approved 1440px and 390px compositions rather than fixing the page to artboard heights.

Desktop heroes pair copy and a form in a proportional two-column grid with a 104px gap. The homepage hero has a 714px minimum height; service heroes have a 740px minimum height. At 767px and below, the photograph sits behind the copy and the request panel follows on blue with 24px outer margins. No simulated iOS status bar is rendered.

Photo cards use three columns, 32px gaps, 230px images and 28px copy padding on desktop. Mobile stacks them with 24px gaps/padding and 200px images. Service lists use two columns on desktop and one on mobile. Leading icon slots remain 48px desktop and 32px mobile; trailing arrows stay fixed while text wraps. Service explanations and FAQs use paired columns that stack on mobile; related services move from three columns to one.

Homepage sections retain the approved progression from hero and emergency help through service choices, the garage diagram, future-office details and contact. Service pages retain service-specific introductions, reasons, details, expanded FAQs and related links. Footer elements sit outside the main landmark.

## Elevation & Depth

The desktop hero panel uses `0 14px 36px rgba(0, 0, 0, 0.16)`. Mobile hero forms and the lower contact panel have no shadow. Tonal section changes, photographs and fine dividers supply the remaining depth.

The homepage hero image uses `brightness(0.35)`. Service heroes retain the overlay `rgba(9, 24, 39, 0.65)`. Preserve these treatments with the five local reference images so white copy remains legible.

## Shapes

Preserve the supplied red-roof, blue-garage logo geometry and its white reversed version. The garage diagram remains inline SVG with the approved door, opener and highlighted parts. Fields use 4px corners, buttons 5px, supporting panels 8px, photo cards 10px and hero forms 12px. Inputs have one-pixel borders; cards clip photography to their rounded outline.

## Components

### Buttons and links

Primary buttons have a 52px minimum height, white Manrope labels, a trailing arrow and the primary hover token. Outlined hero actions use white text and a pale border, with a subtle white wash on hover. Links use color or underline feedback. The global keyboard-focus outline is 3px service red with a 4px offset. Transitions are brief; reduced-motion preference removes transitions and smooth scrolling.

### Inputs / Fields

Forms use native input, select and textarea elements with persistent labels. Controls have a 46px minimum height, 17px form gaps and 32px desktop/24px mobile panel padding. Mobile input text increases to 16px. Focus uses a blue outline and border; invalid fields use a red border and an associated explanatory message where implemented.

The homepage forms offer service selection; individual service forms display the service name and submit its fixed slug. Optional details are available in the lower homepage form and service forms. Submission disables the button, shows “Sending request…” and announces feedback through a status message. An unconfigured connection displays the pending-setup notice and honest not-sent feedback. These states extend the static reference to a working interface.

### Navigation

Desktop aligns the logo, navigation and contact/action controls. Tablet spacing reduces before mobile navigation begins at 767px. The mobile menu has an explicit toggle, expanded state and Escape handling. Keep the skip link, descriptive navigation labels and footer landmark semantics.

### Service cards and rows

Photo cards retain white surfaces on blue, Barlow titles, Manrope descriptions and red text actions. Image hover scales gently to 1.025. Service rows retain blue line icons, bold Manrope titles, supporting copy and quiet dividers. Related-service cards use outlined blue-section styling; FAQs remain expanded for direct reading.

### Illustration and photography

The garage diagram is an orientation aid, with simplified blue geometry and red highlighted components. The five local photographs map to the homepage hero, repair, installation, commercial and hardware roles. Keep illustrative-reference captions; `image-sources.json` records the original photo credits.

## Do's and Don'ts

### Do:

- **Do** preserve the approved logo, diagram, palette and three-font hierarchy.
- **Do** keep Request service visible in mobile hero copy and place the form directly beneath it.
- **Do** preserve wrapping text, fixed icon slots, keyboard focus and reduced-motion behavior.
- **Do** keep contact placeholders and pending-delivery feedback conspicuous until configured.
- **Do** retain the future Highland Park office wording and illustrative-photo captions.

### Don't:

- **Don't** introduce unsupported ratings, prices, licenses, warranties, response promises or project claims.
- **Don't** remove persistent form labels to mimic static placeholder-only fields.
- **Don't** interpret successful validation as delivered contact or confirmed scheduling.
