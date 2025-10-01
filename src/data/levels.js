/* ========================================
   DATOS DE LOS NIVELES - 5 NIVELES
   Con emojis SUPER CLAROS y formas bien definidas
   ======================================== */

export const LEVELS = [
  // ============ NIVEL 1 ============
  {
    id: 1,
    name: "Nivel 1",
    description: "Círculo y Cuadrado",
    shapes: [
      {
        id: "circle",
        name: "Círculo",
        emoji: "🔵",
        color: "#3b82f6"
      },
      {
        id: "square",
        name: "Cuadrado",
        emoji: "🟦",
        color: "#ef4444"
      }
    ],
    objects: [
      {
        id: "ball",
        name: "Pelota",
        emoji: "⚽",
        correctShape: "circle"
      },
      {
        id: "coin",
        name: "Moneda",
        emoji: "🪙",
        correctShape: "circle"
      },
      {
        id: "gift",
        name: "Regalo",
        emoji: "🎁",
        correctShape: "square"
      },
      {
        id: "window",
        name: "Ventana",
        emoji: "🪟",
        correctShape: "square"
      }
    ]
  },

  // ============ NIVEL 2 ============
  {
    id: 2,
    name: "Nivel 2",
    description: "Círculo, Cuadrado y Triángulo",
    shapes: [
      {
        id: "circle",
        name: "Círculo",
        emoji: "🔵",
        color: "#3b82f6"
      },
      {
        id: "square",
        name: "Cuadrado",
        emoji: "🟦",
        color: "#ef4444"
      },
      {
        id: "triangle",
        name: "Triángulo",
        emoji: "🔺",
        color: "#10b981"
      }
    ],
    objects: [
      {
        id: "moon",
        name: "Luna",
        emoji: "🌕",
        correctShape: "circle"
      },
      {
        id: "orange",
        name: "Naranja",
        emoji: "🍊",
        correctShape: "circle"
      },
      {
        id: "chocolate",
        name: "Chocolate",
        emoji: "🍫",
        correctShape: "square"
      },
      {
        id: "box",
        name: "Caja",
        emoji: "📦",
        correctShape: "square"
      },
      {
        id: "pizza",
        name: "Pizza",
        emoji: "🍕",
        correctShape: "triangle"
      },
      {
        id: "mountain",
        name: "Montaña",
        emoji: "⛰️",
        correctShape: "triangle"
      }
    ]
  },

  // ============ NIVEL 3 ============
  {
    id: 3,
    name: "Nivel 3",
    description: "Todas las formas básicas",
    shapes: [
      {
        id: "circle",
        name: "Círculo",
        emoji: "🔵",
        color: "#3b82f6"
      },
      {
        id: "square",
        name: "Cuadrado",
        emoji: "🟦",
        color: "#ef4444"
      },
      {
        id: "triangle",
        name: "Triángulo",
        emoji: "🔺",
        color: "#10b981"
      },
      {
        id: "rectangle",
        name: "Rectángulo",
        emoji: "🟪",
        color: "#a855f7"
      }
    ],
    objects: [
      {
        id: "balloon",
        name: "Globo",
        emoji: "🎈",
        correctShape: "circle"
      },
      {
        id: "donut",
        name: "Dona",
        emoji: "🍩",
        correctShape: "circle"
      },
      {
        id: "dice",
        name: "Dado",
        emoji: "🎲",
        correctShape: "square"
      },
      {
        id: "stamp",
        name: "Sello",
        emoji: "📮",
        correctShape: "square"
      },
      {
        id: "tent",
        name: "Carpa",
        emoji: "⛺",
        correctShape: "triangle"
      },
      {
        id: "flag",
        name: "Bandera",
        emoji: "🚩",
        correctShape: "triangle"
      },
      {
        id: "door",
        name: "Puerta",
        emoji: "🚪",
        correctShape: "rectangle"
      },
      {
        id: "phone",
        name: "Teléfono",
        emoji: "📱",
        correctShape: "rectangle"
      }
    ]
  },

  // ============ NIVEL 4 ============
  {
    id: 4,
    name: "Nivel 4",
    description: "Desafío intermedio",
    shapes: [
      {
        id: "circle",
        name: "Círculo",
        emoji: "🔵",
        color: "#3b82f6"
      },
      {
        id: "square",
        name: "Cuadrado",
        emoji: "🟦",
        color: "#ef4444"
      },
      {
        id: "triangle",
        name: "Triángulo",
        emoji: "🔺",
        color: "#10b981"
      },
      {
        id: "rectangle",
        name: "Rectángulo",
        emoji: "🟪",
        color: "#a855f7"
      }
    ],
    objects: [
      {
        id: "cd",
        name: "CD",
        emoji: "💿",
        correctShape: "circle"
      },
      {
        id: "clock",
        name: "Reloj",
        emoji: "🕐",
        correctShape: "circle"
      },
      {
        id: "button",
        name: "Botón",
        emoji: "🔘",
        correctShape: "circle"
      },
      {
        id: "frame",
        name: "Cuadro",
        emoji: "🖼️",
        correctShape: "square"
      },
      {
        id: "calendar",
        name: "Calendario",
        emoji: "📅",
        correctShape: "square"
      },
      {
        id: "icecream",
        name: "Helado",
        emoji: "🍦",
        correctShape: "triangle"
      },
      {
        id: "warning",
        name: "Señal",
        emoji: "⚠️",
        correctShape: "triangle"
      },
      {
        id: "ruler",
        name: "Regla",
        emoji: "📏",
        correctShape: "rectangle"
      },
      {
        id: "book",
        name: "Libro",
        emoji: "📖",
        correctShape: "rectangle"
      }
    ]
  },

  // ============ NIVEL 5 ============
  {
    id: 5,
    name: "Nivel 5",
    description: "Desafío experto",
    shapes: [
      {
        id: "circle",
        name: "Círculo",
        emoji: "🔵",
        color: "#3b82f6"
      },
      {
        id: "square",
        name: "Cuadrado",
        emoji: "🟦",
        color: "#ef4444"
      },
      {
        id: "triangle",
        name: "Triángulo",
        emoji: "🔺",
        color: "#10b981"
      },
      {
        id: "rectangle",
        name: "Rectángulo",
        emoji: "🟪",
        color: "#a855f7"
      }
    ],
    objects: [
      {
        id: "wheel",
        name: "Rueda",
        emoji: "🛞",
        correctShape: "circle"
      },
      {
        id: "record",
        name: "Disco",
        emoji: "📀",
        correctShape: "circle"
      },
      {
        id: "plate",
        name: "Plato",
        emoji: "🍽️",
        correctShape: "circle"
      },
      {
        id: "postit",
        name: "Post-it",
        emoji: "📝",
        correctShape: "square"
      },
      {
        id: "tile",
        name: "Azulejo",
        emoji: "🟫",
        correctShape: "square"
      },
      {
        id: "party",
        name: "Gorro",
        emoji: "🎉",
        correctShape: "triangle"
      },
      {
        id: "yield",
        name: "Alto",
        emoji: "🛑",
        correctShape: "triangle"
      },
      {
        id: "ticket",
        name: "Ticket",
        emoji: "🎫",
        correctShape: "rectangle"
      },
      {
        id: "brick",
        name: "Ladrillo",
        emoji: "🧱",
        correctShape: "rectangle"
      },
      {
        id: "envelope",
        name: "Sobre",
        emoji: "✉️",
        correctShape: "rectangle"
      }
    ]
  }
];

// Función para mezclar un array (algoritmo Fisher-Yates)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Función helper para obtener un nivel por su ID con objetos mezclados
export const getLevelById = (levelId) => {
  const level = LEVELS.find(level => level.id === levelId);
  
  if (!level) return null;
  
  // Retornar el nivel con los objetos mezclados
  return {
    ...level,
    objects: shuffleArray(level.objects)
  };
};

// Función helper para obtener el total de niveles
export const getTotalLevels = () => {
  return LEVELS.length;
};