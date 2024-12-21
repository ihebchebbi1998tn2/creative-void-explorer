import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

interface EmptyCartMessageProps {
  onNavigate: () => void;
}

const EmptyCartMessage = ({ onNavigate }: EmptyCartMessageProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center py-16 bg-white rounded-lg shadow-sm"
  >
    <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-[#8E9196]" />
    <h2 className="text-xl text-[#1A1F2C] mb-4 font-serif">Votre panier est vide</h2>
    <button
      onClick={onNavigate}
      className="bg-[#700100] text-white px-8 py-3 rounded-md hover:bg-[#591C1C] transition-colors duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
    >
      Continuer mes achats
    </button>
  </motion.div>
);

export default EmptyCartMessage;