"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import portrait from "../../../public/assets/images/potfolioselfimage.jpeg";
import {
  capabilityGroups,
  experience,
  flowzen,
  flowzenPoints,
  problemSolvingCategories,
  profile,
  showcase,
  skillGroups,
  stats,
  summary,
  useNavTarget,
  workflow,
} from "./shared";

type WinId = "about" | "work" | "project" | "flowzen" | "stack" | "experience" | "dsa" | "contact";
type WinState = { open: boolean; x: number; y: number; z: number };

const layout: Record<WinId, { title: string; icon: string; width: number; x: number; y: number; open: boolean }> = {
  about: { title: "About_Me.txt - Notepad", icon: "📝", width: 540, x: 120, y: 24, open: true },
  work: { title: "C:\\Artham\\Projects", icon: "📁", width: 470, x: 690, y: 40, open: true },
  flowzen: { title: "Flowzen.exe (Freeware)", icon: "🧩", width: 430, x: 690, y: 420, open: true },
  contact: { title: "Hire_Me.exe", icon: "💡", width: 400, x: 220, y: 560, open: true },
  project: { title: "Properties", icon: "📄", width: 560, x: 300, y: 90, open: false },
  stack: { title: "System Properties: Skills", icon: "⚙️", width: 560, x: 260, y: 60, open: false },
  experience: { title: "Experience.doc - WordPad", icon: "💼", width: 500, x: 340, y: 120, open: false },
  dsa: { title: "DSA.exe", icon: "🏆", width: 480, x: 420, y: 80, open: false },
};

const navMap: Record<string, WinId> = {
  work: "work",
  capabilities: "stack",
  stack: "stack",
  experience: "experience",
  "problem-solving": "dsa",
  contact: "contact",
};
const navIds = Object.keys(navMap);

const desktopIcons: { label: string; icon: string; win?: WinId; href?: string; external?: boolean }[] = [
  { label: "About_Me.txt", icon: "📝", win: "about" },
  { label: "My Projects", icon: "📁", win: "work" },
  { label: "Flowzen.exe", icon: "🧩", win: "flowzen" },
  { label: "Skills", icon: "⚙️", win: "stack" },
  { label: "Experience.doc", icon: "💼", win: "experience" },
  { label: "DSA.exe", icon: "🏆", win: "dsa" },
  { label: "Hire_Me.exe", icon: "💡", win: "contact" },
  { label: "Resume.pdf", icon: "📄", href: profile.resume },
  { label: "GitHub", icon: "💾", href: profile.github, external: true },
];

const canDrag = () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches;

