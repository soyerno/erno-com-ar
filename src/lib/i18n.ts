import { SITE } from "@/lib/content";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const pageKeys = ["home", "projects", "about", "contact"] as const;
export type PageKey = (typeof pageKeys)[number];

/** Path with trailing slash (the site exports with trailingSlash). English lives at the root, Spanish under /es/. */
export function pagePath(locale: Locale, page: PageKey): string {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  const rest = page === "home" ? "" : `/${page}`;
  return `${prefix}${rest}/`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

export function absoluteUrl(path: string): string {
  return `${SITE}${path}`;
}
