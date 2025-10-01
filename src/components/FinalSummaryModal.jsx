/* ========================================
   MODAL DE RESUMEN FINAL
   Se muestra al completar todos los niveles
   ======================================== */

import { motion } from 'framer-motion';
import { formatTime } from '../utils/scoring';

const FinalSummaryModal = ({ levelHistory, onPlayAgain, onMenu }) => {
  // Calcular totales
  const totalScore = levelHistory.reduce((sum, level) => sum + level.score, 0);
  const totalTime = levelHistory.reduce((sum, level) => sum + level.time, 0);
  const totalMistakes = levelHistory.reduce((sum, level) => sum + level.mistakes, 0);
  const totalStars = levelHistory.reduce((sum, level) => sum + level.stars, 0);
  const avgStars = (totalStars / levelHistory.length).toFixed(1);

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
        style={{ maxWidth: '600px' }}
      >
        <div className="modal__icon">🏆</div>
        
        <h2 className="modal__title">¡Juego Completado!</h2>

        <div className="modal__stats">
          <div className="modal__stat">
            <span className="modal__stat-label">🎯 Puntos Totales:</span>
            <span className="modal__stat-value">{totalScore}</span>
          </div>
          <div className="modal__stat">
            <span className="modal__stat-label">⏱️ Tiempo Total:</span>
            <span className="modal__stat-value">{formatTime(totalTime)}</span>
          </div>
          <div className="modal__stat">
            <span className="modal__stat-label">❌ Errores Totales:</span>
            <span className="modal__stat-value">{totalMistakes}</span>
          </div>
          <div className="modal__stat">
            <span className="modal__stat-label">⭐ Promedio:</span>
            <span className="modal__stat-value">{avgStars} estrellas</span>
          </div>
        </div>

        {/* Desglose por nivel */}
        <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#9333ea' }}>
            📋 Desglose por Nivel
          </h3>
          {levelHistory.map((level) => (
            <div 
              key={level.level}
              style={{
                background: '#f3f4f6',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                marginBottom: '0.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span style={{ fontWeight: 600 }}>Nivel {level.level}</span>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
                <span>{'⭐'.repeat(level.stars)}</span>
                <span>{level.score} pts</span>
                <span>{formatTime(level.time)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="modal__buttons">
          <button 
            className="modal__button modal__button--primary"
            onClick={onPlayAgain}
          >
            🔄 Jugar de Nuevo
          </button>
          <button 
            className="modal__button modal__button--secondary"
            onClick={onMenu}
          >
            🏠 Menú Principal
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FinalSummaryModal;