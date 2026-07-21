"use client";

import React, { useEffect, useState } from "react";
import ReviewCard from "../components/cards/ReviewCard";
import ReviewLoading from "./ReviewLoading";
import { Anek_Bangla } from "next/font/google";

const anek = Anek_Bangla({
  weight: ["600"],
});

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ReviewLoading />;
  }

  return (
    <div className={`py-12 bg-transparent ${anek.className}`}>
      {/* Centered Heading Section */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 px-4">
        {/* Elegant Tiny Accent Upper Title using Theme Variables */}

        {/* Main Refined H2 Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-none sm:leading-tight">
          Feedback from our{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Valued Customers
          </span>
        </h2>

        {/* Subtle Minimalist Bottom Divider Accent */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          <div className="h-[3px] w-12 rounded-full bg-primary" />
          <div className="h-[3px] w-2 rounded-full bg-secondary" />
        </div>
      </div>

      {/* Grid Layout Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5">
        {reviews.map((rev) => (
          <ReviewCard key={rev.id} review={rev} />
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
