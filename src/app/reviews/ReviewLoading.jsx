import React from 'react'
import ReviewCardSkeleton from '../components/skeletons/ReveiwCardSkeleton'

const ReviewLoading = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5">
      {[...Array(6)].map((_, index) => (
        <ReviewCardSkeleton key={index}></ReviewCardSkeleton>
      ))}
    </div>
  );
}

export default ReviewLoading