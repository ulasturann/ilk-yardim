// Cevaba tepki veren kisa animasyonlar (yalnizca kullanici dokununca).
const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

// Dogru cevapta harf rozetinden yayilan kucuk kivilcimlar
export function burst(fromEl) {
  if (reduce() || !fromEl) return;
  const badge = fromEl.querySelector('.opt__badge') || fromEl;
  const r = badge.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  const colors = ['var(--aid)', 'var(--signal)', '#7EE2B8', 'var(--aid-deep)'];
  const n = 18;
  for (let i = 0; i < n; i++) {
    const d = document.createElement('i');
    d.className = i % 3 === 0 ? 'spark spark--plus' : 'spark';
    d.style.left = `${cx}px`;
    d.style.top = `${cy}px`;
    d.style.color = colors[i % colors.length];
    document.body.appendChild(d);
    const ang = (Math.PI * 2 * i) / n + (Math.random() - 0.5) * 0.5;
    const dist = 46 + Math.random() * 54;
    const dx = Math.cos(ang) * dist;
    const dy = Math.sin(ang) * dist - 10;
    const rot = (Math.random() - 0.5) * 220;
    d.animate(
      [
        { transform: 'translate(0px, 0px) scale(.6) rotate(0deg)', opacity: 1 },
        { transform: `translate(${dx * 0.7}px, ${dy * 0.7}px) scale(1.1) rotate(${rot / 2}deg)`, opacity: 1, offset: 0.55 },
        { transform: `translate(${dx}px, ${dy + 18}px) scale(.4) rotate(${rot}deg)`, opacity: 0 },
      ],
      { duration: 700 + Math.random() * 300, easing: 'cubic-bezier(.15,.75,.35,1)' },
    ).onfinish = () => d.remove();
  }
}

export function shake(el) {
  if (reduce() || !el) return;
  el.animate(
    [
      { transform: 'translateX(0)' },
      { transform: 'translateX(-9px)' },
      { transform: 'translateX(8px)' },
      { transform: 'translateX(-5px)' },
      { transform: 'translateX(3px)' },
      { transform: 'translateX(0)' },
    ],
    { duration: 440, easing: 'ease-out' },
  );
}

export function pop(el, scale = 1.04) {
  if (reduce() || !el) return;
  el.animate(
    [{ transform: 'scale(1)' }, { transform: `scale(${scale})` }, { transform: 'scale(1)' }],
    { duration: 360, easing: 'cubic-bezier(.3,1.6,.5,1)' },
  );
}
