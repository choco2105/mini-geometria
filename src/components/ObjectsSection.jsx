/* ========================================
   SECCIÓN DE OBJETOS ARRASTRABLES
   Columna derecha con los objetos
   ======================================== */

import DraggableObject from './DraggableObject';

const ObjectsSection = ({ 
  objects, 
  draggedItem, 
  onDragStart, 
  onDragEnd 
}) => {
  // Contar objetos restantes
  const remainingObjects = objects.filter(obj => !obj.matched).length;

  return (
    <div className="objects-section">
      <h2 className="section-title">
        🎯 Objetos ({remainingObjects} restantes)
      </h2>
      <div className="objects-grid">
        {objects.map((object) => (
          <DraggableObject
            key={object.id}
            object={object}
            isDragging={draggedItem?.id === object.id}
            isMatched={object.matched}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
          />
        ))}
      </div>
    </div>
  );
};

export default ObjectsSection;