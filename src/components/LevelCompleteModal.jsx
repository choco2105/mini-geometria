/* ========================================
   MODAL DE NIVEL COMPLETADO
   Se muestra al terminar cada nivel
   ======================================== */

import { motion } from 'framer-motion';
import { formatTime } from '../utils/scoring';

const LevelCompleteModal = ({ 
  levelNumber,
  totalLevels,
  stars, 
  score, 
  time, 
  mistakes,
  onNextLevel,
  onViewSummary
}) => {
  const isLastLevel = levelNumber === totalLevels;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <div className="modal__icon">
          {stars === 3 ? '🏆' : stars === 2 ? '🥈' : '🥉'}
        </div>
        
        <h2 className="modal__title">
          ¡Nivel {levelNumber} Completado!
        </h2>

        <div className="modal__stars">
          {'⭐'.repeat(stars)}
        </div>

        <div className="modal__stats">
          <div className="modal__stat">
            <span className="modal__stat-label">🎯 Puntos:</span>
            <span className="modal__stat-value">{score}</span>
          </div>
          <div className="modal__stat">
            <span className="modal__stat-label">⏱️ Tiempo:</span>
            <span className="modal__stat-value">{formatTime(time)}</span>
          </div>
          <div className="modal__stat">
            <span className="modal__stat-label">❌ Errores:</span>
            <span className="modal__stat-value">{mistakes}</span>
          </div>
        </div>

        <div className="modal__buttons">
          {!isLastLevel ? (
            <button 
              className="modal__button modal__button--primary"
              onClick={onNextLevel}
            >
              Siguiente Nivel ➡️
            </button>
          ) : (
            <button 
              className="modal__button modal__button--primary"
              onClick={onViewSummary}
            >
              Ver Resumen 📊
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LevelCompleteModal;