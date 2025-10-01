/* ========================================
   LÓGICA DE PUNTUACIÓN
   ======================================== */

import { POINTS, STARS } from './constants';

/**
 * Calcula las estrellas obtenidas según el número de errores
 * @param {number} mistakes - Número de errores cometidos
 * @returns {number} - Número de estrellas (1-3)
 */
export const calculateStars = (mistakes) => {
  if (mistakes >= STARS.THREE.min && mistakes <= STARS.THREE.max) {
    return 3;
  } else if (mistakes >= STARS.TWO.min && mistakes <= STARS.TWO.max) {
    return 2;
  } else {
    return 1;
  }
};

/**
 * Calcula el bonus por tiempo
 * @param {number} timeInSeconds - Tiempo transcurrido en segundos
 * @returns {number} - Puntos de bonus
 */
export const calculateTimeBonus = (timeInSeconds) => {
  // Menos tiempo = más bonus
  const maxBonusTime = 120; // 2 minutos
  const remainingTime = Math.max(0, maxBonusTime - timeInSeconds);
  return Math.floor(remainingTime * POINTS.TIME_BONUS_PER_SECOND);
};

/**
 * Calcula el bonus por nivel perfecto (sin errores)
 * @param {number} mistakes - Número de errores
 * @returns {number} - Puntos de bonus
 */
export const calculatePerfectBonus = (mistakes) => {
  return mistakes === 0 ? POINTS.PERFECT_LEVEL_BONUS : 0;
};

/**
 * Calcula el puntaje total de un nivel
 * @param {number} correctMatches - Aciertos
 * @param {number} mistakes - Errores
 * @param {number} timeInSeconds - Tiempo en segundos
 * @returns {object} - Objeto con el desglose del puntaje
 */
export const calculateLevelScore = (correctMatches, mistakes, timeInSeconds) => {
  const matchPoints = correctMatches * POINTS.CORRECT_MATCH;
  const penaltyPoints = mistakes * POINTS.WRONG_MATCH;
  const timeBonus = calculateTimeBonus(timeInSeconds);
  const perfectBonus = calculatePerfectBonus(mistakes);
  const stars = calculateStars(mistakes);

  const totalScore = matchPoints + penaltyPoints + timeBonus + perfectBonus;

  return {
    matchPoints,
    penaltyPoints,
    timeBonus,
    perfectBonus,
    totalScore: Math.max(0, totalScore), // No permitir puntajes negativos
    stars
  };
};

/**
 * Formatea el tiempo en formato MM:SS
 * @param {number} seconds - Segundos totales
 * @returns {string} - Tiempo formateado
 */
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Obtiene un mensaje aleatorio de un array
 * @param {Array} messages - Array de mensajes
 * @returns {string} - Mensaje aleatorio
 */
export const getRandomMessage = (messages) => {
  return messages[Math.floor(Math.random() * messages.length)];
};