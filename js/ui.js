// Kucuk DOM yardimcilari. Soru metinleri her zaman textContent ile yazilir,
// boylece PDF'teki karakterler aynen gorunur.

export function h(tag, props, ...kids) {
  const el = document.createElement(tag);
  if (props) {
    for (const [k, v] of Object.entries(props)) {
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'style') el.style.cssText = v;
      else if (k === 'html') el.innerHTML = v; // yalnizca uygulamanin kendi SVG'leri icin
      else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
      else el.setAttribute(k, v === true ? '' : v);
    }
  }
  for (const kid of kids.flat(Infinity)) {
    if (kid == null || kid === false) continue;
    el.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
  }
  return el;
}

const P = {
  back: '<path d="M15 18l-6-6 6-6"/>',
  next: '<path d="M9 18l6-6-6-6"/>',
  doc: '<path d="M13.5 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.5"/><path d="M13.5 3v5h5"/><path d="M18.5 8v2.5"/><circle cx="16" cy="16" r="3.2"/><path d="M18.4 18.4L21 21"/>',
  star: '<path d="M12 3.2l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L12 16.6l-5.3 2.9 1.1-5.9L3.4 9.5l6-.8z"/>',
  mark: '<path d="M6.5 3.5h11v17l-5.5-4-5.5 4z"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  shuffle: '<path d="M3 7h3.5c2 0 3.2.8 4.3 2.4l2.4 3.6c1.1 1.6 2.3 2.4 4.3 2.4H21"/><path d="M3 17h3.5c1.4 0 2.4-.4 3.2-1.2"/><path d="M14 8.2c.8-.8 1.8-1.2 3.2-1.2H21"/><path d="M18.5 4.5L21 7l-2.5 2.5"/><path d="M18.5 15L21 17.4l-2.5 2.6"/>',
  timer: '<circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.5 2"/><path d="M9.5 2.8h5"/>',
  book: '<path d="M12 6.5c-1.8-1.6-4.5-2.2-8-2v13c3.5-.2 6.2.4 8 2 1.8-1.6 4.5-2.2 8-2v-13c-3.5-.2-6.2.4-8 2z"/><path d="M12 6.5v13"/>',
  redo: '<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20.5 4v4.5H16"/>',
  flag: '<path d="M5 21V4"/><path d="M5 4.5h11.5l-2 4 2 4H5"/>',
  sliders: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
  home: '<path d="M4 11l8-7 8 7"/><path d="M6 9.5V20h12V9.5"/>',
  grid: '<rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/>',
  zoom: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5M11 8v6M8 11h6"/>',
  unzoom: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5M8 11h6"/>',
  share: '<path d="M12 3.5v11"/><path d="M8 7.5l4-4 4 4"/><path d="M6 11v8.5h12V11"/>',
  wifi: '<path d="M2.5 9a14 14 0 0 1 19 0"/><path d="M5.5 12.5a9.5 9.5 0 0 1 13 0"/><path d="M8.7 16a5 5 0 0 1 6.6 0"/><circle cx="12" cy="19.2" r=".6"/>',
};

