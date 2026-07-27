import { Footer, Navbar } from "@/components/ui";
import { profile } from "@/data/profile";
import { achievements, certifications, skillGroups } from "@/data/skills";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Profile</p>
              <h1 className="mt-2 text-2xl font-semibold text-zinc-100 sm:text-3xl">{profile.name}</h1>
              <p className="mt-2 text-sm text-zinc-400">{profile.handle} • {profile.title}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-600 hover:text-zinc-100">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-600 hover:text-zinc-100">LinkedIn</a>
              <a href={profile.resume} className="rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-600 hover:text-zinc-100">Resume</a>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">{group.title}</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-5">
                <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">Achievements</h2>
                <div className="mt-4 space-y-3">
                  {achievements.map((achievement) => (
                    <div key={achievement.title} className="rounded-md border border-zinc-800 bg-zinc-900/80 p-3">
                      <div className="text-sm font-medium text-zinc-100">{achievement.title}</div>
                      <div className="mt-1 text-sm text-zinc-500">{achievement.description}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-5">
                <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">Certifications</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {certifications.map((certification) => (
                    <span key={certification} className="rounded-full border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-300">
                      {certification}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
