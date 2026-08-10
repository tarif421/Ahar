import React from "react";

const FeedbackCard = ({ feedback }) => {
  // ডেট ফরম্যাট করার জন্য ফাংশন
  const formatDate = (isoString) => new Date(isoString).toLocaleString();

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 p-6 my-4 transition-all hover:shadow-xl">
      {/* আইডি এবং তারিখ */}
      <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
        <span className="bg-gray-100 px-2 py-1 rounded font-mono">
          ID: {feedback._id.slice(-6)}...
        </span>
        <span>
          {new Date(feedback.data).toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </span>
      </div>

      {/* মেসেজ বা ফিডব্যাক */}
      <div className="mb-6">
        <p className="text-gray-700 text-base leading-relaxed italic">
          {feedback.message}
        </p>
      </div>

      {/* অ্যাকশন বাটনগুলো */}
      <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-sm">
          Update
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 active:scale-95 transition-all shadow-sm">
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
