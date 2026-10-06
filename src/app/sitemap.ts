import type { MetadataRoute } from "next";
import { absoluteUrl, defaultLocale, locales, pageKeys, pagePath } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pageKeys.map((page) => ({
      url: absoluteUrl(pagePath(locale, page)),
      changeFrequency: "monthly" as const,
      priority: page === "home" ? 1 : 0.8,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, absoluteUrl(pagePath(l, page))])),
          "x-default": absoluteUrl(pagePath(defaultLocale, page)),
        },
      },
    })),
  );
}
