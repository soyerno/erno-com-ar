import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // sitio 100% estático para GitHub Pages
  trailingSlash: true, // genera /sobre/index.html → GH Pages lo sirve sin 404
  images: { unoptimized: true }, // sin optimizador server-side en estático
};

export default nextConfig;
