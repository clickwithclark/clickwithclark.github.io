/* eslint-disable no-restricted-globals */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./serviceworker.js')
      .then((registration) => console.log(`Service Worker Registered!😁 \n ${registration.scope}`))
      .catch((error) => console.error(`service worker error:😭${error}`));
  });
}
const cacheName = 'v2';

// Call Install Event
self.addEventListener('install', event => {
  console.log('Service Worker: Installed');
});

// Call Activate Event
self.addEventListener('activate', event => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache...🧹');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', event => {
    //ignore chrome extension requests
    if (!(event.request.url.indexOf('http') === 0)) return; 
  console.log('Service Worker: Fetching...🦅');
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Make copy/clone of response
        const resClone = response.clone();
        // Open cache
        caches.open(cacheName).then(cache => {
          // Add response to cache
          cache.put(event.request, resClone);
        });
        return response;
      })
      .catch(err => caches.match(event.request).then(response => response))
  );
});
