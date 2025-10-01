/* ========================================
   PANTALLA DE JUEGO
   Pantalla principal donde se juega
   CON SONIDOS INTEGRADOS
   ======================================== */

import { useState, useEffect, useCallback } from 'react';
import { useGameState } from '../hooks/useGameState';
import { useTimer } from '../hooks/useTimer';
import { useDragAndDrop } from '../hooks/useDragAndDrop';
import { useSounds } from '../hooks/useSounds';
import { calculateLevelScore, getRandomMessage } from '../utils/scoring';
import { MESSAGES, ANIMATION_DURATION } from '../utils/constants';

import GameHeader from './GameHeader';
import StatsPanel from './StatsPanel';
import ControlButtons from './ControlButtons';
import GameBoard from './GameBoard';
import Notification from './Notification';
import ParticleEffect from './ParticleEffect';
import LevelCompleteModal from './LevelCompleteModal';
import FinalSummaryModal from './FinalSummaryModal';

const GameScreen = ({ onBackToMenu }) => {
  const gameState = useGameState();
  const timer = useTimer();
  const sounds = useSounds();
  const [notification, setNotification] = useState({ show: false, message: '', type: 'info' });
  const [particles, setParticles] = useState([]);
  const [hintShapeId, setHintShapeId] = useState(null);
  const [showLevelComplete, setShowLevelComplete] = useState(false);
  const [showFinalSummary, setShowFinalSummary] = useState(false);
  const [levelCompleteData, setLevelCompleteData] = useState(null);

  // Inicializar el primer nivel al montar
  useEffect(() => {
    gameState.initLevel(1);
    timer.startTimer();
  }, []);

  // Verificar si el nivel está completo
  useEffect(() => {
    if (gameState.isLevelComplete() && gameState.objects.length > 0) {
      handleLevelComplete();
    }
  }, [gameState.objects]);

  // Handler para cuando se completa un nivel
  const handleLevelComplete = () => {
    timer.stopTimer();
    sounds.playLevelCompleteSound(); // 🔊 Sonido de nivel completado
    
    const scoreData = calculateLevelScore(
      gameState.correctMatches,
      gameState.mistakes,
      timer.elapsedTime
    );

    gameState.completeLevel(timer.elapsedTime, scoreData.stars, scoreData.totalScore);

    setLevelCompleteData({
      levelNumber: gameState.currentLevel,
      stars: scoreData.stars,
      score: scoreData.totalScore,
      time: timer.elapsedTime,
      mistakes: gameState.mistakes
    });

    setShowLevelComplete(true);
  };

  // Manejar drop de objetos
  const handleDrop = useCallback(({ object, shape, isCorrect }) => {
    if (isCorrect) {
      // Acierto
      sounds.playCorrectSound(); // 🔊 Sonido de acierto
      gameState.handleCorrectMatch(object, shape);
      
      // Mostrar notificación
      showNotification(getRandomMessage(MESSAGES.CORRECT), 'success');
      
      // Crear partículas
      createParticles(window.innerWidth / 2, window.innerHeight / 2);
    } else {
      // Error
      sounds.playWrongSound(); // 🔊 Sonido de error
      gameState.handleIncorrectMatch();
      showNotification(getRandomMessage(MESSAGES.WRONG), 'error');
    }
  }, [gameState, sounds]);

  const dragAndDrop = useDragAndDrop(handleDrop);

  // Mostrar notificación
  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: 'info' });
    }, ANIMATION_DURATION.NOTIFICATION);
  };

  // Crear efecto de partículas
  const createParticles = (x, y) => {
    const id = Date.now();
    setParticles(prev => [...prev, { id, x, y }]);
    
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, ANIMATION_DURATION.PARTICLE);
  };

  // Botón Pista
  const handleHint = () => {
    sounds.playHintSound(); // 🔊 Sonido de pista
    
    // Encontrar el primer objeto no emparejado
    const unmatchedObject = gameState.objects.find(obj => !obj.matched);
    
    if (unmatchedObject) {
      const correctShapeId = unmatchedObject.correctShape;
      
      // Resaltar la forma correcta
      setHintShapeId(correctShapeId);
      
      // Mostrar mensaje
      const message = MESSAGES.HINT.replace('{object}', unmatchedObject.name);
      showNotification(message, 'info');
      
      // Quitar resaltado después de 2 segundos
      setTimeout(() => {
        setHintShapeId(null);
      }, ANIMATION_DURATION.HINT);
    }
  };

  // Botón Reiniciar
  const handleReset = () => {
    sounds.playClickSound(); // 🔊 Sonido de clic
    gameState.resetLevel();
    timer.resetTimer();
    timer.startTimer();
    setHintShapeId(null);
  };

  // Siguiente nivel
  const handleNextLevel = () => {
    sounds.playClickSound(); // 🔊 Sonido de clic
    setShowLevelComplete(false);
    gameState.nextLevel();
    timer.resetTimer();
    timer.startTimer();
  };

  // Ver resumen final
  const handleViewSummary = () => {
    sounds.playClickSound(); // 🔊 Sonido de clic
    setShowLevelComplete(false);
    setShowFinalSummary(true);
  };

  // Jugar de nuevo
  const handlePlayAgain = () => {
    sounds.playClickSound(); // 🔊 Sonido de clic
    setShowFinalSummary(false);
    gameState.resetGame();
    timer.resetTimer();
    timer.startTimer();
  };

  // Volver al menú
  const handleBackToMenu = () => {
    sounds.playClickSound(); // 🔊 Sonido de clic
    onBackToMenu();
  };

  // Calcular el conteo de objetos por forma
  const shapesWithCount = gameState.shapes.map(shape => ({
    ...shape,
    totalObjects: gameState.objects.filter(obj => obj.correctShape === shape.id).length
  }));

  return (
    <div className="game-screen">
      <GameHeader
        currentLevel={gameState.currentLevel}
        totalLevels={gameState.totalLevels}
        elapsedTime={timer.elapsedTime}
        progress={gameState.getLevelProgress()}
      />

      <StatsPanel
        score={gameState.score}
        mistakes={gameState.mistakes}
      />

      <ControlButtons
        onHint={handleHint}
        onReset={handleReset}
        onMenu={handleBackToMenu}
        hintDisabled={gameState.objects.every(obj => obj.matched)}
      />

      <GameBoard
        shapes={shapesWithCount}
        objects={gameState.objects}
        draggedItem={dragAndDrop.draggedItem}
        dragOverZone={dragAndDrop.dragOverZone}
        hintShapeId={hintShapeId}
        onDragStart={dragAndDrop.handleDragStart}
        onDragEnd={dragAndDrop.handleDragEnd}
        onDragOver={dragAndDrop.handleDragOver}
        onDragLeave={dragAndDrop.handleDragLeave}
        onDrop={dragAndDrop.handleDrop}
      />

      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.show}
      />

      {particles.map(particle => (
        <ParticleEffect
          key={particle.id}
          x={particle.x}
          y={particle.y}
          onComplete={() => {}}
        />
      ))}

      {showLevelComplete && levelCompleteData && (
        <LevelCompleteModal
          levelNumber={levelCompleteData.levelNumber}
          totalLevels={gameState.totalLevels}
          stars={levelCompleteData.stars}
          score={levelCompleteData.score}
          time={levelCompleteData.time}
          mistakes={levelCompleteData.mistakes}
          onNextLevel={handleNextLevel}
          onViewSummary={handleViewSummary}
        />
      )}

      {showFinalSummary && (
        <FinalSummaryModal
          levelHistory={gameState.levelHistory}
          onPlayAgain={handlePlayAgain}
          onMenu={handleBackToMenu}
        />
      )}
    </div>
  );
};

export default GameScreen;