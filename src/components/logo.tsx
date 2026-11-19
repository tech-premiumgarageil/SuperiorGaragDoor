import Link from "next/link";

export function Logo({ reversed = false }: { reversed?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand${reversed ? " brand-reversed" : ""}`}
      aria-label="Superior Garage Doors USA home"
    >
      <svg
        width="49"
        height="44"
        viewBox="0 0 49 44"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M3 20L24.5 3L46 20"
          fill="none"
          stroke="#D62E34"
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path d="M10 20H39V42H10V20Z" fill={reversed ? "#FFFFFF" : "#153B64"} />
        <path
          d="M16 27H33M16 33H33M16 39H33"
          fill="none"
          stroke={reversed ? "#153B64" : "#FFFFFF"}
          strokeWidth="2.5"
        />
      </svg>
      <span className="brand-words">
        <span className="brand-name">SUPERIOR</span>
        <span className="brand-subtitle">GARAGE DOORS USA</span>
      </span>
    </Link>
  );
}
