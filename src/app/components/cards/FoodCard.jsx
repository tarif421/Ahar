import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardButton from "../buttons/CardButton";

const FoodCard = ({ food }) => {
  const { title, foodImg, price, category, id } = food;

  return (
    <div className="group bg-card border border-border-theme rounded-2xl overflow-hidden shadow-xs hover:shadow-lg dark:shadow-none transition-all duration-300 flex flex-col h-full max-w-[290px] sm:max-w-none mx-auto w-full">
      {/* Food Image Container - 16:10 aspect ratio for a sleeker profile */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-input-theme">
        {/* Category Badge */}
        <span className="absolute top-2.5 left-2.5 z-10 bg-background/85 backdrop-blur-md text-foreground text-[10px] font-black px-2.5 py-0.5 rounded-full border border-border-theme/60 tracking-wider uppercase">
          🌱 {category}
        </span>

        <Image
          src={foodImg}
          alt={title}
          fill
          sizes="(max-w-768px) 100vw, 300px"
          className="object-cover transform group-hover:scale-103 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Food Details Area */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3.5">
        <div className="space-y-1">
          {/* Responsive title sizes with clamp */}
          <h3 className="text-sm sm:text-base font-black text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <p className="text-lg font-black text-secondary">৳{price}</p>
        </div>

        {/* Compact Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          {/* View Details */}
          <Link
            href={`/menu/${food.id}`}
            className="border border-border-theme hover:border-primary text-foreground hover:text-primary font-bold text-[11px] py-2.5 px-2 rounded-xl transition-all active:scale-[0.96] cursor-pointer text-center whitespace-nowrap"
          >
            Details
          </Link>

          {/* Add to Cart */}
          <CardButton food={food}></CardButton>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
