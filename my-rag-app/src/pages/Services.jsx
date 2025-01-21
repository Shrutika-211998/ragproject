import React from 'react';
import DocumentUpload from '../components/services/DocumentUpload';
import SocialIntegration from '../components/common/SocialIntegration';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      
      <section className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Document Processing</h2>
        <p className="text-gray-300 mb-6">
          Upload your documents and generate intelligent indexes for enhanced retrieval and processing.
        </p>
        <DocumentUpload />
      </section>

      <section className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Connect with Our Services</h2>
        <p className="text-gray-300 mb-6">
          Integrate our RAG services with your favorite platforms:
        </p>
        <SocialIntegration />
      </section>
    </div>
  );
};

export default Services;
