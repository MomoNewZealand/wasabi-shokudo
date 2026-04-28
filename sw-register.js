// わさび食堂 レジ Service Worker
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => clients.claim());
