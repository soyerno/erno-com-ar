import { ProjectsPage } from "@/components/pages/ProjectsPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("es", "projects");

export default function Page() {
  return <ProjectsPage locale="es" />;
}
