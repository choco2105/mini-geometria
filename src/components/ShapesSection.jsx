/* ========================================
   SECCIÓN DE FORMAS GEOMÉTRICAS
   Columna izquierda con las formas
   ======================================== */

import ShapeZone from './ShapeZone';

const ShapesSection = ({ 
  shapes, 
  dragOverZone, 
  hintShapeId,
  onDragOver, 
  onDragLeave, 
  onDrop 
}) => {
  return (
    <div className="shapes-section">
      <h2 className="section-title">🔷 Formas Geométricas</h2>
      <div className="shapes-grid">
        {shapes.map((shape) => (
          <ShapeZone
            key={shape.id}
            shape={shape}
            isDragOver={dragOverZone === shape.id}
            isMatched={shape.matched}
            isHint={hintShapeId === shape.id}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          />
        ))}
      </div>
    </div>
  );
};

export default ShapesSection;