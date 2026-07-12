import React from "react";

const Loading = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-16 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Image Skeleton */}
        <div className="w-full aspect-[4/3] rounded-3xl bg-input-theme border border-border-theme relative">
          <div className="absolute bottom-4 left-4 w-32 h-6 bg-border-theme rounded-full" />
        </div>

        {/* Right Side: Content Skeleton */}
        <div className="space-y-6 w-full">
          <div className="space-y-3">
            {/* Category badge skeleton */}
            <div className="w-20 h-5 bg-border-theme rounded-full" />
            {/* Title skeleton */}
            <div className="w-4/5 h-10 bg-border-theme rounded-xl" />
            <div className="w-2/3 h-10 bg-border-theme rounded-xl sm:hidden" />
          </div>

          {/* Price skeleton */}
          <div className="w-24 h-8 bg-border-theme rounded-xl" />

          {/* Description line skeletons */}
          <div className="border-t border-b border-border-theme/60 py-5 space-y-3">
            <div className="w-28 h-4 bg-border-theme rounded-md" />
            <div className="w-full h-4 bg-border-theme rounded-md" />
            <div className="w-full h-4 bg-border-theme rounded-md" />
            <div className="w-3/4 h-4 bg-border-theme rounded-md" />
          </div>

          {/* Action button skeletons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 h-12 bg-border-theme rounded-2xl" />
            <div className="w-full sm:w-36 h-12 bg-border-theme rounded-2xl" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;