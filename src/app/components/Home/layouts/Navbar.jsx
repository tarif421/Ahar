import React from 'react';
import Logo from './Logo'; 

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border-theme transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between h-20">
        
        {/* Left Side: Brand Logo */}
        <Logo />

        {/* Center: Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-muted">
          <a href="/" className="text-primary hover:text-primary-hover transition-colors">Home</a>
          <a href="menu" className="hover:text-foreground transition-colors">Menu</a>
          <a href="#about" className="hover:text-foreground transition-colors">About Us</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <button className="relative p-2 rounded-full hover:bg-input-theme text-foreground transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white bg-primary rounded-full transform translate-x-1/4 -translate-y-1/4">
              3
            </span>
          </button>

          {/* Login/Signup Button */}
          <button className="hidden sm:block bg-primary hover:bg-primary-hover text-white font-bold py-2.5 px-6 rounded-full shadow-md shadow-primary/20 transition-all active:scale-95">
            Order Now
          </button>
          
          {/* Mobile Menu Toggle (Hamburger) */}
          <button className="md:hidden p-2 text-foreground hover:bg-input-theme rounded-lg transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;