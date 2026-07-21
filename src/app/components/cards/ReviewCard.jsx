import Image from "next/image";
import React from "react";

const ReviewCard = ({ review }) => {
  const { user, photo, rating, review: reviewText, likes, date } = review;

  // ডেট ফরম্যাটিং (যেমন: Jan 12, 2025)
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-card border border-border-theme/70 rounded-xl p-5 flex flex-col justify-between h-full hover:border-border-theme dark:hover:bg-input-theme/20 transition-all duration-250 w-full max-w-[310px] sm:max-w-none mx-auto group">
      <div className="space-y-4">
        {/* Top Header: User Profile & Rating details */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* Elegant Minimalist Avatar */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-input-theme border border-border-theme/80 shrink-0 ring-2 ring-transparent group-hover:ring-primary/20 transition-all">
              <Image
              width={56}
              height={56}
                src={photo || "https://randomuser.me/api/portraits/lego/1.jpg"}
                alt={user}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* User Meta Data */}
            <div className="min-w-0">
              <h4 className="text-sm font-bold text-foreground line-clamp-1 truncate tracking-tight">
                {user}
              </h4>
              <p className="text-[11px] font-medium text-muted/80">
                {formattedDate}
              </p>
            </div>
          </div>

          {/* Clean Star Badge Row */}
          <div className="flex items-center gap-1 bg-amber-500/10 dark:bg-amber-500/5 px-2 py-1 rounded-lg border border-amber-500/20 shrink-0">
            <span className="text-amber-500 text-xs">★</span>
            <span className="text-xs font-black text-amber-600 dark:text-amber-400">
              {rating}.0
            </span>
          </div>
        </div>

        {/* Middle Body: Clean Typography Quote Box */}
        <div className="relative">
          <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-5 min-h-[100px] break-words pl-1">
            "{reviewText}"
          </p>
        </div>
      </div>

      {/* Bottom Footer Area: User Engagement */}
      <div className="flex items-center justify-between pt-4 mt-4 border-t border-border-theme/40">
        {/* Sleek Native Interaction Button */}
        <button className="flex items-center gap-1.5 text-xs font-bold text-muted hover:text-primary transition-colors cursor-pointer group/btn active:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.2}
            stroke="currentColor"
            className="w-4 h-4 text-muted/70 group-hover/btn:text-primary group-hover/btn:-translate-y-0.5 transition-all"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
            />
          </svg>
          <span className="font-semibold">{likes?.length || 0} Helpful</span>
        </button>

        {/* Status indicator */}
        <span className="inline-flex items-center text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md font-bold tracking-wide border border-emerald-500/10">
          ✓ Verified Buy
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
