import { h, icon, ring, sheet, confirmBox, toast } from './ui.js';
import { store } from './store.js';
import { loadScenes, sceneFor } from './scenes/index.js';
import { burst, shake, pop } from './fx.js';
import { detect, tryStored, unlock, loadContent, assetUrl } from './vault.js';

const app = document.getElementById('app');
const LETTERS = ['A', 'B', 'C', 'D'];
const PAGE_W = 595.32; // PDF sayfa boyutu (pt), A4
const PAGE_H = 841.92;
let DATA = null;
let navDir = 'none';
let ticker = null;

// ------------------------------------------------------------------ veri
async function loadData() {
  const { data: q, topics } = await loadContent();
  q.byId = new Map();
  q.byTest = new Map();
  for (const x of q.questions) {
    x.topic = topics[x.id] || 'ilkyardim';
    q.byId.set(x.id, x);
    if (!q.byTest.has(x.test)) q.byTest.set(x.test, []);
    q.byTest.get(x.test).push(x.id);
  }
  q.testById = new Map(q.tests.map((t) => [t.id, t]));
  return q;
}

const Q = (id) => DATA.byId.get(id);
const testIds = (n) => DATA.byTest.get(n) || [];
const priorityTests = () => DATA.tests.filter((t) => t.priority);
const otherTests = () => DATA.tests.filter((t) => !t.priority);
const priorityIds = () => priorityTests().flatMap((t) => testIds(t.id));
const allIds = () => DATA.questions.map((q) => q.id);

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function progressOf(ids) {
  let ok = 0, bad = 0;
  for (const id of ids) {
    const s = store.stat(id);
    if (!s) continue;
    if (s.ok) ok++; else bad++;
  }
  return { ok, bad, todo: ids.length - ok - bad, total: ids.length };
}

const wrongIds = () => allIds().filter((id) => store.stat(id)?.ok === false);

