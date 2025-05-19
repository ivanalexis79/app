self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('app-cache').then(cache => {
            return cache.addAll([
                '/',
                '/app/index.html',
                '/app/style.css',
                '/app/script.js'
            ]).catch(err => console.error("Error al agregar archivos al caché:", err));
        })
    );
});


self.addEventListener('install', event => {
    self.skipWaiting(); // Activa el nuevo Service Worker inmediatamente
});
self.addEventListener('activate', event => {
    console.log("Service Worker activado");
});
