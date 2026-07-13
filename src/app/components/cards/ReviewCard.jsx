import React from 'react';

const ReviewCard = ({ review }) => {
  const { user, photo, rating, review: reviewText, likes, date } = review;

  // ডেট ফরম্যাটিং (যেমন: Jan 12, 2025)
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="group bg-card border border-border-theme rounded-2xl p-4 flex flex-col justify-between h-full shadow-xs hover:shadow-md dark:shadow-none transition-all duration-300 w-full max-w-[290px] sm:max-w-none mx-auto">
      
      <div className="space-y-3">
        {/* Top: User Info & Stars */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            {/* User Avatar */}
            <div className="relative w-9 h-9 rounded-full overflow-hidden bg-input-theme border border-border-theme shrink-0">
              <img 
                src={photo || "https://randomuser.me/api/portraits/lego/1.jpg"} 
                alt={user} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Name & Date */}
            <div className="min-w-0">
              <h4 className="text-sm font-black text-foreground line-clamp-1 truncate">
                {user}
              </h4>
              <p className="text-[10px] font-medium text-slate-400">
                {formattedDate}
              </p>
            </div>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-0.5 bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10 shrink-0">
            <span className="text-amber-500 text-[10px]">⭐</span>
            <span className="text-[11px] font-black text-foreground">{rating}</span>
          </div>
        </div>

        {/* Middle: Review Text */}
        <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4 bg-input-theme/20 p-3 rounded-xl border border-border-theme/30 min-h-[92px]">
          {reviewText}
        </p>
      </div>

      {/* Bottom: Like Action Button */}
      <div className="flex items-center justify-between pt-3 mt-4 border-t border-border-theme/40">
        <button className="flex items-center gap-1.5 text-[11px] font-bold text-muted hover:text-primary transition-colors cursor-pointer group/btn active:scale-95">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.2} 
            stroke="currentColor" 
            className="w-3.5 h-3.5 transform group-hover/btn:-translate-y-0.5 transition-transform"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
          </svg>
          <span>{likes?.length || 0} Likes</span>
        </button>

        <span className="text-[10px] text-slate-400 font-medium bg-input-theme px-2 py-0.5 rounded-md border border-border-theme/40">
          Helpful
        </span>
      </div>

    </div>
  );
};

export default ReviewCard;