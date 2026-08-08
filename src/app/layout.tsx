import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://artham.dev"),
  title: "Artham Bhardwaj — Software Engineer | Java & Spring Boot",
  description:
    "Software Engineer focused on Java, Spring Boot, backend systems, observability, and real-world engineering projects.",
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
    description:
      "Software Engineer focused on Java, Spring Boot, backend systems, observability, and real-world engineering projects.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artham Bhardwaj — Software Engineer",
    description:
      "Software Engineer focused on Java, Spring Boot, backend systems, observability, and real-world engineering projects.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0b0d12] text-zinc-100">{children}</body>
    </html>
  );
}
