/* ========================================
   TABLERO DE JUEGO
   Contiene las dos columnas: formas y objetos
   CON SOPORTE TÁCTIL
   ======================================== */

import ShapesSection from './ShapesSection';
import ObjectsSection from './ObjectsSection';

const GameBoard = ({ 
  shapes, 
  objects, 
  draggedItem,
  dragOverZone,
  hintShapeId,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDragLeave,
  onDrop,
  onTouchStart,
  onTouchMove,
  onTouchEnd
}) => {
  return (
    <div className="game-board">
      <ShapesSection
        shapes={shapes}
        dragOverZone={dragOverZone}
        hintShapeId={hintShapeId}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      />
      <ObjectsSection
        objects={objects}
        draggedItem={draggedItem}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      />
    </div>
  );
};

export default GameBoard;