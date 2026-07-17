"use client";
import React, { createContext, useState } from "react";

// ১. কনটেক্সট তৈরি করা হলো
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addTOCart = (item) => {
    setCart([item, ...cart]);
  };

  const cartInfo = {
    addTOCart,
    cart,
  };


  return (
    <CartContext.Provider value={cartInfo}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;