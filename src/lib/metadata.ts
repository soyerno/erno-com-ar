import type { Metadata } from "next";
import { getCopy } from "@/lib/copy";
import { person, SITE } from "@/lib/content";
import { defaultLocale, locales, pagePath, type Locale, type PageKey } from "@/lib/i18n";

/** Site-wide defaults for one locale, used by that locale's root layout. */
export function layoutMetadata(locale: Locale): Metadata {
  const copy = getCopy(locale);
  return {
    metadataBase: new URL(SITE),
    title: { default: copy.meta.title, template: `%s · ${copy.meta.titleSuffix}` },
    description: copy.meta.description,
    keywords: copy.meta.keywords,
    authors: [{ name: person.name, url: SITE }],
    creator: person.name,
  };
}

/**
 * Full metadata of one page: title, description, canonical, hreflang alternates,
 * Open Graph and Twitter. Open Graph is replaced (not merged) by page metadata,
 * so every page states it completely.
 */
export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const copy = getCopy(locale);
  const own = page === "home" ? null : copy.meta.pages[page];
  const title = own?.title ?? copy.meta.title;
  const fullTitle = own ? `${own.title} · ${copy.meta.titleSuffix}` : copy.meta.title;
  const description = own?.description ?? copy.meta.description;
  const url = pagePath(locale, page);

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l, pagePath(l, page)]),
  );
  languages["x-default"] = pagePath(defaultLocale, page);

  return {
    title: own ? title : { absolute: title },
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      locale: copy.ogLocale,
      url,
      siteName: person.name,
      title: fullTitle,
      description,
      images: [{ url: person.photo, width: 512, height: 512, alt: copy.meta.photoAlt }],
    },
    twitter: { card: "summary", title: fullTitle, description },
  };
}
