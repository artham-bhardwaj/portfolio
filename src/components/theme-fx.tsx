"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { useTheme } from "@/components/use-theme";

/** Extra on-screen pieces some themes add: the 90s taskbar, the VHS overlay, the arcade credit counter. */
export function ThemeFX() {
  const theme = useTheme();
  if (theme === "os98") return <Taskbar />;
  if (theme === "vhs") return <VhsOverlay />;
  if (theme === "arcade") {
    return (
      <div className="fx-credit" aria-hidden="true">
        CREDIT 01
      </div>
    );
  }
  return null;
}

function useClock(intervalMs: number) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, intervalMs);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, [intervalMs]);
  return now;
}

function Taskbar() {
  const now = useClock(15000);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const links = [
    { label: "Résumé", href: profile.resume },
    { label: "GitHub", href: profile.github, external: true },
    { label: "LinkedIn", href: profile.linkedin, external: true },
    { label: "Email me", href: `mailto:${profile.email}` },
  ];

  return (
    <div ref={ref} className="fx-taskbar">
      {open && (
        <div className="fx-startmenu" role="menu" aria-label="Start menu">
          <div className="fx-startmenu-side" aria-hidden="true">
            Artham<b>OS 98</b>
          </div>
          <div className="fx-startmenu-items">
            {links.map((link) => (
              <a
                key={link.label}
                role="menuitem"
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr />
            <button
              type="button"
              role="menuitem"
              onClick={() => {
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Back to top
            </button>
          </div>
        </div>
      )}
      <button type="button" className="fx-start" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span className="fx-start-logo" aria-hidden="true" />
        Artham
      </button>
      <span className="fx-task">📁 Portfolio</span>
      <span className="fx-clock">{now ? now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) : ""}</span>
    </div>
  );
}

function VhsOverlay() {
  const now = useClock(1000);
  const [start] = useState(() => Date.now());

  let counter = "SP 0:00:00";
  let date = "";
  if (now) {
    const s = Math.max(0, Math.floor((now.getTime() - start) / 1000));
    counter = `SP ${Math.floor(s / 3600)}:${String(Math.floor(s / 60) % 60).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
    date = now.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }).toUpperCase();
  }

  return (
    <div className="fx-vhs" aria-hidden="true">
      <span className="fx-vhs-play">PLAY ▶</span>
      <span className="fx-vhs-rec">{counter}</span>
      <span className="fx-vhs-date">{date}</span>
    </div>
  );
}
