import React from 'react';
import { motion } from 'framer-motion';
import { UserDetails } from '@/utils/userDetailsStorage';
import PaymentButtons from './PaymentButtons';

interface OrderSummaryProps {
  total: number;
  shipping: number;
  finalTotal: number;
  userDetails: UserDetails | null;
  onKonnektClick: () => void;
  onCashClick: () => void;
}

const OrderSummary = ({ 
  total, 
  shipping, 
  finalTotal, 
  userDetails,
  onKonnektClick,
  onCashClick 
}: OrderSummaryProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="lg:col-span-1"
    >
      <div className="bg-white rounded-lg shadow-sm p-6 sticky top-32 border border-gray-100">
        <h2 className="text-xl font-serif text-[#1A1F2C] mb-6">Résumé de la commande</h2>
        
        {userDetails && (
          <div className="mb-6 p-4 bg-gray-50 rounded-md">
            <h3 className="font-medium text-[#1A1F2C] mb-2">Informations de livraison</h3>
            <p className="text-sm text-[#8E9196]">
              {userDetails.firstName} {userDetails.lastName}<br />
              {userDetails.address}<br />
              {userDetails.zipCode} {userDetails.country}<br />
              {userDetails.phone}<br />
              {userDetails.email}
            </p>
          </div>
        )}

        <div className="space-y-4 mb-6">
          <div className="flex justify-between text-[#8E9196]">
            <span>Sous-total</span>
            <span>€ {total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-[#8E9196]">
            <span>Livraison</span>
            <span>{shipping === 0 ? 'Gratuite' : `€ ${shipping.toFixed(2)}`}</span>
          </div>
          <div className="border-t border-gray-100 pt-4">
            <div className="flex justify-between text-lg font-medium text-[#1A1F2C]">
              <span>Total</span>
              <span>€ {finalTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#8E9196] mt-1">TVA incluse</p>
          </div>
        </div>
        
        <PaymentButtons 
          enabled={!!userDetails}
          onKonnektClick={onKonnektClick}
          onCashClick={onCashClick}
        />

        <div className="mt-6 space-y-2 text-sm text-[#8E9196]">
          <p className="flex items-center gap-2 hover:text-[#1A1F2C] transition-colors">
            • Livraison gratuite à partir de 500€
          </p>
          <p className="flex items-center gap-2 hover:text-[#1A1F2C] transition-colors">
            • Retours gratuits sous 14 jours
          </p>
          <p className="flex items-center gap-2 hover:text-[#1A1F2C] transition-colors">
            • Service client disponible 24/7
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderSummary;