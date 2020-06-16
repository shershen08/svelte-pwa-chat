var cacheName = "sveltepwa-cache-" + Date.now();
var filesToCache = [
  "/",
  "/assets/favicon-32x32.png",
  "/assets/ndroid-chrome-192x192.png",
  "/index.html",
  "/build/bundle.js",
  "/build/bundle.css",
  "/global.css"
];
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(thisCacheName) {
          if (thisCacheName !== cacheName) {
            return caches.delete(thisCacheName);
          }
        })
      );
    })
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    (async function() {
      const response = await caches.match(e.request);
      return response || fetch(e.request);
    })()
  );
});