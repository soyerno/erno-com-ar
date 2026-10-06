import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Locale, PageKey } from "@/lib/i18n";

/** Nav, main and footer around a page. `page` lets the language switch point to the same page. */
export function SiteShell({
  locale,
  page,
  children,
}: {
  locale: Locale;
  page: PageKey;
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav locale={locale} page={page} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} page={page} />
    </>
  );
}
