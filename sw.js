// Offline cache for Marihøna i labyrinten.
// Bump VERSION when any file changes, so iPads fetch the new files.
const VERSION = 'v1';
const CACHE = 'mattelabyrint-' + VERSION;
const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './fredoka-latin-500-normal.woff2',
  './fredoka-latin-600-normal.woff2',
  './fredoka-latin-700-normal.woff2',
  './nunito-latin-500-normal.woff2',
  './nunito-latin-700-normal.woff2',
  './nunito-latin-800-normal.woff2'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache first, so the game starts instantly and works without internet.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).catch(() => caches.match('./index.html')))
  );
});
