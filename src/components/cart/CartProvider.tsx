import React, { createContext, useContext, useState, useCallback, useTransition } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void; // Updated to accept full CartItem
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isPending, startTransition] = useTransition();

  const addToCart = useCallback((item: CartItem) => {
    startTransition(() => {
      setCartItems(prev => {
        const existingItem = prev.find(i => i.id === item.id);
        if (existingItem) {
          return prev.map(i => 
            i.id === item.id 
              ? { ...i, quantity: i.quantity + item.quantity } // Increment the quantity
              : i
          );
        }
        return [...prev, item]; // Add the item with its quantity
      });
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    startTransition(() => {
      setCartItems(prev => prev.filter(item => item.id !== id));
    });
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    startTransition(() => {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    });
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
