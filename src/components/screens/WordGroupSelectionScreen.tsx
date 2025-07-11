import React from 'react';
import { ArrowLeft, RotateCcw } from 'lucide-react';

const WordGroupSelectionScreen: React.FC = () => {
  const words = ['Meeting', 'Proposal', 'Budget', 'Contract', 'Revenue', 'Strategy', 'Deadline', 'Profit'];
  const groupSizes = ['5', '8', '10', '12'];
  const selectedSize = '8';

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <header className="bg-white px-3 md:px-4 py-3 md:py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <button 
            className="p-1.5 md:p-2 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transform hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 md:w-5 h-4 md:h-5" aria-hidden="true" />
          </button>
          <h1 className="text-sm md:text-base font-bold text-gray-900">💼 Business English</h1>
          <div className="w-7 md:w-9" aria-hidden="true"></div>
        </div>
      </header>
      
      <main className="flex-1 overflow-y-auto p-3 md:p-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-6">
        {/* Group Selection - MAIN CONCEPT */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-6 rounded-xl md:rounded-2xl mb-4 md:mb-6 border border-blue-200">
          <header className="mb-3 md:mb-4">
            <h2 className="text-sm md:text-base font-bold text-gray-900 mb-2">Pick Word Group</h2>
            <div className="flex items-center">
              <div className="bg-blue-100 px-2 py-1 rounded-full flex justify-center items-center">
                <span className="text-xs font-medium text-blue-700">Size: {selectedSize}</span>
              </div>
            </div>
          </header>
          
          {/* Selected Words Display */}
          <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl mb-3 md:mb-4 shadow-sm">
            <ul className="grid grid-cols-2 gap-2 md:gap-3" aria-label="Selected vocabulary words">
              {words.map((word, index) => (
                <li key={index} className="bg-blue-50 text-blue-800 px-2 py-1.5 rounded-lg text-center text-xs md:text-sm font-medium">
                  {word}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Regenerate Button - KEY FEATURE */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg text-xs md:text-sm hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200">
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            <span>Regenerate Group</span>
          </button>
        </section>
        
        {/* Group Size Selector */}
        <section className="bg-white p-3 md:p-4 rounded-xl shadow-sm mb-4 md:mb-6">
          <h3 className="font-semibold text-gray-900 mb-3 text-xs md:text-sm">Group Size</h3>
          <fieldset>
            <legend className="sr-only">Select group size</legend>
            <div className="flex space-x-2" role="radiogroup">
              {groupSizes.map((size) => (
                <button 
                  key={size}
                  type="button" 
                  role="radio"
                  aria-checked={size === selectedSize}
                  className={`px-3 py-2 rounded-lg font-medium text-xs transform hover:scale-105 active:scale-95 transition-all duration-200 ${
                    size === selectedSize 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </fieldset>
        </section>
        
        {/* Action Buttons */}
        <nav className="space-y-2 md:space-y-3">
          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-bold text-xs md:text-sm shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200">
            🚀 Start Learning Process
          </button>
          <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium text-xs md:text-sm hover:bg-gray-200 active:bg-gray-300 transform hover:scale-105 active:scale-95 transition-all duration-200">
            📚 Browse All Words
          </button>
        </nav>
      </main>
    </div>
  );
};

export default WordGroupSelectionScreen;
