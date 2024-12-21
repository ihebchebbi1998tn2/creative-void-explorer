import React from 'react';
import { MinusCircle, PlusCircle, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartItemCardProps {
  item: CartItem;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItemCard = ({ item, onUpdateQuantity, onRemove }: CartItemCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md border border-gray-100"
  >
    <div className="flex items-center gap-6">
      <div className="w-24 h-24 bg-[#F1F0FB] rounded-md overflow-hidden group">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain mix-blend-multiply p-2 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-serif text-[#1A1F2C] mb-1 hover:text-[#700100] transition-colors cursor-pointer">
          {item.name}
        </h3>
        <p className="text-[#8E9196] text-sm mb-2">Réf: {item.id.toString().padStart(6, '0')}</p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="text-[#8E9196] hover:text-[#700100] transition-colors"
            aria-label="Diminuer la quantité"
          >
            <MinusCircle size={20} />
          </button>
          <span className="w-8 text-center font-medium text-black">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="text-[#8E9196] hover:text-[#700100] transition-colors"
            aria-label="Augmenter la quantité"
          >
            <PlusCircle size={20} />
          </button>
        </div>
      </div>
      <div className="text-right">
        <div className="text-lg font-medium text-[#1A1F2C] mb-2">
          € {(item.price * item.quantity).toFixed(2)}
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="text-[#8E9196] hover:text-red-600 transition-colors group"
          aria-label="Supprimer l'article"
        >
          <Trash2 size={20} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  </motion.div>
);

export default CartItemCard;