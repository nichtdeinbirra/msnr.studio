import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to /out,
  // which any static host (Netlify) can serve.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
