const CACHE_NAME = "expense-tracker";
const urlsToCache = ["/", "index.html", "/manifest.json", "/favicon.ico", "/logo192.png",];


// Install SW
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  )
});


//Listen for requests
this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response; // if valid response is found in cache return it
        } 
        else {
          return fetch(event.request) //fetch from internet
            .then(function (res) {
              return caches.open(urlsToCache)
                .then(function (cache) {
                  cache.put(event.request.url, res.clone()); //save the response for future
                  return res; // return the fetched data
                })
            })
            // .catch(function (err) { // fallback mechanism
            //   return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
            //     .then(function (cache) {
            //       return cache.match('offline.html');
            //     });
            // });
        }
      })
  );
});





// // //Listen for requests


// // // this.addEventListener('fetch', function(event) {
// // //   // console.log('[ServiceWorker] Fetch', e.request.url);
// // //   event.respondWith(
// // //     caches.match(event.request).then(function(response) {
// // //       return response || fetch(event.request);
// // //     })
// // //   );
// // // });

// // // this.addEventListener("fetch", function (event) {
// // //   // console.log('[ServiceWorker] Fetch', event.request.url);
// // //   event.respondWith(
// // //     caches.open(urlsToCache).then(function (cache) {
// // //       return cache.match(event.request).then(function (response) {
// // //         return (
// // //           response ||
// // //           fetch(event.request).then(function (response) {
// // //             cache.put(event.request, response.clone());
// // //             return response;
// // //           })
// // //         );
// // //       });
// // //     })
// // //   );
// // // });
