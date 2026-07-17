"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use } from "react";

const CardButton = ({ food }) => {
  // 🛠️ টাইপো ফিক্স: CartProvider-এর নাম অনুযায়ী addTOCart (O বড় হাতের) এবং cart স্টেট আনা হলো
  const { addTOCart, cart } = use(CartContext);

  // 🛠️ খাবারটি কার্টে অলরেডি আছে কিনা তা চেক করা (লোকাল স্টেটের আর প্রয়োজন নেই)
  const isAlreadyInCart = cart?.some((item) => item.id === food.id);

  const handleadd2Cart = () => {
    if (addTOCart && !isAlreadyInCart) {
      addTOCart(food);
    }
  };

  return (
    <div>
      <button
        onClick={handleadd2Cart}
        disabled={isAlreadyInCart}
        className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-[11px] py-2.5 px-2 rounded-xl shadow-xs shadow-primary/5 transition-all active:scale-[0.96] cursor-pointer text-center whitespace-nowrap disabled:bg-gray-600 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isAlreadyInCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default CardButton;