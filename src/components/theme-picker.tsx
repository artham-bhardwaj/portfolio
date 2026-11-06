"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Check, Palette } from "lucide-react";
import { applyTheme, themes } from "@/lib/themes";
import { useTheme } from "@/components/use-theme";

const SEEN_KEY = "portfolio-theme-picker-seen";

function readSeen() {
  try {
    return window.localStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return true;
  }
}

export function ThemePicker() {
  const current = useTheme();
  const storedSeen = useSyncExternalStore(() => () => {}, readSeen, () => true);
  const [dismissed, setDismissed] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const showHint = !storedSeen && !dismissed;

  function toggle() {
    setOpen((v) => !v);
    if (showHint) {
      setDismissed(true);
      try {
        window.localStorage.setItem(SEEN_KEY, "1");
      } catch {
        // Ignore blocked storage.
      }
    }
  }

  useEffect(() => {
    if (!open) return;
    const active = themes.findIndex((t) => t.id === current);
    itemRefs.current[Math.max(0, active)]?.focus();

    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
    // Focus only when the menu opens, not on every theme change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function onMenuKey(e: React.KeyboardEvent) {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const items = itemRefs.current.filter(Boolean) as HTMLButtonElement[];
    const i = items.indexOf(document.activeElement as HTMLButtonElement);
    const next = e.key === "ArrowDown" ? (i + 1) % items.length : (i - 1 + items.length) % items.length;
    items[next]?.focus();
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={toggle}
        className="relative grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition hover:border-border-strong hover:text-fg"
        aria-label="Change theme"
        title="Change theme"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="theme-menu"
      >
        <Palette size={16} aria-hidden="true" />
        {showHint && (
          <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5" aria-hidden="true">
            <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-accent" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
        )}
      </button>

      {open && (
        <div
          id="theme-menu"
          role="menu"
          aria-label="Theme"
          onKeyDown={onMenuKey}
          className="theme-menu absolute right-0 top-11 z-50 w-64 rounded-2xl border border-border bg-surface p-1.5 shadow-card"
        >
          <p className="px-3 pb-1.5 pt-2 text-xs font-medium text-subtle">Pick a theme</p>
          {themes.map((theme, i) => {
            const selected = current === theme.id;
            return (
              <button
                key={theme.id}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => {
                  applyTheme(theme.id);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition hover:bg-surface-2 ${
                  selected ? "bg-surface-2" : ""
                }`}
              >
                <span className="flex shrink-0 -space-x-1" aria-hidden="true">
                  {theme.swatch.map((color) => (
                    <span key={color} className="h-4 w-4 rounded-full border border-black/25" style={{ background: color }} />
                  ))}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-fg">{theme.name}</span>
                  <span className="block text-xs text-subtle">{theme.description}</span>
                </span>
                {selected && <Check size={15} className="shrink-0 text-accent" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
