/**
 * Layered Procedural Web Audio Engine modeled directly after small-magic/src/sound.js:
 * - Stereo Convolver Room Reverb + Distant Lowpass Delay Echo
 * - Master DynamicsCompressor + tanh WaveShaper Soft-Clipper
 * - World Hush Ducking & Post-Blast Ear Dulling Lowpass
 * - White / Pink / Brown Noise Buffers + Waveshaped Sub-Bass Drops
 */
export function createSound() {
  let ctx = null;
  let muted = false;
  let bus = null;

  const ensure = () => {
    if (muted) return null;
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC({ latencyHint: 'interactive' });
      const RATE = ctx.sampleRate;
      const R = Math.random;

      const G = (v = 1) => { const g = ctx.createGain(); g.gain.value = v; return g; };
      const F = (type, f, q = 0.7) => { const b = ctx.createBiquadFilter(); b.type = type; b.frequency.value = f; b.Q.value = q; return b; };
      const chain = (...nodes) => { for (let i = 0; i < nodes.length - 1; i++) nodes[i].connect(nodes[i + 1]); return nodes[nodes.length - 1]; };

      // Master bus: mix -> hush -> ears(lowpass) -> pre -> compressor -> tanh soft-clipper -> out
      const mix = G(1), hush = G(1), ears = F('lowpass', 20000, 0.5), pre = G(0.65);
      const press = ctx.createDynamicsCompressor();
      press.threshold.value = -6; press.knee.value = 6; press.ratio.value = 8; press.attack.value = 0.003; press.release.value = 0.28;
      const soft = ctx.createWaveShaper();
      soft.curve = Float32Array.from({ length: 2049 }, (_, i) => Math.tanh(((i - 1024) / 1024) * 1.6) / Math.tanh(1.6));
      soft.oversample = '2x';
      const out = G(0.88);
      chain(mix, hush, ears, pre, press, soft, out, ctx.destination);

      // Stereo Convolver Reverb (colosseum air + early reflections)
      const room = ctx.createConvolver(), roomIn = G(1);
      {
        const n = Math.floor(RATE * 2.6), b = ctx.createBuffer(2, n, RATE);
        for (let c = 0; c < 2; c++) {
          const d = b.getChannelData(c);
          let lp = 0;
          for (let i = 0; i < n; i++) {
            const s = i / RATE;
            lp += (0.04 + 0.5 * Math.exp(-s * 1.8)) * (R() * 2 - 1 - lp);
            d[i] = lp * Math.exp(-s * 2.2) * Math.min(1, s / 0.01);
          }
          for (let k = 0; k < 8; k++) {
            const at = Math.floor(RATE * (0.016 + 0.14 * R()));
            d[at] += (R() < 0.5 ? -1 : 1) * (0.85 - 0.07 * k);
          }
        }
        room.buffer = b;
      }
      chain(roomIn, room, G(0.68), mix);

      // Distant colosseum stone echo
      const echoIn = G(1), delay = ctx.createDelay(1.5), delayLp = F('lowpass', 1200, 0.5);
      delay.delayTime.value = 0.44;
      chain(echoIn, delay, delayLp, G(0.55), mix);
      chain(delayLp, G(0.32), delay);

      // Pre-built White, Pink, Brown noise buffers
      const noises = {};
      for (const kind of ['white', 'pink', 'brown']) {
        const n = Math.floor(RATE * 3), b = ctx.createBuffer(2, n, RATE);
        for (let c = 0; c < 2; c++) {
          const d = b.getChannelData(c);
          let b0 = 0, b1 = 0, b2 = 0, last = 0;
          for (let i = 0; i < n; i++) {
            const w = R() * 2 - 1;
            if (kind === 'white') d[i] = w;
            else if (kind === 'pink') {
              b0 = 0.99765 * b0 + w * 0.099046;
              b1 = 0.963 * b1 + w * 0.2965164;
              b2 = 0.57 * b2 + w * 1.0526913;
              d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.24;
            } else {
              last = (last + 0.02 * w) / 1.02;
              d[i] = last * 3.2;
            }
          }
        }
        noises[kind] = b;
      }

      const shaper = (drive = 2.4) => {
        const ws = ctx.createWaveShaper();
        ws.curve = Float32Array.from({ length: 1025 }, (_, i) => Math.tanh(((i - 512) / 512) * drive));
        return ws;
      };

      const env = (param, at, pts, exp = false) => {
        param.cancelScheduledValues(at);
        param.setValueAtTime(pts[0][1], at + pts[0][0]);
        for (let i = 1; i < pts.length; i++) {
          if (exp && pts[i][1] > 0 && pts[i - 1][1] > 0) param.exponentialRampToValueAtTime(pts[i][1], at + pts[i][0]);
          else param.linearRampToValueAtTime(pts[i][1], at + pts[i][0]);
        }
      };

      const noise = (kind, at, until) => {
        const s = ctx.createBufferSource();
        s.buffer = noises[kind];
        s.loop = true;
        s.start(at, R() * 2.2);
        s.stop(until);
        return s;
      };

      const send = (node, { air = 0.25, echo = 0 } = {}) => {
        node.connect(mix);
        if (air) chain(node, G(air), roomIn);
        if (echo) chain(node, G(echo), echoIn);
      };

      bus = { mix, hush, ears, G, F, chain, shaper, env, noise, send };
    }
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return bus;
  };

  return {
    unlock: ensure,
    get muted() { return muted; },
    set muted(v) { muted = Boolean(v); },

    cleaveAim() {
      const b = ensure(); if (!b) return;
      const at = ctx.currentTime;
      // Time-slow vacuum drop + crystal harmonic swell
      const o = ctx.createOscillator(); o.type = 'sine';
      b.env(o.frequency, at, [[0, 320], [0.35, 68]], true);
      const eg = b.G(0.0001);
      b.env(eg.gain, at, [[0, 0.0001], [0.04, 0.35], [0.42, 0.0001]], true);
      b.send(b.chain(o, eg), { air: 0.6 });
      o.start(at); o.stop(at + 0.45);

      const nf = b.F('bandpass', 2400, 3.2), ng = b.G(0.0001);
      b.env(nf.frequency, at, [[0, 2400], [0.35, 280]], true);
      b.env(ng.gain, at, [[0, 0.0001], [0.05, 0.26], [0.4, 0.0001]], true);
      b.send(b.chain(b.noise('pink', at, at + 0.42), nf, ng), { air: 0.45 });
    },

    cleaveSlash() {
      const b = ensure(); if (!b) return;
      const at = ctx.currentTime;
      // Brief vacuum hush before the sever lands!
      b.env(b.hush.gain, at, [[0, 1], [0.01, 0.15], [0.08, 0.15], [0.1, 1]]);
      const tb = at + 0.085;

      // 1. Razor glass/steel sever crack
      const hp = b.F('highpass', 1400), cg = b.G(0.0001);
      b.env(cg.gain, at, [[0, 0.0001], [0.006, 0.65], [0.16, 0.0001]], true);
      b.send(b.chain(b.noise('white', at, at + 0.18), hp, cg), { air: 0.4, echo: 0.45 });

      // 2. Waveshaped sub-bass drop (86Hz -> 28Hz)
      const sub = ctx.createOscillator(); sub.type = 'sine';
      b.env(sub.frequency, tb, [[0, 92], [0.45, 28]], true);
      const sg = b.G(0.0001);
      b.env(sg.gain, tb, [[0, 0.0001], [0.01, 0.95], [1.4, 0.0001]], true);
      b.send(b.chain(sub, sg, b.shaper(2.4), b.G(0.7)), { air: 0.25, echo: 0.3 });
      sub.start(tb); sub.stop(tb + 1.45);

      // 3. Crystalline cathedral blade ring harmonics
      for (const [freq, amp] of [[880, 0.12], [1318, 0.09], [2637, 0.05]]) {
        const o = ctx.createOscillator(); o.type = 'triangle';
        o.frequency.setValueAtTime(freq, tb);
        o.frequency.exponentialRampToValueAtTime(freq * 0.985, tb + 1.1);
        const g = b.G(0.0001);
        b.env(g.gain, tb, [[0, 0.0001], [0.008, amp], [1.1, 0.0001]], true);
        b.send(b.chain(o, g), { air: 0.75, echo: 0.4 });
        o.start(tb); o.stop(tb + 1.15);
      }

      // 4. Air shockwave gust rolling outward
      const bp = b.F('bandpass', 900, 0.9), gg = b.G(0.0001);
      b.env(bp.frequency, tb + 0.05, [[0, 1400], [0.8, 160]], true);
      b.env(gg.gain, tb + 0.05, [[0, 0.0001], [0.05, 0.52], [0.95, 0.0001]], true);
      b.send(b.chain(b.noise('pink', tb + 0.05, tb + 1.05), bp, gg), { air: 0.45, echo: 0.35 });
    },

    gravityLift() {
      const b = ensure(); if (!b) return;
      const at = ctx.currentTime;
      // Dual beating low drones + rising gravity resonance
      for (const [f0, f1, amp] of [[58, 118, 0.32], [59.3, 121, 0.26], [174, 348, 0.12]]) {
        const o = ctx.createOscillator(); o.type = f0 > 100 ? 'triangle' : 'sine';
        b.env(o.frequency, at, [[0, f0], [1.05, f1]], true);
        const g = b.G(0.0001);
        b.env(g.gain, at, [[0, 0.0001], [0.15, amp], [1.1, 0.0001]], true);
        b.send(b.chain(o, g), { air: 0.55 });
        o.start(at); o.stop(at + 1.15);
      }
      const lp = b.F('bandpass', 220, 2.2), ng = b.G(0.0001);
      b.env(lp.frequency, at, [[0, 180], [1.0, 960]], true);
      b.env(ng.gain, at, [[0, 0.0001], [0.2, 0.28], [1.1, 0.0001]], true);
      b.send(b.chain(b.noise('brown', at, at + 1.15), lp, ng), { air: 0.4 });
    },

    gravitySlam() {
      const b = ensure(); if (!b) return;
      const at = ctx.currentTime;
      // Heavy tectonic drop + ear dull sweep + stone debris rumble
      b.env(b.ears.frequency, at, [[0, 20000], [0.12, 2600], [1.1, 20000]], true);

      const sub1 = ctx.createOscillator(); sub1.type = 'sine';
      b.env(sub1.frequency, at, [[0, 115], [0.55, 26]], true);
      const g1 = b.G(0.0001);
      b.env(g1.gain, at, [[0, 0.0001], [0.008, 1.1], [1.9, 0.0001]], true);
      b.send(b.chain(sub1, g1, b.shaper(2.8), b.G(0.75)), { air: 0.3, echo: 0.5 });
      sub1.start(at); sub1.stop(at + 1.95);

      const lp = b.F('lowpass', 1800, 0.7), rg = b.G(0.0001);
      b.env(lp.frequency, at, [[0, 2200], [1.2, 120]], true);
      b.env(rg.gain, at, [[0, 0.0001], [0.012, 0.75], [1.6, 0.0001]], true);
      b.send(b.chain(b.noise('brown', at, at + 1.65), lp, rg), { air: 0.45, echo: 0.5 });
    },

    blastCharge() {
      const b = ensure(); if (!b) return;
      const at = ctx.currentTime;
      [220, 329.6, 440].forEach((f, idx) => {
        const t0 = at + idx * 0.14;
        const o = ctx.createOscillator(); o.type = 'triangle';
        o.frequency.setValueAtTime(f, t0);
        const g = b.G(0.0001);
        b.env(g.gain, t0, [[0, 0.0001], [0.015, 0.14], [0.35, 0.0001]], true);
        b.send(b.chain(o, g), { air: 0.65 });
        o.start(t0); o.stop(t0 + 0.38);
      });
    },

    blastBoom() {
      const b = ensure(); if (!b) return;
      const at = ctx.currentTime;
      b.env(b.ears.frequency, at, [[0, 20000], [0.14, 2400], [1.4, 20000]], true);

      // Double crack
      for (const [off, cut, amp] of [[0, 1200, 0.65], [0.045, 700, 0.42]]) {
        const g = b.G(0.0001);
        b.env(g.gain, at + off, [[0, 0.0001], [0.005, amp], [0.16, 0.0001]], true);
        b.send(b.chain(b.noise('white', at + off, at + off + 0.18), b.F('highpass', cut), g), { air: 0.35, echo: 0.55 });
      }
      // Closing pink noise fireball roar
      const lp = b.F('lowpass', 3800, 0.6), pg = b.G(0.0001);
      b.env(lp.frequency, at, [[0, 3800], [1.4, 150]], true);
      b.env(pg.gain, at, [[0, 0.0001], [0.02, 0.85], [2.2, 0.0001]], true);
      b.send(b.chain(b.noise('pink', at, at + 2.25), lp, pg), { air: 0.4, echo: 0.55 });

      // Sub drop
      const o = ctx.createOscillator(); o.type = 'sine';
      b.env(o.frequency, at, [[0, 88], [0.5, 28]], true);
      const sg = b.G(0.0001);
      b.env(sg.gain, at, [[0, 0.0001], [0.01, 1.0], [2.0, 0.0001]], true);
      b.send(b.chain(o, sg, b.shaper(2.6), b.G(0.75)), { air: 0.25, echo: 0.4 });
      o.start(at); o.stop(at + 2.05);
    },

    vortex() {
      const b = ensure(); if (!b) return;
      const at = ctx.currentTime;
      const bp = b.F('bandpass', 260, 1.8), g = b.G(0.0001);
      b.env(bp.frequency, at, [[0, 260], [0.4, 1100], [1.3, 420]], true);
      b.env(g.gain, at, [[0, 0.0001], [0.15, 0.48], [1.4, 0.0001]], true);
      b.send(b.chain(b.noise('pink', at, at + 1.45), bp, g), { air: 0.55, echo: 0.3 });
    },

    beam() {
      const b = ensure(); if (!b) return;
      const at = ctx.currentTime;
      for (const [f0, f1, type, amp] of [[420, 165, 'sawtooth', 0.22], [840, 330, 'triangle', 0.16], [110, 52, 'sine', 0.45]]) {
        const o = ctx.createOscillator(); o.type = type;
        b.env(o.frequency, at, [[0, f0], [0.65, f1]], true);
        const g = b.G(0.0001);
        b.env(g.gain, at, [[0, 0.0001], [0.015, amp], [0.68, 0.0001]], true);
        b.send(b.chain(o, b.F('lowpass', 2600), g), { air: 0.45, echo: 0.35 });
        o.start(at); o.stop(at + 0.72);
      }
    },

    bolt() {
      const b = ensure(); if (!b) return;
      const at = ctx.currentTime;
      const o = ctx.createOscillator(); o.type = 'triangle';
      b.env(o.frequency, at, [[0, 880], [0.14, 210]], true);
      const g = b.G(0.0001);
      b.env(g.gain, at, [[0, 0.0001], [0.005, 0.24], [0.16, 0.0001]], true);
      b.send(b.chain(o, g), { air: 0.35 });
      o.start(at); o.stop(at + 0.18);
    },

    ward() {
      const b = ensure(); if (!b) return;
      const at = ctx.currentTime;
      for (const f of [523.25, 783.99]) {
        const o = ctx.createOscillator(); o.type = 'sine';
        o.frequency.setValueAtTime(f, at);
        const g = b.G(0.0001);
        b.env(g.gain, at, [[0, 0.0001], [0.02, 0.12], [0.28, 0.0001]], true);
        b.send(b.chain(o, g), { air: 0.6 });
        o.start(at); o.stop(at + 0.3);
      }
    },

    hit() {
      const b = ensure(); if (!b) return;
      const at = ctx.currentTime;
      const o = ctx.createOscillator(); o.type = 'triangle';
      b.env(o.frequency, at, [[0, 175], [0.15, 48]], true);
      const g = b.G(0.0001);
      b.env(g.gain, at, [[0, 0.0001], [0.004, 0.45], [0.2, 0.0001]], true);
      b.send(b.chain(o, g), { air: 0.25 });
      o.start(at); o.stop(at + 0.22);
    },

    dash() {
      const b = ensure(); if (!b) return;
      const at = ctx.currentTime;
      const bp = b.F('bandpass', 1800, 1.6), g = b.G(0.0001);
      b.env(bp.frequency, at, [[0, 2200], [0.18, 420]], true);
      b.env(g.gain, at, [[0, 0.0001], [0.015, 0.26], [0.2, 0.0001]], true);
      b.send(b.chain(b.noise('pink', at, at + 0.22), bp, g), { air: 0.25 });
    },

    forge() {
      const b = ensure(); if (!b) return;
      const at = ctx.currentTime;
      for (const [f, d] of [[440, 0], [659.25, 0.04]]) {
        const o = ctx.createOscillator(); o.type = 'sine';
        o.frequency.setValueAtTime(f, at + d);
        const g = b.G(0.0001);
        b.env(g.gain, at + d, [[0, 0.0001], [0.01, 0.09], [0.26, 0.0001]], true);
        b.send(b.chain(o, g), { air: 0.65 });
        o.start(at + d); o.stop(at + d + 0.28);
      }
    },

    victory() {
      const b = ensure(); if (!b) return;
      const at = ctx.currentTime;
      [[440, 0], [554.37, 0.14], [659.25, 0.28], [880, 0.44]].forEach(([f, d]) => {
        const o = ctx.createOscillator(); o.type = 'triangle';
        o.frequency.setValueAtTime(f, at + d);
        const g = b.G(0.0001);
        b.env(g.gain, at + d, [[0, 0.0001], [0.02, 0.16], [0.65, 0.0001]], true);
        b.send(b.chain(o, g), { air: 0.75, echo: 0.35 });
        o.start(at + d); o.stop(at + d + 0.7);
      });
    },
  };
}
