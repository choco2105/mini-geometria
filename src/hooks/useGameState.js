/* ========================================
   HOOK DEL ESTADO DEL JUEGO
   Maneja todo el estado principal del juego
   ======================================== */

import { useState, useCallback } from 'react';
import { getLevelById, getTotalLevels } from '../data/levels';
import { POINTS } from '../utils/constants';

export const useGameState = () => {
  // Estado principal
  const [currentLevel, setCurrentLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [correctMatches, setCorrectMatches] = useState(0);
  const [levelHistory, setLevelHistory] = useState([]);
  
  // Estado de formas y objetos del nivel actual
  const [shapes, setShapes] = useState([]);
  const [objects, setObjects] = useState([]);
  
  // Estado de emparejamientos
  const [matchedPairs, setMatchedPairs] = useState([]);

  /**
   * Inicializar un nivel
   */
  const initLevel = useCallback((levelNumber) => {
    const level = getLevelById(levelNumber);
    
    if (!level) {
      console.error(`Nivel ${levelNumber} no encontrado`);
      return;
    }

    // Configurar el nivel
    setCurrentLevel(levelNumber);
    setShapes(level.shapes.map(shape => ({
      ...shape,
      matched: false,
      matchedObjects: []
    })));
    setObjects(level.objects.map(obj => ({
      ...obj,
      matched: false
    })));
    
    // Resetear estadísticas del nivel
    setScore(0);
    setMistakes(0);
    setCorrectMatches(0);
    setMatchedPairs([]);
  }, []);

  /**
   * Reiniciar el nivel actual sin cambiar el número de nivel
   */
  const resetLevel = useCallback(() => {
    initLevel(currentLevel);
  }, [currentLevel, initLevel]);

  /**
   * Manejar un emparejamiento correcto
   */
  const handleCorrectMatch = useCallback((object, shape) => {
    // Actualizar puntuación
    setScore(prevScore => prevScore + POINTS.CORRECT_MATCH);
    setCorrectMatches(prev => prev + 1);

    // Marcar objeto como emparejado
    setObjects(prevObjects => 
      prevObjects.map(obj => 
        obj.id === object.id ? { ...obj, matched: true } : obj
      )
    );

    // Marcar forma como emparejada y agregar objeto
    setShapes(prevShapes =>
      prevShapes.map(s => {
        if (s.id === shape.id) {
          const matchedObjects = [...(s.matchedObjects || []), object];
          return {
            ...s,
            matched: true,
            matchedObjects
          };
        }
        return s;
      })
    );

    // Agregar al historial de emparejamientos
    setMatchedPairs(prev => [...prev, { objectId: object.id, shapeId: shape.id }]);
  }, []);

  /**
   * Manejar un emparejamiento incorrecto
   */
  const handleIncorrectMatch = useCallback(() => {
    setScore(prevScore => Math.max(0, prevScore + POINTS.WRONG_MATCH));
    setMistakes(prev => prev + 1);
  }, []);

  /**
   * Completar el nivel actual
   */
  const completeLevel = useCallback((timeInSeconds, stars, totalScore) => {
    // Guardar historial del nivel
    const levelStats = {
      level: currentLevel,
      score: totalScore,
      stars: stars,
      time: timeInSeconds,
      mistakes: mistakes,
      correctMatches: correctMatches
    };

    setLevelHistory(prev => [...prev, levelStats]);
  }, [currentLevel, mistakes, correctMatches]);

  /**
   * Avanzar al siguiente nivel
   */
  const nextLevel = useCallback(() => {
    const nextLevelNumber = currentLevel + 1;
    
    if (nextLevelNumber <= getTotalLevels()) {
      initLevel(nextLevelNumber);
    }
  }, [currentLevel, initLevel]);

  /**
   * Reiniciar todo el juego
   */
  const resetGame = useCallback(() => {
    setCurrentLevel(1);
    setLevelHistory([]);
    initLevel(1);
  }, [initLevel]);

  /**
   * Verificar si el nivel está completo
   */
  const isLevelComplete = useCallback(() => {
    return objects.length > 0 && objects.every(obj => obj.matched);
  }, [objects]);

  /**
   * Obtener progreso del nivel (0-100)
   */
  const getLevelProgress = useCallback(() => {
    if (objects.length === 0) return 0;
    return (correctMatches / objects.length) * 100;
  }, [objects.length, correctMatches]);

  return {
    // Estado
    currentLevel,
    score,
    mistakes,
    correctMatches,
    shapes,
    objects,
    matchedPairs,
    levelHistory,
    
    // Funciones
    initLevel,
    resetLevel,
    handleCorrectMatch,
    handleIncorrectMatch,
    completeLevel,
    nextLevel,
    resetGame,
    isLevelComplete,
    getLevelProgress,
    
    // Utilidades
    totalLevels: getTotalLevels()
  };
};