function examInfo() {
  const exam = new Date(`${DATA.examDate}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Math.round((exam - today) / 86400000);
  const dateText = exam.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', weekday: 'long' });
  let text;
  if (days > 1) text = `Sınava ${days} gün kaldı`;
  else if (days === 1) text = 'Sınav yarın';
  else if (days === 0) text = 'Sınav bugün, başarılar!';
  else text = 'Sınav tarihi geçti';
  return { days, text, dateText };
}

// ------------------------------------------------------------------ oturumlar
function newSession(id, { kind = 'practice', title, qids, back = '#/' }) {
  const s = { id, kind, title, qids, idx: 0, answers: {}, startedAt: Date.now(), finishedAt: null, back };
  store.putSession(s);
  return s;
}

function go(hash, dir = 'none') {
  navDir = dir;
  if (location.hash === hash) render();
  else location.hash = hash;
}

const sessHash = (id) => `#/s/${encodeURIComponent(id)}`;

function startTest(n, { fresh = false, at = null } = {}) {
  const id = `test-${n}`;
  let s = store.session(id);
  if (!s || fresh || s.finishedAt) s = newSession(id, { title: `Test ${n}`, qids: testIds(n), back: `#/test/${n}` });
  if (at != null) s.idx = at;
  store.putSession(s);
  go(sessHash(id), 'next');
}

function startRead(scope) {
  const qids = scope === 'pri' ? priorityIds() : testIds(scope);
  const title = scope === 'pri' ? 'Öncelikli testler' : `Test ${scope}`;
  const id = `read-${scope}`;
  let s = store.session(id);
  if (!s) s = newSession(id, { kind: 'read', title: `${title}, cevaplı`, qids });
  store.putSession(s);
  go(sessHash(id), 'next');
}

function startMix(scope, { fresh = false } = {}) {
  const id = `mix-${scope}`;
  let s = store.session(id);
  if (!s || fresh || s.finishedAt) {
    const qids = shuffle(scope === 'pri' ? priorityIds() : allIds());
    s = newSession(id, { title: scope === 'pri' ? 'Öncelikli testler karışık' : 'Tüm sorular karışık', qids });
  }
  store.putSession(s);
  go(sessHash(id), 'next');
}

function startWrong() {
  const ids = wrongIds();
  if (!ids.length) {
    toast('Henüz yanlışın yok. Soru çözdükçe yanlışların burada toplanır.');
    return;
  }
  // oncelikli testlerin yanlislari once
  const pri = new Set(priorityIds());
  const ordered = [...ids.filter((id) => pri.has(id)), ...ids.filter((id) => !pri.has(id))];
  newSession('wrong', { title: 'Yanlışlarım', qids: ordered });
  go(sessHash('wrong'), 'next');
}

function startMarks() {
  const ids = allIds().filter((id) => store.isMarked(id));
  if (!ids.length) {
    toast('İşaretli sorun yok. Soru ekranındaki işaret simgesiyle soru ekleyebilirsin.');
    return;
  }
  newSession('marks', { title: 'İşaretlediklerim', qids: ids });
  go(sessHash('marks'), 'next');
}

function startExam(scope) {
  let qids;
  if (scope === 'pri') qids = shuffle(priorityIds()).slice(0, 25);
  else {
    const pri = shuffle(priorityIds()).slice(0, 25);
    const rest = shuffle(otherTests().flatMap((t) => testIds(t.id))).slice(0, 25);
    qids = shuffle([...pri, ...rest]);
  }
  newSession('exam', { kind: 'exam', title: 'Deneme sınavı', qids });
  go(sessHash('exam'), 'next');
}

function retryWrongOf(sess) {
  const ids = sess.qids.filter((id) => sess.answers[id] && sess.answers[id] !== Q(id).answer);
  if (!ids.length) return;
  newSession('retry', { title: 'Yanlışları tekrar', qids: ids });
  go(sessHash('retry'), 'next');
}

// ------------------------------------------------------------------ ana sayfa
function Home() {
  const ex = examInfo();
  const total = progressOf(allIds());
  const last = store.state.last && store.session(store.state.last);
  const resumable = last && !last.finishedAt && last.kind !== 'read' ? last : null;

  const header = h('header', { class: 'home__head' },
    h('div', { class: 'brand' },
      h('span', { class: 'brand__mark', 'aria-hidden': 'true' }),
      h('div', null,
        h('h1', { class: 'brand__title' }, 'İlk Yardım Sınavı'),
        h('p', { class: 'brand__sub' }, `${DATA.tests.length} test, ${DATA.questions.length} soru`))),
    h('button', { class: 'iconbtn', 'aria-label': 'Ayarlar', onclick: openSettings }, icon('sliders')));

  const countdown = h('div', { class: `countdown ${ex.days <= 1 ? 'countdown--hot' : ''}` },
    h('span', { class: 'countdown__days' }, ex.days > 0 ? String(ex.days) : '!'),
    h('span', { class: 'countdown__text' },
      h('strong', null, ex.text),
      h('span', null, ex.dateText)));

  let cont;
  if (resumable) {
    const done = Object.keys(resumable.answers).length;
    const q = Q(resumable.qids[resumable.idx]);
    cont = h('button', { class: 'resume', onclick: () => go(sessHash(resumable.id), 'next') },
      h('span', { class: 'resume__text' },
        h('span', { class: 'resume__title' }, 'Kaldığın yerden devam et'),
        h('span', { class: 'resume__sub' }, `${resumable.title}, ${resumable.idx + 1}. soru${q && resumable.id.startsWith('mix') ? ` (Test ${q.test})` : ''}`),
        h('span', { class: 'bar' }, h('span', { class: 'bar__fill', style: `width:${(done / resumable.qids.length) * 100}%` })),
        h('span', { class: 'resume__meta' }, `${done} / ${resumable.qids.length} cevaplandı`)),
      icon('next', 'ic resume__go'));
  } else {
    const firstPri = priorityTests().find((t) => progressOf(testIds(t.id)).todo > 0) || priorityTests()[0];
    cont = h('button', { class: 'resume', onclick: () => startTest(firstPri.id) },
      h('span', { class: 'resume__text' },
        h('span', { class: 'resume__title' }, 'Çalışmaya başla'),
        h('span', { class: 'resume__sub' }, `Önce hocanın önemli dediği Test ${firstPri.id}`)),
      icon('next', 'ic resume__go'));
  }

  const priTiles = h('div', { class: 'tiles' }, priorityTests().map((t) => {
    const p = progressOf(testIds(t.id));
    return h('button', { class: 'tile', onclick: () => go(`#/test/${t.id}`, 'next'), 'aria-label': `Test ${t.id}, ${p.ok} doğru, ${t.count} soru` },
      h('span', { class: 'tile__star' }, icon('star')),
      h('span', { class: 'tile__name' }, `Test ${t.id}`),
      h('span', { class: 'tile__ring' }, ring(p.ok, p.total, { size: 64, stroke: 7 }),
        h('span', { class: 'tile__num' }, String(p.ok))),
      h('span', { class: 'tile__meta' }, `${t.count} sorudan doğru`),
      p.bad ? h('span', { class: 'tile__bad' }, `${p.bad} yanlış`) : null);
  }));

  const nWrong = wrongIds().length;
  const nMarks = store.state.marks.length;
  const modes = h('div', { class: 'modes' },
    Mode('flag', 'Yanlışlarım', nWrong ? `${nWrong} soru. Doğru cevaplayınca listeden çıkar.` : 'Henüz yanlışın yok.', startWrong, { count: nWrong, tone: nWrong ? 'alarm' : '' }),
    Mode('shuffle', 'Öncelikli testleri karışık çöz', 'Test 1, 2 ve 6, rastgele sırayla', () => startMix('pri'), { tone: 'signal' }),
    Mode('timer', 'Deneme sınavı', 'Cevaplar sınav bitince görünür', openExamChooser),
    Mode('book', 'Cevaplı hızlı tekrar', 'Soruları doğru cevabıyla birlikte oku', openReadChooser),
    Mode('mark', 'İşaretlediklerim', nMarks ? `${nMarks} soru` : 'Soru ekranından işaretleyebilirsin', startMarks, { count: nMarks }),
    Mode('grid', 'Tüm soruları karışık çöz', `${DATA.questions.length} soru, 8 testin hepsi`, () => startMix('all')));

  const others = h('div', { class: 'rows' }, otherTests().map((t) => {
    const p = progressOf(testIds(t.id));
    return h('button', { class: 'row', onclick: () => go(`#/test/${t.id}`, 'next') },
      h('span', { class: 'row__name' }, `Test ${t.id}`),
      h('span', { class: 'row__bar' },
        h('span', { class: 'seg seg--ok', style: `flex:${p.ok}` }),
        h('span', { class: 'seg seg--bad', style: `flex:${p.bad}` }),
        h('span', { class: 'seg seg--todo', style: `flex:${p.todo}` })),
      h('span', { class: 'row__count' }, `${p.ok}/${t.count}`),
      icon('next', 'ic row__go'));
  }));

  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const installHint = !standalone && !store.pref('hideInstall')
    ? h('div', { class: 'install' },
      h('p', null, h('strong', null, 'Telefonuna kur. '),
        'Safari\'de alttaki ', icon('share', 'ic ic--inline'), ' Paylaş düğmesine, sonra ', h('strong', null, 'Ana Ekrana Ekle'), '\'ye dokun. Uygulama internetsiz de açılır.'),
      h('button', { class: 'iconbtn', 'aria-label': 'Kapat', onclick: (e) => { store.pref('hideInstall', true); e.currentTarget.parentElement.remove(); } }, icon('x')))
    : null;

  return h('main', { class: 'screen home' },
    header,
    installHint,
    countdown,
    cont,
    h('section', { class: 'block' },
      h('h2', { class: 'block__title' }, icon('star', 'ic ic--signal'), 'Hocanın önemli dediği testler'),
      priTiles),
    h('section', { class: 'block' },
      h('h2', { class: 'block__title' }, 'Çalışma yöntemleri'),
      modes),
    h('section', { class: 'block' },
      h('h2', { class: 'block__title' }, 'Diğer testler'),
      others),
    h('footer', { class: 'foot' },
      h('p', null, `${DATA.questions.length} sorunun ${total.ok}'i doğru, ${total.bad}'i yanlış, ${total.todo}'i henüz çözülmedi.`.replace(/(\d+)'i/g, (m, d) => `${d}${suffix(+d)}`)),
      h('p', null, 'Sorular, şıklar ve cevaplar PDF\'ten birebir alındı. Her sorunun sağ üstündeki belge simgesine dokunarak PDF\'teki halini ve cevap anahtarındaki satırını görebilirsin.'),
      h('p', { class: 'foot__status', id: 'offline-status' }, '')));
}

// Turkce iyelik eki: 1'i, 2'si, 3'u ... (sayiya gore)
function suffix(n) {
  if (n === 0) return "'ı";
  const last = n % 10;
  const tens = Math.floor(n / 10) % 10;
  const map = { 1: "'i", 2: "'si", 3: "'ü", 4: "'ü", 5: "'i", 6: "'sı", 7: "'si", 8: "'i", 9: "'u" };
  if (last === 0) {
    const t = { 1: "'u", 2: "'si", 3: "'u", 4: "'ı", 5: "'si", 6: "'ı", 7: "'i", 8: "'i", 9: "'ı" };
    if (n % 100 === 0) return "'ü";
    return t[tens] || "'ı";
  }
  return map[last];
}

function Mode(ic, title, sub, onclick, { count = null, tone = '' } = {}) {
  return h('button', { class: `mode ${tone ? `mode--${tone}` : ''}`, onclick },
    icon(ic, 'ic mode__ic'),
    h('span', { class: 'mode__text' },
      h('span', { class: 'mode__title' }, title),
      h('span', { class: 'mode__sub' }, sub)),
    count ? h('span', { class: 'mode__count' }, String(count)) : icon('next', 'ic mode__go'));
}

// ------------------------------------------------------------------ test sayfasi
function TestView(n) {
  const t = DATA.testById.get(n);
  if (!t) return NotFound();
  const ids = testIds(n);
  const p = progressOf(ids);
  const s = store.session(`test-${n}`);
  const inProgress = s && !s.finishedAt && Object.keys(s.answers).length > 0;

  const grid = h('div', { class: 'qgrid' }, ids.map((id, i) => {
    const st = store.stat(id);
    const cls = st ? (st.ok ? 'is-ok' : 'is-bad') : '';
    return h('button', { class: `qdot ${cls}`, 'aria-label': `${i + 1}. soru${st ? (st.ok ? ', doğru' : ', yanlış') : ''}`, onclick: () => startTest(n, { at: i }) },
      String(i + 1),
      store.isMarked(id) ? h('span', { class: 'qdot__mark', 'aria-hidden': 'true' }) : null);
  }));

  return h('main', { class: 'screen testv' },
    TopBar({ title: `Test ${n}`, back: '#/' }),
    t.priority ? h('p', { class: 'pri-badge' }, icon('star', 'ic'), 'Hocanın önemli dediği test') : null,
    h('div', { class: 'testv__hero' },
      h('span', { class: 'testv__ring' }, ring(p.ok, p.total, { size: 112, stroke: 10 }),
        h('span', { class: 'testv__num' }, h('strong', null, String(p.ok)), h('span', null, `/${p.total}`))),
      h('ul', { class: 'legend' },
        h('li', { class: 'legend__ok' }, `${p.ok} doğru`),
        h('li', { class: 'legend__bad' }, `${p.bad} yanlış`),
        h('li', { class: 'legend__todo' }, `${p.todo} çözülmedi`))),
    h('div', { class: 'stack' },
      inProgress
        ? h('button', { class: 'btn btn--primary btn--big', onclick: () => startTest(n) }, `Devam et (${s.idx + 1}. soru)`)
        : h('button', { class: 'btn btn--primary btn--big', onclick: () => startTest(n, { fresh: true }) }, 'Çözmeye başla'),
      h('div', { class: 'btnrow' },
        h('button', { class: 'btn btn--ghost', onclick: () => startRead(n) }, icon('book'), 'Cevaplı oku'),
        inProgress ? h('button', { class: 'btn btn--ghost', onclick: () => startTest(n, { fresh: true }) }, icon('redo'), 'Baştan çöz') : null)),
    h('section', { class: 'block' },
      h('h2', { class: 'block__title' }, 'Sorular'),
      h('p', { class: 'block__hint' }, 'Bir numaraya dokunarak o sorudan başla. Renkler son cevabını gösterir.'),
      grid));
}

function TopBar({ title, back, right = null, sub = null }) {
  return h('header', { class: 'topbar' },
    h('button', { class: 'iconbtn', 'aria-label': 'Geri', onclick: () => go(back, 'prev') }, icon('back')),
    h('div', { class: 'topbar__title' }, h('span', null, title), sub ? h('small', null, sub) : null),
    right || h('span', { class: 'topbar__spacer' }));
}

// ------------------------------------------------------------------ soru ekrani
function optState(sess, q, L) {
  const a = sess.answers[q.id];
  const reveal = sess.kind === 'read' || (sess.kind === 'exam' && sess.finishedAt) || (sess.kind === 'practice' && a);
  if (sess.kind === 'exam' && !sess.finishedAt) return a === L ? 'chosen' : '';
  if (!reveal) return '';
  if (L === q.answer) return a === L ? 'correct' : 'answer';
  if (L === a) return 'wrong';
  return 'dim';
}

function SessionView(id, idxParam) {
  const sess = store.session(id);
  if (!sess) return NotFound();
  if (idxParam != null) {
    const i = Math.max(0, Math.min(sess.qids.length - 1, idxParam));
    if (i !== sess.idx) { sess.idx = i; store.putSession(sess); }
  }
  const q = Q(sess.qids[sess.idx]);
  if (!q) return NotFound();
  const total = sess.qids.length;
  const isLast = sess.idx === total - 1;
  const scene = sceneFor(q.topic);
  const test = DATA.testById.get(q.test);

  // ust bar: geri + baslik + sayac (sinavda sure)
  const timer = sess.kind === 'exam' && !sess.finishedAt ? h('span', { class: 'timer', id: 'exam-timer' }, icon('timer'), fmtTime(Date.now() - sess.startedAt)) : null;
  const top = TopBar({
    title: sess.title,
    back: sess.back || '#/',
    sub: sess.kind === 'read' ? 'Doğru cevaplar işaretli' : sess.kind === 'exam' ? (sess.finishedAt ? 'Sınav bitti, cevaplar açık' : 'Cevaplar sonda görünür') : null,
    right: h('span', { class: 'counter' }, timer, h('strong', null, String(sess.idx + 1)), `/${total}`),
  });

  const card = h('article', { class: `qcard enter-${navDir}`, 'aria-label': `Test ${q.test}, ${q.n}. soru` });
  navDir = 'none';

  // sahne + sag ustte PDF dogrulama simgesi
  const sceneEl = h('div', { class: 'qcard__scene', style: `--tint:${scene.tint}`, html: scene.svg });
  sceneEl.append(
    h('span', { class: 'qcard__topic' }, scene.label),
    h('button', { class: 'verify', 'aria-label': 'PDF ile karşılaştır', title: 'PDF ile karşılaştır', onclick: () => openVerify(q) },
      icon('doc'), h('span', { class: 'verify__txt' }, 'PDF')));

  const markBtn = h('button', {
    class: `markbtn ${store.isMarked(q.id) ? 'is-on' : ''}`,
    'aria-pressed': store.isMarked(q.id) ? 'true' : 'false',
    'aria-label': 'Soruyu işaretle',
    onclick: (e) => {
      const on = store.toggleMark(q.id);
      const b = e.currentTarget;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      pop(b, 1.18);
      toast(on ? 'Soru işaretlendi' : 'İşaret kaldırıldı', { ms: 1400 });
    },
  }, icon('mark'));

  const meta = h('div', { class: 'qmeta' },
    h('span', { class: `qtag ${test.priority ? 'qtag--pri' : ''}` }, test.priority ? icon('star', 'ic') : null, `Test ${q.test}`),
    h('span', { class: 'qmeta__n' }, `${q.n}. soru`),
    markBtn);

  const stem = h('p', { class: 'stem' }, q.stem);

  const opts = h('div', { class: `opts ${q.columns ? 'opts--cols' : ''}`, role: 'group', 'aria-label': 'Şıklar' });
  if (q.columns) {
    opts.append(h('div', { class: 'opts__head', 'aria-hidden': 'true' },
      h('span', { class: 'opt__badge opt__badge--ghost' }),
      ...q.columns.map((c) => h('span', { class: 'opts__col' }, c))));
  }
  for (const L of LETTERS) {
    const body = q.optionColumns
      ? h('span', { class: 'opt__body opt__body--cols' }, q.optionColumns[L].map((c, i) => h('span', { class: 'opt__cell', 'data-col': q.columns[i] }, c)))
      : h('span', { class: 'opt__body' }, q.options[L]);
    const b = h('button', { class: 'opt', 'data-letter': L, onclick: () => choose(sess, q, L, card) },
      h('span', { class: 'opt__badge' }, L),
      body,
      h('span', { class: 'opt__mark', 'aria-hidden': 'true' }));
    opts.append(b);
  }

  const feedback = h('p', { class: 'feedback', role: 'status' });
  card.append(sceneEl, h('div', { class: 'qcard__body' }, meta, stem, opts, feedback));
  paint(card, sess, q);

  // alt bar
  const prevBtn = h('button', { class: 'btn btn--ghost btn--icon', 'aria-label': 'Önceki soru', disabled: sess.idx === 0, onclick: () => move(sess, -1) }, icon('back'));
  let nextLabel = 'Sonraki soru';
  if (isLast) nextLabel = sess.kind === 'exam' && !sess.finishedAt ? 'Sınavı bitir' : sess.kind === 'read' ? 'Bitir' : 'Sonuçları gör';
  const nextBtn = h('button', { class: 'btn btn--primary btn--grow', id: 'next-btn', onclick: () => (isLast ? finish(sess) : move(sess, 1)) }, nextLabel, isLast ? null : icon('next'));
  const bottom = h('nav', { class: 'bottombar' }, prevBtn, nextBtn);

  const view = h('main', { class: 'screen qview' }, top, Segments(sess), card, bottom);

  // kaydirma ile gezinme
  let sx = 0, sy = 0, st = 0;
  card.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; st = Date.now(); }, { passive: true });
  card.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - sx;
    const dy = e.changedTouches[0].clientY - sy;
    if (Date.now() - st > 600 || Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy) * 1.6) return;
    if (dx < 0 && !isLast) move(sess, 1);
    else if (dx > 0 && sess.idx > 0) move(sess, -1);
  }, { passive: true });

  if (timer) {
    ticker = setInterval(() => {
      const el = document.getElementById('exam-timer');
      if (!el) return;
      el.lastChild.textContent = fmtTime(Date.now() - sess.startedAt);
    }, 1000);
  }
  return view;
}

