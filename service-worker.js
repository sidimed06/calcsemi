const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',              // Page principale
  '/index.html',    // Ton fichier HTML principal
  '/style.css',    // Feuilles de style
  '/script.js',     // Fichier JavaScript
];

// Étape 1 : Installation du service worker et mise en cache des fichiers
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Étape 2 : Intercepter les requêtes réseau et retourner les ressources en cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response; // Si la ressource est dans le cache, l'utiliser
        }
        return fetch(event.request).catch(() => {
          return caches.match('/offline.html'); // Si la requête échoue, retourner la page hors ligne
        });
      })
  );
});
