self.addEventListener('install', event => {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', event => {
  console.log('Service Worker activating.');
});

/*self.addEventListener('fetch', event => {
  const requestUrl = event.request.url;

  if (requestUrl.includes('https://core.service.elfsight.com') || requestUrl.includes('https://service-reviews-ultimate.elfsight.com') || requestUrl.includes('https://www.google.com/maps/embed/v1/place')) {
    event.respondWith(
      caches.open('api-cache').then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(event.request).then(networkResponse => {
            if (networkResponse.status === 200) {
              const clonedResponse = networkResponse.clone();
              const headers = new Headers(clonedResponse.headers);
              headers.delete('Pragma');
              headers.delete('Expires');
              headers.delete('Cache-Control');
              headers.set('Cache-Control', 'public, max-age=3600');
              const modifiedResponse = new Response(clonedResponse.body, {
                status: clonedResponse.status,
                statusText: clonedResponse.statusText,
                headers: headers
              });
              cache.put(event.request, modifiedResponse.clone());
              return modifiedResponse;
            }
            return networkResponse;
          });
        });
      })
    );
  }
});*/