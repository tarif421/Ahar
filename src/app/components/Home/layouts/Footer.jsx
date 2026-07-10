import React from 'react';
import Logo from './Logo'; // আমাদের তৈরি করা লোগো কম্পোনেন্ট

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border-theme transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-16 pb-8">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & Intro */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm font-medium text-muted leading-relaxed max-w-xs">
              Savor the authentic traditional culinary excellence delivered straight to your doorstep. Hot, fresh, and bursting with rich local flavors.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a href="#facebook" className="w-9 h-9 rounded-full bg-input-theme hover:bg-primary/10 text-muted hover:text-primary flex items-center justify-center transition-all">
                <span className="font-bold text-sm">Fb</span>
              </a>
              <a href="#instagram" className="w-9 h-9 rounded-full bg-input-theme hover:bg-primary/10 text-muted hover:text-primary flex items-center justify-center transition-all">
                <span className="font-bold text-sm">Ig</span>
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-full bg-input-theme hover:bg-primary/10 text-muted hover:text-primary flex items-center justify-center transition-all">
                <span className="font-bold text-sm">X</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-black text-foreground uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm font-medium text-muted">
              <li><a href="#menu" className="hover:text-primary transition-colors">Our Menu</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#offers" className="hover:text-primary transition-colors">Special Offers</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Food Blogs</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-sm font-black text-foreground uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm font-medium text-muted">
              <li className="flex items-center gap-2">📍 Chittagong, Bangladesh</li>
              <li className="flex items-center gap-2">📞 +880 1234-567890</li>
              <li className="flex items-center gap-2">✉️ support@ahar.com</li>
            </ul>
          </div>

          {/* Column 4: Newsletter using Global input-theme and primary button */}
          <div>
            <h4 className="text-sm font-black text-foreground uppercase tracking-wider mb-4">Newsletter</h4>
            <p className="text-xs font-medium text-muted mb-3 leading-relaxed">
              Subscribe to get latest updates, deals and discounts.
            </p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-input-theme text-foreground border border-border-theme placeholder-slate-400 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors"
              />
              <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-xs py-3 rounded-xl shadow-md shadow-primary/10 transition-all active:scale-[0.98]">
                Subscribe Now
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-theme flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-muted">
          <p>© 2026 Ahar. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;