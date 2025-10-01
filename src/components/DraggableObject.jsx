/* ========================================
   COMPONENTE OBJETO ARRASTRABLE
   Representa un objeto que se puede arrastrar
   CON SOPORTE TÁCTIL COMPLETO
   ======================================== */

import { motion } from 'framer-motion';

const DraggableObject = ({ 
  object, 
  isDragging, 
  isMatched,
  onDragStart, 
  onDragEnd,
  onTouchStart,
  onTouchMove,
  onTouchEnd
}) => {
  return (
    <motion.div
      className={`draggable-object ${isDragging ? 'draggable-object--dragging' : ''} ${isMatched ? 'draggable-object--matched' : ''}`}
      draggable={!isMatched}
      onDragStart={(e) => onDragStart(e, object)}
      onDragEnd={onDragEnd}
      onTouchStart={(e) => onTouchStart(e, object)}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      whileHover={!isMatched ? { scale: 1.05 } : {}}
      whileTap={!isMatched ? { scale: 0.95 } : {}}
    >
      <span className="draggable-object__emoji">
        {object.emoji}
      </span>
      <span className="draggable-object__name">
        {object.name}
      </span>
    </motion.div>
  );
};

export default DraggableObject;