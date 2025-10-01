/* ========================================
   PANEL DE ESTADÍSTICAS
   Muestra estrellas, puntos y errores
   ======================================== */

import { calculateStars } from '../utils/scoring';

const StatsPanel = ({ score, mistakes }) => {
  const stars = calculateStars(mistakes);

  return (
    <div className="stats-panel">
      <div className="stat-item stat-item--stars">
        <span className="stat-item__icon">⭐</span>
        <span className="stat-item__value">
          {'⭐'.repeat(stars)}{'☆'.repeat(3 - stars)}
        </span>
      </div>
      <div className="stat-item stat-item--score">
        <span className="stat-item__icon">🎯</span>
        <span className="stat-item__value">{score} puntos</span>
      </div>
      <div className="stat-item stat-item--errors">
        <span className="stat-item__icon">❌</span>
        <span className="stat-item__value">{mistakes} errores</span>
      </div>
    </div>
  );
};

export default StatsPanel;