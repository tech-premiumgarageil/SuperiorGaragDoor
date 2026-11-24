// @ts-check

/** @type {import("next").NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/services/:slug.md",
          destination: "/api/ai/markdown/service/:slug",
        },
        {
          source: "/areas/:slug.md",
          destination: "/api/ai/markdown/area/:slug",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};
export default nextConfig;
