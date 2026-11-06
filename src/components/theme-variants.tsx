import type { ReactNode } from "react";

/**
 * Theme-specific pieces that stay fully static. Every variant is in the HTML,
 * and CSS shows the one that matches <html data-theme>, so there is no flash
 * and no extra JavaScript.
 */
export type FunTheme = "os98" | "arcade" | "vhs" | "groovy";

const funThemes: FunTheme[] = ["os98", "arcade", "vhs", "groovy"];

/** Text with optional per-theme wording. `base` shows in the classic themes and any theme without its own version. */
export function ThemeText({ base, ...variants }: { base: ReactNode } & Partial<Record<FunTheme, ReactNode>>) {
  const overridden = funThemes.filter((t) => variants[t] !== undefined);
  return (
    <>
      <span className={["tv-base", ...overridden.map((t) => `tv-not-${t}`)].join(" ")}>{base}</span>
      {overridden.map((t) => (
        <span key={t} className={`tv-only tv-${t}`}>
          {variants[t]}
        </span>
      ))}
    </>
  );
}

/** Content that only appears in the listed theme(s). */
export function ThemeOnly({ theme, children }: { theme: FunTheme | FunTheme[]; children: ReactNode }) {
  const list = Array.isArray(theme) ? theme : [theme];
  return <div className={["tv-only", ...list.map((t) => `tv-${t}`)].join(" ")}>{children}</div>;
}
