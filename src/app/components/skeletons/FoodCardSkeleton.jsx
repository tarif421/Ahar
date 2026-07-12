import React from 'react';

const FoodCardSkeleton = () => {
  return (
    <div className="bg-card border border-border-theme rounded-3xl overflow-hidden shadow-sm flex flex-col h-full animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full aspect-[4/3] bg-input-theme relative">
        {/* Badge Skeleton */}
        <div className="absolute top-3 left-3 w-20 h-6 bg-border-theme rounded-full" />
      </div>

      {/* Content Skeleton */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-5">
        <div className="space-y-3">
          {/* Title Skeleton */}
          <div className="h-5 bg-border-theme rounded-lg w-3/4" />
          {/* Price Skeleton */}
          <div className="h-6 bg-border-theme rounded-lg w-1/4" />
        </div>

        {/* Buttons Skeleton */}
        <div className="grid grid-cols-2 gap-2.5 pt-2">
          <div className="h-10 bg-border-theme rounded-xl w-full" />
          <div className="h-10 bg-border-theme rounded-xl w-full" />
        </div>
      </div>

    </div>
  );
};

export default FoodCardSkeleton;