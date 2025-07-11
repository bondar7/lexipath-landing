import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Globe } from 'lucide-react';

const AddCustomListModal: React.FC = () => {
  const [listName, setListName] = useState('');
  const [description, setDescription] = useState('');
  const [topic, setTopic] = useState('Harry Potter');
  const [selectedLevel, setSelectedLevel] = useState('B1');

  const difficultyLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  return (
    <div className="flex flex-col h-full bg-gray-50" role="dialog" aria-labelledby="modal-title">
      {/* Header */}
      <header className="bg-white px-3 md:px-4 py-3 md:py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <button 
            className="p-1.5 md:p-2 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transform hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 md:w-5 h-4 md:h-5" aria-hidden="true" />
          </button>
          <h1 id="modal-title" className="text-sm md:text-base font-bold text-gray-900">Add Custom List</h1>
          <div className="w-7 md:w-9" aria-hidden="true"></div>
        </div>
      </header>
      
      <main className="flex-1 overflow-y-auto p-3 md:p-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-6">
        {/* Manual Entry */}
        <section className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm mb-4 md:mb-6">
          <h2 className="text-sm md:text-base font-bold text-gray-900 mb-4">📝 Create Manually</h2>
          <form className="space-y-3 md:space-y-4">
            <div>
              <label htmlFor="list-name" className="block text-xs font-medium text-gray-700 mb-2">
                List Name
              </label>
              <input 
                id="list-name"
                type="text" 
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                placeholder="My Custom Words"
                className="w-full p-1.5 border border-gray-300 rounded-lg text-xs md:text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="list-description" className="block text-xs font-medium text-gray-700 mb-2">
                Description
              </label>
              <input 
                id="list-description"
                type="text" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Words I want to learn..."
                className="w-full p-1.5 border border-gray-300 rounded-lg text-xs md:text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium text-xs md:text-sm hover:bg-blue-600 active:bg-blue-700 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Create List
            </button>
          </form>
        </section>
        
        {/* AI Generation Option */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 md:p-4 rounded-lg border border-purple-200 mb-3 md:mb-4">
          <header className="flex items-center space-x-2 mb-2 md:mb-3">
            <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-purple-600" aria-hidden="true" />
            <h2 className="text-sm md:text-base font-bold text-gray-900">🤖 Generate with AI</h2>
          </header>
          <p className="text-gray-600 mb-3 text-xs">
            Let AI create a custom word list based on any topic you choose!
          </p>
          
          <form className="space-y-2 md:space-y-3">
            <div>
              <label htmlFor="ai-topic" className="block text-xs font-medium text-gray-700 mb-1">
                Topic
              </label>
              <input 
                id="ai-topic"
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Space exploration, Cooking..."
                className="w-full p-1.5 border border-gray-300 rounded-lg text-xs md:text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            
            <fieldset>
              <legend className="block text-xs font-medium text-gray-700 mb-1">
                Difficulty Level
              </legend>
              <div className="flex flex-wrap gap-2" role="radiogroup" aria-labelledby="difficulty-legend">
                {difficultyLevels.map((level) => (
                  <button 
                    key={level} 
                    type="button"
                    role="radio"
                    aria-checked={level === selectedLevel}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-3 py-1 rounded text-xs font-medium transform hover:scale-105 active:scale-95 transition-all duration-200 ${
                      level === selectedLevel 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </fieldset>
            
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium text-xs md:text-sm hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              ✨ Generate AI Words
            </button>
          </form>
        </section>
        
        {/* Import from File Button */}
        <button 
          type="button"
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2 shadow-sm text-xs md:text-sm hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 active:scale-95 transition-all duration-200 hover:shadow-md"
        >
          <Globe className="w-4 h-4" aria-hidden="true" />
          <span>Import from file</span>
        </button>
      </main>
    </div>
  );
};

export default AddCustomListModal;
