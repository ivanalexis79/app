self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('app-cache').then(cache => {
            return cache.addAll([
                '/',
                '/app/index.html',
                '/app/style.css',
                '/app/script.js'
            ]);
        })
    );
});
