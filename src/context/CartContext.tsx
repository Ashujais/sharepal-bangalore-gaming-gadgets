import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, CartItem } from '../types/product';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, days?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  // Wishlist
  wishlist: number[];
  toggleWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;

  // Rental Dates
  deliveryDate: string;
  pickupDate: string;
  setRentalDates: (delivery: string, pickup: string) => void;
  totalDays: number;

  // City
  selectedCity: string;
  setSelectedCity: (city: string) => void;

  // Modals
  isCityModalOpen: boolean;
  setIsCityModalOpen: (open: boolean) => void;
  isDateModalOpen: boolean;
  setIsDateModalOpen: (open: boolean) => void;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;
  selectedProductDetail: Product | null;
  setSelectedProductDetail: (product: Product | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('sharepal_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('sharepal_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedCity, setSelectedCity] = useState<string>('Bangalore');
  const [deliveryDate, setDeliveryDate] = useState<string>('');
  const [pickupDate, setPickupDate] = useState<string>('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);

  useEffect(() => {
    localStorage.setItem('sharepal_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('sharepal_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Calculate total rental days
  const calculateDays = (start: string, end: string) => {
    if (!start || !end) return 1;
    const d1 = new Date(start).getTime();
    const d2 = new Date(end).getTime();
    const diff = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const totalDays = calculateDays(deliveryDate, pickupDate);

  const setRentalDates = (delivery: string, pickup: string) => {
    setDeliveryDate(delivery);
    setPickupDate(pickup);
  };

  const addToCart = (product: Product, days: number = totalDays || 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1, rentalDays: days }
            : item
        );
      }
      return [...prev, { product, quantity: 1, rentalDays: days, deliveryDate, pickupDate }];
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId: number) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const isInWishlist = (productId: number) => wishlist.includes(productId);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce((sum, item) => {
    return sum + (item.product.per_day_rent * item.rentalDays * item.quantity);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isInWishlist,
        deliveryDate,
        pickupDate,
        setRentalDates,
        totalDays,
        selectedCity,
        setSelectedCity,
        isCityModalOpen,
        setIsCityModalOpen,
        isDateModalOpen,
        setIsDateModalOpen,
        isSearchModalOpen,
        setIsSearchModalOpen,
        selectedProductDetail,
        setSelectedProductDetail,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
