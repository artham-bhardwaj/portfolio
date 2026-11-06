/**
 * Theme music, generated live with the Web Audio API. No audio files, so
 * nothing extra to host. Browsers only allow sound after a click, so music
 * starts from the speaker button and never on its own.
 */

type Song = {
  bpm: number;
  /** Called for every 16th-note step. `step` keeps counting across loops. */
  play: (step: number, time: number) => void;
  /** Optional sound played once when the song starts. */
  intro?: (time: number) => void;
};

type ToneOptions = {
  type?: OscillatorType;
  gain?: number;
  attack?: number;
  release?: number;
  cutoff?: number;
  /** Start the low-pass filter here and sweep down to `cutoff` (a "wah"). */
  sweepFrom?: number;
  q?: number;
  detune?: number;
  /** Also feed the echo effect. */
  echo?: boolean;
};

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let bus: GainNode | null = null;
let echoIn: GainNode | null = null;
let noiseBuffer: AudioBuffer | null = null;
let timer: ReturnType<typeof setInterval> | null = null;
let song: Song | null = null;
let songId: string | null = null;
let step = 0;
let nextTime = 0;
let playing = false;
const listeners = new Set<() => void>();

const mtof = (m: number) => 440 * Math.pow(2, (m - 69) / 12);

function setup() {
  if (ctx) return ctx;
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  ctx = new Ctor();

  const compressor = ctx.createDynamicsCompressor();
  compressor.threshold.value = -18;
  compressor.ratio.value = 4;
  master = ctx.createGain();
  master.gain.value = 0;
  master.connect(compressor).connect(ctx.destination);

  bus = ctx.createGain();
  bus.connect(master);

  // A simple echo: delay with feedback.
  echoIn = ctx.createGain();
  echoIn.gain.value = 0.28;
  const delay = ctx.createDelay(1);
  delay.delayTime.value = 0.36;
  const feedback = ctx.createGain();
  feedback.gain.value = 0.35;
  echoIn.connect(delay);
  delay.connect(feedback).connect(delay);
  delay.connect(master);

  noiseBuffer = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;

  document.addEventListener("visibilitychange", () => {
    if (!ctx) return;
    if (document.hidden) void ctx.suspend();
    else if (playing) void ctx.resume();
  });
  return ctx;
}

function tone(freq: number, t: number, dur: number, o: ToneOptions = {}) {
  if (!ctx || !bus) return;
  const osc = ctx.createOscillator();
  osc.type = o.type ?? "sine";
  osc.frequency.value = freq;
  if (o.detune) osc.detune.value = o.detune;

  const g = ctx.createGain();
  const peak = o.gain ?? 0.1;
  const attack = o.attack ?? 0.005;
  const release = o.release ?? 0.08;
  const hold = Math.max(attack, dur);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(peak, t + attack);
  g.gain.setValueAtTime(peak, t + hold);
  g.gain.exponentialRampToValueAtTime(0.0001, t + hold + release);

  let node: AudioNode = osc;
  if (o.cutoff) {
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.Q.value = o.q ?? 1;
    if (o.sweepFrom) {
      filter.frequency.setValueAtTime(o.sweepFrom, t);
      filter.frequency.exponentialRampToValueAtTime(o.cutoff, t + Math.max(0.05, dur));
    } else {
      filter.frequency.value = o.cutoff;
    }
    osc.connect(filter);
    node = filter;
  }
  node.connect(g);
  g.connect(bus);
  if (o.echo && echoIn) g.connect(echoIn);
  osc.start(t);
  osc.stop(t + hold + release + 0.05);
}

function noise(t: number, dur: number, gain: number, highpass: number, lowpass = 12000) {
  if (!ctx || !bus || !noiseBuffer) return;
  const src = ctx.createBufferSource();
  src.buffer = noiseBuffer;
  const hp = ctx.createBiquadFilter();
  hp.type = "highpass";
  hp.frequency.value = highpass;
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = lowpass;
  const g = ctx.createGain();
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(hp).connect(lp).connect(g).connect(bus);
  src.start(t);
  src.stop(t + dur + 0.05);
}

function kick(t: number, gain = 0.8, from = 150) {
  if (!ctx || !bus) return;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.frequency.setValueAtTime(from, t);
  osc.frequency.exponentialRampToValueAtTime(45, t + 0.12);
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
  osc.connect(g).connect(bus);
  osc.start(t);
  osc.stop(t + 0.35);
}

const has = (pattern: string, i: number) => pattern[i % pattern.length] === "x";

