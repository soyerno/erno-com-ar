import { ContactPage } from "@/components/pages/ContactPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "contact");

export default function Page() {
  return <ContactPage locale="en" />;
}
