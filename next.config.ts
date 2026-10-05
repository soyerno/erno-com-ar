import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // sitio 100% estático; Vercel sirve la carpeta out/
  trailingSlash: true, // genera /about/index.html; URLs canónicas con barra final
  images: { unoptimized: true }, // sin optimizador server-side en estático
};

export default nextConfig;
