import { projectGroups } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { getContent } from "@/lib/resolve";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteShell } from "@/components/SiteShell";

export function ProjectsPage({ locale }: { locale: Locale }) {
  const { copy, projects } = getContent(locale);
  return (
    <SiteShell locale={locale} page="projects">
      <div className="mx-auto max-w-4xl px-5 pt-16 pb-12 sm:pt-20">
        <h1 className="font-display text-4xl font-700 tracking-tight sm:text-5xl">
          {copy.projectsPage.heading}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {copy.projectsPage.intro}
        </p>

        {projectGroups.map((group) => (
          <section key={group} className="mt-14">
            <h2 className="mono mb-5 text-sm text-accent-soft">{copy.projectGroups[group]}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {projects
                .filter((p) => p.group === group)
                .map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </SiteShell>
  );
}
