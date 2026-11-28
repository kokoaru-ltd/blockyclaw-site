/**
 * Orchestral fantasy BGM player (adapted from small-magic/src/music.js).
 * Uses Kevin MacLeod's CC-BY 4.0 tracks with smooth volume crossfade and autoplay wake.
 */
export const TRACKS = [
  { id: 'achaidh', name: 'Achaidh Cheide', file: 'achaidh-cheide.ogg', level: 0.42 },
  { id: 'valley', name: 'Enchanted Valley', file: 'enchanted-valley.ogg', level: 0.48 },
  { id: 'evening', name: 'Evening Fall', file: 'evening-fall.ogg', level: 0.58 },
];

export function createMusic({ base = './music/' } = {}) {
  const a = new Audio();
  a.loop = true;
  a.preload = 'auto';
  a.volume = 0;

  let idx = 0;
  let want = true;
  let muted = false;
  let ducked = 1.0;
  let waiting = false;
  let last = performance.now();

  const load = () => {
    a.src = base + TRACKS[idx].file;
    a.currentTime = 0;
  };
  load();

  const shouldPlay = () => want && !muted && !document.hidden;
  const tryPlay = () => {
    waiting = false;
    a.play().catch(() => { waiting = true; });
  };

  setInterval(() => {
    const now = performance.now();
    const dt = Math.min(0.2, (now - last) / 1000);
    last = now;
    const target = shouldPlay() ? TRACKS[idx].level * ducked : 0;
    const v = a.volume;
    if (target > v) {
      if (a.paused && !waiting) tryPlay();
      a.volume = Math.min(target, v + dt * 0.35);
    } else if (target < v) {
      a.volume = Math.max(target, v - dt * 0.55);
    } else if (target === 0 && !a.paused) {
      a.pause();
    }
  }, 40);

  return {
    get trackName() { return TRACKS[idx].name; },
    get muted() { return muted; },
    set muted(v) { muted = Boolean(v); },
    set duck(v) { ducked = Math.max(0.15, Math.min(1, v)); },
    wake() {
      if (shouldPlay() && (a.paused || waiting)) tryPlay();
    },
    nextTrack() {
      idx = (idx + 1) % TRACKS.length;
      a.pause();
      a.volume = 0;
      load();
      if (shouldPlay()) tryPlay();
      return TRACKS[idx].name;
    },
  };
}
