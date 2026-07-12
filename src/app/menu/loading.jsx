import React from "react";
import FoodCardSkeleton from "../components/skeletons/FoodCardSkeleton";

const loading = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {[...Array(12)].map((_, index) => (
        <FoodCardSkeleton key={index}></FoodCardSkeleton>
      ))}
    </div>
  );
};

export default loading;
