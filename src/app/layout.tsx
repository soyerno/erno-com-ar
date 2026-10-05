import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["500", "600", "700"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

const SITE = "https://erno.com.ar";

const TITLE = "Hernán De Souza — Forward Deployed AI Engineer";
const DESCRIPTION =
  "Hernán De Souza is an AI Engineer in Buenos Aires looking for Forward Deployed Engineer roles. He turns business problems into LLM systems in production and has built software professionally since 2010.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: "%s · Hernán De Souza",
  },
  description: DESCRIPTION,
  keywords: [
    "Forward Deployed Engineer",
    "Forward Deployed AI Engineer",
    "AI Engineer",
    "LLM applications",
    "Generative Engine Optimization",
    "MCP",
    "Claude Code",
    "Next.js",
    "Buenos Aires",
    "Hernán De Souza",
    "Erno",
  ],
  authors: [{ name: "Hernán De Souza", url: SITE }],
  creator: "Hernán De Souza",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE,
    siteName: "Hernán De Souza",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/hernan-de-souza.jpg", width: 512, height: 512, alt: "Portrait of Hernán De Souza" }],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: { canonical: "/" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hernán De Souza",
  alternateName: "Erno",
  url: SITE,
  image: `${SITE}/hernan-de-souza.jpg`,
  email: "hola@erno.com.ar",
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
  sameAs: [
    "https://github.com/soyerno",
    "https://www.linkedin.com/in/hdesouza/",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
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
