/* ========================================
   HEADER DEL JUEGO
   Muestra nivel, tiempo y progreso
   ======================================== */

import { formatTime } from '../utils/scoring';

const GameHeader = ({ currentLevel, totalLevels, elapsedTime, progress }) => {
  return (
    <div className="game-header">
      <div className="game-header__info">
        <div className="game-header__level">
          📚 Nivel {currentLevel} de {totalLevels}
        </div>
        <div className="game-header__timer">
          ⏱️ {formatTime(elapsedTime)}
        </div>
      </div>
      <div className="game-header__progress">
        <div className="progress-bar">
          <div 
            className="progress-bar__fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default GameHeader;