import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 RAG Services. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="hover:text-gray-300 mx-2">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;