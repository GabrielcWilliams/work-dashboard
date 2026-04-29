// ============================================================
// Security Command Center — Service Worker
// Caches the app shell for full offline support
// ============================================================

const CACHE_NAME = 'scc-v1';
const OFFLINE_ASSETS = [
  '/work-dashboard/',
  '/work-dashboard/index.html',
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=DM+Sans:wght@300;400;500;600;700&display=swap',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2',
];

// ── INSTALL: cache all core assets ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        OFFLINE_ASSETS.map(url =>
          cache.add(url).catch(err => console.warn('Could not cache:', url, err))
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: clean up old caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: serve from cache, fall back to network ──
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Let Supabase API calls always go to network (auth + data sync)
  if (url.hostname.includes('supabase.co') || url.hostname.includes('anthropic.com')) {
    event.respondWith(
      fetch(request).catch(() => {
        // If offline and it's a Supabase call, return a JSON error
        return new Response(JSON.stringify({ error: 'offline' }), {
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );
    return;
  }

  // For everything else: cache-first strategy
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      // Not in cache — try network, then cache the response
      return fetch(request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
        return response;
      }).catch(() => {
        // Fully offline and not cached — return the cached index.html as fallback
        if (request.destination === 'document') {
          return caches.match('/work-dashboard/index.html');
        }
      });
    })
  );
});

// ── BACKGROUND SYNC: queue writes when offline ──
// When back online, the app will re-sync via Supabase automatically
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    console.log('Background sync triggered — Supabase will sync on next app load');
  }
});

// ── MESSAGE: force update from app ──
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});
