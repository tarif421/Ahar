"use client";
import React from "react";
// 🛠️ Next.js এর ডাইনামিক নেভিগেশনের জন্য হুকগুলো ইম্পোর্ট করা হলো
import { useRouter, usePathname } from "next/navigation";

const InputSearch = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value.trim(); // trim() দিয়ে বাড়তি স্পেস রিমুভ করা হলো

    // ১. নতুন URLSearchParams অবজেক্ট তৈরি করা
    const params = new URLSearchParams();

    if (value) {
      // যদি ইনপুটে কোনো ভ্যালু থাকে, তবে 'search' প্যারাম সেট হবে
      params.set("search", value);
    } else {
      // ইনপুট খালি করে সার্চ দিলে প্যারামটি URL থেকে রিমুভ হয়ে যাবে
      params.delete("search");
    }

    // ২. URL আপডেট করা (যেমন: /menu -> /menu?search=burger)
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center w-full my-6">
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full max-w-md"
      >
        {/* Styled Input Field */}
        <input
          type="text"
          name="search"
          className="w-full border border-border-theme bg-card text-foreground text-sm px-4 py-2.5 rounded-l-xl outline-none focus:border-primary transition-colors placeholder:text-muted/60"
          placeholder="Enter Food Name"
        />

        {/* Styled Button */}
        <button
          type="submit"
          className="bg-primary hover:bg-primary-hover text-white font-bold text-sm px-5 py-2.5 rounded-r-xl transition-all active:scale-[0.97] cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;