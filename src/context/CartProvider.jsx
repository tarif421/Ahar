"use client";
import React, { createContext, useState } from "react";

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
  return <CartContext>{children}</CartContext>;
};

export default CartProvider;
