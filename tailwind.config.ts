import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#d62e34", 700: "#b71e26" },
        accent: "#d7e4f1",
        ink: {
          50: "#f2f5f8",
          100: "#ccd5df",
          200: "#d7e4f1",
          300: "#ccd5df",
          400: "#536477",
          500: "#536477",
          600: "#172b40",
          700: "#172b40",
          800: "#153b64",
          900: "#0d2c4d",
        },
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Barlow", "sans-serif"],
      },
      maxWidth: { container: "1200px" },
    },
  },
} satisfies Config;

export default config;
