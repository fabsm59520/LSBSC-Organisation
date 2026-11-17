const CACHE_NAME = "lsbsc-pwa-v15";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/app.js",
  "./data/matches.json",
  "./manifest.json",
  "./assets/logo-lsbsc.png",
  "./assets/mascotte-lsbsc.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png"
];

self.addEventListener("install", (event) => {
  // Un fichier manquant ne doit pas empêcher l'installation du service worker.
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(ASSETS_TO_CACHE.map((url) => cache.add(url)))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  // Uniquement les GET du même site : on laisse passer Firebase, YouTube, Twitch, etc.
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then((response) => {
        // On ne met en cache que les réponses valides (pas les 404/500).
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(() => {});
        }
        return response;
      })
      .catch(() =>
        caches.match(req).then((hit) =>
          hit || (req.mode === "navigate" ? caches.match("./index.html") : undefined)
        )
      )
  );
});
