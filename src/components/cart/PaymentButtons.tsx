import React from 'react';
import { CreditCard, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

interface PaymentButtonsProps {
  enabled: boolean;
  onKonnektClick: () => void;
  onCashClick: () => void;
}

const PaymentButtons = ({ enabled, onKonnektClick, onCashClick }: PaymentButtonsProps) => {
  return (
    <div className="space-y-3">
      <motion.button
        initial={{ opacity: 0.5 }}
        animate={{ opacity: enabled ? 1 : 0.5 }}
        whileHover={enabled ? { scale: 1.02 } : {}}
        onClick={enabled ? onKonnektClick : undefined}
        disabled={!enabled}
        className="w-full bg-[#700100] text-white px-4 py-3 rounded-md hover:bg-[#591C1C] transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
      >
        <CreditCard size={20} />
        Payer avec Konnekt
      </motion.button>
      <motion.button
        initial={{ opacity: 0.5 }}
        animate={{ opacity: enabled ? 1 : 0.5 }}
        whileHover={enabled ? { scale: 1.02 } : {}}
        onClick={enabled ? onCashClick : undefined}
        disabled={!enabled}
        className="w-full border border-[#700100] text-[#700100] px-4 py-3 rounded-md hover:bg-[#F1F0FB] transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
      >
        <Wallet size={20} />
        Payer en espèces
      </motion.button>
    </div>
  );
};

export default PaymentButtons;