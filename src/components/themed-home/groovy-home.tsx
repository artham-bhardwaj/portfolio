"use client";

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
} from "./shared";

const stickerColors = ["#eab308", "#f97316", "#c2410c", "#0f766e", "#f6e3c3"];
const sleeveColors = ["#c2410c", "#0f766e", "#b45309", "#7c2d12", "#a16207", "#115e59"];

export default function GroovyHome() {
  const skills = skillGroups.flatMap((g) => g.items);

  return (
    <main id="themed-top" className="themed-main gro">
      {/* Poster hero */}
      <section className="gro-hero">
        <div className="gro-sun" aria-hidden="true" />
        <div className="gro-hero-inner">
          <div className="gro-hero-copy">
            <p className="gro-hey">Hey there, I&apos;m</p>
            <h1 className="gro-name">Artham</h1>
            <p className="gro-role">Backend engineer · Java · Spring Boot · System design</p>
            <p className="gro-copy">{summary}</p>
            <div className="gro-actions">
              <a className="gro-btn" href="#work">Spin the records ↓</a>
              <a className="gro-btn gro-btn-alt" href={profile.resume}>Résumé</a>
              <a className="gro-btn gro-btn-alt" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div className="gro-arch">
            <Image src={portrait} alt={`Portrait of ${profile.name}`} placeholder="blur" sizes="(min-width: 1024px) 380px, 80vw" priority />
            <svg className="gro-badge" viewBox="0 0 200 200" role="img" aria-label="Available for opportunities">
              <defs>
                <path id="gro-circle" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
              </defs>
              <circle cx="100" cy="100" r="96" fill="#eab308" />
              <circle cx="100" cy="100" r="56" fill="#c2410c" />
              <text className="gro-badge-ring">
                <textPath href="#gro-circle">AVAILABLE FOR OPPORTUNITIES ✿ OPEN TO WORK ✿</textPath>
              </text>
              <text x="100" y="112" textAnchor="middle" className="gro-badge-hi">hire!</text>
            </svg>
          </div>
        </div>
        <dl className="gro-stats">
          {stats.map((s, i) => (
            <div key={s.label} style={{ rotate: `${i % 2 ? 2 : -2}deg` }}>
              <dd>{s.value}</dd>
              <dt>{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <div className="gro-ticker" aria-hidden="true">
        <div>
          {[0, 1].map((k) => (
            <span key={k}>
              {["Java", "Spring Boot", "System Design", "SQL", "Python", "Observability", "Backend"].map((t) => (
                <span key={t}>
                  {t} <b>✿</b>{" "}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Records */}
      <section id="work" className="gro-section">
        <p className="gro-eyebrow">✿ Side A · The records</p>
        <h2 className="gro-h2">Projects I&apos;ve built end to end</h2>
        <div className="gro-records">
          {showcase.map((p, i) => (
            <article key={p.slug} className="gro-record" style={{ "--sleeve": sleeveColors[i % sleeveColors.length] } as React.CSSProperties}>
              <Link href={`/problems/${p.slug}`} className="gro-sleeve" aria-label={`${p.name} case study`}>
                <span className="gro-vinyl" aria-hidden="true" />
                <span className="gro-cover">
                  {p.images?.[0] ? (
                    <Image src={p.images[0].src} alt={p.images[0].alt} width={p.images[0].width} height={p.images[0].height} sizes="320px" />
                  ) : (
                    <span className="gro-cover-text">{p.name}</span>
                  )}
                  <span className="gro-cover-band">
                    Track {i + 1} · {p.year}
                  </span>
                </span>
              </Link>
              <h3 className="gro-h3">{p.name}</h3>
              <p className="gro-tagline">{p.tagline}</p>
              <p className="gro-small">{p.topics.slice(0, 4).join(" · ")}</p>
              <div className="gro-actions gro-actions-sm">
                {p.liveUrl && (
                  <a className="gro-btn" href={p.liveUrl} target="_blank" rel="noreferrer">Try it free</a>
                )}
                <Link className="gro-btn gro-btn-alt" href={`/problems/${p.slug}`}>The story</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Flowzen ticket */}
      {flowzen?.liveUrl && (
        <section className="gro-section" aria-labelledby="gro-flowzen">
          <div className="gro-ticket">
            <div className="gro-ticket-main">
              <p className="gro-eyebrow">✿ Free gig · Built and hosted by me</p>
              <h2 id="gro-flowzen" className="gro-h2">Preparing for system design interviews? Practice on Flowzen.</h2>
              <ul className="gro-list">
                {flowzenPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="gro-actions">
                <a className="gro-btn" href={flowzen.liveUrl} target="_blank" rel="noreferrer">Dig in, it&apos;s free ↗</a>
                <Link className="gro-btn gro-btn-alt" href="/problems/flowzen">How I built it</Link>
              </div>
            </div>
            <div className="gro-ticket-stub" aria-hidden="true">
              <span>ADMIT ALL</span>
              <b>FREE</b>
              <span>No sign-up</span>
            </div>
          </div>
        </section>
      )}

      {/* Skills */}
      <section id="capabilities" className="gro-section">
        <p className="gro-eyebrow" id="stack">✿ Good vibes only · Skills</p>
        <h2 className="gro-h2">What I bring to the band</h2>
        <div className="gro-stickers">
          {skills.map((s, i) => (
            <span
              key={s}
              className="gro-sticker"
              style={{ "--bg": stickerColors[i % stickerColors.length], rotate: `${((i * 37) % 9) - 4}deg` } as React.CSSProperties}
            >
              {s}
            </span>
          ))}
        </div>
        <div className="gro-caps">
          {capabilityGroups.map((c) => (
            <Link key={c.title} href={c.projectHref} className="gro-cap">
              <h3 className="gro-h3">{c.title}</h3>
              <p className="gro-small">{c.description}</p>
              <p className="gro-small gro-dim">Heard on: {c.project}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Tour dates */}
      <section id="experience" className="gro-section">
        <p className="gro-eyebrow">✿ On tour</p>
        <h2 className="gro-h2">Tour dates</h2>
        <ul className="gro-tour">
          <li>
            <span className="gro-date">{experience.dates}</span>
            <span className="gro-venue">
              {experience.currentRole}
              <small>{experience.company}</small>
            </span>
            <span className="gro-pill">Now playing</span>
          </li>
          <li>
            <span className="gro-date">{experience.education.dates}</span>
            <span className="gro-venue">
              {experience.education.degree}
              <small>
                {experience.education.school} · CGPA {experience.education.cgpa}
              </small>
            </span>
            <span className="gro-pill gro-pill-dim">Sold out</span>
          </li>
        </ul>
      </section>

      {/* Greatest hits */}
      <section id="problem-solving" className="gro-section gro-hits">
        <div className="gro-gold" aria-hidden="true">
          <span>750+</span>
        </div>
        <div>
          <p className="gro-eyebrow">✿ Greatest hits</p>
          <h2 className="gro-h2">750+ problems solved</h2>
          <p className="gro-copy">Across LeetCode and GeeksforGeeks. These are my favourite tracks:</p>
          <div className="gro-stickers gro-stickers-sm">
            {problemSolvingCategories.map((c) => (
              <span key={c} className="gro-sticker" style={{ "--bg": "#f6e3c3" } as React.CSSProperties}>
                {c}
              </span>
            ))}
          </div>
          <div className="gro-actions">
            <a className="gro-btn gro-btn-alt" href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
            <a className="gro-btn gro-btn-alt" href={profile.gfg} target="_blank" rel="noreferrer">GeeksforGeeks</a>
          </div>
        </div>
      </section>

      {/* Postcard */}
      <section id="contact" className="gro-section">
        <div className="gro-postcard">
          <div>
            <p className="gro-eyebrow">✿ Wish you were here</p>
            <h2 className="gro-h2">Let&apos;s build something groovy together.</h2>
            <p className="gro-copy">Open to backend and software engineering roles. Drop me a line.</p>
            <div className="gro-actions">
              <a className="gro-btn" href={`mailto:${profile.email}`}>Drop me a line</a>
              <a className="gro-btn gro-btn-alt" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="gro-address">
            <span className="gro-stamp" aria-hidden="true">✌</span>
            <p>To: {profile.name}</p>
            <p className="gro-email">{profile.email}</p>
            <p>Backend Engineer, Earth</p>
          </div>
        </div>
      </section>
    </main>
  );
}
