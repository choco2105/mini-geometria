/* ========================================
   HOOK DE DRAG & DROP
   Maneja la funcionalidad de arrastrar y soltar
   ======================================== */

import { useState } from 'react';

export const useDragAndDrop = (onDrop) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragOverZone, setDragOverZone] = useState(null);

  // Cuando comienza a arrastrar un objeto
  const handleDragStart = (e, object) => {
    setDraggedItem(object);
    e.dataTransfer.effectAllowed = 'move';
    // Guardar el ID del objeto en el dataTransfer
    e.dataTransfer.setData('text/plain', object.id);
  };

  // Cuando termina de arrastrar
  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverZone(null);
  };

  // Cuando arrastra sobre una zona válida
  const handleDragOver = (e, shapeId) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverZone(shapeId);
  };

  // Cuando sale de una zona
  const handleDragLeave = () => {
    setDragOverZone(null);
  };

  // Cuando suelta en una zona
  const handleDrop = (e, shape) => {
    e.preventDefault();
    setDragOverZone(null);

    if (!draggedItem) return;

    // Verificar si el objeto corresponde a la forma
    const isCorrect = draggedItem.correctShape === shape.id;

    // Llamar al callback con el resultado
    if (onDrop) {
      onDrop({
        object: draggedItem,
        shape: shape,
        isCorrect: isCorrect
      });
    }

    setDraggedItem(null);
  };

  return {
    draggedItem,
    dragOverZone,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop
  };
};