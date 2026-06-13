import type { MetadataRoute } from "next";

const SITE = "https://erno.com.ar";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/sobre", "/casos", "/contacto"].map((path) => ({
    url: `${SITE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
