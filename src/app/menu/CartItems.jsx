"use client";
import { CartProvider } from "@/context/CartProvider";
import React from "react";

const CartItems = () => {
  const { cart } = use(CartProvider);
  return <div>{cart.length} items Added</div>;
};

export default CartItems;
