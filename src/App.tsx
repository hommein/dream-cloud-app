// @ts-nocheck
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-black" style={{ fontFamily: 'Roboto Mono, monospace' }}>
      {/* Navigation */}
      <nav className="bg-black border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-medium text-white font-sans">
                Dream Cloud
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button className="text-gray-500 hover:text-white transition-colors">
                About
              </button>
              <button className="text-gray-500 hover:text-white transition-colors">
                Features
              </button>
              <button className="text-gray-500 hover:text-white transition-colors">
                Contact
              </button>
            </div>
            <button className="bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight font-sans">
            Where Dreams Take
            <span className="text-gray-400">
              {" "}Flight
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Capture, explore, and understand your dreams in a beautiful digital sanctuary.
            Let your subconscious soar through the depths of imagination.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full text-lg transition-colors">
              Start Your Journey
            </button>
            <button className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-full text-lg border border-gray-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-950 p-6 rounded-2xl border border-gray-900">
            <h2 className="text-xl font-medium text-white mb-2 tracking-tight font-sans">
              Dream Journal
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Record and revisit your dreams in a minimalist, focused interface.
            </p>
          </div>
          <div className="bg-gray-950 p-6 rounded-2xl border border-gray-900">
            <h2 className="text-xl font-medium text-white mb-2 tracking-tight font-sans">
              Dream Analysis
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Gain insights into your dreams with powerful analysis tools.
            </p>
          </div>
          <div className="bg-gray-950 p-6 rounded-2xl border border-gray-900">
            <h2 className="text-xl font-medium text-white mb-2 tracking-tight font-sans">
              Dream Community
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Connect with others and share your dream experiences.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;