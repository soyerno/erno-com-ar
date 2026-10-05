import type { Metadata } from "next";
import { experience, person, principles, stack } from "@/lib/content";
import { Chip } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hernán De Souza is an AI Engineer at MODO in Buenos Aires who has built software professionally since 2010. Experience, working principles and stack.",
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-16 pb-12 sm:pt-20">
      <h1 className="font-display text-4xl font-700 tracking-tight sm:text-5xl">About</h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
        <p>
          I am <strong className="text-ink">{person.name}</strong>, also known as Erno. I
          live in {person.location} ({person.timezone}) and work in English and Spanish.
          I have built software professionally since 2010.
        </p>
        <p>
          Today I am an AI Engineer at MODO, a fintech in Argentina, where I take LLM
          applications from prompt design to production APIs. Before that I worked as a
          senior frontend developer and as a full-stack developer on fintech, education, media and
          e-commerce products.
        </p>
        <p>
          I am looking for Forward Deployed Engineer roles. Outside work I build my own
          product, Firulapp, and open-source tools for agent workflows.
        </p>
      </div>

      <h2 className="mt-14 font-display text-2xl font-600">Experience</h2>
      <ol className="mt-5 space-y-3">
        {experience.map((j) => (
          <li
            key={`${j.company}-${j.period}`}
            className={`rounded-2xl border border-border bg-surface ${
              j.compact ? "p-4" : "p-6"
            }`}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-base font-600">
                {j.role} <span className="text-ink-soft">· {j.company}</span>
              </h3>
              <p className="mono text-xs text-ink-faint">{j.period}</p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{j.summary}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-14 font-display text-2xl font-600">How I work</h2>
      <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {principles.map((p) => (
          <div key={p.title} className="bg-surface p-6">
            <h3 className="font-display text-base font-600 text-accent-soft">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-14 font-display text-2xl font-600">Stack</h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
      </div>
    </div>
  );
}
