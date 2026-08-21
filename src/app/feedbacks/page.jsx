export const dynamic = 'force-dynamic';

import React from "react";
import Link from "next/link";
import FeedbackCard from "../components/cards/FeedbackCard";

export const metadata = {
  title: "feedbacks",
};

const getFeedbacks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`, {
    // cache: "force-cache",
    next: { revalidate: 60 },
  });
  return await res.json();
  
};

const FeedbackPage = async () => {
  const feedbacks = await getFeedbacks();


  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          {" "}
          {feedbacks.length} Feedbacks have found
        </h2>
        <Link
          href="/feedbacks/add"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm font-medium"
        >
          Add Feedback
        </Link>
      </div>

      {feedbacks.map((item) => (
        <FeedbackCard key={item._id} feedback={item} />
      ))}
    </div>
  );
};

export default FeedbackPage;
