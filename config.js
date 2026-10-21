/*
 * Configuración compartida por index.html, panel.html, clasificacion.html, mapa.html y ar-test.html.
 * La URL del Apps Script, la historia y las coordenadas de las estaciones se cambian AQUÍ y solo aquí.
 *
 * Las CLAVES de las estaciones NO están en esta página: viven en el Apps Script (Code.gs),
 * porque todo lo que se publica en GitHub Pages lo puede leer cualquiera.
 *
 * El orden de STATIONS es el id de cada estación (0, 1, 2, 3) y debe coincidir con ESTACIONES de Code.gs.
 */
window.ESCAPE_CONFIG = {
  WEB_APP_URL: "https://script.google.com/macros/s/AKfycbzH1DLfJbe-Rh65ga9XxgIbHDJZDLh_DSMrUm9jKJ18N6LNEEBYkteImOJ-W_CunwRb/exec",

  // Historia general y prólogo que leen los equipos mientras esperan la salida
  STORY: {
    prologueTitle: "📜 El Despertar de la Sombra",
    prologue: [
      "Cuentan los archivos más antiguos de Huércal de Almería que, hace más de un siglo, durante una noche sin luna, cuatro sucesos inexplicables quedaron grabados a fuego en la memoria del pueblo. Para evitar que aquella oscuridad se extendiera, los antiguos habitantes levantaron cuatro sellos ocultos en puntos estratégicos que jamás debían romperse.",
      "Esta noche, el velo se ha desgarrado. Una presencia conocida como La Sombra ha comenzado a filtrarse por las calles. Las luces parpadean, en los edificios cerrados se escuchan lamentos que no pertenecen a los vivos y algo acecha entre la herrumbre de las vías del tren.",
      "Vuestro equipo ha sido convocado en el Teatro Multiusos con una única misión: recorrer los cuatro focos de la maldición, enfrentaros a lo que aguarda en la penumbra y reunir las cuatro claves del sello antes de que el reloj marque vuestra perdición. No os separéis… y mirad siempre a vuestra espalda."
    ],
    epilogue: "Habéis pronunciado las cuatro claves ancestrales y el último sello ha quedado cerrado en el Teatro Multiusos. Los susurros se apagan en la lejanía y las calles de Huércal de Almería vuelven a respirar en calma… al menos hasta el próximo Halloween."
  },

  STATIONS: [
    {
      id: 0,
      title: "Estación 1: Centro Social 'José Guirado'",
      name: "Centro Social José Guirado",
      lat: 36.8861492, lng: -2.4364976,
      lore: "Al caer la noche, los muros del Centro Social 'José Guirado' parecen absorber cualquier rastro de luz. Quienes han pasado junto a su puerta cerrada aseguran oír respiraciones heladas y murmullos que repiten una letanía prohibida. Una voz atrapada entre dos mundos intenta pronunciar la palabra que mantiene abierto el primer sello.",
      desc: "Adéntrate en el edificio en penumbra y guarda absoluto silencio. Escucha con atención la psicofonía que resuena en la oscuridad para descifrar la palabra clave que susurran las voces.",
      staff: "Prueba: Psicofonía en la oscuridad"
    },
    {
      id: 1,
      title: "Estación 2: Túnel de las Vías del Tren",
      name: "Túnel Vías del Tren",
      lat: 36.884560, lng: -2.436693,                    // punto exacto del túnel (enlace de la organización)
      lore: "Bajo el paso subterráneo de las vías del tren el aire huele a óxido, tierra húmeda y miedo. La Sombra ha grabado símbolos malditos en los muros de hormigón para confundir a quienes intentan cruzarlo… pero no estáis solos ahí abajo. El rugido de una motosierra retumba en el eco del túnel y su portador no dejará que os detengáis a mirar.",
      desc: "Cruza el túnel sin dejarte atrapar. Pulsa el botón '👁️ Escanear RA' para enfocar los símbolos de las paredes: tres son trampas de la Sombra y solo uno revelará las 4 cifras reales mientras huyes de la motosierra.",
      staff: "Prueba: Motosierra + Búsqueda RA"
    },
    {
      id: 2,
      title: "Estación 3: Calle Oscura (Paso Sombrío)",
      name: "Calle Oscura",
      lat: 36.885187, lng: -2.435430,                    // punto exacto de Calle Oscura (enlace de Maps de la organización)
      lore: "Hay un callejón donde las farolas jamás logran disipar las tinieblas: el Paso Sombrío. Allí vaga el Guardián de las Horas, un alma condenada a contar los minutos de aquellos que se atreven a pisar su territorio. En las paredes dejó grabada su condena, pero solo entrega el último dígito a quienes demuestran no temer a la oscuridad.",
      desc: "Habla con el Guardián: él te dará la primera cifra. Usa tu '🔦 Linterna' para rastrear las otras dos cifras ocultas en los muros de la calle y deducir el orden correcto. Cuando se lo digas sin fallar, te revelará la cuarta y última cifra ligada al minuto exacto de esta noche.",
      staff: "Prueba: Búsqueda de números + Orden con el actor"
    },
    {
      id: 3,
      title: "Estación 4: Centro Cultural 'Cortijo Moreno'",
      name: "Cortijo Moreno",
      lat: 36.8836232, lng: -2.4376785,
      lore: "Entre los antiguos muros del Cortijo Moreno aguarda la Pitonisa. Frente a ella, el viejo escudo del lugar actúa como un ancla espiritual. Dicen que ningún ojo humano puede ver al espectro que custodia este salón, pero que la lente de un dispositivo es capaz de rasgar el velo y obligar al espíritu a mostrar la verdad.",
      desc: "Acércate a la mesa de la Pitonisa y escucha su advertencia. Pulsa '👁️ Escanear RA' y apunta al escudo sobre la mesa para invocar al espectro de Huércal y descubrir la palabra clave.",
      staff: "Prueba: La Pitonisa y Fantasma RA"
    }
  ],

  // Zona de inicio y de fin: Teatro Multiusos de Huércal.
  BASE: {
    title: "🏁 Ritual Final: Teatro Multiusos",
    name: "Base: Teatro Multiusos",
    lat: 36.882668, lng: -2.440246,
    salida: "en el Teatro Multiusos",
    regreso: "al Teatro Multiusos",
    lore: "Tenéis en vuestro poder los cuatro fragmentos del sello, pero la Sombra ya sabe lo que habéis hecho y os pisa los talones. El círculo solo puede cerrarse allí donde comenzó todo.",
    desc: "¡Habéis superado las 4 estaciones! Corred de inmediato de vuelta al Teatro Multiusos y pedid a la Organización el Código Final para sellar la maldición y detener vuestro cronómetro.",
    staff: "Punto de Inicio y Salida"
  }
};
