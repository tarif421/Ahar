"use client";
import React, { useState } from "react";

const CardButton = () => {
  const [inCart, setIncart] = useState(false);
  const handleadd2Cart = () => {
    setIncart(true);
  };
  return (
    <div>
      <button
        onClick={handleadd2Cart}
        disabled={inCart}
        className="bg-primary hover:bg-primary-hover text-white font-bold text-[11px] py-2.5 px-2 rounded-xl shadow-xs shadow-primary/5 transition-all active:scale-[0.96] cursor-pointer text-center whitespace-nowrap disabled:bg-gray-600"
      >
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default CardButton;
