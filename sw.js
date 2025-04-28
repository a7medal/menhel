const CACHE_NAME = 'menhel-v1.1';
const ASSETS = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/style.css',
  '/script.js',
  '/logo.png',
  '/icon-192192.png',
];

self.addEventListener('install', (e) => {
  self.skipWaiting(); // مهم: يجبر تفعيل التحديث الجديد مباشرة
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // حذف كل الكاشات القديمة
          }
        })
      );
    })
  );
  return self.clients.claim(); // مهم: يسيطر مباشرة على كل الصفحات
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(res => res || fetch(e.request))
  );
});