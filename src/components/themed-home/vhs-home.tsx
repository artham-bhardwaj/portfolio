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
  type ShowcaseProject,
} from "./shared";

const channels = [
  { id: "about", label: "ARTHAM" },
  { id: "work", label: "PROJECTS" },
  { id: "flowzen", label: "FREE RENTAL" },
  { id: "stack", label: "SKILLS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "problem-solving", label: "DSA" },
  { id: "contact", label: "CONTACT" },
] as const;
type ChannelId = (typeof channels)[number]["id"];

const navIds = ["work", "capabilities", "stack", "experience", "problem-solving", "contact"];
const tapeColors = [
  ["#ff3b6b", "#ffb03b"],
  ["#3bd4ff", "#7b5bff"],
  ["#7cff5b", "#ffd23f"],
  ["#ff7ad9", "#7b5bff"],
  ["#ffb03b", "#ff3b6b"],
  ["#3bd4ff", "#7cff5b"],
];

export default function VhsHome() {
  const [channel, setChannel] = useState<ChannelId>("about");
  const [tape, setTape] = useState<ShowcaseProject | null>(null);
  const [flip, setFlip] = useState(0);
  const index = channels.findIndex((c) => c.id === channel);

  const tune = (id: ChannelId) => {
    setChannel(id);
    setFlip((f) => f + 1);
  };
  const step = (delta: number) => tune(channels[(index + delta + channels.length) % channels.length].id);
  const insert = (p: ShowcaseProject) => {
    setTape(p);
    tune("work");
    document.getElementById("themed-top")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useNavTarget(navIds, (id) => tune(id === "capabilities" ? "stack" : (id as ChannelId)));

  return (
    <main id="themed-top" className="themed-main vcr">
      <div className="vcr-tv">
        <div className="vcr-screen" key={flip}>
          <div className="vcr-osd vcr-osd-tl">CH {String(index + 1).padStart(2, "0")}</div>
          <div className="vcr-osd vcr-osd-tr">{channel === "work" && tape ? `PLAY ▶ ${tape.name.toUpperCase()}` : "PLAY ▶"}</div>
          <div className="vcr-osd vcr-osd-bl">{channels[index].label}</div>

          <div className="vcr-content" id={channel}>
            {channel === "about" && (
              <div className="vcr-about">
                <div className="vcr-portrait">
                  <Image src={portrait} alt={`Portrait of ${profile.name}`} placeholder="blur" sizes="240px" priority />
                </div>
                <div>
                  <p className="vcr-kicker">▶ NOW PLAYING</p>
                  <h1 className="vcr-h1">{profile.name}</h1>
                  <p className="vcr-role">Backend Engineer · {profile.subtitle}</p>
                  <p className="vcr-copy">{summary}</p>
                  <p className="vcr-rec">● REC · Open to backend engineering roles</p>
                  <dl className="vcr-stats">
                    {stats.map((s) => (
                      <div key={s.label}>
                        <dd>{s.value}</dd>
                        <dt>{s.label}</dt>
                      </div>
                    ))}
                  </dl>
                  <div className="vcr-actions">
                    <button type="button" className="vcr-btn vcr-btn-hot" onClick={() => tune("work")}>▶ Watch projects</button>
                    <a className="vcr-btn" href={profile.resume}>Résumé</a>
                    <a className="vcr-btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
            )}

            {channel === "work" && !tape && (
              <div className="vcr-center">
                <p className="vcr-big">INSERT A TAPE</p>
                <p className="vcr-copy">Pick a project from the shelf below ▼</p>
              </div>
            )}

            {channel === "work" && tape && (
              <div className="vcr-project">
                {tape.images?.[0] && (
                  <div className="vcr-shot">
                    <Image src={tape.images[0].src} alt={tape.images[0].alt} width={tape.images[0].width} height={tape.images[0].height} sizes="(min-width: 1024px) 560px, 90vw" />
                  </div>
                )}
                <div>
                  <p className="vcr-kicker">{tape.kind} · {tape.year}</p>
                  <h2 className="vcr-h2">{tape.name}</h2>
                  <p className="vcr-role">{tape.tagline}</p>
                  <p className="vcr-copy">{tape.mySolution}</p>
                  {tape.highlights && (
                    <dl className="vcr-stats">
                      {tape.highlights.map((h) => (
                        <div key={h.label}>
                          <dd>{h.value}</dd>
                          <dt>{h.label}</dt>
                        </div>
                      ))}
                    </dl>
                  )}
                  <div className="vcr-actions">
                    {tape.liveUrl && (
                      <a className="vcr-btn vcr-btn-hot" href={tape.liveUrl} target="_blank" rel="noreferrer">▶ Play it free</a>
                    )}
                    <Link className="vcr-btn" href={`/problems/${tape.slug}`}>Case study</Link>
                    {tape.githubUrl && (
                      <a className="vcr-btn" href={tape.githubUrl} target="_blank" rel="noreferrer">Source</a>
                    )}
                  </div>
                </div>
              </div>
            )}

            {channel === "flowzen" && flowzen?.liveUrl && (
              <div className="vcr-center vcr-left">
                <p className="vcr-kicker">FREE RENTAL · Built and hosted by me</p>
                <h2 className="vcr-h2">Practice system design on Flowzen</h2>
                <p className="vcr-copy">Preparing for system design interviews? Flowzen turns your design into a live simulation, free for everyone.</p>
                <ul className="vcr-list">
                  {flowzenPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="vcr-actions">
                  <a className="vcr-btn vcr-btn-hot" href={flowzen.liveUrl} target="_blank" rel="noreferrer">▶ Play it free</a>
                  <Link className="vcr-btn" href="/problems/flowzen">How I built it</Link>
                </div>
              </div>
            )}

            {channel === "stack" && (
              <div className="vcr-left">
                <h2 className="vcr-h2">Skills</h2>
                <div className="vcr-skills">
                  {skillGroups.map((g) => (
                    <div key={g.title}>
                      <h3 className="vcr-h3">{g.title}</h3>
                      <p className="vcr-copy">{g.items.join(" · ")}</p>
                    </div>
                  ))}
                </div>
                <h3 className="vcr-h3">What I can build</h3>
                <ul className="vcr-list">
                  {capabilityGroups.map((c) => (
                    <li key={c.title}>
                      <b>{c.title}</b>: {c.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {channel === "experience" && (
              <div className="vcr-left">
                <h2 className="vcr-h2">Experience</h2>
                <div className="vcr-entry">
                  <p className="vcr-kicker">{experience.dates}</p>
                  <h3 className="vcr-h3">{experience.currentRole} · {experience.company}</h3>
                  <p className="vcr-copy">{experience.highlights.join(" · ")}</p>
                </div>
                <div className="vcr-entry">
                  <p className="vcr-kicker">{experience.education.dates}</p>
                  <h3 className="vcr-h3">{experience.education.degree}</h3>
                  <p className="vcr-copy">
                    {experience.education.school} · CGPA {experience.education.cgpa}
                  </p>
                </div>
              </div>
            )}

            {channel === "problem-solving" && (
              <div className="vcr-center">
                <p className="vcr-big">750+</p>
                <p className="vcr-copy">DSA problems solved across LeetCode and GeeksforGeeks.</p>
                <p className="vcr-copy">{problemSolvingCategories.join(" · ")}</p>
                <div className="vcr-actions vcr-actions-center">
                  <a className="vcr-btn" href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
                  <a className="vcr-btn" href={profile.gfg} target="_blank" rel="noreferrer">GeeksforGeeks</a>
                </div>
              </div>
            )}

            {channel === "contact" && (
              <div className="vcr-center">
                <p className="vcr-kicker">▶ FINAL SCENE</p>
                <h2 className="vcr-h2">Let&apos;s build something reliable together.</h2>
                <p className="vcr-copy">Open to backend and software engineering roles.</p>
                <p className="vcr-email">{profile.email}</p>
                <div className="vcr-actions vcr-actions-center">
                  <a className="vcr-btn vcr-btn-hot" href={`mailto:${profile.email}`}>▶ Send an email</a>
                  <a className="vcr-btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="vcr-deck">
          <span className="vcr-brand">ARTHAM · HQ VIDEO</span>
          <div className="vcr-buttons">
            <button type="button" onClick={() => step(-1)} aria-label="Previous channel">◀◀</button>
            <button type="button" onClick={() => tune("about")} aria-label="Play from the start">▶</button>
            <button type="button" onClick={() => setTape(null)} aria-label="Eject tape">⏏</button>
            <button type="button" onClick={() => step(1)} aria-label="Next channel">▶▶</button>
          </div>
          <div className="vcr-channels" role="tablist" aria-label="Channels">
            {channels.map((c, i) => (
              <button key={c.id} type="button" role="tab" aria-selected={channel === c.id} onClick={() => tune(c.id)}>
                {String(i + 1).padStart(2, "0")} {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="vcr-shelf" aria-label="Project tapes">
        <h2 className="vcr-shelf-title">▼ The tape shelf · pick a project</h2>
        <div className="vcr-tapes">
          {showcase.map((p, i) => {
            const [c1, c2] = tapeColors[i % tapeColors.length];
            return (
              <button
                key={p.slug}
                type="button"
                className={`vcr-tape ${tape?.slug === p.slug ? "vcr-tape-in" : ""}`}
                onClick={() => insert(p)}
                style={{ "--c1": c1, "--c2": c2 } as React.CSSProperties}
              >
                <span className="vcr-tape-stripe" aria-hidden="true" />
                <span className="vcr-tape-label">
                  {p.name}
                  <small>{p.tagline}</small>
                </span>
                <span className="vcr-tape-len">T-{60 + i * 30}</span>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
