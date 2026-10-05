import type { Metadata } from "next";
import { person } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Hernán De Souza about Forward Deployed Engineer roles. Remote from Buenos Aires (UTC-3), English and Spanish.",
  alternates: { canonical: "/contact/" },
};

const channels = [
  {
    label: "Email",
    value: person.email,
    href: `mailto:${person.email}`,
    note: "The most direct way to reach me.",
  },
  {
    label: "LinkedIn",
    value: "in/hdesouza",
    href: person.linkedin,
    note: "Full work history.",
  },
  {
    label: "GitHub",
    value: "@soyerno",
    href: person.github,
    note: "Code for the open-source projects.",
  },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-16 pb-12 sm:pt-20">
      <h1 className="font-display text-4xl font-700 tracking-tight sm:text-5xl">Contact</h1>

      <h2 className="mt-10 font-display text-2xl font-600">What I am looking for</h2>
      <ul className="mt-4 space-y-2 text-lg leading-relaxed text-ink-soft">
        <li>Forward Deployed Engineer roles.</li>
        <li>Remote, based in {person.location} ({person.timezone}).</li>
        <li>I work in English and Spanish.</li>
      </ul>

      <h2 className="mt-12 font-display text-2xl font-600">Reach me</h2>
      <div className="mt-5 space-y-3">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noreferrer" : undefined}
            className="flex min-h-11 flex-col gap-2 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-display text-lg font-600">{c.label}</p>
              <p className="mt-1 text-sm text-ink-soft">{c.note}</p>
            </div>
            <span className="mono break-all text-sm text-accent-soft">{c.value} ↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
