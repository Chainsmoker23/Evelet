import React, { useState } from 'react';
import logoImage from './bears-logo-transparent-15.webp'; // Update with your logo path

const Header = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-gray-300 rounded-br-[40px]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-black flex items-center">
          <img
            src={logoImage}
            alt="Evelte Logo"
            className="h-16 w-auto rounded-br-[29px] rounded-bl-[29px]" // Adjust size as needed
          />
        </div>

        {/* Navigation Links for larger screens */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-green-950 text-black transition-all duration-200">
            Home
          </a>
          <a href="/about" className="hover:text-green-400 text-black transition-all duration-200">
            About
          </a>
          {!isLoggedIn && (
            <>
              <a href="/register" className="hover:text-green-500 text-black transition-all duration-200">
                Signup
              </a>
              <a href="/login" className="hover:text-green-600 text-black transition-all duration-200">
                Login
              </a>
            </>
          )}
          <a href="/contact" className="hover:text-green-400 text-black transition-all duration-200">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="/connect"
            className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
          >
            Connect Wallet
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-gray-400 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-white space-y-4">
          <a href="/" className="block text-black hover:text-green-400 transition-all duration-200">
            Home
          </a>
          <a href="/about" className="block text-black hover:text-green-400 transition-all duration-200">
            About
          </a>
          {!isLoggedIn && (
            <>
              <a href="/register" className="block text-black hover:text-green-400 transition-all duration-200">
                Signup
              </a>
              <a href="/login" className="block text-black hover:text-green-400 transition-all duration-200">
                Login
              </a>
            </>
          )}
          <a href="/contact" className="block text-black hover:text-green-400 transition-all duration-200">
            Contact
          </a>
          <a
            href="/connect"
            className="block text-center bg-green-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
          >
            Connect Wallet
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
