// わさび食堂 売上管理 Service Worker
const CACHE_NAME = 'wasabi-shokudo-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  // ネットワーク優先（オフライン対応は最小限）
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
