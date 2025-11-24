import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-4xl font-bold text--500 font-mont">सानोBazar</h1>

        {/* Nav items */}
        <div className="hidden md:flex gap-8 items-center text-gray-700 text-lg font-medium">
          <Link to="/" className="hover:text-teal-500 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-teal-500 transition-colors">
            About
          </Link>
          <Link to="/blog" className="hover:text-teal-500 transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-teal-500 transition-colors">
            Contact
          </Link>
          <Link to="/item/1" className="hover:text-teal-500 transition-colors">
            Item Page
          </Link>
          <Link
            to="/login"
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-2xl transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
