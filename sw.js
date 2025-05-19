self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('app-cache').then(cache => {
            return cache.add('/index.html')
            .catch(err => console.error("Error al agregar index.html al caché:", err));
        })
    );
});



self.addEventListener('install', event => {
    self.skipWaiting(); // Activa el nuevo Service Worker inmediatamente
});
self.addEventListener('activate', event => {
    console.log("Service Worker activado");
});