export default function Os98Home() {
  const [wins, setWins] = useState<Record<WinId, WinState>>(() => {
    // Squeeze the starting positions on narrower desktops so windows stay on screen.
    const scale = typeof window === "undefined" ? 1 : Math.min(1, (window.innerWidth - 160) / 1100);
    const entries = (Object.keys(layout) as WinId[]).map((id, i) => [
      id,
      { open: layout[id].open, x: Math.round(layout[id].x * scale), y: layout[id].y, z: i + 1 },
    ]);
    return Object.fromEntries(entries) as Record<WinId, WinState>;
  });
  const [selected, setSelected] = useState(showcase[0]);
  const topZ = (w: Record<WinId, WinState>) => Math.max(...Object.values(w).map((s) => s.z)) + 1;
  const focus = (id: WinId) => setWins((w) => (w[id].z === topZ(w) - 1 ? w : { ...w, [id]: { ...w[id], z: topZ(w) } }));
  const open = (id: WinId) => {
    setWins((w) => ({ ...w, [id]: { ...w[id], open: true, z: topZ(w) } }));
    if (!canDrag()) setTimeout(() => document.getElementById(`win-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };
  const close = (id: WinId) => setWins((w) => ({ ...w, [id]: { ...w[id], open: false } }));

  useNavTarget(navIds, (id) => open(navMap[id]));

  function startDrag(id: WinId, e: React.PointerEvent) {
    if (!canDrag() || (e.target as Element).closest("button")) return;
    const bar = e.currentTarget as HTMLElement;
    const startX = e.clientX;
    const startY = e.clientY;
    const { x, y } = wins[id];
    const bounds = bar.closest(".w98-desktop")?.getBoundingClientRect();
    bar.setPointerCapture(e.pointerId);
    const move = (ev: PointerEvent) => {
      const nx = Math.max(-200, Math.min((bounds?.width ?? 1200) - 120, x + ev.clientX - startX));
      const ny = Math.max(0, Math.min((bounds?.height ?? 900) - 40, y + ev.clientY - startY));
      setWins((w) => ({ ...w, [id]: { ...w[id], x: nx, y: ny } }));
    };
    const up = () => {
      bar.removeEventListener("pointermove", move);
      bar.removeEventListener("pointerup", up);
    };
    bar.addEventListener("pointermove", move);
    bar.addEventListener("pointerup", up);
  }

  const wp = (id: WinId) => ({ id, state: wins[id], onFocus: focus, onClose: close, onDragStart: startDrag });

  return (
    <main id="themed-top" className="themed-main w98-desktop">
      <nav className="w98-icons" aria-label="Desktop">
        {desktopIcons.map((icon) =>
          icon.win ? (
            <button key={icon.label} type="button" className="w98-icon" onClick={() => open(icon.win!)} onDoubleClick={() => open(icon.win!)}>
              <i aria-hidden="true">{icon.icon}</i>
              <span>{icon.label}</span>
            </button>
          ) : (
            <a key={icon.label} className="w98-icon" href={icon.href} {...(icon.external ? { target: "_blank", rel: "noreferrer" } : {})}>
              <i aria-hidden="true">{icon.icon}</i>
              <span>{icon.label}</span>
            </a>
          ),
        )}
      </nav>

      <div className="w98-windows">
        <Win {...wp("about")}>
          <div className="w98-menu" aria-hidden="true">
            <span><u>F</u>ile</span>
            <span><u>E</u>dit</span>
            <span><u>S</u>earch</span>
            <span><u>H</u>elp</span>
          </div>
          <div className="w98-field w98-about">
            <Image src={portrait} alt={`Portrait of ${profile.name}`} placeholder="blur" sizes="140px" className="w98-portrait" priority />
            <div>
              <h1 className="w98-h1">{profile.name}</h1>
              <p className="w98-role">
                {experience.currentRole} · Backend Engineer
                <br />
                {profile.subtitle}
              </p>
              <p>{summary}</p>
              <p className="w98-status">■ Status: Available for backend roles</p>
            </div>
          </div>
          <div className="w98-row">
            <a className="w98-btn" href={profile.resume}>Résumé</a>
            <a className="w98-btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="w98-btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <button type="button" className="w98-btn" onClick={() => open("contact")}>Hire me…</button>
          </div>
          <dl className="w98-stats">
            {stats.map((s) => (
              <div key={s.label} className="w98-field">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </Win>

        <Win {...wp("work")}>
          <div className="w98-address">
            Address <span className="w98-field">C:\Artham\Projects</span>
          </div>
          <div className="w98-field w98-list" role="list">
            {showcase.map((p) => (
              <button
                key={p.slug}
                type="button"
                role="listitem"
                className="w98-list-row"
                onClick={() => {
                  setSelected(p);
                  open("project");
                }}
              >
                <span aria-hidden="true">📁</span>
                <span className="w98-list-name">{p.name}</span>
                <span className="w98-list-kind">{p.kind}</span>
              </button>
            ))}
          </div>
          <p className="w98-statusbar">
            {showcase.length} object(s) · Click a folder to open it
          </p>
        </Win>

        <Win {...wp("project")} title={`${selected.name} Properties`}>
          <div className="w98-tabs" aria-hidden="true">
            <span className="w98-tab-active">General</span>
            <span>Details</span>
          </div>
          <div className="w98-panel">
            {selected.images?.[0] && (
              <div className="w98-field w98-shot">
                <Image src={selected.images[0].src} alt={selected.images[0].alt} width={selected.images[0].width} height={selected.images[0].height} sizes="520px" />
              </div>
            )}
            <h2 className="w98-h2">{selected.name}</h2>
            <p className="w98-tagline">{selected.tagline}</p>
            <p>{selected.mySolution}</p>
            {selected.highlights && (
              <table className="w98-table">
                <tbody>
                  {selected.highlights.map((h) => (
                    <tr key={h.label}>
                      <th scope="row">{h.label}:</th>
                      <td>{h.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <p className="w98-topics">{selected.topics.join(" · ")}</p>
          </div>
          <div className="w98-row w98-row-end">
            {selected.liveUrl && (
              <a className="w98-btn w98-btn-default" href={selected.liveUrl} target="_blank" rel="noreferrer">Run (free)</a>
            )}
            <Link className="w98-btn" href={`/problems/${selected.slug}`}>Case study</Link>
            {selected.githubUrl && (
              <a className="w98-btn" href={selected.githubUrl} target="_blank" rel="noreferrer">Source</a>
            )}
          </div>
        </Win>

        {flowzen?.liveUrl && (
          <Win {...wp("flowzen")}>
            <div className="w98-dialog">
              <i aria-hidden="true">🧩</i>
              <div>
                <p>
                  <b>Preparing for system design interviews?</b>
                </p>
                <p>I built Flowzen and host it for free. It turns your design into a live simulation.</p>
                <ul className="w98-bullets">
                  {flowzenPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w98-row w98-row-end">
              <a className="w98-btn w98-btn-default" href={flowzen.liveUrl} target="_blank" rel="noreferrer">Run Flowzen.exe</a>
              <Link className="w98-btn" href="/problems/flowzen">How I built it</Link>
            </div>
          </Win>
        )}

        <Win {...wp("stack")}>
          <div className="w98-panel w98-scroll">
            {skillGroups.map((group) => (
              <fieldset key={group.title} className="w98-group">
                <legend>{group.title}</legend>
                <div className="w98-chips">
                  {group.items.map((item) => (
                    <span key={item} className="w98-chip">{item}</span>
                  ))}
                </div>
              </fieldset>
            ))}
            <fieldset className="w98-group">
              <legend>What I can build</legend>
              <ul className="w98-bullets">
                {capabilityGroups.map((c) => (
                  <li key={c.title}>
                    <b>{c.title}</b>: {c.description} <Link href={c.projectHref}>({c.project})</Link>
                  </li>
                ))}
              </ul>
            </fieldset>
          </div>
        </Win>

        <Win {...wp("experience")}>
          <div className="w98-field w98-doc">
            <h2 className="w98-h2">{experience.currentRole}</h2>
            <p>
              {experience.company} · {experience.dates}
            </p>
            <p className="w98-topics">{experience.highlights.join(" · ")}</p>
            <hr />
            <h2 className="w98-h2">{experience.education.degree}</h2>
            <p>
              {experience.education.school} · {experience.education.dates}
            </p>
            <p>CGPA: {experience.education.cgpa}</p>
          </div>
        </Win>

        <Win {...wp("dsa")}>
          <div className="w98-panel">
            <p className="w98-big">750+ problems solved</p>
            <div className="w98-progress" aria-hidden="true">
              <i />
            </div>
            <fieldset className="w98-group">
              <legend>My workflow</legend>
              <ol className="w98-bullets">
                {workflow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </fieldset>
            <p className="w98-topics">{problemSolvingCategories.join(" · ")}</p>
          </div>
          <div className="w98-row w98-row-end">
            <a className="w98-btn" href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
            <a className="w98-btn" href={profile.gfg} target="_blank" rel="noreferrer">GeeksforGeeks</a>
          </div>
        </Win>

        <Win {...wp("contact")}>
          <div className="w98-dialog">
            <i aria-hidden="true">💡</i>
            <div>
              <p>
                {profile.name.split(" ")[0]} is <b>available for backend and software engineering roles</b>.
              </p>
              <p>
                Email: <span className="w98-select">{profile.email}</span>
              </p>
            </div>
          </div>
          <div className="w98-row w98-row-end">
            <a className="w98-btn w98-btn-default" href={`mailto:${profile.email}`}>OK, send email</a>
            <a className="w98-btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </Win>
      </div>
    </main>
  );
}

function Win({
  id,
  title,
  state,
  onFocus,
  onClose,
  onDragStart,
  children,
}: {
  id: WinId;
  title?: string;
  state: WinState;
  onFocus: (id: WinId) => void;
  onClose: (id: WinId) => void;
  onDragStart: (id: WinId, e: React.PointerEvent) => void;
  children: React.ReactNode;
}) {
  if (!state.open) return null;
  const meta = layout[id];
  const label = title ?? meta.title;
  return (
    <section
      id={`win-${id}`}
      aria-label={label}
      className="w98-win"
      style={{ left: state.x, top: state.y, width: meta.width, zIndex: state.z }}
      onPointerDown={() => onFocus(id)}
    >
      <div className="w98-titlebar" onPointerDown={(e) => onDragStart(id, e)}>
        <span className="w98-title">
          <span aria-hidden="true">{meta.icon}</span> {label}
        </span>
        <span className="w98-controls">
          <button type="button" className="w98-btn w98-ctl" onClick={() => onClose(id)} aria-label={`Close ${label}`}>
            ✕
          </button>
        </span>
      </div>
      <div className="w98-body">{children}</div>
    </section>
  );
}
