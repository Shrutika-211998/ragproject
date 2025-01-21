import React from 'react';
import SocialIntegration from '../components/common/SocialIntegration';
import { FaDatabase, FaSync, FaBookReader, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: FaDatabase,
      title: "Enhanced Accuracy",
      description: "Improve response accuracy by leveraging your own knowledge base",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: FaSync,
      title: "Real-time Updates",
      description: "Keep your AI responses current with the latest information",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: FaBookReader,
      title: "Custom Knowledge Base",
      description: "Integrate your specific domain knowledge and documentation",
      gradient: "from-teal-400 to-emerald-500"
    },
    {
      icon: FaChartLine,
      title: "Scalable Solution",
      description: "Handle growing amounts of data with efficient indexing",
      gradient: "from-orange-400 to-red-500"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Welcome to RAG Services
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Experience the next generation of AI-powered document processing with our
          Retrieval-Augmented Generation services.
        </p>
        <Link
          to="/services"
          className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg
            hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200
            shadow-lg hover:shadow-indigo-500/25"
        >
          Get Started
        </Link>
      </section>

      {/* What is RAG Section */}
      <section className="mb-16">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 shadow-xl">
          <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            What is RAG?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Retrieval-Augmented Generation (RAG) is a powerful approach that combines the benefits of retrieval-based
            and generative AI systems. It enhances large language models by providing them with additional context
            from external knowledge sources, ensuring more accurate and contextually relevant responses.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700
                hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105
                shadow-lg hover:shadow-xl"
            >
              <div className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Connect Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          Connect With Us
        </h2>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300">
          <SocialIntegration />
        </div>
      </section>
    </div>
  );
};

export default Home;