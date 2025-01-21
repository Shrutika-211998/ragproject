import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-800 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-300 hover:to-purple-300 transition duration-300">
            RAG Services
          </Link>
          <div className="space-x-8 text-md font-medium">
            <Link to="/" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">About Us</Link>
            <Link to="/services" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Services</Link>
            <Link to="/contact" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;