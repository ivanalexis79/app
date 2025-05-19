self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('app-cache').then(cache => {
            return cache.add('/index.html')
            .catch(err => console.error("Error al agregar index.html al caché:", err));
        })
    );
});
