/* ========================================
   COMPONENTE DE EFECTO DE PARTÍCULAS
   Muestra partículas animadas al acertar
   ======================================== */

import { motion } from 'framer-motion';
import { PARTICLE_EMOJIS } from '../utils/constants';

const ParticleEffect = ({ x, y, onComplete }) => {
  // Crear 8 partículas en diferentes direcciones
  const particles = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 45) * (Math.PI / 180);
    const distance = 100;
    
    return {
      id: i,
      emoji: PARTICLE_EMOJIS[Math.floor(Math.random() * PARTICLE_EMOJIS.length)],
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      rotation: Math.random() * 360
    };
  });

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 999 }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          initial={{ 
            x: x, 
            y: y, 
            opacity: 1, 
            scale: 0,
            rotate: 0
          }}
          animate={{ 
            x: x + particle.x, 
            y: y + particle.y, 
            opacity: 0, 
            scale: 1.5,
            rotate: particle.rotation
          }}
          transition={{ 
            duration: 1.5, 
            ease: 'easeOut' 
          }}
          onAnimationComplete={() => {
            if (particle.id === 0 && onComplete) {
              onComplete();
            }
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default ParticleEffect;