import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    // Normalize item structure to handle both old product format and new menu format
    const normalizedItem = {
      id: item.id || item.shortDesc || item.name,
      shortDesc: item.shortDesc || item.name,
      longDesc: item.longDesc || item.description,
      price: item.price,
      img: item.img || "/default-product.jpg", // fallback image
      quantity: item.quantity || 1,
      // Keep original item for compatibility
      ...item,
    };

    setCartItems((prev) => {
      const existing = prev.find(
        (i) =>
          i.id === normalizedItem.id || i.shortDesc === normalizedItem.shortDesc
      );
      if (existing) {
        return prev.map((i) =>
          i.id === normalizedItem.id || i.shortDesc === normalizedItem.shortDesc
            ? { ...i, quantity: i.quantity + (normalizedItem.quantity || 1) }
            : i
        );
      }
      return [...prev, normalizedItem];
    });
  }

  function removeFromCart(identifier) {
    setCartItems((prev) =>
      prev.filter((i) => i.shortDesc !== identifier && i.id !== identifier)
    );
  }

  function updateQuantity(identifier, quantity) {
    setCartItems((prev) =>
      prev.map((i) =>
        i.shortDesc === identifier || i.id === identifier
          ? { ...i, quantity }
          : i
      )
    );
  }

  function emptyCart() {
    setCartItems([]);
  }

  function calculateCosts() {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.07; // assuming 7% tax
    const total = subtotal + tax;
    return { subtotal, tax, total };
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        emptyCart,
        calculateCosts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