function fmtTime(ms) {
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}

function Segments(sess) {
  const total = sess.qids.length;
  const answered = Object.keys(sess.answers).length;
  if (total > 60) {
    return h('div', { class: 'progress', 'aria-label': `${answered} / ${total} cevaplandı` },
      h('span', { class: 'bar' }, h('span', { class: 'bar__fill', style: `width:${((sess.idx + 1) / total) * 100}%` })));
  }
  return h('div', { class: 'segs', 'aria-hidden': 'true' }, sess.qids.map((id, i) => {
    const a = sess.answers[id];
    let cls = '';
    if (a) {
      if (sess.kind === 'exam' && !sess.finishedAt) cls = 'is-done';
      else cls = a === Q(id).answer ? 'is-ok' : 'is-bad';
    }
    return h('button', { class: `segs__s ${cls} ${i === sess.idx ? 'is-cur' : ''}`, tabindex: '-1', onclick: () => jump(sess, i) });
  }));
}

function paint(card, sess, q) {
  const a = sess.answers[q.id];
  const locked = sess.kind === 'read' || (sess.kind === 'practice' && a) || (sess.kind === 'exam' && sess.finishedAt);
  card.classList.toggle('is-locked', !!locked);
  for (const b of card.querySelectorAll('.opt')) {
    const L = b.dataset.letter;
    const s = optState(sess, q, L);
    b.className = `opt ${s ? `is-${s}` : ''}`;
    b.setAttribute('aria-disabled', locked ? 'true' : 'false');
    const label = s === 'correct' ? 'doğru cevap, senin seçimin' : s === 'answer' ? 'doğru cevap' : s === 'wrong' ? 'senin seçimin, yanlış' : s === 'chosen' ? 'seçildi' : '';
    b.setAttribute('aria-label', `${L} şıkkı${label ? `, ${label}` : ''}`);
  }
  const fb = card.querySelector('.feedback');
  fb.className = 'feedback';
  fb.textContent = '';
  if (sess.kind === 'practice' && a) {
    const ok = a === q.answer;
    fb.classList.add(ok ? 'is-ok' : 'is-bad');
    fb.append(icon(ok ? 'check' : 'x'), ok ? 'Doğru.' : `Yanlış. Doğru cevap ${q.answer}.`);
  } else if (sess.kind === 'exam' && sess.finishedAt) {
    const ok = a === q.answer;
    fb.classList.add(ok ? 'is-ok' : 'is-bad');
    fb.append(icon(ok ? 'check' : 'x'), !a ? `Boş bıraktın. Doğru cevap ${q.answer}.` : ok ? 'Doğru.' : `Yanlış. Doğru cevap ${q.answer}.`);
  } else if (sess.kind === 'read') {
    fb.classList.add('is-ok');
    fb.append(icon('check'), `Doğru cevap ${q.answer}.`);
  }
}

