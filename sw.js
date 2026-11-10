// Service worker mínimo: permite instalar la app. No guarda datos; todo va directo a Google.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
