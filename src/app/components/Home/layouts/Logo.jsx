import React from 'react';

const 
Logo = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer select-none group">
      {/* Dynamic Food Icon Container using Global Theme Variables */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-primary to-accent shadow-lg transition-all duration-300 group-hover:rotate-12 group-hover:scale-105">
        {/* Modern Food/Bowl SVG Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-6 h-6 text-white"
        >
          <path d="M2 12c0 4.418 3.582 8 8 8h4c4.418 0 8-3.582 8-8H2z" />
          <path fillRule="evenodd" d="M4.5 9.75a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          <path d="M8.25 4.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zm3.75 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zm3.75 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z" />
        </svg>
      </div>

      {/* Brand Name Section - "Ahar" */}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-black tracking-tight text-foreground transition-colors duration-200">
          Ah<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ar</span>
        </h1>
        <div className="flex items-center gap-1.5 -mt-0.5">
          {/* Pulse animation using dynamic primary color */}
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase group-hover:text-accent transition-colors duration-200">
            Healthy & Delicious
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logo;