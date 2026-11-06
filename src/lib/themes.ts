export type ThemeId = "dark" | "light" | "os98" | "arcade" | "vhs" | "groovy";

export type ThemeOption = {
  id: ThemeId;
  name: string;
  description: string;
  /** Three colors shown as the preview swatch in the picker. */
  swatch: [string, string, string];
};

export const THEME_STORAGE_KEY = "portfolio-theme";

export const themes: ThemeOption[] = [
  { id: "dark", name: "Classic Dark", description: "Clean and minimal", swatch: ["#09090b", "#60a5fa", "#fafafa"] },
  { id: "light", name: "Classic Light", description: "Clean and bright", swatch: ["#fafafa", "#2563eb", "#09090b"] },
  { id: "os98", name: "ArthamOS 98", description: "Late-90s desktop", swatch: ["#008080", "#c0c0c0", "#000080"] },
  { id: "arcade", name: "Arcade", description: "8-bit CRT screen", swatch: ["#07071a", "#ffd23f", "#ff2e6e"] },
  { id: "vhs", name: "VHS Tape", description: "80s home video", swatch: ["#0b1020", "#ffd84d", "#ff3b6b"] },
  { id: "groovy", name: "Groovy 70s", description: "Sunset stripes", swatch: ["#241309", "#eab308", "#c2410c"] },
];

export const themeIds = themes.map((t) => t.id);

/** Applies a theme now and remembers it for the next visit. */
export function applyTheme(id: ThemeId) {
  document.documentElement.dataset.theme = id;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, id);
  } catch {
    // Storage can be blocked; the theme still applies for this visit.
  }
}
