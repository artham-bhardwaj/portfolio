import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

/** The active theme id, kept in sync with <html data-theme>. Null during server render. */
export function useTheme() {
  return useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme ?? null,
    () => null,
  );
}
