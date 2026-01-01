// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: false }, // let Vercel optimize images
  async headers() {
    return [
      // Cache videos for 1 year (immutable)
      {
        source: "/videos/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Cache common image/icon types for 1 year (immutable)
      {
        // matches png|jpg|jpeg|gif|svg|webp|ico
        source: "/:all*(png|jpg|jpeg|gif|svg|webp|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
