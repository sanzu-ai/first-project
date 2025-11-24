import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">सानोBazar</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover the best deals and products online. Shop smarter, live better with curated selections and amazing offers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-1 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link to="/login" className="hover:text-white transition">Login</Link></li>
          </ul>
        </div>

        {/* Payment options */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-3">Payment Options</h3>
          <div className="flex gap-3 items-center flex-wrap">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 py-3 text-center text-gray-500 text-xs md:text-sm">
        &copy; {new Date().getFullYear()} सानोBazar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
