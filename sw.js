const CACHE = 'ldr-v26';
const ASSETS = [
  '/licenta-drept/',
  '/licenta-drept/index.html',
  '/licenta-drept/plan_studiu.html',
  '/licenta-drept/manifest.json',
  '/licenta-drept/icons/icon-180.png',
  '/licenta-drept/icons/icon-192.png',
  '/licenta-drept/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const isHTML = e.request.mode === 'navigate' ||
    (e.request.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    // network-first pentru pagini: mereu versiunea proaspătă, cache doar ca backup offline
    e.respondWith(
      fetch(e.request).then(resp => {
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return resp;
      }).catch(() => caches.match(e.request).then(c => c || caches.match('/licenta-drept/index.html')))
    );
    return;
  }

  // cache-first pentru restul (icoane, manifest)
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        if (!resp || resp.status !== 200 || resp.type === 'opaque') return resp;
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return resp;
      }).catch(() => caches.match('/licenta-drept/index.html'));
    })
  );
});