function choose(sess, q, L, card) {
  if (sess.kind === 'read' || (sess.kind === 'exam' && sess.finishedAt)) return;
  if (sess.kind === 'practice') {
    if (sess.answers[q.id]) return; // bir kez cevaplanir
    sess.answers[q.id] = L;
    const ok = L === q.answer;
    store.record(q.id, L, ok);
    store.putSession(sess);
    paint(card, sess, q);
    const btn = card.querySelector(`.opt[data-letter="${L}"]`);
    if (ok) { burst(btn); pop(card.querySelector('.qcard__scene'), 1.02); }
    else shake(btn);
    refreshSegments(sess);
    const next = document.getElementById('next-btn');
    if (next) { next.classList.add('is-ready'); setTimeout(() => next.focus({ preventScroll: true }), 50); }
    // cevap gorunur olsun
    card.querySelector('.feedback')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  } else if (sess.kind === 'exam') {
    sess.answers[q.id] = L;
    store.putSession(sess);
    paint(card, sess, q);
    pop(card.querySelector(`.opt[data-letter="${L}"]`), 1.02);
    refreshSegments(sess);
  }
}

function refreshSegments(sess) {
  const old = document.querySelector('.segs, .progress');
  if (old) old.replaceWith(Segments(sess));
}

function move(sess, d) {
  const i = sess.idx + d;
  if (i < 0 || i >= sess.qids.length) return;
  sess.idx = i;
  store.putSession(sess);
  navDir = d > 0 ? 'next' : 'prev';
  render();
}

