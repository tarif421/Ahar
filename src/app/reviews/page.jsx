"use client";

import React, { useEffect, useState } from "react";
import ReviewCard from "../components/cards/ReviewCard";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        // এপিআই রেসপন্স থেকে সঠিক অ্যারে খুঁজে বের করার সেফগার্ড
        const actualReviews = data.reviews || data.data || data || [];
        
        // ডেটা টাইপ আসলেই অ্যারে কিনা তা নিশ্চিত করা
        if (Array.isArray(actualReviews)) {
          setReviews(actualReviews);
        } else {
          setReviews([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching reviews:", err);
        setReviews([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-12 bg-transparent">
      {/* Centered Heading Section */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
          Total{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {loading ? "..." : reviews.length}
          </span>{" "}
          Premium Reviews
        </h2>
      </div>

      {/* Grid Layout Container */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          // ডেটা লোড হওয়ার সময় আপনার ৪ কলামের গ্রিডের সাথে ম্যাচ করা ৮টি গ্লোবাল স্কেলিটন কার্ড দেখাবে
          [...Array(8)].map((_, index) => (
            <div key={index} className="bg-card border border-border-theme rounded-2xl p-4 space-y-4 animate-pulse">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-border-theme" />
                <div className="space-y-1.5 flex-1">
                  <div className="h-3.5 bg-border-theme rounded-md w-24" />
                  <div className="h-2.5 bg-border-theme rounded-md w-14" />
                </div>
              </div>
              <div className="space-y-2 bg-input-theme/20 p-3 rounded-xl border border-border-theme/30 min-h-[92px]">
                <div className="h-3 bg-border-theme rounded-md w-full" />
                <div className="h-3 bg-border-theme rounded-md w-full" />
                <div className="h-3 bg-border-theme rounded-md w-4/5" />
              </div>
              <div className="h-4 bg-border-theme rounded-md w-16 pt-1" />
            </div>
          ))
        ) : reviews.length > 0 ? (
          reviews.map((rev) => (
            <ReviewCard key={rev.id || rev._id} review={rev} />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-sm font-bold text-muted">No reviews found!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;