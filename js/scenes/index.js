// Konu sahnelerini (a, b, c gruplari) birlestirir. Bir grup yuklenemezse
// uygulama yedek sahneyle calismaya devam eder.
const FALLBACK = {
  label: 'İlk Yardım',
  tint: '#DDF2E8',
  svg: `<svg class="scene sc-fallback" viewBox="0 0 320 180" role="img" aria-label="İlk yardım işareti">
    <g class="fb-pulse"><rect x="125" y="55" width="70" height="70" rx="16" fill="#00875A"/>
    <path d="M152 70h16v14h14v16h-14v14h-16v-14h-14V84h14z" fill="#fff"/></g>
    <path class="fb-line" d="M20 140h80l12-22 14 40 12-30 8 12h154" fill="none" stroke="#1F2A44" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
};

let SCENES = null;

export async function loadScenes() {
  if (SCENES) return SCENES;
  const groups = await Promise.allSettled([
    import('./scenes-a.js'),
    import('./scenes-b.js'),
    import('./scenes-c.js'),
  ]);
  SCENES = {};
  for (const g of groups) {
    if (g.status === 'fulfilled') Object.assign(SCENES, g.value.default);
  }
  return SCENES;
}

export function sceneFor(topic) {
  return (SCENES && (SCENES[topic] || SCENES.ilkyardim)) || FALLBACK;
}
