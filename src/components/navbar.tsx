"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { ThemePicker } from "@/components/theme-picker";
import { MusicButton } from "@/components/music-button";

const navItems = [
  { label: "Work", id: "work" },
  { label: "Capabilities", id: "capabilities" },
  { label: "Stack", id: "stack" },
  { label: "Experience", id: "experience" },
  { label: "Problem Solving", id: "problem-solving" },
];

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const active = useActiveSection(isHome);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open ? "border-b border-border bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-fg font-mono text-xs font-semibold text-bg transition group-hover:scale-105">
            AB
          </span>
          <span className="text-sm font-semibold tracking-tight">Artham Bhardwaj</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                active === item.id ? "bg-surface-2 text-fg" : "text-muted hover:text-fg"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <MusicButton />
          <ThemePicker />
          <a
            href={profile.resume}
            className="hidden h-9 items-center rounded-full border border-border px-4 text-sm text-fg transition hover:border-border-strong sm:inline-flex"
          >
            Résumé
          </a>
          <Link
            href="/#contact"
            className="hidden h-9 items-center rounded-full bg-fg px-4 text-sm font-medium text-bg transition hover:opacity-85 sm:inline-flex"
          >
            Get in touch
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-fg lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-bg lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-base text-fg last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 py-4 sm:hidden">
              <a href={profile.resume} className="flex-1 rounded-full border border-border py-2.5 text-center text-sm">
                Résumé
              </a>
              <Link href="/#contact" onClick={() => setOpen(false)} className="flex-1 rounded-full bg-fg py-2.5 text-center text-sm font-medium text-bg">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
