import { RootHtml } from "@/components/RootHtml";
import { layoutMetadata } from "@/lib/metadata";

export const metadata = layoutMetadata("en");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootHtml locale="en">{children}</RootHtml>;
}
