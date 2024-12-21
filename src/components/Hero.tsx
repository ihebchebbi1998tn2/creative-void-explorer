import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('banner.png')",
          willChange: 'transform' // Optimize GPU acceleration
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.43, 0.13, 0.23, 0.96],
          delay: 0.2
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
    </section>
  );
};

export default Hero;