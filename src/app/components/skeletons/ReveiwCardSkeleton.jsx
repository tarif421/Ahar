import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <div className="py-12 bg-transparent animate-pulse">
      {/* Centered Heading Skeleton */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 px-4 flex flex-col items-center">
        {/* Main Title Skeleton Lines */}
        <div className="h-9 sm:h-11 bg-border-theme/70 rounded-xl w-3/4 sm:w-2/3" />
        
        {/* Subtle Minimalist Bottom Divider Accent */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          <div className="h-[3px] w-12 rounded-full bg-primary/40" />
          <div className="h-[3px] w-2 rounded-full bg-secondary/40" />
        </div>
      </div>

      {/* Row List Skeleton Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5">
        {/* ৫টি শিমার রো-কার্ড জেনারেট করা হলো */}
        {[...Array(5)].map((_, index) => (
          <div 
            key={index} 
            className="bg-card border border-border-theme/60 rounded-xl p-5 flex flex-col justify-between w-full mx-auto space-y-5"
          >
            {/* Top Header Skeleton */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 flex-1">
                {/* Avatar Circle */}
                <div className="w-10 h-10 rounded-full bg-border-theme shrink-0" />
                {/* User Meta Lines */}
                <div className="space-y-2 flex-1">
                  <div className="h-3.5 bg-border-theme rounded-md w-1/4 min-w-[120px]" />
                  <div className="h-2.5 bg-border-theme rounded-md w-16" />
                </div>
              </div>
              
              {/* Star Badge Skeleton */}
              <div className="h-6 bg-border-theme rounded-lg w-12 shrink-0" />
            </div>

            {/* Middle Body Review Lines */}
            <div className="space-y-2 pl-1">
              <div className="h-3 bg-border-theme rounded-md w-full" />
              <div className="h-3 bg-border-theme rounded-md w-11/12" />
              <div className="h-3 bg-border-theme rounded-md w-4/5" />
            </div>

            {/* Bottom Footer Skeleton */}
            <div className="flex items-center justify-between pt-4 border-t border-border-theme/40">
              {/* Like Button Line */}
              <div className="h-4 bg-border-theme rounded-md w-20" />
              {/* Verified Badge Line */}
              <div className="h-5 bg-border-theme rounded-md w-24" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;