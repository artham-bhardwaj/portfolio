import { profile } from "@/data/profile";
import { ThemeText } from "@/components/theme-variants";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          <ThemeText
            base={<>© {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.</>}
            os98={<>It&apos;s now safe to close this tab. © {new Date().getFullYear()} {profile.name}</>}
            arcade={<>GAME OVER? NEVER. CONTINUE ▶ © {new Date().getFullYear()} {profile.name.toUpperCase()}</>}
            vhs={<>■ STOP · ⏏ EJECT · © {new Date().getFullYear()} {profile.name}. Please be kind, rewind.</>}
            groovy={<>Peace, love and clean APIs ✌ © {new Date().getFullYear()} {profile.name}</>}
          />
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-fg">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-fg">LinkedIn</a>
          <a href={profile.leetcode} target="_blank" rel="noreferrer" className="transition hover:text-fg">LeetCode</a>
          <a href={profile.resume} className="transition hover:text-fg">Résumé</a>
          <a href={`mailto:${profile.email}`} className="transition hover:text-fg">Email</a>
        </div>
      </div>
    </footer>
  );
}
