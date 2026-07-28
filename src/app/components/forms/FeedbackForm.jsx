"use client";

import React from "react";

const FeedbackForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = e.target.message.value;
    const res = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();

    if (data.insertedId) {
      alert("Feedback added");
    }
  };
  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-100 my-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Add Your Feedback
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            rows="4"
            name="message"
            placeholder="Write your feedback here..."
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-sm active:scale-95"
        >
          Add Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
