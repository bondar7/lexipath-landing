import React from 'react';
import { Plus } from 'lucide-react';

interface WordList {
  name: string;
  level: string;
  words: number;
  progress: number;
  color: string;
}

const WordsMainScreen: React.FC = () => {
  const wordLists: WordList[] = [
    { name: 'A2 Words', level: 'A2', words: 324, progress: 78, color: 'green' },
    { name: 'C1 Words', level: 'C1', words: 156, progress: 23, color: 'red' },
    { name: 'Business English', level: 'B2', words: 180, progress: 45, color: 'blue' },
    { name: 'My Custom List', level: 'Custom', words: 67, progress: 89, color: 'purple' }
  ];

  return (
    <div className="h-full bg-gray-50">
      {/* Tab Bar */}
      <div className="bg-white px-3 md:px-4 py-2 md:py-3 flex border-b border-gray-200">
        <div className="flex-1 text-center">
          <div className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 md:pb-2 text-sm md:text-base">
            Words
          </div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-gray-500 text-sm md:text-base">Review</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-gray-500 text-sm md:text-base">Menu</div>
        </div>
      </div>
      
      <div className="p-3 md:p-4">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
          <div className="bg-white p-2.5 md:p-3 rounded-lg shadow-sm">
            <div className="text-lg md:text-xl font-bold text-blue-600">1,247</div>
            <div className="text-xs text-gray-600">Words Learned</div>
          </div>
          <div className="bg-white p-2.5 md:p-3 rounded-lg shadow-sm">
            <div className="text-lg md:text-xl font-bold text-green-600">12</div>
            <div className="text-xs text-gray-600">Lists Mastered</div>
          </div>
        </div>
        
        {/* Word Lists */}
        <div className="space-y-2 md:space-y-3">
          {wordLists.map((list, index) => (
            <div key={index} className="bg-white p-3 md:p-4 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <h3 className="text-base md:text-lg font-bold text-gray-900">{list.name}</h3>
                <span className={`text-xs bg-${list.color}-100 text-${list.color}-700 px-2 py-1 rounded-full font-medium`}>
                  {list.level}
                </span>
              </div>
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <div className="text-sm font-semibold text-gray-900">{list.words} words</div>
                <div className={`text-xs text-${list.color}-600 font-medium`}>
                  {list.progress}% mastered
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2 md:mb-3">
                <div 
                  className={`bg-${list.color}-500 h-1.5 rounded-full transition-all duration-500`} 
                  style={{width: `${list.progress}%`}}
                />
              </div>
              <div className="flex space-x-2">
                <button 
                  className="flex-1 bg-blue-500 text-white py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-blue-600 active:bg-blue-700 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
                  onClick={() => console.log('Learn clicked for', list.name)}
                >
                  Learn
                </button>
                <button 
                  className="flex-1 bg-gray-100 text-gray-700 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-200 active:bg-gray-300 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
                  onClick={() => console.log('Flashcards clicked for', list.name)}
                >
                  Flashcards
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Add Custom List Button */}
        <button className="w-full mt-3 md:mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white py-2.5 md:py-3 rounded-xl font-medium text-sm shadow-lg flex items-center justify-center space-x-2 hover:shadow-xl transition-shadow">
          <Plus className="w-4 md:w-5 h-4 md:h-5" />
          <span>Add Custom List</span>
        </button>
      </div>
    </div>
  );
};

export default WordsMainScreen;
