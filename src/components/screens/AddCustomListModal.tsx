import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Globe } from 'lucide-react';

const AddCustomListModal: React.FC = () => {
  const [listName, setListName] = useState('');
  const [description, setDescription] = useState('');
  const [topic, setTopic] = useState('Harry Potter');
  const [selectedLevel, setSelectedLevel] = useState('B1');

  const difficultyLevels = ['A1', 'B1', 'B2', 'C1'];

  return (
    <div className="h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-3 md:px-4 py-3 md:py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <button className="p-1.5 md:p-2 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transform hover:scale-105 active:scale-95 transition-all duration-200">
            <ArrowLeft className="w-4 md:w-5 h-4 md:h-5" />
          </button>
          <h2 className="text-base md:text-lg font-bold text-gray-900">Add Custom List</h2>
          <div className="w-7 md:w-9"></div>
        </div>
      </div>
      
      <div className="p-3 md:p-4">
        {/* Manual Entry */}
        <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">📝 Create Manually</h3>
          <div className="space-y-3 md:space-y-4">
            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                List Name
              </label>
              <input 
                type="text" 
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                placeholder="My Custom Words"
                className="w-full p-2.5 md:p-3 border border-gray-300 rounded-lg text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                Description
              </label>
              <input 
                type="text" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Words I want to learn..."
                className="w-full p-2.5 md:p-3 border border-gray-300 rounded-lg text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="w-full bg-blue-500 text-white py-2.5 md:py-3 rounded-xl font-medium text-sm md:text-base hover:bg-blue-600 active:bg-blue-700 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md">
              Create List
            </button>
          </div>
        </div>
        
        {/* AI Generation Option */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 md:p-4 rounded-xl border border-purple-200 mb-3 md:mb-4">
          <div className="flex items-center space-x-2 mb-2 md:mb-3">
            <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-purple-600" />
            <h3 className="text-base md:text-lg font-bold text-gray-900">🤖 Generate with AI</h3>
          </div>
          <p className="text-gray-600 mb-2 md:mb-3 text-xs md:text-sm">
            Let AI create a custom word list based on any topic you choose!
          </p>
          
          <div className="space-y-2 md:space-y-3">
            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                Topic
              </label>
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Space exploration, Cooking..."
                className="w-full p-2 md:p-2.5 border border-gray-300 rounded-lg text-xs md:text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            
            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                Difficulty Level
              </label>
              <div className="flex space-x-1 md:space-x-2">
                {difficultyLevels.map((level) => (
                  <button 
                    key={level} 
                    onClick={() => setSelectedLevel(level)}
                    className={`px-2 md:px-3 py-1 rounded text-xs md:text-sm font-medium transform hover:scale-105 active:scale-95 transition-all duration-200 ${
                      level === selectedLevel 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 md:py-2.5 rounded-lg font-medium text-xs md:text-sm hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md">
              ✨ Generate AI Words
            </button>
          </div>
        </div>
        
        {/* Import from File Button */}
        <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2.5 md:py-3 rounded-xl font-medium flex items-center justify-center space-x-2 shadow-sm text-sm md:text-base hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 active:scale-95 transition-all duration-200 hover:shadow-md">
          <Globe className="w-4 md:w-5 h-4 md:h-5" />
          <span>Import from file</span>
        </button>
      </div>
    </div>
  );
};

export default AddCustomListModal;
