"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/use-theme";

const INTRO_MS = 1600;
const intros = new Set(["os98", "arcade", "vhs", "groovy"]);

function seenKey(theme: string) {
  return `portfolio-intro-${theme}`;
}

function hasSeen(theme: string) {
  try {
    return window.sessionStorage.getItem(seenKey(theme)) === "1";
  } catch {
    return true;
  }
}

/**
 * A short intro for each fun theme. It plays when a visitor switches to the
 * theme, or once per visit when the page opens in it. Click or any key skips it.
 */
export function ThemeIntro() {
  const theme = useTheme();
  const [active, setActive] = useState<string | null>(null);
  const previous = useRef<string | null>(null);

  useEffect(() => {
    if (!theme) return;
    const was = previous.current;
    previous.current = theme;
    if (!intros.has(theme)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const switched = was !== null && was !== theme;
    if (!switched && hasSeen(theme)) return;

    const show = setTimeout(() => {
      setActive(theme);
      try {
        window.sessionStorage.setItem(seenKey(theme), "1");
      } catch {
        // Ignore blocked storage.
      }
    }, 0);
    const hide = setTimeout(() => setActive(null), INTRO_MS);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [theme]);

  useEffect(() => {
    if (!active) return;
    const skip = () => setActive(null);
    window.addEventListener("keydown", skip);
    return () => window.removeEventListener("keydown", skip);
  }, [active]);

  if (!active) return null;

  return (
    <div className={`intro intro-${active}`} onClick={() => setActive(null)} aria-hidden="true">
      {active === "os98" && (
        <div className="intro-os98-box">
          <span className="intro-os98-logo" />
          <p>
            Artham<b>OS 98</b>
          </p>
          <span className="intro-os98-bar">
            <i />
          </span>
          <small>Starting ArthamOS 98…</small>
        </div>
      )}
      {active === "arcade" && (
        <div className="intro-arcade-box">
          <p className="intro-arcade-coin">INSERT COIN</p>
          <p className="intro-arcade-start">PLAYER 1 START!</p>
        </div>
      )}
      {active === "vhs" && (
        <div className="intro-vhs-box">
          <p className="intro-vhs-play">PLAY ▶</p>
          <p className="intro-vhs-tape">TAPE 01 · ARTHAM</p>
        </div>
      )}
      {active === "groovy" && (
        <div className="intro-groovy-box">
          <span className="intro-groovy-rings" />
          <p>Hey there! ✌</p>
        </div>
      )}
      <small className="intro-skip">Click to skip</small>
    </div>
  );
}
