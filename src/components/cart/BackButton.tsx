import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface BackButtonProps {
  onClick: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => (
  <motion.button
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    onClick={onClick}
    className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-6 group"
    aria-label="Go back to home"
  >
    <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
    <span>Retour à l'accueil</span>
  </motion.button>
);

export default BackButton;