function jump(sess, i) {
  if (i === sess.idx) return;
  navDir = i > sess.idx ? 'next' : 'prev';
  sess.idx = i;
  store.putSession(sess);
  render();
}

async function finish(sess) {
  if (sess.kind === 'read') {
    store.putSession(sess, { touch: false });
    go(sess.back || '#/', 'prev');
    return;
  }
  if (sess.kind === 'exam' && !sess.finishedAt) {
    const blank = sess.qids.length - Object.keys(sess.answers).length;
    if (blank > 0) {
      const ok = await confirmBox({
        title: 'Sınavı bitir',
        text: `${blank} soru boş. Bitirirsen boş sorular yanlış sayılmaz ama puanına da eklenmez.`,
        ok: 'Sınavı bitir',
        cancel: 'Devam et',
      });
      if (!ok) return;
    }
    for (const id of sess.qids) {
      const a = sess.answers[id];
      if (a) store.record(id, a, a === Q(id).answer);
    }
  }
  sess.finishedAt = Date.now();
  store.putSession(sess);
  go(`${sessHash(sess.id)}/sonuc`, 'next');
}

// ------------------------------------------------------------------ sonuc
function ResultsView(id) {
  const sess = store.session(id);
  if (!sess) return NotFound();
  let ok = 0, bad = 0, blank = 0;
  const wrong = [];
  sess.qids.forEach((qid, i) => {
    const q = Q(qid);
    const a = sess.answers[qid];
    if (!a) blank++;
    else if (a === q.answer) ok++;
    else { bad++; wrong.push({ q, a, i }); }
  });
  const total = sess.qids.length;
  const pct = Math.round((ok / total) * 100);
  const title = sess.kind === 'exam' ? 'Deneme sınavı sonucu' : `${sess.title} bitti`;
  const mood = pct >= 85 ? 'Harika gidiyorsun.' : pct >= 70 ? 'İyi, yanlışlarını bir kez daha çöz.' : 'Yanlışlarını tekrar çözmek en hızlı yol.';

  const list = wrong.length
    ? h('ol', { class: 'wlist' }, wrong.map(({ q, a, i }) => h('li', null,
      h('button', { class: 'witem', onclick: () => { sess.idx = i; store.putSession(sess); go(sessHash(sess.id), 'prev'); } },
        h('span', { class: 'witem__head' }, `Test ${q.test}, ${q.n}. soru`),
        h('span', { class: 'witem__stem' }, q.stem),
        h('span', { class: 'witem__ans' },
          h('span', { class: 'pill pill--bad' }, `Senin cevabın ${a}`),
          h('span', { class: 'pill pill--ok' }, `Doğru cevap ${q.answer}`))))))
    : h('p', { class: 'empty' }, blank ? 'Yanlışın yok.' : 'Hepsi doğru. Tebrikler!');

  return h('main', { class: 'screen results' },
    TopBar({ title, back: sess.back || '#/' }),
    h('div', { class: 'results__hero' },
      h('span', { class: 'results__ring' }, ring(ok, total, { size: 148, stroke: 12 }),
        h('span', { class: 'results__num' }, h('strong', null, String(ok)), h('span', null, `/${total} doğru`))),
      h('p', { class: 'results__mood' }, mood),
      h('ul', { class: 'legend legend--center' },
        h('li', { class: 'legend__ok' }, `${ok} doğru`),
        h('li', { class: 'legend__bad' }, `${bad} yanlış`),
        blank ? h('li', { class: 'legend__todo' }, `${blank} boş`) : null,
        sess.kind === 'exam' && sess.finishedAt ? h('li', { class: 'legend__time' }, `Süre ${fmtTime(sess.finishedAt - sess.startedAt)}`) : null)),
    h('div', { class: 'stack' },
      bad ? h('button', { class: 'btn btn--primary btn--big', onclick: () => retryWrongOf(sess) }, `Yanlışları tekrar çöz (${bad})`) : null,
      h('div', { class: 'btnrow' },
        h('button', {
          class: 'btn btn--ghost',
          onclick: () => {
            if (sess.id.startsWith('test-')) startTest(+sess.id.slice(5), { fresh: true });
            else if (sess.id.startsWith('mix-')) startMix(sess.id.slice(4), { fresh: true });
            else if (sess.kind === 'exam') openExamChooser();
            else { sess.answers = {}; sess.idx = 0; sess.finishedAt = null; store.putSession(sess); go(sessHash(sess.id), 'next'); }
          },
        }, icon('redo'), sess.kind === 'exam' ? 'Yeni sınav' : 'Baştan çöz'),
        h('button', { class: 'btn btn--ghost', onclick: () => go('#/', 'prev') }, icon('home'), 'Ana sayfa'))),
    h('section', { class: 'block' },
      h('h2', { class: 'block__title' }, 'Yanlış yaptıkların'),
      list));
}

