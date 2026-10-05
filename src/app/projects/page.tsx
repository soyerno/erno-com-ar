import type { Metadata } from "next";
import { projectGroups, projects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Hernán De Souza: own products, LLM systems at a fintech, sites and tools built for others, open-source agent infrastructure for Claude Code and MCP, libraries and a community project.",
  alternates: { canonical: "/projects/" },
};

export default function Projects() {
  return (
    <div className="mx-auto max-w-4xl px-5 pt-16 pb-12 sm:pt-20">
      <h1 className="font-display text-4xl font-700 tracking-tight sm:text-5xl">Projects</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Public repositories and live products, plus the work I do at my current job
        described in general terms.
      </p>

      {projectGroups.map((group) => (
        <section key={group} className="mt-14">
          <h2 className="mono mb-5 text-sm text-accent-soft">{group}</h2>
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
  );
}
