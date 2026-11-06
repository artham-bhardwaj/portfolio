import type { Metadata } from "next";
import { Trophy } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Tag } from "@/components/badges";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/data/profile";
import { achievements, certifications, skillGroups } from "@/data/skills";

export const metadata: Metadata = { title: "Profile" };

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <header className="fade-up flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs text-accent">Profile</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{profile.name}</h1>
            <p className="mt-2 text-muted">{profile.title} · {profile.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-sm transition hover:border-border-strong">
              <GitHubIcon size={15} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-sm transition hover:border-border-strong">
              <LinkedInIcon size={15} /> LinkedIn
            </a>
            <a href={profile.resume} className="inline-flex h-10 items-center rounded-full bg-fg px-4 text-sm font-medium text-bg transition hover:opacity-85">
              Résumé
            </a>
          </div>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <section>
            <h2 className="text-sm font-medium text-subtle">Skills</h2>
            <dl className="mt-4 divide-y divide-border rounded-2xl border border-border bg-surface">
              {skillGroups.map((group) => (
                <div key={group.title} className="p-5">
                  <dt className="text-sm font-medium">{group.title}</dt>
                  <dd className="mt-3 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="space-y-8">
            <div>
              <h2 className="text-sm font-medium text-subtle">Achievements</h2>
              <ul className="mt-4 space-y-3">
                {achievements.map((achievement) => (
                  <li key={achievement.title} className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
                    <Trophy size={18} className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <p className="font-medium">{achievement.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">{achievement.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {certifications.length > 0 && (
              <div>
                <h2 className="text-sm font-medium text-subtle">Certifications</h2>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {certifications.map((certification) => (
                    <Tag key={certification}>{certification}</Tag>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
