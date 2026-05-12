const CACHE_NAME = 'ai-puppet-v1';

self.addEventListener('install', (event) => {
    // Forces the new service worker to take over immediately
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Clears old versions of the app
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