// ------------------------------------------------------------------ PDF dogrulama
function pdfImg(path, alt, onload) {
  const img = h('img', { alt, decoding: 'async' });
  img.classList.add('is-loading');
  assetUrl(path).then((u) => {
    img.addEventListener('load', () => { img.classList.remove('is-loading'); onload?.(img); }, { once: true });
    img.src = u;
  }).catch(() => { img.classList.remove('is-loading'); img.alt = 'Görsel açılamadı'; });
  return img;
}

function openVerify(q) {
  const keyBox = h('figure', { class: 'v-key' },
    pdfImg(q.keyHead, `Cevap anahtarı, TEST ${q.test} sütun başlığı`),
    pdfImg(q.keyCrop, `Cevap anahtarında ${q.n}. sorunun satırı`));
  sheet({
    title: 'PDF ile karşılaştır',
    cls: 'sheet--verify',
    body: [
      h('div', { class: 'v-sec' },
        h('div', { class: 'v-label' }, h('strong', null, 'Sorunun PDF\'teki hali'), h('span', null, `Sayfa ${q.page}`)),
        h('figure', { class: 'v-crop' }, pdfImg(q.crop, `Test ${q.test}, ${q.n}. sorunun PDF'ten kırpılmış görüntüsü`)),
        h('button', { class: 'linkbtn', onclick: () => openPage(q.page, q.cell, `Test ${q.test}, ${q.n}. soru`) }, icon('zoom'), 'Sayfanın tamamında göster')),
      h('div', { class: 'v-sec' },
        h('div', { class: 'v-label' }, h('strong', null, 'Cevap anahtarındaki satırı'), h('span', null, `Sayfa ${DATA.keyPage}`)),
        h('div', { class: 'v-keyrow' },
          keyBox,
          h('p', { class: 'v-match' },
            h('span', null, 'Uygulamadaki doğru cevap'),
            h('strong', null, q.answer))),
        h('button', { class: 'linkbtn', onclick: () => openPage(DATA.keyPage, q.keyRect, `Cevap anahtarı, Test ${q.test}`) }, icon('zoom'), 'Cevap anahtarı sayfasında göster')),
    ],
  });
}