/* ---------- Arcade: fast chiptune ---------- */
const arcadeChords = [
  [57, 60, 64],
  [53, 57, 60],
  [48, 52, 55],
  [55, 59, 62],
];
const arcadeMelody = [
  [81, 0, 84, 0, 88, 0, 86, 84, 83, 0, 81, 0, 76, 0, 0, 0],
  [77, 0, 81, 0, 84, 0, 83, 81, 79, 0, 77, 0, 72, 0, 0, 0],
  [76, 0, 79, 0, 84, 0, 83, 79, 81, 0, 79, 0, 76, 0, 0, 0],
  [79, 0, 83, 0, 86, 0, 84, 83, 81, 0, 79, 0, 83, 0, 86, 0],
];
const arcade: Song = {
  bpm: 148,
  intro(t) {
    [72, 76, 79, 84].forEach((n, i) => tone(mtof(n), t + i * 0.07, 0.06, { type: "square", gain: 0.05 }));
  },
  play(s, t) {
    const i = s % 16;
    const bar = Math.floor(s / 16) % 4;
    const chord = arcadeChords[bar];
    const len = 60 / arcade.bpm / 4;
    if (i % 2 === 0) tone(mtof(chord[0] - (i % 4 === 0 ? 24 : 12)), t, len * 1.6, { type: "triangle", gain: 0.16 });
    tone(mtof(chord[i % 3] + 12), t, len * 0.6, { type: "square", gain: 0.022 });
    if (Math.floor(s / 64) % 2 === 1) {
      const note = arcadeMelody[bar][i];
      if (note) tone(mtof(note), t, len * 1.5, { type: "square", gain: 0.045 });
    }
    if (has("x.......x.x.....", i)) kick(t, 0.5, 180);
    if (has("....x.......x...", i)) noise(t, 0.09, 0.18, 1500);
    if (i % 2 === 1) noise(t, 0.03, 0.06, 7000);
  },
};

