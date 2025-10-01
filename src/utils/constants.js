/* ========================================
   CONSTANTES DEL JUEGO
   ======================================== */

// Puntuación
export const POINTS = {
  CORRECT_MATCH: 100,
  WRONG_MATCH: -20,
  TIME_BONUS_PER_SECOND: 5,
  PERFECT_LEVEL_BONUS: 200
};

// Sistema de estrellas
export const STARS = {
  THREE: { min: 0, max: 0 },      // 0 errores = 3 estrellas
  TWO: { min: 1, max: 2 },         // 1-2 errores = 2 estrellas
  ONE: { min: 3, max: Infinity }   // 3+ errores = 1 estrella
};

// Mensajes de notificación
export const MESSAGES = {
  CORRECT: [
    "¡Excelente! 🎉",
    "¡Muy bien! ⭐",
    "¡Perfecto! ✨",
    "¡Genial! 💫"
  ],
  WRONG: [
    "Intenta de nuevo 😊",
    "¡Casi! Prueba otra vez 🤔",
    "No es esa forma 🙈"
  ],
  HINT: "💡 Intenta arrastrar {object} a su forma",
  LEVEL_COMPLETE: "🎊 ¡Nivel completado!",
  GAME_COMPLETE: "🏆 ¡Juego completado!"
};

// Emojis de partículas
export const PARTICLE_EMOJIS = ["⭐", "✨", "🎉", "💫"];

// Duración de animaciones (ms)
export const ANIMATION_DURATION = {
  NOTIFICATION: 3000,
  PARTICLE: 1500,
  MODAL: 300,
  HINT: 2000
};

// Pantallas del juego
export const SCREENS = {
  START: "start",
  GAME: "game",
  LEVEL_COMPLETE: "level_complete",
  FINAL_SUMMARY: "final_summary"
};