/*
 * Service worker de La Sombra de Huércal.
 * Objetivo: que el escáner de RA y la propia página del juego sigan abriendo SIN cobertura (el túnel).
 *
 *  - Al instalarse guarda el escáner y todo lo que necesita (librerías, modelo del fantasma, imágenes, marcadores).
 *  - Páginas, config.js y sw.js: primero la red (para que los cambios que subas se vean) y, si no hay red, la copia guardada.
 *  - Imágenes, modelo, librerías y marcadores: se sirven al instante desde la copia guardada y se refrescan en segundo plano.
 *  - NUNCA toca las peticiones al Apps Script ni a otros dominios: solo archivos de este mismo sitio.
 *
 * Si cambias este archivo (por ejemplo para añadir una imagen a la lista), sube también VERSION.
 */
const VERSION = 'sombra-v3';

const IMPRESCINDIBLES = [
  'ar-test.html', 'index.html', 'config.js',
  'lib/aframe-1.3.0.min.js', 'lib/aframe-ar-3.4.5.js', 'lib/camera_para.dat',
  'ghost.glb', 'tunel.png', 'falso1.png',
  'pattern-escudo.patt', 'pattern-falso1.patt', 'pattern-falso2.patt', 'pattern-falso3.patt', 'pattern-tunel.patt'
];
// Si aún no están subidas al repositorio no pasa nada: se guardarán la primera vez que se vean.
// (Todos se guardan por separado: que falte uno no impide guardar los demás.)
const OPCIONALES = ['falso2.png', 'falso3.png', 'panel.html', 'clasificacion.html', 'mapa.html'];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    // Cada archivo por separado: si uno falta (404) no se pierde todo el modo sin conexión.
    await Promise.all(IMPRESCINDIBLES.concat(OPCIONALES).map((u) => cache.add(new Request(u, { cache: 'reload' })).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const claves = await caches.keys();
    await Promise.all(claves.filter((k) => k !== VERSION).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

const ES_CODIGO = /\.(?:html|js)$/i;      // páginas, config.js y sw.js (las librerías de lib/ no cambian: van por la otra ruta)

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;            // Apps Script, mapas, etc.: pasan sin tocar
  if (req.headers.has('range')) return;                       // vídeo/audio parcial: lo gestiona el navegador

  const esLibreria = url.pathname.includes('/lib/');
  const esNavegacion = req.mode === 'navigate' || req.destination === 'document';
  if (esNavegacion || (ES_CODIGO.test(url.pathname) && !esLibreria)) event.respondWith(redPrimero(req, esNavegacion));
  else event.respondWith(cachePrimero(event, req));
});

async function redPrimero(req, esNavegacion) {
  const cache = await caches.open(VERSION);
  try {
    const res = await Promise.race([
      fetch(req),
      new Promise((_, rej) => setTimeout(() => rej(new Error('lento')), 4500))      // con muy poca cobertura es mejor la copia que esperar
    ]);
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  } catch (e) {
    const copia = await cache.match(req, { ignoreSearch: true });
    if (copia) return copia;
    if (esNavegacion) {
      const inicio = await cache.match('index.html');
      if (inicio) return inicio;
    }
    return Response.error();
  }
}

async function cachePrimero(event, req) {
  const cache = await caches.open(VERSION);
  const copia = await cache.match(req, { ignoreSearch: true });
  const refrescar = fetch(req, { cache: 'no-cache' }).then((res) => {      // pregunta al servidor si cambió (304 = casi gratis)
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  });
  if (copia) { event.waitUntil(refrescar.catch(() => {})); return copia; }
  try { return await refrescar; } catch (e) { return Response.error(); }
}
