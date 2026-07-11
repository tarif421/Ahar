import React from 'react';

const Banner = () => {
  return (
    <div className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-gradient-to-b from-accent/5 via-transparent to-transparent overflow-hidden px-4 sm:px-8 lg:px-16 py-16 lg:py-0">
      
      {/* Decorative Background Elements using Global Theme */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full">
        
        {/* Left Side: Content */}
        <div className="space-y-6 text-center lg:text-left z-10 order-2 lg:order-1">
          {/* Offer Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary font-semibold text-xs sm:text-sm max-w-full">
            <span className="flex h-2 w-2 shrink-0 rounded-full bg-primary animate-pulse" />
            <span className="truncate">Craving Something Delicious? 20% OFF Your First Order!</span>
          </div>

          {/* Heading with global text-foreground and brand gradients mapped to "Ahar" */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.15] sm:leading-tight">
            Savor the Authentic <br />
            Taste of <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Ahar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Experience traditional culinary excellence delivered straight to your doorstep. Hot, fresh, and bursting with rich local flavors.
          </p>

          {/* Food Search / Action Bar using dynamic bg-card theme */}
          <div className="max-w-md mx-auto lg:mx-0 bg-card p-1.5 sm:p-2 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
            <div className="flex items-center gap-2 pl-2 sm:pl-3 flex-1 min-w-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-400 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" />
              </svg>
              <input 
                type="text" 
                placeholder="Search your favorite food..." 
                className="w-full bg-transparent focus:outline-none text-foreground placeholder-slate-400 text-xs sm:text-sm min-w-0"
              />
            </div>
            <button className="bg-gradient-to-r from-primary to-secondary hover:opacity-95 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-200 shadow-md shadow-secondary/20 active:scale-95 shrink-0 whitespace-nowrap">
              Explore Menu
            </button>
          </div>

          {/* Stats/Features */}
          <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl">🚀</span> Free & Fast Delivery
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl">🍲</span> 100% Fresh & Hygienic
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Image / Visuals */}
        <div className="relative flex justify-center items-center z-10 order-1 lg:order-2 mt-4 lg:mt-0">
          {/* Background Rotating Dish Effect */}
          <div className="absolute w-[85%] aspect-square rounded-full border-2 border-dashed border-slate-200 dark:border-slate-800/60 animate-[spin_80s_linear_infinite] pointer-events-none" />
          
          {/* Main Hero Image Container using bg-card and brand gradients */}
          <div className="relative w-[80%] aspect-square max-w-[340px] sm:max-w-[420px] lg:max-w-[450px] rounded-full overflow-hidden border-[6px] sm:border-8 border-card shadow-2xl bg-gradient-to-tr from-accent/20 to-secondary/20 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop" 
              alt="Delicious Hot Food Bowl" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Floating Review Card using bg-card and text-foreground */}
          <div className="absolute -bottom-2 left-2 sm:left-6 bg-card p-2 sm:p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800/80 flex items-center gap-2 sm:gap-3 animate-bounce [animation-duration:3.5s]">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center text-white text-base sm:text-lg font-bold shadow-md shadow-accent/20">⭐</div>
            <div>
              <p className="text-[11px] sm:text-xs font-black text-foreground">4.9/5 Rating</p>
              <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium">From 2k+ Foodies</p>
            </div>
          </div>

          {/* Floating Spice/Leaf Badge */}
          <div className="absolute -top-2 right-4 sm:right-8 bg-gradient-to-tr from-green-500 to-emerald-500 text-white font-extrabold text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg transform rotate-12 select-none">
            🍃 Organic & Fresh
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;