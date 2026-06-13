import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["500", "600", "700"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

const SITE = "https://erno.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Erno — AI Engineer",
    template: "%s · Erno",
  },
  description:
    "Construyo software con IA en producción de verdad. Sr AI Engineer argentino: agentic coding con Claude Code, pagos agénticos y producto propio. En rioplatense, con el código y los errores a la vista.",
  keywords: [
    "AI Engineer",
    "Claude Code",
    "agentic coding",
    "pagos agénticos",
    "inteligencia artificial",
    "Argentina",
    "Next.js",
    "Hernán De Souza",
    "Erno",
  ],
  authors: [{ name: "Hernán De Souza", url: SITE }],
  creator: "Hernán De Souza",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE,
    siteName: "Erno",
    title: "Erno — AI Engineer",
    description:
      "Cómo se construye software con IA en producción de verdad. En rioplatense, con el código y los errores a la vista.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erno — AI Engineer",
    description:
      "Cómo se construye software con IA en producción de verdad. En rioplatense.",
  },
  alternates: { canonical: SITE },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hernán De Souza",
  alternateName: "Erno",
  url: SITE,
  jobTitle: "Senior AI Engineer",
  nationality: "Argentina",
  knowsAbout: [
    "AI Engineering",
    "Agentic coding",
    "Claude Code",
    "Pagos agénticos",
    "Next.js",
    "LLMs",
  ],
  sameAs: [
    "https://github.com/soyerno",
    "https://www.linkedin.com/in/hdesouza/",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-AR"
      className={`${inter.variable} ${sora.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
