import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
        <p className="text-gray-300 mb-4">
          We are a leading provider of RAG (Retrieval-Augmented Generation) services,
          combining cutting-edge AI technology with practical business solutions.
        </p>
        <p className="text-gray-300">
          Our team of experts is dedicated to delivering innovative solutions that
          help businesses leverage the power of AI and natural language processing.
        </p>
      </div>
    </div>
  );
};

export default About;
