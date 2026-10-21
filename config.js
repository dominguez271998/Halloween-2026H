/*
 * Configuración compartida por index.html, panel.html, clasificacion.html, mapa.html y ar-test.html.
 * La URL del Apps Script y las coordenadas de las estaciones se cambian AQUÍ y solo aquí.
 *
 * Las CLAVES de las estaciones NO están en esta página: viven en el Apps Script (Code.gs),
 * porque todo lo que se publica en GitHub Pages lo puede leer cualquiera.
 *
 * El orden de STATIONS es el id de cada estación (0, 1, 2, 3) y debe coincidir con ESTACIONES de Code.gs.
 */
window.ESCAPE_CONFIG = {
  WEB_APP_URL: "https://script.google.com/macros/s/AKfycbzH1DLfJbe-Rh65ga9XxgIbHDJZDLh_DSMrUm9jKJ18N6LNEEBYkteImOJ-W_CunwRb/exec",

  STATIONS: [
    {
      id: 0,
      title: "Estación 1: Centro Social 'José Guirado'",
      name: "Centro Social José Guirado",
      lat: 36.8861492, lng: -2.4364976,
      desc: "Entra en el edificio en penumbra. Escucha atentamente la psicofonía que resuena en el ambiente para descubrir la clave.",
      staff: "Prueba: Psicofonía en la oscuridad"
    },
    {
      id: 1,
      title: "Estación 2: Túnel de las Vías del Tren",
      name: "Túnel Vías del Tren",
      lat: 36.884444, lng: -2.436750,                     // punto exacto del túnel (36°53'04.0"N 2°26'12.3"W)
      desc: "Cruza el túnel con cuidado. Usa el botón 'Escanear RA' para revisar los símbolos de las paredes. ¡Huye de la motosierra y encuentra el código numérico verdadero!",
      staff: "Prueba: Motosierra + Búsqueda RA"
    },
    {
      id: 2,
      title: "Estación 3: Calle Oscura (Paso Sombrío)",
      name: "Calle Oscura",
      lat: 36.885187, lng: -2.435430,                     // punto exacto de Calle Oscura (enlace de Maps de la organización)
      desc: "El actor te señalará la primera cifra. Encuentra las dos cifras ocultas en la calle con tu linterna y deduce el orden correcto. Al acertar, el actor te dirá la última cifra misteriosa según la hora exacta.",
      staff: "Prueba: Búsqueda de números + Orden con el actor"
    },
    {
      id: 3,
      title: "Estación 4: Centro Cultural 'Cortijo Moreno'",
      name: "Cortijo Moreno",
      lat: 36.8836232, lng: -2.4376785,
      desc: "Visita a la Pitonisa y consulta su bola de cristal. Escanea el escudo con la cámara RA para invocar al espectro que revelará la clave.",
      staff: "Prueba: La Pitonisa y Fantasma RA"
    }
  ],

  BASE: {
    title: "🏁 Punto de Inicio y Meta: Teatro Multiusos",
    name: "Base: Teatro Multiusos",
    lat: 36.882733, lng: -2.440048,                       // Paseo del Generalife, 40 (Teatro Multiusos de Huércal de Almería)
    desc: "¡Has completado las 4 estaciones! Regresa de inmediato al Teatro Multiusos con la Organización para sellar tu victoria.",
    staff: "Punto de Inicio, Control y Meta"
  }
};
