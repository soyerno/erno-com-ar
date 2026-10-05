import type { Project } from "@/lib/content";

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-surface-2 px-2 py-0.5 text-[11px] text-ink-faint">
      {children}
    </span>
  );
}

export function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const { title, role, summary, stack, links } = project;
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60">
      <h3 className="font-display text-lg font-600">{title}</h3>
      <p className="mono mt-1 text-xs text-accent-soft">{role}</p>
      <p
        className={`mt-3 flex-1 text-sm leading-relaxed text-ink-soft ${
          compact ? "line-clamp-6" : ""
        }`}
      >
        {summary}
      </p>
      {stack.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      )}
      {links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center text-sm text-accent-soft hover:text-accent"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
