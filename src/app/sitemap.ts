import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", "/about", "/contact"].map((path) => ({
    url: `${SITE}${path}${path ? "/" : ""}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
