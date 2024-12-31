import React, { useState, useEffect } from 'react';

const App = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [countdown, setCountdown] = useState(20);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    let timer;
    if (isGenerating && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isGenerating, countdown]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setIsGenerating(true);
    }
  };

  const resetGeneration = () => {
    setIsGenerating(false);
    setCountdown(20);
  };

  useEffect(() => {
    if (countdown === 0) {
      setTimeout(resetGeneration, 1000);
    }
  }, [countdown]);

  return (
    <div className="h-screen bg-black flex flex-col" style={{ fontFamily: 'Roboto Mono, monospace' }}>
      {/* Minimal Navigation */}
      <nav className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <span className="text-xl text-white font-mono tracking-tight">
            <span className="text-gray-600">dream</span>cloud
          </span>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col">
        {/* Hero Section */}
        <div className="flex-1 max-w-5xl mx-auto px-4 flex flex-col justify-center items-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight font-sans text-center">
            text
            <span className="text-gray-600">→</span>
            video
          </h1>
          
          <div className="w-full max-w-2xl">
            <input 
              type="text" 
              placeholder="describe..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              disabled={isGenerating}
              className="w-full bg-transparent text-white p-4 rounded-none border-b border-gray-800 focus:border-gray-600 focus:outline-none text-center disabled:opacity-50"
            />
          </div>

          <div className={`text-gray-600 text-sm tracking-wide transition-opacity duration-500 ${isGenerating ? 'opacity-100' : 'opacity-0'}`}>
            {countdown}
          </div>
        </div>

        {/* Process Section - Reduced Padding */}
        <div className="border-t border-gray-900 max-w-5xl mx-auto w-full px-4">
          <div className="py-12 grid grid-cols-3 gap-12">
            <div className="space-y-3 text-center">
              <div className="text-gray-800 font-mono">01</div>
              <p className="text-gray-600 text-sm">describe</p>
            </div>
            <div className="space-y-3 text-center">
              <div className="text-gray-800 font-mono">02</div>
              <p className="text-gray-600 text-sm">generate</p>
            </div>
            <div className="space-y-3 text-center">
              <div className="text-gray-800 font-mono">03</div>
              <p className="text-gray-600 text-sm">create</p>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-end items-center">
          <button 
            className={`text-white text-sm hover:text-gray-400 transition-colors ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => inputValue.trim() && setIsGenerating(true)}
            disabled={isGenerating}
          >
            enter
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;