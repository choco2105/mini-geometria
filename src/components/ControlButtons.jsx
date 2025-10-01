/* ========================================
   BOTONES DE CONTROL
   Pista, Reiniciar y Menú
   ======================================== */

import { motion } from 'framer-motion';

const ControlButtons = ({ onHint, onReset, onMenu, hintDisabled }) => {
  return (
    <div className="control-buttons">
      <motion.button
        className="control-button control-button--hint"
        onClick={onHint}
        disabled={hintDisabled}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        💡 Pista
      </motion.button>
      
      <motion.button
        className="control-button control-button--reset"
        onClick={onReset}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🔄 Reiniciar
      </motion.button>
      
      <motion.button
        className="control-button control-button--menu"
        onClick={onMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🏠 Menú
      </motion.button>
    </div>
  );
};

export default ControlButtons;