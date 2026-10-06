import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "../app/globals.css";
import { getCopy } from "@/lib/copy";
import { person, SITE } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["500", "600", "700"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  alternateName: person.alias,
  url: SITE,
  image: `${SITE}${person.photo}`,
  email: person.email,
  jobTitle: "AI Engineer",
  worksFor: { "@type": "Organization", name: "MODO" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  knowsAbout: [
    "Forward deployed engineering",
    "LLM applications",
    "Generative Engine Optimization",
    "Model Context Protocol",
    "Claude Code",
    "Next.js",
    "TypeScript",
  ],
  knowsLanguage: ["en", "es"],
  sameAs: [person.github, person.linkedin],
};

/** The single <html>/<body> implementation. Each locale's root layout renders it with its own lang. */
export function RootHtml({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={getCopy(locale).htmlLang}
      className={`${inter.variable} ${sora.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
