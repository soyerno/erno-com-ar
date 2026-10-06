import type { JobId, ProjectGroup, ProjectSlug } from "@/lib/content";

type Titled = { title: string; body: string };

// One shape for every locale. A locale file typed as Copy fails to compile if a key is missing.
export type Copy = {
  htmlLang: string;
  ogLocale: string;
  meta: {
    title: string;
    titleSuffix: string;
    description: string;
    keywords: string[];
    photoAlt: string;
    pages: {
      projects: { title: string; description: string };
      about: { title: string; description: string };
      contact: { title: string; description: string };
    };
  };
  months: readonly [
    string, string, string, string, string, string,
    string, string, string, string, string, string,
  ];
  present: string;
  projectGroups: Record<ProjectGroup, string>;
  projectItems: Record<ProjectSlug, { title: string; role: string; summary: string }>;
  jobSummaries: Record<JobId, string>;
  nav: {
    projects: string;
    about: string;
    contact: string;
    github: string;
    /** Short label of the other language, shown in the nav. */
    switchLabel: string;
    /** Name of the other language, shown in the footer. */
    switchName: string;
    /** Accessible name of the switch link. */
    switchAria: string;
    /** Language code of the switch link text. */
    switchLang: string;
  };
  footer: { role: string; email: string };
  home: {
    eyebrow: string;
    headline: string;
    intro: string;
    getInTouch: string;
    seeProjects: string;
    proofPoints: readonly [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    workHeading: string;
    workSteps: readonly [Titled, Titled, Titled];
    selectedProjects: string;
    allProjects: string;
    recentExperience: string;
    fullBackground: string;
    ctaHeading: string;
    ctaBody: string;
  };
  projectsPage: { heading: string; intro: string };
  about: {
    heading: string;
    introLead: string;
    introTail: (location: string, timezone: string) => string;
    currentRole: string;
    seeking: string;
    experience: string;
    howIWork: string;
    principles: readonly [Titled, Titled, Titled, Titled];
    stack: string;
  };
  contact: {
    heading: string;
    lookingFor: string;
    lookingItems: (location: string, timezone: string) => readonly [string, string, string];
    reachMe: string;
    emailNote: string;
    linkedinNote: string;
    githubNote: string;
  };
};
