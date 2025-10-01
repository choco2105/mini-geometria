/* ========================================
   HOOK DE DRAG & DROP
   Maneja arrastrar y soltar con soporte táctil
   ======================================== */

import { useState, useRef } from 'react';

export const useDragAndDrop = (onDrop) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragOverZone, setDragOverZone] = useState(null);
  const touchStartPos = useRef({ x: 0, y: 0 });

  // ========== EVENTOS DE MOUSE (DESKTOP) ==========
  
  const handleDragStart = (e, object) => {
    setDraggedItem(object);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', object.id);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverZone(null);
  };

  const handleDragOver = (e, shapeId) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverZone(shapeId);
  };

  const handleDragLeave = () => {
    setDragOverZone(null);
  };

  const handleDrop = (e, shape) => {
    e.preventDefault();
    setDragOverZone(null);

    if (!draggedItem) return;

    const isCorrect = draggedItem.correctShape === shape.id;

    if (onDrop) {
      onDrop({
        object: draggedItem,
        shape: shape,
        isCorrect: isCorrect
      });
    }

    setDraggedItem(null);
  };

  // ========== EVENTOS TÁCTILES (MÓVIL) ==========

  const handleTouchStart = (e, object) => {
    e.preventDefault();
    const touch = e.touches[0];
    touchStartPos.current = { x: touch.clientX, y: touch.clientY };
    setDraggedItem(object);
  };

  const handleTouchMove = (e) => {
    if (!draggedItem) return;
    e.preventDefault();

    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    
    // Buscar si el elemento es una zona de forma
    const shapeZone = element?.closest('[data-shape-id]');
    
    if (shapeZone) {
      const shapeId = shapeZone.getAttribute('data-shape-id');
      setDragOverZone(shapeId);
    } else {
      setDragOverZone(null);
    }
  };

  const handleTouchEnd = (e, shapes) => {
    if (!draggedItem) return;
    e.preventDefault();

    const touch = e.changedTouches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    const shapeZone = element?.closest('[data-shape-id]');

    if (shapeZone && shapes) {
      const shapeId = shapeZone.getAttribute('data-shape-id');
      const shape = shapes.find(s => s.id === shapeId);

      if (shape && onDrop) {
        const isCorrect = draggedItem.correctShape === shape.id;
        onDrop({
          object: draggedItem,
          shape: shape,
          isCorrect: isCorrect
        });
      }
    }

    setDraggedItem(null);
    setDragOverZone(null);
  };

  return {
    draggedItem,
    dragOverZone,
    // Mouse events
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    // Touch events
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  };
};