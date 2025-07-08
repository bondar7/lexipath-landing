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
    { name: 'My Custom List', level: 'Custom', words: 77, progress: 89, color: 'purple' },
    { name: 'A2 Words', level: 'A2', words: 324, progress: 78, color: 'green' },
    { name: 'B1 Words', level: 'B1', words: 523, progress: 65, color: 'blue' },
    { name: 'B2 Words', level: 'B2', words: 345, progress: 45, color: 'pink' },
    { name: 'C1 Words', level: 'C1', words: 256, progress: 23, color: 'red' },
    { name: 'C2 Words', level: 'C2', words: 128, progress: 12, color: 'purple' },
    { name: 'Business English', level: 'Custom', words: 143, progress: 56, color: 'teal' },
    { name: 'IELTS Vocabulary', level: 'Custom', words: 234, progress: 34, color: 'orange' },
    { name: 'Academic Words', level: 'Custom', words: 176, progress: 72, color: 'pink' }
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Tab Bar */}
      <div className="bg-white px-4 py-3 flex border-b border-gray-200">
        <div className="flex-1 text-center">
          <div className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-2 text-xs md:text-sm">
            Words
          </div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-gray-500 text-xs md:text-sm">Review</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-gray-500 text-xs md:text-sm">Menu</div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-base md:text-lg font-bold text-blue-600">1,247</div>
            <div className="text-xs text-gray-600">Words Learned</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-base md:text-lg font-bold text-green-600">12</div>
            <div className="text-xs text-gray-600">Lists Mastered</div>
          </div>
        </div>
        
        {/* Word Lists */}
        <div className="space-y-3 pb-12">
          {/* Add Custom List Button */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-xl font-medium text-xs md:text-sm shadow-lg flex items-center justify-center space-x-2 hover:shadow-xl hover:from-blue-600 hover:to-green-600 active:from-blue-700 active:to-green-700 transform active:scale-95 transition-all duration-200">
            <Plus className="w-4 h-4" />
            <span>Add Custom List</span>
          </button>
          
          {wordLists.map((list, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm md:text-base font-bold text-gray-900">{list.name}</h3>
                <span className={`text-xs bg-${list.color}-100 text-${list.color}-700 px-2 py-1 rounded-full font-medium`}>
                  {list.level}
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs md:text-sm font-semibold text-gray-900">{list.words} words</div>
                <div className={`text-xs text-${list.color}-600 font-medium`}>
                  {list.progress}% mastered
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                <div 
                  className={`bg-${list.color}-500 h-1.5 rounded-full transition-all duration-500`} 
                  style={{width: `${list.progress}%`}}
                />
              </div>
              <div className="flex space-x-2">
                <button 
                  className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-blue-600 active:bg-blue-700 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
                  onClick={() => console.log('Learn clicked for', list.name)}
                >
                  Learn
                </button>
                <button 
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-200 active:bg-gray-300 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
                  onClick={() => console.log('Flashcards clicked for', list.name)}
                >
                  Flashcards
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordsMainScreen;
