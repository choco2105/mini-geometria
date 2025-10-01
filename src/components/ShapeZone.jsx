/* ========================================
   COMPONENTE ZONA DE FORMA (DROP ZONE)
   Zona donde se sueltan los objetos
   CON SOPORTE TÁCTIL
   ======================================== */

import { motion } from 'framer-motion';

const ShapeZone = ({ 
  shape, 
  isDragOver, 
  isMatched, 
  isHint,
  onDragOver, 
  onDragLeave, 
  onDrop 
}) => {
  // Calcular cuántos objetos faltan por emparejar
  const totalObjectsForShape = shape.totalObjects || 0;
  const matchedCount = shape.matchedObjects?.length || 0;
  const remainingCount = totalObjectsForShape - matchedCount;

  return (
    <motion.div
      className={`shape-zone ${isDragOver ? 'shape-zone--drag-over' : ''} ${isMatched ? 'shape-zone--matched' : ''} ${isHint ? 'shape-zone--hint' : ''}`}
      data-shape-id={shape.id}
      onDragOver={(e) => onDragOver(e, shape.id)}
      onDragLeave={onDragLeave}
      onDrop={(e) => onDrop(e, shape)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="shape-zone__shape">
        {shape.emoji}
      </div>
      <div className="shape-zone__name">
        {shape.name}
      </div>
      {totalObjectsForShape > 0 && (
        <div className="shape-zone__count">
          {matchedCount}/{totalObjectsForShape} objetos
        </div>
      )}
    </motion.div>
  );
};

export default ShapeZone;