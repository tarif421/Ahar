export const dynamic = 'force-dynamic';

import React from "react";
import Link from "next/link";
import FeedbackCard from "../components/cards/FeedbackCard";

export const metadata = {
  title: "feedbacks",
};

const getFeedbacks = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_server;
    if (!baseUrl) return [];

    const res = await fetch(`${baseUrl}/api/feedback`, {
      cache: "no-store", // force-dynamic এর সাথে no-store রাখা নিরাপদ
    });

    if (!res.ok) return [];

    const data = await res.json();
    // ডাটা নিশ্চিতভাবে Array কি না চেক করা
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
};

const FeedbackPage = async () => {
  const rawData = await getFeedbacks();
  
  // MongoDB Object & Date Serialization নিরাপদ করা
  const feedbacks = JSON.parse(JSON.stringify(rawData));

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          {feedbacks?.length || 0} Feedbacks have found
        </h2>
        <Link
          href="/feedbacks/add"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm font-medium"
        >
          Add Feedback
        </Link>
      </div>

      {feedbacks && feedbacks.length > 0 ? (
        feedbacks.map((item, index) => (
          <FeedbackCard key={item._id || index} feedback={item} />
        ))
      ) : (
        <p className="text-gray-500 mt-4">No feedbacks found.</p>
      )}
    </div>
  );
};

export default FeedbackPage;