/* ---------- VHS: slow synthwave ---------- */
const vhsChords = [
  [57, 60, 64],
  [53, 57, 60],
  [55, 59, 62],
  [52, 55, 59],
];
const vhsLead = [
  [76, 0, 0, 0, 0, 0, 74, 0, 72, 0, 0, 0, 71, 0, 0, 0],
  [72, 0, 0, 0, 0, 0, 0, 0, 69, 0, 0, 0, 0, 0, 0, 0],
  [74, 0, 0, 0, 0, 0, 76, 0, 79, 0, 0, 0, 76, 0, 0, 0],
  [71, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const vhs: Song = {
  bpm: 98,
  play(s, t) {
    const i = s % 16;
    const bar = Math.floor(s / 16) % 4;
    const chord = vhsChords[bar];
    const len = 60 / vhs.bpm / 4;
    if (i === 0) {
      chord.forEach((n) => {
        tone(mtof(n), t, len * 15, { type: "sawtooth", gain: 0.025, attack: 0.5, release: 0.8, cutoff: 1100, detune: -8 });
        tone(mtof(n), t, len * 15, { type: "sawtooth", gain: 0.025, attack: 0.5, release: 0.8, cutoff: 1100, detune: 8 });
      });
    }
    if (i % 2 === 0) tone(mtof(chord[0] - 24), t, len * 1.7, { type: "sawtooth", gain: 0.12, cutoff: 420, q: 4 });
    if (Math.floor(s / 64) % 2 === 1) {
      const note = vhsLead[bar][i];
      if (note) tone(mtof(note), t, len * 5, { type: "triangle", gain: 0.07, attack: 0.02, release: 0.4, echo: true });
    }
    if (i % 4 === 0) kick(t, 0.7);
    if (i === 4 || i === 12) noise(t, 0.25, 0.22, 900, 6000);
    if (i % 4 === 2) noise(t, 0.05, 0.05, 8000);
  },
};

/* ---------- ArthamOS 98: chill computer-lounge music ---------- */
const osChords = [
  [53, 57, 60, 64],
  [52, 55, 59, 62],
  [50, 53, 57, 60],
  [48, 52, 55, 59],
];
const osMelody = [
  [0, 0, 0, 0, 72, 0, 0, 0, 76, 0, 0, 0, 74, 0, 72, 0],
  [71, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 69, 0, 71, 0],
  [72, 0, 0, 0, 69, 0, 0, 0, 65, 0, 0, 0, 67, 0, 69, 0],
  [67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const os98: Song = {
  bpm: 84,
  intro(t) {
    // A short startup chime.
    [60, 67, 72, 76, 79, 84].forEach((n, i) => tone(mtof(n), t + i * 0.09, 1.2, { type: "sine", gain: 0.06, release: 1 }));
  },
  play(s, t) {
    const i = s % 16;
    const bar = Math.floor(s / 16) % 4;
    const chord = osChords[bar];
    const len = 60 / os98.bpm / 4;
    if (i === 0 || i === 10) {
      chord.forEach((n) => {
        tone(mtof(n), t, len * 5, { type: "sine", gain: 0.035, attack: 0.01, release: 0.6 });
        tone(mtof(n + 12), t, len * 2, { type: "triangle", gain: 0.012, release: 0.4 });
      });
    }
    if (has("x.....x.x.......", i)) tone(mtof(chord[0] - 12), t, len * 2.5, { type: "sine", gain: 0.2, release: 0.2 });
    const note = osMelody[bar][i];
    if (note && Math.floor(s / 64) % 2 === 1) tone(mtof(note), t, len * 3, { type: "sine", gain: 0.06, release: 0.5, echo: true });
    if (has("x.......x.......", i)) kick(t, 0.35, 110);
    if (i === 8) noise(t, 0.12, 0.08, 1800, 5000);
    if (i % 4 === 2) noise(t, 0.04, 0.025, 7000);
  },
};

/* ---------- Groovy 70s: funk ---------- */
const funkBass = [40, 0, 0, 40, 0, 0, 43, 0, 45, 0, 52, 0, 47, 0, 45, 43];
const groovy: Song = {
  bpm: 106,
  play(s, t) {
    const i = s % 16;
    const bar = Math.floor(s / 16) % 4;
    const shift = bar >= 2 ? 5 : 0;
    const len = 60 / groovy.bpm / 4;
    const b = funkBass[i];
    if (b) tone(mtof(b + shift), t, len * 0.9, { type: "square", gain: 0.13, cutoff: 500, sweepFrom: 1800, q: 6, release: 0.05 });
    if (i === 4 || i === 12 || i === 7) {
      const chord = bar >= 2 ? [57, 61, 64, 67] : [52, 55, 59, 62];
      chord.forEach((n) => {
        tone(mtof(n), t, len * 0.5, { type: "square", gain: 0.012, cutoff: 2200, sweepFrom: 600, q: 8, release: 0.05 });
        tone(mtof(n), t, len * 0.6, { type: "sine", gain: 0.025, release: 0.08 });
      });
    }
    if (has("x......x..x.....", i)) kick(t, 0.75);
    if (i === 4 || i === 12) noise(t, 0.16, 0.25, 1200);
    noise(t, i === 14 ? 0.18 : 0.035, i % 2 ? 0.05 : 0.025, 8000);
  },
};

const songs: Record<string, Song> = { arcade, vhs, os98, groovy };

export const hasMusic = (theme: string | null) => !!theme && theme in songs;

function emit() {
  listeners.forEach((fn) => fn());
}

function schedule() {
  if (!ctx || !song) return;
  const stepLength = 60 / song.bpm / 4;
  while (nextTime < ctx.currentTime + 0.15) {
    song.play(step, nextTime);
    nextTime += stepLength;
    step++;
  }
}

function load(theme: string) {
  if (!ctx) return;
  song = songs[theme];
  songId = theme;
  step = 0;
  nextTime = ctx.currentTime + 0.12;
  song.intro?.(nextTime);
  if (song.intro) nextTime += 0.5;
}

export const music = {
  subscribe(fn: () => void) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },
  isPlaying: () => playing,

  /** Start the song for a theme. Must be called from a click. */
  start(theme: string) {
    if (!hasMusic(theme)) return;
    const c = setup();
    void c.resume();
    load(theme);
    if (!timer) timer = setInterval(schedule, 25);
    master!.gain.cancelScheduledValues(c.currentTime);
    master!.gain.setTargetAtTime(0.5, c.currentTime, 0.2);
    playing = true;
    emit();
  },

  stop() {
    if (!ctx || !master) return;
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setTargetAtTime(0, ctx.currentTime, 0.08);
    playing = false;
    emit();
    setTimeout(() => {
      if (playing) return;
      if (timer) clearInterval(timer);
      timer = null;
      song = null;
      songId = null;
      void ctx?.suspend();
    }, 400);
  },

  /** Follow a theme change while music is on. */
  follow(theme: string | null) {
    if (!playing || theme === songId) return;
    if (theme && hasMusic(theme)) load(theme);
    else music.stop();
  },
};
