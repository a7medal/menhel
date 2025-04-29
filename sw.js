const CACHE_NAME = 'menhel-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/style.css',
  '/script.js',
  '/logo.png',
  '/logo1.png',
    '/Screen.png',
  '/icon-192192.png',
];

self.addEventListener('install', (event) => {
  self.skipWaiting(); // يجبر التثبيت مباشرة
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // حذف الكاش القديم
          }
        })
      );
    })
  );
  self.clients.claim(); // السيطرة على جميع الصفحات فورا
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            // نحدث الكاش بنسخة جديدة من السيرفر
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          })
          .catch(() => {}); // إذا لا يوجد نت، يتجاهل الخطأ

        // نرجع النسخة من الكاش فورًا، وأيضًا نحدث الكاش بالخلفية
        return cachedResponse || fetchPromise;
      })
  );
});