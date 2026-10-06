import { getCopy } from "@/lib/copy";
import {
  jobs,
  projects,
  type JobBase,
  type ProjectBase,
  type ProjectSlug,
  type YearMonth,
} from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export type Project = ProjectBase<ProjectSlug> & {
  title: string;
  role: string;
  summary: string;
};

export type Job = JobBase & {
  period: string;
  summary: string;
};

/** Combines the shared data with one locale's text. */
export function getContent(locale: Locale) {
  const copy = getCopy(locale);

  const fmt = ([year, month]: YearMonth) => `${copy.months[month - 1]} ${year}`;

  const resolvedProjects: Project[] = projects.map((p) => ({
    ...p,
    ...copy.projectItems[p.slug],
  }));

  const experience: Job[] = jobs.map((j) => ({
    ...j,
    period: `${fmt(j.from)} – ${j.to ? fmt(j.to) : copy.present}`,
    summary: copy.jobSummaries[j.id],
  }));

  return {
    copy,
    projects: resolvedProjects,
    featuredProjects: resolvedProjects
      .filter((p) => p.featured)
      .sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0)),
    experience,
    snapshot: experience.slice(0, 3),
  };
}
