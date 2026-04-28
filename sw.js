// わさび食堂 Service Worker - minimal
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => clients.claim());
