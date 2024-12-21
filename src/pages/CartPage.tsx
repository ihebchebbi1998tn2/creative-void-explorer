import React, { useState } from 'react';
import { useCart } from '../components/cart/CartProvider';
import { MinusCircle, PlusCircle, Trash2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopNavbar from '../components/TopNavbar';
import { useToast } from "@/hooks/use-toast";
import Footer from '@/components/Footer';
import BrandNavbarSection from "@/components/productsPages/BrandNavbarSection";
import { motion } from "framer-motion";
import UserDetailsForm from '@/components/cart/UserDetailsForm';
import OrderSummary from '@/components/cart/OrderSummary';
import { UserDetails, getUserDetails } from '@/utils/userDetailsStorage';

// Components
const BackButton = ({ onClick }: { onClick: () => void }) => (
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

const EmptyCartMessage = ({ onNavigate }: { onNavigate: () => void }) => (
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

const CartItemCard = ({ item, onUpdateQuantity, onRemove }) => (
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

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userDetails, setUserDetails] = useState<UserDetails | null>(getUserDetails());

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = total > 500 ? 0 : 7;
  const finalTotal = total + shipping;

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
      toast({
        title: "Panier mis à jour",
        description: "La quantité a été mise à jour avec succès",
        className: "bg-red-50 border-red-200",
        style: {
          backgroundColor: '#700100',
          color: 'white',
          border: '1px solid #590000',
        },
      });
    }
  };

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
    toast({
      title: "Article supprimé",
      description: "L'article a été retiré du panier",
      variant: "destructive",
      className: "bg-red-50 border-red-200",
      style: {
        backgroundColor: '#700100',
        color: 'white',
        border: '1px solid #590000',
      },
    });
  };

  const handleKonnektPayment = () => {
    console.log('Processing Konnekt payment');
    // Implement Konnekt payment logic
  };

  const handleCashPayment = () => {
    console.log('Processing cash payment');
    // Implement cash payment logic
  };

  return (
    <div className="min-h-screen bg-[#F1F0FB]">
      <TopNavbar />
      <div className="flex-grow">
        <BrandNavbarSection />
        <div className="container mx-auto px-4 py-4">
          <BackButton onClick={() => navigate('/')} />
        </div>
        <div className="container mx-auto px-4 py-12 mt-32">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-serif text-[#1A1F2C] mb-8"
          >
            Mon Panier ({cartItems.length} articles)
          </motion.h1>
          
          {cartItems.length === 0 ? (
            <EmptyCartMessage onNavigate={() => navigate('/')} />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <CartItemCard
                      key={item.id}
                      item={item}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemove={handleRemoveItem}
                    />
                  ))}
                </div>
                
                <UserDetailsForm 
                  onComplete={setUserDetails}
                  initialData={userDetails}
                />
              </div>
              
              <OrderSummary
                total={total}
                shipping={shipping}
                finalTotal={finalTotal}
                userDetails={userDetails}
                onKonnektClick={handleKonnektPayment}
                onCashClick={handleCashPayment}
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