export function icon(name, cls = 'ic') {
  const span = document.createElement('span');
  span.className = cls;
  span.setAttribute('aria-hidden', 'true');
  span.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${P[name] || ''}</svg>`;
  return span;
}

// Halka ilerleme gostergesi
export function ring(part, total, { size = 54, stroke = 6, cls = 'ring' } = {}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const frac = total ? Math.min(1, part / total) : 0;
  const wrap = document.createElement('span');
  wrap.className = cls;
  wrap.setAttribute('aria-hidden', 'true');
  wrap.innerHTML = `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
    <circle class="ring__track" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}" fill="none"/>
    <circle class="ring__fill" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}" fill="none"
      stroke-linecap="round" stroke-dasharray="${(c * frac).toFixed(2)} ${c.toFixed(2)}"${frac === 0 ? ' stroke-opacity="0"' : ''}
      transform="rotate(-90 ${size / 2} ${size / 2})"/>
  </svg>`;
  return wrap;
}

// Alt sayfa (bottom sheet). Kapatma: arka plan, kapat dugmesi, Esc, asagi kaydirma.
const layer = () => document.getElementById('layer');
let openCount = 0;

export function sheet({ title, body, cls = '', onClose } = {}) {
  const prevFocus = document.activeElement;
  const panel = h('div', { class: `sheet ${cls}`, role: 'dialog', 'aria-modal': 'true', 'aria-label': title },
    h('div', { class: 'sheet__grip', 'aria-hidden': 'true' }),
    h('div', { class: 'sheet__head' },
      h('h2', { class: 'sheet__title' }, title),
      h('button', { class: 'iconbtn sheet__close', 'aria-label': 'Kapat', onclick: () => close() }, icon('x'))),
    h('div', { class: 'sheet__body' }, body));
  const backdrop = h('div', { class: 'backdrop', onclick: () => close() });
  const root = h('div', { class: 'overlay' }, backdrop, panel);
  layer().append(root);
  openCount += 1;
  document.documentElement.classList.add('is-locked');
  requestAnimationFrame(() => root.classList.add('is-open'));

  const onKey = (e) => { if (e.key === 'Escape') close(); };
  document.addEventListener('keydown', onKey);

  // asagi kaydirarak kapatma (yalnizca tutamak/baslik bolgesinden)
  let startY = null;
  const head = panel.querySelector('.sheet__head');
  const grip = panel.querySelector('.sheet__grip');
  for (const zone of [head, grip]) {
    zone.addEventListener('touchstart', (e) => { startY = e.touches[0].clientY; }, { passive: true });
    zone.addEventListener('touchmove', (e) => {
      if (startY == null) return;
      const dy = Math.max(0, e.touches[0].clientY - startY);
      panel.style.transform = `translateY(${dy}px)`;
    }, { passive: true });
    zone.addEventListener('touchend', (e) => {
      if (startY == null) return;
      const dy = e.changedTouches[0].clientY - startY;
      startY = null;
      panel.style.transform = '';
      if (dy > 90) close();
    });
  }

  let closed = false;
  function close() {
    if (closed) return;
    closed = true;
    document.removeEventListener('keydown', onKey);
    root.classList.remove('is-open');
    root.classList.add('is-closing');
    const done = () => {
      root.remove();
      openCount -= 1;
      if (openCount <= 0) {
        openCount = 0;
        document.documentElement.classList.remove('is-locked');
      }
      onClose?.();
      prevFocus?.focus?.({ preventScroll: true });
    };
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) done();
    else setTimeout(done, 240);
  }

  setTimeout(() => panel.querySelector('.sheet__close')?.focus({ preventScroll: true }), 60);
  return { close, panel };
}

// Uygulama ici onay penceresi (tarayici confirm() kullanilmaz)
export function confirmBox({ title, text, ok, cancel = 'Vazgeç', danger = false }) {
  return new Promise((resolve) => {
    let result = false;
    const s = sheet({
      title,
      cls: 'sheet--small',
      body: [
        h('p', { class: 'sheet__text' }, text),
        h('div', { class: 'btnrow' },
          h('button', { class: 'btn btn--ghost', onclick: () => { result = false; s.close(); } }, cancel),
          h('button', { class: `btn ${danger ? 'btn--danger' : 'btn--primary'}`, onclick: () => { result = true; s.close(); } }, ok)),
      ],
      onClose: () => resolve(result),
    });
  });
}

export function toast(text, { action, onAction, ms = 3200 } = {}) {
  const el = h('div', { class: 'toast', role: 'status' },
    h('span', null, text),
    action ? h('button', { class: 'toast__btn', onclick: () => { onAction?.(); el.remove(); } }, action) : null);
  layer().append(el);
  requestAnimationFrame(() => el.classList.add('is-in'));
  if (ms) setTimeout(() => { el.classList.remove('is-in'); setTimeout(() => el.remove(), 300); }, ms);
  return el;
}
