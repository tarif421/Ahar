import React from "react";
import FoodCard from "../components/cards/FoodCard";
import CartItems from "./CartItems";
const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 500));
  return data.foods || [];
};
const FoodMenu = async () => {
  const foods = await getFoods();
  return (
    <div className="py-12 bg-transparent">
      {/* Centered Heading Section */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 px-4">
        {/* Decorative Mini Tag */}
        <span className="text-[11px] font-black tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
          ✨ Fresh & Traditional
        </span>

        {/* Refined H2 Styles with balanced size */}
        <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
          Total{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {foods.length}
          </span>{" "}
          Premium Foods on Menu
        </h2>

        {/* Subtle Subtitle */}
        <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
          Handpicked culinary delights prepared with organic ingredients and
          true passion.
        </p>

        {/* Custom Decorative Line Under H2 */}
        <div className="flex justify-center items-center gap-1.5 pt-1">
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <div className="w-12 h-1 bg-gradient-to-l from-primary to-transparent rounded-full" />
        </div>
      </div>

     <div className="flex gap-5 ">
       {/* Grid Layout Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
      <div className="border-2 border-primary rounded-2xl">
        <div className="w-[250px] text-center intems-center border-primary border-2  border-b-0 rounded-3xl p-4">
          <h2 className="text-2xl font-bold">Cart Items</h2> <hr className="border-primary-hover" />
          <CartItems></CartItems>
        </div>
      </div>
     </div>
    </div>
  );
};

export default FoodMenu;
