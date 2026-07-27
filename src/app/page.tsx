import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { DailyChallenge, Footer, Navbar, ProfileHeader, StatsCard } from "@/components/ui";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <ProfileHeader name={profile.name} title={profile.title} summary={profile.summary} tags={profile.tags} />

        <StatsCard />

        <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Current Challenge</p>
            <h2 className="mt-3 text-2xl font-semibold text-zinc-100">004. Software Engineering Career</h2>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-zinc-400">
              <span className="rounded-full border border-zinc-700 px-2.5 py-1">∞ Ongoing</span>
              <span className="rounded-full border border-emerald-800/40 bg-emerald-500/10 px-2.5 py-1 text-emerald-300">Running</span>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
              Building reliable systems, solving harder problems, and continuously improving as an engineer.
            </p>
            <Link href="/career" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-100 transition hover:text-zinc-300">
              View Career <ArrowRight size={16} />
            </Link>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Featured Problems</p>
            <div className="mt-4 space-y-3">
              {featured.map((project) => (
                <Link key={project.slug} href={`/problems/${project.slug}`} className="block rounded-lg border border-zinc-800 bg-zinc-950/70 p-4 transition hover:border-zinc-700 hover:bg-zinc-900">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-medium text-zinc-100">{project.title}</div>
                      <div className="mt-1 text-xs text-zinc-500">{project.id} • {project.difficulty}</div>
                    </div>
                    <ExternalLink size={15} className="text-zinc-500" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <DailyChallenge />
      </main>
      <Footer />
    </div>
  );
}
