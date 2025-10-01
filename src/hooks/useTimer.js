/* ========================================
   HOOK DEL CRONÓMETRO
   Maneja el tiempo transcurrido del juego
   ======================================== */

import { useState, useEffect, useRef } from 'react';

export const useTimer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Iniciar el cronómetro
  const startTimer = () => {
    setIsRunning(true);
  };

  // Detener el cronómetro
  const stopTimer = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Reiniciar el cronómetro
  const resetTimer = () => {
    stopTimer();
    setElapsedTime(0);
  };

  // Effect para manejar el intervalo
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  return {
    elapsedTime,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer
  };
};