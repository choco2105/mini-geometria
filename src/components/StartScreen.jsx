/* ========================================
   PANTALLA DE INICIO
   Primera pantalla del juego
   CON SONIDO EN BOTÓN
   ======================================== */

import { motion } from 'framer-motion';
import { useSounds } from '../hooks/useSounds';

const StartScreen = ({ onStart }) => {
  const sounds = useSounds();

  const handleStart = () => {
    sounds.playClickSound(); // 🔊 Sonido de clic
    onStart();
  };

  return (
    <div className="start-screen">
      <motion.div
        className="start-screen__logo"
        animate={{ 
          y: [0, -10, 0] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🎮
      </motion.div>

      <motion.h1 
        className="start-screen__title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Mini Geometría
      </motion.h1>

      <motion.p 
        className="start-screen__subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Aprende formas jugando - 5 Niveles
      </motion.p>

      <motion.button
        className="start-screen__button"
        onClick={handleStart}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: 'spring' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ▶️ Comenzar a Jugar
      </motion.button>
    </div>
  );
};

export default StartScreen;