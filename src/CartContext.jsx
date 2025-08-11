import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems(prev => {
      const existing = prev.find(i => i.shortDesc === item.shortDesc);
      if (existing) {
        return prev.map(i =>
          i.shortDesc === item.shortDesc
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
  }

  function removeFromCart(shortDesc) {
    setCartItems(prev => prev.filter(i => i.shortDesc !== shortDesc));
  }

  function updateQuantity(shortDesc, quantity) {
    setCartItems(prev => prev.map(i =>
      i.shortDesc === shortDesc ? { ...i, quantity } : i
    ));
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
}
