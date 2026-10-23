// Sifreli icerik: sorular ve PDF gorselleri yayinda AES-256-GCM ile sifreli durur.
// Sifre bir kez girilir; turetilen anahtar bu telefonda saklanir.
// Yerel gelistirmede (v/meta.json yoksa) duz dosyalar kullanilir.
const KEY_STORE = 'ilkyardim.key';
const te = new TextEncoder();
const td = new TextDecoder();
let META = null;
let KEY = null;
let FILES = null;
const urls = new Map();

const b64d = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const b64e = (u8) => btoa(String.fromCharCode(...u8));

export async function detect() {
  try {
    const r = await fetch('v/meta.json');
    if (!r.ok) return false;
    META = await r.json();
    return true;
  } catch {
    return false;
  }
}

export const isLocked = () => !!META && !KEY;
export const isVault = () => !!META;

async function decrypt(key, buf) {
  const iv = buf.slice(0, 12);
  const body = buf.slice(12);
  return new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, body));
}

async function importAes(raw) {
  return crypto.subtle.importKey('raw', raw, 'AES-GCM', false, ['decrypt']);
}

async function check(key) {
  const out = await decrypt(key, b64d(META.check));
  if (td.decode(out) !== 'ilkyardim-ok') throw new Error('bad key');
}

// Kayitli anahtari dene (sifreyi yeniden sormamak icin)
export async function tryStored() {
  if (!META) return true;
  let raw = null;
  try { raw = localStorage.getItem(KEY_STORE); } catch { /* yok */ }
  if (!raw) return false;
  try {
    const key = await importAes(b64d(raw));
    await check(key);
    KEY = key;
    return true;
  } catch {
    try { localStorage.removeItem(KEY_STORE); } catch { /* yok */ }
    return false;
  }
}

export async function unlock(password) {
  const base = await crypto.subtle.importKey('raw', te.encode(password.trim().normalize('NFC')), 'PBKDF2', false, ['deriveBits']);
  const bits = new Uint8Array(await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: b64d(META.salt), iterations: META.iter, hash: 'SHA-256' }, base, 256));
  const key = await importAes(bits);
  await check(key); // yanlis sifrede hata firlatir
  KEY = key;
  try { localStorage.setItem(KEY_STORE, b64e(bits)); } catch { /* kalici olmayabilir */ }
}

async function fetchBytes(path) {
  const r = await fetch(path);
  if (!r.ok) throw new Error(`${path}: ${r.status}`);
  return new Uint8Array(await r.arrayBuffer());
}

// Soru verisi + konu eslesmesi
export async function loadContent() {
  if (!META) {
    const [data, topics] = await Promise.all([
      fetch('data/questions.json').then((r) => r.json()),
      fetch('data/topics.json').then((r) => r.json()),
    ]);
    return { data, topics };
  }
  const plain = await decrypt(KEY, await fetchBytes(`v/${META.bundle}.bin`));
  const bundle = JSON.parse(td.decode(plain));
  FILES = bundle.files;
  return { data: bundle.data, topics: bundle.topics };
}

const TYPES = { webp: 'image/webp', png: 'image/png', jpg: 'image/jpeg' };

// Gorsel adresi: sifreli moddaysa cozulur ve gecici bir adres (blob) uretilir
export async function assetUrl(path) {
  if (!META) return path;
  if (urls.has(path)) return urls.get(path);
  const id = FILES?.[path];
  if (!id) throw new Error(`dosya yok: ${path}`);
  const bytes = await decrypt(KEY, await fetchBytes(`v/${id}.bin`));
  const url = URL.createObjectURL(new Blob([bytes], { type: TYPES[path.split('.').pop()] || 'application/octet-stream' }));
  urls.set(path, url);
  return url;
}
