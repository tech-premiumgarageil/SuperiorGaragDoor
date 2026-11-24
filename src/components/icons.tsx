import type { SVGProps } from "react";

export type IconName =
  | "arrow"
  | "check"
  | "door"
  | "opener"
  | "spring"
  | "cable"
  | "track"
  | "commercial"
  | "bolt"
  | "pin"
  | "menu"
  | "plus"
  | "close";
const paths: Record<IconName, React.ReactNode> = {
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  check: <path d="m6 12 4 4 8-8" />,
  door: (
    <>
      <path d="M3 21V6l9-4 9 4v15M6 21V8h12v13M6 12h12M6 16h12M10 19h4" />
    </>
  ),
  opener: (
    <>
      <rect x="7" y="3" width="10" height="7" rx="2" />
      <path d="M12 10v10M5 21h14M9 6h6" />
    </>
  ),
  spring: <path d="M2 12h3l2-5 3 10 3-10 3 10 2-5h4" />,
  cable: (
    <>
      <path d="M7 3v18M17 3v18M7 12c0-4 10-4 10 0s-10 4-10 0" />
      <circle cx="7" cy="5" r="2" />
      <circle cx="17" cy="19" r="2" />
    </>
  ),
  track: (
    <>
      <path d="M4 21V7a4 4 0 0 1 4-4h12M9 21V9h11" />
      <circle cx="6.5" cy="15" r="2.5" />
    </>
  ),
  commercial: (
    <>
      <path d="M3 21V4h18v17M7 21V10h10v11M7 14h10M7 18h10M7 6h2m6 0h2" />
    </>
  ),
  bolt: <path d="m13 2-9 12h7l-1 8 10-13h-7z" />,
  pin: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  menu: <path d="M5 7h14M5 12h14M5 17h14" />,
  plus: <path d="M5 12h14M12 5v14" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
};
export function Icon({
  name = "arrow",
  ...props
}: SVGProps<SVGSVGElement> & { name?: IconName }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
export function serviceIcon(slug: string): IconName {
  if (slug.includes("emergency")) return "bolt";
  if (slug.includes("opener")) return "opener";
  if (slug.includes("spring")) return "spring";
  if (slug.includes("cable")) return "cable";
  if (slug.includes("off-track")) return "track";
  if (slug.includes("commercial")) return "commercial";
  return "door";
}
