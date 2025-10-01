/* ========================================
   COMPONENTE DE NOTIFICACIÓN
   Muestra mensajes emergentes al usuario
   ======================================== */

import { motion, AnimatePresence } from 'framer-motion';

const Notification = ({ message, type = 'info', isVisible }) => {
  const icons = {
    success: '✅',
    error: '❌',
    info: '💡'
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`notification notification--${type}`}
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="notification__icon">
            {icons[type]}
          </div>
          <div className="notification__message">
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;