importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

self.addEventListener('push', function(event) {
  const payload = event.data ? event.data.json() : {};
  const notificationData = {
    title: payload.notification.title,
    body: payload.notification.body,
    timestamp: Date.now()
  };

  // حفظ الإشعار في IndexedDB
  saveNotification(notificationData);

  // عرض الإشعار
  event.waitUntil(
    self.registration.showNotification(notificationData.title, {
      body: notificationData.body,
      icon: '/logo.png', // تغيير الأيقونة إلى المسار المناسب
      data: notificationData
    })
  );
});

// دالة لحفظ الإشعار في IndexedDB
function saveNotification(data) {
  const request = indexedDB.open('notificationsDB', 1);

  request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('notifications', { keyPath: 'timestamp' });
  };

  request.onsuccess = function(event) {
    const db = event.target.result;
    const tx = db.transaction('notifications', 'readwrite');
    const store = tx.objectStore('notifications');
    store.add(data);
  };

  request.onerror = function(event) {
    console.error("Error opening IndexedDB:", event.target.error);
  };
}