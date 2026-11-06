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

const stages = [
  { id: "work", label: "WORK" },
  { id: "flowzen", label: "BONUS" },
  { id: "stack", label: "SKILLS" },
  { id: "experience", label: "STORY" },
  { id: "problem-solving", label: "DSA" },
  { id: "contact", label: "CONTINUE?" },
] as const;
type StageId = (typeof stages)[number]["id"];

const navIds = ["work", "capabilities", "stack", "experience", "problem-solving", "contact"];

export default function ArcadeHome() {
  const [stage, setStage] = useState<StageId>("work");
  const index = stages.findIndex((s) => s.id === stage);
  const go = (delta: number) => setStage(stages[(index + delta + stages.length) % stages.length].id);

  useNavTarget(navIds, (id) => setStage(id === "capabilities" ? "stack" : (id as StageId)));

  function onTabsKey(e: React.KeyboardEvent) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (index + (e.key === "ArrowRight" ? 1 : -1) + stages.length) % stages.length;
    setStage(stages[next].id);
    document.getElementById(`arc-tab-${stages[next].id}`)?.focus();
  }

  return (
    <main id="themed-top" className="themed-main arc">
      <div className="arc-cabinet">
        <div className="arc-marquee">
          <span>ARTHAM</span>
          <small>BACKEND QUEST</small>
        </div>

        <div className="arc-screen">
          <div className="arc-hud">
            <div><b>1UP</b>ARTHAM</div>
            <div><b>HI-SCORE</b>750+ DSA</div>
            <div><b>CREDIT</b>FREE PLAY</div>
          </div>

          <div className="arc-grid">
            {/* Player card */}
            <aside className="arc-player" aria-label="Player">
              <p className="arc-label">PLAYER 1</p>
              <div className="arc-avatar">
                <Image src={portrait} alt={`Portrait of ${profile.name}`} sizes="96px" width={48} quality={40} priority />
              </div>
              <h1 className="arc-name">{profile.name.toUpperCase()}</h1>
              <dl className="arc-sheet">
                <div><dt>CLASS</dt><dd>BACKEND ENGINEER</dd></div>
                <div><dt>GUILD</dt><dd>{experience.currentRole.toUpperCase()} @ TCS</dd></div>
                <div><dt>MAIN</dt><dd>JAVA · SPRING BOOT</dd></div>
                {stats.map((s) => (
                  <div key={s.label}><dt>{s.label.toUpperCase()}</dt><dd>{s.value}</dd></div>
                ))}
              </dl>
              <p className="arc-ready">● READY FOR HIRE</p>
              <p className="arc-summary">{summary}</p>
              <div className="arc-actions">
                <a className="arc-btn" href={profile.resume}>RESUME</a>
                <a className="arc-btn arc-btn-alt" href={profile.github} target="_blank" rel="noreferrer">GITHUB</a>
              </div>
            </aside>

            {/* Stage select */}
            <section className="arc-stage" aria-label="Stages">
              <p className="arc-label">SELECT STAGE · ◀ ▶</p>
              <div className="arc-tabs" role="tablist" aria-label="Stages" onKeyDown={onTabsKey}>
                {stages.map((s, i) => (
                  <button
                    key={s.id}
                    id={`arc-tab-${s.id}`}
                    type="button"
                    role="tab"
                    aria-selected={stage === s.id}
                    tabIndex={stage === s.id ? 0 : -1}
                    className="arc-tab"
                    onClick={() => setStage(s.id)}
                  >
                    {i + 1}·{s.label}
                  </button>
                ))}
              </div>

              <div className="arc-panel" role="tabpanel" key={stage} id={stage}>
                {stage === "work" && (
                  <>
                    <h2 className="arc-h2">STAGE 1 · WORK</h2>
                    <ol className="arc-levels">
                      {showcase.map((p, i) => (
                        <li key={p.slug} className="arc-level">
                          <div className="arc-level-head">
                            <span className="arc-level-no">LV{String(i + 1).padStart(2, "0")}</span>
                            <h3>{p.name.toUpperCase()}</h3>
                            {p.status === "Accepted" && <span className="arc-clear">CLEARED!</span>}
                          </div>
                          <p className="arc-tag">{p.tagline}</p>
                          {p.highlights && (
                            <p className="arc-bonus">
                              {p.highlights.map((h) => `${h.value} ${h.label.toUpperCase()}`).join("  ·  ")}
                            </p>
                          )}
                          <div className="arc-actions">
                            <Link className="arc-btn" href={`/problems/${p.slug}`}>ENTER ▶</Link>
                            {p.liveUrl && (
                              <a className="arc-btn arc-btn-hot" href={p.liveUrl} target="_blank" rel="noreferrer">PLAY FREE</a>
                            )}
                            {p.githubUrl && (
                              <a className="arc-btn arc-btn-alt" href={p.githubUrl} target="_blank" rel="noreferrer">SOURCE</a>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </>
                )}

                {stage === "flowzen" && flowzen?.liveUrl && (
                  <>
                    <h2 className="arc-h2">BONUS STAGE · FREE PLAY</h2>
                    <p className="arc-big">FLOWZEN</p>
                    <p className="arc-copy">
                      Preparing for system design interviews? I built Flowzen and host it free for everyone.
                    </p>
                    <ul className="arc-list">
                      {flowzenPoints.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <div className="arc-actions">
                      <a className="arc-btn arc-btn-hot" href={flowzen.liveUrl} target="_blank" rel="noreferrer">PRESS START ▶</a>
                      <Link className="arc-btn arc-btn-alt" href="/problems/flowzen">HOW I BUILT IT</Link>
                    </div>
                  </>
                )}

                {stage === "stack" && (
                  <>
                    <h2 className="arc-h2">STAGE 3 · POWER-UPS</h2>
                    {skillGroups.map((g) => (
                      <div key={g.title} className="arc-skillgroup">
                        <h3>{g.title.toUpperCase()}</h3>
                        <div className="arc-chips">
                          {g.items.map((item) => (
                            <span key={item} className="arc-chip">{item}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                    <h3 className="arc-sub">SPECIAL MOVES</h3>
                    <ul className="arc-list">
                      {capabilityGroups.map((c) => (
                        <li key={c.title}>
                          <b>{c.title}</b>: {c.description}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {stage === "experience" && (
                  <>
                    <h2 className="arc-h2">STAGE 4 · STORY MODE</h2>
                    <div className="arc-story">
                      <p className="arc-story-when">{experience.dates.toUpperCase()}</p>
                      <h3>{experience.currentRole.toUpperCase()}</h3>
                      <p className="arc-copy">{experience.company}</p>
                      <div className="arc-chips">
                        {experience.highlights.map((h) => (
                          <span key={h} className="arc-chip">{h}</span>
                        ))}
                      </div>
                    </div>
                    <div className="arc-story">
                      <p className="arc-story-when">{experience.education.dates}</p>
                      <h3>B.TECH · CSE</h3>
                      <p className="arc-copy">
                        {experience.education.school} · CGPA {experience.education.cgpa}
                      </p>
                    </div>
                  </>
                )}

                {stage === "problem-solving" && (
                  <>
                    <h2 className="arc-h2">STAGE 5 · HIGH SCORE</h2>
                    <p className="arc-big">750+</p>
                    <p className="arc-copy">DSA problems solved across LeetCode and GeeksforGeeks.</p>
                    <h3 className="arc-sub">COMBO</h3>
                    <ol className="arc-list arc-list-num">
                      {workflow.map((w) => (
                        <li key={w}>{w}</li>
                      ))}
                    </ol>
                    <div className="arc-chips">
                      {problemSolvingCategories.map((c) => (
                        <span key={c} className="arc-chip">{c}</span>
                      ))}
                    </div>
                    <div className="arc-actions">
                      <a className="arc-btn" href={profile.leetcode} target="_blank" rel="noreferrer">LEETCODE</a>
                      <a className="arc-btn arc-btn-alt" href={profile.gfg} target="_blank" rel="noreferrer">GFG</a>
                    </div>
                  </>
                )}

                {stage === "contact" && (
                  <>
                    <h2 className="arc-h2">CONTINUE?</h2>
                    <p className="arc-big arc-countdown" aria-hidden="true" />
                    <p className="arc-copy">Open to backend and software engineering roles. Insert an email to continue.</p>
                    <p className="arc-email">{profile.email}</p>
                    <div className="arc-actions">
                      <a className="arc-btn arc-btn-hot" href={`mailto:${profile.email}`}>INSERT COIN ▶ EMAIL</a>
                      <a className="arc-btn arc-btn-alt" href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
                    </div>
                  </>
                )}
              </div>
            </section>
          </div>
        </div>

        <div className="arc-controls">
          <div className="arc-stick" aria-hidden="true" />
          <button type="button" className="arc-round arc-round-a" onClick={() => go(-1)} aria-label="Previous stage">◀</button>
          <button type="button" className="arc-round arc-round-b" onClick={() => go(1)} aria-label="Next stage">▶</button>
          <span className="arc-coin" aria-hidden="true">INSERT COIN</span>
        </div>
      </div>
    </main>
  );
}
