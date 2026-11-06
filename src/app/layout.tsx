import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Press_Start_2P, Rubik, Shrikhand, VT323 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeFX } from "@/components/theme-fx";
import { ThemeIntro } from "@/components/theme-intro";
import { THEME_STORAGE_KEY, themeIds } from "@/lib/themes";
import "./globals.css";
import "./themed-home.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Theme fonts. preload: false means each file only downloads when its theme is picked.
const pixelFont = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-pixel", preload: false, display: "swap" });
const vhsFont = VT323({ weight: "400", subsets: ["latin"], variable: "--font-vt323", preload: false, display: "swap" });
const groovyDisplay = Shrikhand({ weight: "400", subsets: ["latin"], variable: "--font-shrikhand", preload: false, display: "swap" });
const groovyBody = Rubik({ subsets: ["latin"], variable: "--font-rubik", preload: false, display: "swap" });

const fontVariables = [geistSans, geistMono, pixelFont, vhsFont, groovyDisplay, groovyBody].map((f) => f.variable).join(" ");

const description =
  "Software Engineer focused on Java, Spring Boot, backend systems, observability, and real-world engineering projects.";

export const metadata: Metadata = {
  metadataBase: new URL("https://artham.dev"),
  title: {
    default: "Artham Bhardwaj — Software Engineer | Java & Spring Boot",
    template: "%s · Artham Bhardwaj",
  },
  description,
  keywords: [
    "Artham Bhardwaj",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "Backend Developer",
    "System Design",
    "Observability",
  ],
  openGraph: {
    title: "Artham Bhardwaj — Software Engineer | Java & Spring Boot",
    description,
    type: "website",
    locale: "en_US",
    images: ["/assets/images/potfolioselfimage.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artham Bhardwaj — Software Engineer",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

// Runs before first paint so the saved theme never flashes.
// A ?theme=arcade link also works, so a themed version can be shared.
const themeScript = `(function(){var ids=${JSON.stringify(themeIds)},k=${JSON.stringify(THEME_STORAGE_KEY)},t=null;try{var q=new URLSearchParams(location.search).get('theme');if(ids.indexOf(q)>-1){t=q;localStorage.setItem(k,q)}else{t=localStorage.getItem(k)}}catch(e){}if(ids.indexOf(t)<0){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontVariables} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-bg text-fg">
        {children}
        <ThemeFX />
        <ThemeIntro />
        <Analytics />
      </body>
    </html>
  );
}