function openPage(pageNo, rect, label) {
  const src = `crops/p/p${String(pageNo).padStart(2, '0')}.webp`;
  const [x0, y0, x1, y1] = rect;
  const pad = 2.5;
  const hl = h('span', {
    class: 'pv__hl',
    style: `left:${((x0 - pad) / PAGE_W) * 100}%;top:${((y0 - pad) / PAGE_H) * 100}%;width:${((x1 - x0 + 2 * pad) / PAGE_W) * 100}%;height:${((y1 - y0 + 2 * pad) / PAGE_H) * 100}%`,
  });
  const page = h('div', { class: 'pv__page' }, pdfImg(src, `PDF sayfa ${pageNo}`, () => hl.scrollIntoView({ block: 'center' })), hl);
  const scroller = h('div', { class: 'pv__scroll' }, page);
  let zoomed = false;
  const zoomBtn = h('button', {
    class: 'btn btn--ghost btn--small',
    onclick: () => {
      zoomed = !zoomed;
      page.classList.toggle('is-zoomed', zoomed);
      zoomBtn.replaceChildren(icon(zoomed ? 'unzoom' : 'zoom'), zoomed ? 'Uzaklaştır' : 'Yakınlaştır');
      requestAnimationFrame(() => hl.scrollIntoView({ block: 'center', inline: 'center' }));
    },
  }, icon('zoom'), 'Yakınlaştır');
  sheet({
    title: `PDF sayfa ${pageNo}`,
    cls: 'sheet--page',
    body: [h('p', { class: 'pv__cap' }, h('span', { class: 'pv__dot' }), label), scroller, h('div', { class: 'btnrow' }, zoomBtn)],
  });
}

// ------------------------------------------------------------------ secim pencereleri
function openExamChooser() {
  const ex = store.session('exam');
  const s = sheet({
    title: 'Deneme sınavı',
    body: [
      h('p', { class: 'sheet__text' }, 'Sorular karışık gelir. Cevapları sınav bitince görürsün ve sonuçlar yanlışlarına eklenir.'),
      ex && !ex.finishedAt
        ? h('button', { class: 'choice choice--hl', onclick: () => { s.close(); go(sessHash('exam'), 'next'); } },
          h('strong', null, 'Yarım kalan sınava devam et'),
          h('span', null, `${Object.keys(ex.answers).length} / ${ex.qids.length} cevaplandı`))
        : null,
      h('button', { class: 'choice', onclick: () => { s.close(); startExam('pri'); } },
        h('strong', null, 'Öncelikli testlerden 25 soru'),
        h('span', null, 'Test 1, 2 ve 6\'dan rastgele')),
      h('button', { class: 'choice', onclick: () => { s.close(); startExam('all'); } },
        h('strong', null, 'Tüm testlerden 50 soru'),
        h('span', null, 'Yarısı öncelikli testlerden, yarısı diğerlerinden')),
    ],
  });
}

function openReadChooser() {
  const s = sheet({
    title: 'Cevaplı hızlı tekrar',
    body: [
      h('p', { class: 'sheet__text' }, 'Her soru doğru cevabı işaretli olarak gelir. Sınavdan önce hızlıca göz gezdirmek için.'),
      h('button', { class: 'choice choice--hl', onclick: () => { s.close(); startRead('pri'); } },
        h('strong', null, 'Öncelikli testler'),
        h('span', null, `Test 1, 2 ve 6, toplam ${priorityIds().length} soru`)),
      h('div', { class: 'choice-grid' }, DATA.tests.map((t) => h('button', { class: `choice choice--small ${t.priority ? 'is-pri' : ''}`, onclick: () => { s.close(); startRead(t.id); } },
        t.priority ? icon('star', 'ic ic--signal') : null,
        h('strong', null, `Test ${t.id}`),
        h('span', null, `${t.count} soru`)))),
    ],
  });
}

function openSettings() {
  const status = h('span', { id: 'sw-state' }, swStateText());
  const s = sheet({
    title: 'Ayarlar',
    body: [
      h('div', { class: 'about' },
        h('p', null, h('strong', null, 'Kaynak: '), DATA.source.replace(/_\d+\.pdf$/, '.pdf')),
        h('p', null, h('strong', null, 'İçerik: '), `${DATA.tests.length} test, ${DATA.questions.length} soru ve cevap anahtarı. Metinler PDF'ten birebir alındı, PDF'teki yazım hataları da korundu.`),
        h('p', null, h('strong', null, 'Çevrimdışı: '), status)),
      h('button', {
        class: 'btn btn--danger btn--big',
        onclick: async () => {
          s.close();
          const ok = await confirmBox({
            title: 'İlerlemeyi sıfırla',
            text: 'Tüm cevapların, yanlışların ve işaretlerin silinecek. Bu işlem geri alınamaz.',
            ok: 'Sıfırla',
            danger: true,
          });
          if (ok) { store.reset(); toast('İlerleme sıfırlandı'); go('#/', 'none'); render(); }
        },
      }, 'İlerlemeyi sıfırla'),
    ],
  });
}

let swState = 'unknown';
function swStateText() {
  if (!('serviceWorker' in navigator)) return 'Bu tarayıcı çevrimdışı kullanımı desteklemiyor.';
  if (swState === 'ready') return 'Hazır. Uygulama internetsiz de açılır.';
  if (swState === 'installing') return 'Sorular ve görseller telefona indiriliyor…';
  return 'Kontrol ediliyor…';
}
function setSwState(s) {
  swState = s;
  const a = document.getElementById('sw-state');
  if (a) a.textContent = swStateText();
  const b = document.getElementById('offline-status');
  if (b) { b.textContent = s === 'ready' ? 'Çevrimdışı kullanıma hazır.' : ''; b.classList.toggle('is-ready', s === 'ready'); }
}

