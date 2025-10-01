/* ========================================
   COMPONENTE OBJETO ARRASTRABLE
   Representa un objeto que se puede arrastrar
   CON SOPORTE TÁCTIL Y OCULTAMIENTO
   ======================================== */

import { motion, AnimatePresence } from 'framer-motion';

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
  // Si está oculto (niveles 3+), no renderizar
  if (object.hidden) {
    return null;
  }

  return (
    <AnimatePresence>
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
        initial={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <span className="draggable-object__emoji">
          {object.emoji}
        </span>
        <span className="draggable-object__name">
          {object.name}
        </span>
      </motion.div>
    </AnimatePresence>
  );
};

export default DraggableObject;