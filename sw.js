const CACHE_NAME = 'menhel-cache-v2';
const OFFLINE_URL = '/offline.html'; // تأكد من إضافة هذه الصفحة في الكاش

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
  '/offline.html', // صفحة لا يوجد اتصال
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
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
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => {
        return caches.match(event.request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            } else if (event.request.mode === 'navigate') {
              return caches.match(OFFLINE_URL); // لو ما فيه كاش ولا نت، يرجع صفحة لا اتصال
            }
          });
      })
  );
});