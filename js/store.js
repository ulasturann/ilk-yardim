// Ilerleme kaydi: telefonda (localStorage) saklanir, internet gerekmez.
const KEY = 'ilkyardim.v1';

const blank = () => ({
  stats: {},      // qid -> { n: deneme, c: dogru, last: 'A', ok: true, t: zaman }
  marks: [],      // isaretlenen soru id'leri
  sessions: {},   // oturum id -> oturum
  last: null,     // en son acilan oturum
  prefs: {},
});

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return blank();
    return Object.assign(blank(), JSON.parse(raw));
  } catch {
    return blank();
  }
}

let state = load();

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* depolama kapaliysa uygulama yine calisir, sadece kalici olmaz */
  }
}

export const store = {
  get state() { return state; },

  stat(qid) { return state.stats[qid]; },

  record(qid, letter, ok) {
    const s = state.stats[qid] || { n: 0, c: 0 };
    s.n += 1;
    if (ok) s.c += 1;
    s.last = letter;
    s.ok = ok;
    s.t = Date.now();
    state.stats[qid] = s;
    save();
  },

  isMarked(qid) { return state.marks.includes(qid); },

  toggleMark(qid) {
    const i = state.marks.indexOf(qid);
    if (i >= 0) state.marks.splice(i, 1);
    else state.marks.push(qid);
    save();
    return i < 0;
  },

  session(id) { return state.sessions[id]; },

  putSession(sess, { touch = true } = {}) {
    state.sessions[sess.id] = sess;
    if (touch) state.last = sess.id;
    save();
  },

  dropSession(id) {
    delete state.sessions[id];
    if (state.last === id) state.last = null;
    save();
  },

  pref(key, value) {
    if (value === undefined) return state.prefs[key];
    state.prefs[key] = value;
    save();
    return value;
  },

  reset() {
    state = blank();
    save();
  },
};

// Tarayicidan kalici depolama iste (destekleniyorsa)
try { navigator.storage?.persist?.(); } catch { /* yok say */ }