function NotFound() {
  return h('main', { class: 'screen' },
    TopBar({ title: 'Bulunamadı', back: '#/' }),
    h('p', { class: 'empty' }, 'Bu sayfa yok. Ana sayfaya dön.'),
    h('button', { class: 'btn btn--primary', onclick: () => go('#/') }, 'Ana sayfa'));
}

// ------------------------------------------------------------------ yonlendirme
function render() {
  if (ticker) { clearInterval(ticker); ticker = null; }
  const hash = location.hash || '#/';
  const parts = hash.slice(2).split('/').filter(Boolean).map(decodeURIComponent);
  let view;
  if (!parts.length) view = Home();
  else if (parts[0] === 'test') view = TestView(+parts[1]);
  else if (parts[0] === 's' && parts[2] === 'sonuc') view = ResultsView(parts[1]);
  else if (parts[0] === 's') view = SessionView(parts[1], parts[2] != null ? +parts[2] : null);
  else view = NotFound();
  app.replaceChildren(view);
  if (navDir !== 'keep') window.scrollTo(0, 0);
  setSwState(swState);
}

window.addEventListener('hashchange', render);
document.addEventListener('keydown', (e) => {
  if (document.querySelector('.overlay')) return;
  const sess = location.hash.startsWith('#/s/') && !location.hash.endsWith('/sonuc') && store.session(decodeURIComponent(location.hash.split('/')[2]));
  if (!sess) return;
  if (e.key === 'ArrowRight' && sess.idx < sess.qids.length - 1) move(sess, 1);
  else if (e.key === 'ArrowLeft' && sess.idx > 0) move(sess, -1);
  else if (/^[a-dA-D1-4]$/.test(e.key)) {
    const L = /\d/.test(e.key) ? LETTERS[+e.key - 1] : e.key.toUpperCase();
    document.querySelector(`.opt[data-letter="${L}"]`)?.click();
  }
});

// ------------------------------------------------------------------ cevrimdisi (service worker)
function registerSW() {
  if (!('serviceWorker' in navigator)) return;
  if (location.hostname === 'localhost' && !location.search.includes('sw=1')) return; // gelistirmede kapali
  const hadController = !!navigator.serviceWorker.controller;
  setSwState(hadController ? 'ready' : 'installing');
  navigator.serviceWorker.register('sw.js').catch(() => setSwState('unknown'));
  navigator.serviceWorker.ready.then(() => { if (navigator.serviceWorker.controller || !hadController) setSwState('ready'); });
  let handled = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    setSwState('ready');
    // Ilk kurulumda yenileme yok. Sonraki guncellemelerde: ana sayfadaysa sessizce yenile, degilse sor.
    if (!hadController || handled) return;
    handled = true;
    const onQuestion = location.hash.startsWith('#/s/') || document.querySelector('.lock, .overlay');
    if (!onQuestion) location.reload();
    else toast('Uygulama güncellendi.', { action: 'Yenile', onAction: () => location.reload(), ms: 8000 });
  });
}

// ------------------------------------------------------------------ sifre ekrani
function LockScreen(onOpen) {
  const input = h('input', {
    class: 'lock__input', type: 'text', name: 'sifre', autocomplete: 'off', autocapitalize: 'none',
    autocorrect: 'off', spellcheck: 'false', enterkeyhint: 'go', placeholder: 'Şifre', 'aria-label': 'Şifre',
  });
  const err = h('p', { class: 'lock__err', role: 'alert' });
  const btn = h('button', { class: 'btn btn--primary btn--big', type: 'submit' }, 'Aç');
  const form = h('form', {
    class: 'lock__form',
    onsubmit: async (e) => {
      e.preventDefault();
      if (!input.value.trim()) { input.focus(); return; }
      btn.disabled = true;
      btn.textContent = 'Açılıyor…';
      err.textContent = '';
      try {
        await unlock(input.value);
        onOpen();
      } catch {
        btn.disabled = false;
        btn.textContent = 'Aç';
        err.textContent = 'Şifre yanlış. Tekrar dene.';
        shake(input);
        input.select();
      }
    },
  }, input, btn, err);
  setTimeout(() => input.focus(), 300);
  return h('main', { class: 'screen lock' },
    h('span', { class: 'brand__mark lock__mark', 'aria-hidden': 'true' }),
    h('h1', { class: 'lock__title' }, 'İlk Yardım Sınavı'),
    h('p', { class: 'lock__text' }, 'Sorular ve PDF görselleri şifreli saklanıyor. Şifreyi bir kez gir, bu telefon hatırlar.'),
    form);
}

// ------------------------------------------------------------------ baslat
async function start() {
  try {
    [DATA] = await Promise.all([loadData(), loadScenes()]);
  } catch (err) {
    app.replaceChildren(h('main', { class: 'screen' },
      h('p', { class: 'empty' }, 'Sorular yüklenemedi. İnternet bağlantını kontrol edip uygulamayı yeniden aç.'),
      h('button', { class: 'btn btn--primary', onclick: () => location.reload() }, 'Yeniden dene')));
    return;
  }
  render();
}

(async function boot() {
  registerSW();
  const vault = await detect();
  if (vault && !(await tryStored())) {
    app.replaceChildren(LockScreen(() => { app.replaceChildren(h('div', { class: 'boot' }, h('span', { class: 'boot__mark' }))); start(); }));
    return;
  }
  start();
})();
