import { useEffect, useRef } from "react";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { featuredProjects, flowzen, otherProjects, splitTitle, totalTests } from "@/data/projects";

export { experience, flowzen, profile };
export { capabilityGroups, problemSolvingCategories, skillGroups } from "@/data/skills";

/** Every project shown on the home page, with its title split into name and tagline. */
export const showcase = [...featuredProjects, ...otherProjects].map((p) => ({ ...p, ...splitTitle(p.title) }));
export type ShowcaseProject = (typeof showcase)[number];

export const company = experience.company.replace(" (TCS)", "");

export const stats = [
  { value: `${featuredProjects.length}`, label: "Flagship projects" },
  { value: `${(Math.floor(totalTests / 100) * 100).toLocaleString("en-US")}+`, label: "Automated tests" },
  { value: "750+", label: "DSA problems solved" },
  { value: experience.education.cgpa.split("/")[0], label: "B.Tech CGPA" },
];

export const summary = `I'm ${profile.name}, a ${experience.currentRole} at ${company}. I work in Java and Spring Boot, and build tested, end-to-end tools for observability, code review and system design.`;

export const flowzenPoints = [
  "Build an architecture from 25 components and run it under real traffic",
  "Watch every request on a timeline: where queues back up and what fails first",
  "Lessons, graded challenges and an interview simulator",
  "Runs in your browser. No sign-up, no API keys",
];

export const workflow = ["Understand constraints", "Identify the pattern", "Choose an approach", "Analyze complexity", "Implement", "Validate"];

/**
 * The navbar links to /#work, /#stack and so on. Layouts that show one panel
 * at a time use this to open the matching panel instead of scrolling.
 */
export function useNavTarget(ids: readonly string[], onTarget: (id: string) => void) {
  const handler = useRef(onTarget);
  useEffect(() => {
    handler.current = onTarget;
  });

  useEffect(() => {
    const handle = (id: string) => {
      if (!ids.includes(id)) return false;
      handler.current(id);
      return true;
    };
    const initial = window.location.hash.slice(1);
    const first = initial ? setTimeout(() => handle(initial), 0) : undefined;

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      if (url.pathname !== window.location.pathname) return;
      if (handle(url.hash.slice(1))) {
        e.preventDefault();
        window.history.replaceState(null, "", url.hash);
        document.getElementById("themed-top")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => {
      clearTimeout(first);
      document.removeEventListener("click", onClick, true);
    };
  }, [ids]);
}
