import { Footer, Navbar } from "@/components/ui";
import { experience } from "@/data/experience";

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Career</p>
            <h1 className="mt-2 text-2xl font-semibold text-zinc-100 sm:text-3xl">Current role and trajectory.</h1>
            <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-950/70 p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-zinc-100">{experience.currentRole}</h2>
                  <p className="mt-1 text-sm text-zinc-400">{experience.company}</p>
                </div>
                <p className="text-sm text-zinc-500">{experience.dates}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.highlights.map((item) => (
                  <span key={item} className="rounded-full border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Education</p>
            <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-950/70 p-5">
              <h2 className="text-xl font-semibold text-zinc-100">{experience.education.degree}</h2>
              <p className="mt-2 text-sm text-zinc-400">{experience.education.school}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-zinc-500">
                <span>{experience.education.dates}</span>
                <span>CGPA: {experience.education.cgpa}</span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
