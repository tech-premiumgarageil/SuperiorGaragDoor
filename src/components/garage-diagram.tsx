export function GarageDiagram() {
  return (
    <figure className="garage-diagram">
      <svg
        viewBox="0 0 654 420"
        role="img"
        aria-labelledby="garage-diagram-title garage-diagram-description"
      >
        <title id="garage-diagram-title">
          A guide to your garage door’s moving parts
        </title>
        <desc id="garage-diagram-description">
          Springs above the door, an opener overhead, and tracks and cables
          along the sides. A simplified orientation guide, not repair
          instructions.
        </desc>
        <g transform="translate(65 38)">
          <path
            d="M86 302V88H438V302"
            fill="none"
            stroke="#BBC9D6"
            strokeWidth="6"
          />
          <path
            d="M105 302V110H419V302"
            fill="#F2F5F8"
            stroke="#153B64"
            strokeWidth="2"
          />
          <path
            d="M105 158H419M105 206H419M105 254H419"
            fill="none"
            stroke="#153B64"
            strokeWidth="2"
          />
          <path
            d="M118 118V294M406 118V294"
            fill="none"
            stroke="#D62E34"
            strokeWidth="2"
          />
          <path d="M95 94H429" fill="none" stroke="#153B64" strokeWidth="2" />
          <path
            d="M168 94L172 85L178 103L184 85L190 103L196 85L202 103L208 85L214 103L220 85L226 103L232 85L238 103L244 85L250 94"
            fill="none"
            stroke="#D62E34"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <rect x="242" y="30" width="40" height="24" rx="4" fill="#153B64" />
          <path d="M262 54V95" fill="none" stroke="#153B64" strokeWidth="2" />
          <rect
            x="240"
            y="266"
            width="43"
            height="8"
            rx="3"
            fill="none"
            stroke="#153B64"
            strokeWidth="2"
          />
          <path
            d="M56 54H140L175 84M302 40H370L400 24M86 220H44L18 240M406 220H470L497 240"
            fill="none"
            stroke="#BBC9D6"
            strokeWidth="1.5"
          />
          <circle cx="175" cy="84" r="4" fill="#D62E34" />
          <circle cx="282" cy="41" r="4" fill="#D62E34" />
          <circle cx="86" cy="220" r="4" fill="#D62E34" />
          <circle cx="406" cy="220" r="4" fill="#D62E34" />
        </g>
        <g
          fill="#153B64"
          fontFamily="Manrope, sans-serif"
          fontWeight="700"
          fontSize="12"
        >
          <text x="72" y="75">
            SPRINGS
          </text>
          <text x="491" y="50">
            OPENER
          </text>
          <text x="40" y="300">
            TRACKS
          </text>
          <text x="573" y="300">
            CABLES
          </text>
        </g>
        <text
          x="327"
          y="398"
          textAnchor="middle"
          fill="#536477"
          fontFamily="Manrope, sans-serif"
          fontSize="11"
        >
          Simple guide to your door’s moving parts
        </text>
      </svg>
    </figure>
  );
}
