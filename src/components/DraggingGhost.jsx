/* ========================================
   COMPONENTE DE ELEMENTO FANTASMA
   Muestra el emoji flotando al arrastrar en móvil
   ======================================== */

const DraggingGhost = ({ emoji, position }) => {
  if (!position || !emoji) return null;

  return (
    <div
      className="dragging-ghost"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {emoji}
    </div>
  );
};

export default DraggingGhost;