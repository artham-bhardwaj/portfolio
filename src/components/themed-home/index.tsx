"use client";

import dynamic from "next/dynamic";
import { useTheme } from "@/components/use-theme";

// Each layout is its own chunk, downloaded only when its theme is picked.
const Os98Home = dynamic(() => import("./os98-home"), { ssr: false });
const ArcadeHome = dynamic(() => import("./arcade-home"), { ssr: false });
const VhsHome = dynamic(() => import("./vhs-home"), { ssr: false });
const GroovyHome = dynamic(() => import("./groovy-home"), { ssr: false });

/**
 * The fun themes get their own home page layout. The classic layout stays in
 * the HTML for search engines and is hidden by CSS while a fun theme is on.
 */
export function ThemedHome() {
  const theme = useTheme();
  if (theme === "os98") return <Os98Home />;
  if (theme === "arcade") return <ArcadeHome />;
  if (theme === "vhs") return <VhsHome />;
  if (theme === "groovy") return <GroovyHome />;
  return null;
}
