"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { hasMusic, music } from "@/lib/music";
import { useTheme } from "@/components/use-theme";

/** Speaker button for theme music. Only shows in themes that have a song. */
export function MusicButton() {
  const theme = useTheme();
  const playing = useSyncExternalStore(music.subscribe, music.isPlaying, () => false);

  // Switch songs when the theme changes, or stop in a theme without music.
  useEffect(() => {
    music.follow(theme);
  }, [theme]);

  if (!hasMusic(theme)) return null;

  return (
    <button
      type="button"
      onClick={() => (playing ? music.stop() : music.start(theme!))}
      className={`relative grid h-9 w-9 place-items-center rounded-full border transition ${
        playing ? "border-accent text-accent" : "border-border text-muted hover:border-border-strong hover:text-fg"
      }`}
      aria-label={playing ? "Stop theme music" : "Play theme music"}
      aria-pressed={playing}
      title={playing ? "Stop theme music" : "Play theme music"}
    >
      {playing ? <Volume2 size={16} aria-hidden="true" /> : <VolumeX size={16} aria-hidden="true" />}
      {playing && (
        <span className="music-bars" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      )}
    </button>
  );
}
