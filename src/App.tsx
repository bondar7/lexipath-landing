import React, { useState } from 'react';
import { 
  BookOpen, 
  Brain, 
  Sparkles, 
  Users, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  ArrowLeft,
  Play,
  RotateCcw,
  Plus,
  Star,
  Globe,
  Smartphone,
  Mail,
  ChevronRight,
  Clock,
  Award,
  TrendingUp
} from 'lucide-react';

// Mock iPhone Screenshot Components
const PhoneFrame = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative mx-auto ${className}`}>
    <div className="relative bg-black rounded-[1.5rem] md:rounded-[2.5rem] p-1.5 md:p-3 shadow-2xl transform hover:scale-105 transition-transform duration-300 w-72 md:w-96 lg:w-[26rem]">
      {/* Dynamic Island (iPhone 16 style) */}
      <div className="absolute top-3 md:top-5 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-gray-900 rounded-full px-4 md:px-6 py-1.5 md:py-2 flex items-center justify-center">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-2 md:w-3 h-2 md:h-3 bg-gray-700 rounded-full"></div>
            <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-[1rem] md:rounded-[2rem] overflow-hidden relative">
        {/* Status bar */}
        <div className="bg-white h-10 md:h-14 flex items-center justify-between px-4 md:px-6 pt-3 md:pt-4">
          <div className="flex items-center space-x-1">
            <div className="text-xs md:text-sm font-semibold text-gray-900">9:41</div>
          </div>
          <div className="flex items-center space-x-1 md:space-x-2">
            <div className="flex space-x-0.5 md:space-x-1">
              <div className="w-0.5 md:w-1 h-0.5 md:h-1 bg-gray-900 rounded-full"></div>
              <div className="w-0.5 md:w-1 h-0.5 md:h-1 bg-gray-900 rounded-full"></div>
              <div className="w-0.5 md:w-1 h-0.5 md:h-1 bg-gray-400 rounded-full"></div>
              <div className="w-0.5 md:w-1 h-0.5 md:h-1 bg-gray-400 rounded-full"></div>
            </div>
            <div className="w-4 md:w-6 h-2 md:h-3 bg-gray-900 rounded-sm relative">
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
            </div>
            <div className="text-xs text-gray-900 font-medium">100%</div>
          </div>
        </div>
        
        <div className="h-[520px] md:h-[700px] lg:h-[800px] bg-gray-50 overflow-hidden">
          {children}
        </div>
        
        {/* Home indicator */}
        <div className="bg-white h-6 md:h-8 flex items-center justify-center">
          <div className="w-24 md:w-32 h-0.5 md:h-1 bg-gray-900 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

// Word List View - Shows all words in a selected list with Learn/Flashcards options
const WordListView = () => (
  <div className="h-full bg-gray-50">
    {/* Header */}
    <div className="bg-white px-4 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <button className="p-2 rounded-full bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-bold text-gray-900">💼 Business English</h2>
        <div className="w-9"></div>
      </div>
    </div>
    
    <div className="p-4">
      {/* List Summary */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900">180 words total</h3>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">45% mastered</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
          <div className="bg-blue-500 h-2 rounded-full" style={{width: '45%'}}></div>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-medium">Learn</button>
          <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">Flashcards</button>
        </div>
      </div>
      
      {/* Word List */}
      <div className="space-y-2">
        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-green-500">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-medium text-gray-900">Meeting</span>
              <p className="text-sm text-gray-600">Зустріч</p>
            </div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-blue-500">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-medium text-gray-900">Proposal</span>
              <p className="text-sm text-gray-600">Пропозиція</p>
            </div>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-500">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-medium text-gray-900">Budget</span>
              <p className="text-sm text-gray-600">Бюджет</p>
            </div>
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-red-500">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-medium text-gray-900">Contract</span>
              <p className="text-sm text-gray-600">Контракт</p>
            </div>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-purple-500">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-medium text-gray-900">Revenue</span>
              <p className="text-sm text-gray-600">Дохід</p>
            </div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-gray-300">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-medium text-gray-900">Strategy</span>
              <p className="text-sm text-gray-600">Стратегія</p>
            </div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Learn Group Selection Screen - Modal/Bottom Sheet for group selection
const LearnGroupSelection = () => (
  <div className="h-full bg-gray-50">
    {/* Header */}
    <div className="bg-white px-4 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <button className="p-2 rounded-full bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-bold text-gray-900">Learn Business English</h2>
        <div className="w-9"></div>
      </div>
    </div>
    
    <div className="p-4">
      {/* Group Selection */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 rounded-xl mb-4 border border-blue-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900">Selected Group</h3>
          <div className="bg-blue-100 px-2 py-1 rounded-full">
            <span className="text-xs font-medium text-blue-700">Group Size: 8</span>
          </div>
        </div>
        
        {/* Selected Words Display */}
        <div className="bg-white p-3 rounded-lg mb-3 shadow-sm">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-center text-sm font-medium">
              Meeting
            </div>
            <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-center text-sm font-medium">
              Proposal
            </div>
            <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-center text-sm font-medium">
              Budget
            </div>
            <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-center text-sm font-medium">
              Contract
            </div>
            <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-center text-sm font-medium">
              Revenue
            </div>
            <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-center text-sm font-medium">
              Strategy
            </div>
            <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-center text-sm font-medium">
              Deadline
            </div>
            <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-center text-sm font-medium">
              Profit
            </div>
          </div>
        </div>
        
        {/* Regenerate Button */}
        <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2 text-sm">
          <RotateCcw className="w-4 h-4" />
          <span>Regenerate Group</span>
        </button>
      </div>
      
      {/* Group Size Selector */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Group Size</h4>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">5</button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm font-medium">8</button>
          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">10</button>
        </div>
      </div>
      
      {/* Learning Process Steps */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <h4 className="font-semibold text-gray-900 mb-3 text-sm">7-Step Learning Process</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
            <span className="text-xs text-gray-700">Introduction & Context</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">2</div>
            <span className="text-xs text-gray-700">Active Recall</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">3</div>
            <span className="text-xs text-gray-700">Match Exercise</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">4</div>
            <span className="text-xs text-gray-700">Gap Fill</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">5</div>
            <span className="text-xs text-gray-700">Build Sentence</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">6</div>
            <span className="text-xs text-gray-700">Creative Tasks</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">7</div>
            <span className="text-xs text-gray-700">Error Correction</span>
          </div>
        </div>
      </div>
      
      {/* Action Button */}
      <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-bold shadow-lg">
        Start Learning Process
      </button>
    </div>
  </div>
);

// Words Tab - Main Screen with word lists
const WordsMainScreen = () => (
  <div className="h-full bg-gray-50">
    {/* Tab Bar */}
    <div className="bg-white px-4 py-3 flex border-b border-gray-200">
      <div className="flex-1 text-center">
        <div className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-2">Words</div>
      </div>
      <div className="flex-1 text-center">
        <div className="text-gray-500">Review</div>
      </div>
      <div className="flex-1 text-center">
        <div className="text-gray-500">Menu</div>
      </div>
    </div>
    
    <div className="p-4">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-xl font-bold text-blue-600">1,247</div>
          <div className="text-xs text-gray-600">Words Learned</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-xl font-bold text-green-600">12</div>
          <div className="text-xs text-gray-600">Lists Mastered</div>
        </div>
      </div>
      
      {/* Word Lists */}
      <div className="space-y-3">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">A2 Words</h3>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">A2</span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold text-gray-900">324 words</div>
            <div className="text-xs text-green-600 font-medium">78% mastered</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
            <div className="bg-green-500 h-1.5 rounded-full" style={{width: '78%'}}></div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-medium">Learn</button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">Flashcards</button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">C1 Words</h3>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">C1</span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold text-gray-900">156 words</div>
            <div className="text-xs text-orange-600 font-medium">23% mastered</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
            <div className="bg-orange-500 h-1.5 rounded-full" style={{width: '23%'}}></div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-medium">Learn</button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">Flashcards</button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">Business English</h3>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">B2</span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold text-gray-900">180 words</div>
            <div className="text-xs text-blue-600 font-medium">45% mastered</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
            <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '45%'}}></div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-medium">Learn</button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">Flashcards</button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">My Custom List</h3>
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">Custom</span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold text-gray-900">67 words</div>
            <div className="text-xs text-purple-600 font-medium">89% mastered</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
            <div className="bg-purple-500 h-1.5 rounded-full" style={{width: '89%'}}></div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-medium">Learn</button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">Flashcards</button>
          </div>
        </div>
      </div>
      
      {/* Add Custom List Button */}
      <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-xl font-medium text-sm shadow-lg flex items-center justify-center space-x-2">
        <Plus className="w-5 h-5" />
        <span>Add Custom List</span>
      </button>
    </div>
  </div>
);

// Word Group Selection Screen - THE MAIN IDEA OF THE APP
const WordGroupSelectionScreen = () => (
  <div className="h-full bg-gray-50">
    {/* Header */}
    <div className="bg-white px-4 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <button className="p-2 rounded-full bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-bold text-gray-900">💼 Business English</h2>
        <div className="w-9"></div>
      </div>
    </div>
    
    <div className="p-4">
      {/* Group Selection - MAIN CONCEPT */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 rounded-2xl mb-6 border border-blue-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Pick Word Group</h3>
          <div className="bg-blue-100 px-3 py-1 rounded-full">
            <span className="text-sm font-medium text-blue-700">Group Size: 8</span>
          </div>
        </div>
        
        {/* Selected Words Display */}
        <div className="bg-white p-4 rounded-xl mb-4 shadow-sm">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-center font-medium">
              Meeting
            </div>
            <div className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-center font-medium">
              Proposal
            </div>
            <div className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-center font-medium">
              Budget
            </div>
            <div className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-center font-medium">
              Contract
            </div>
            <div className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-center font-medium">
              Revenue
            </div>
            <div className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-center font-medium">
              Strategy
            </div>
            <div className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-center font-medium">
              Deadline
            </div>
            <div className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-center font-medium">
              Profit
            </div>
          </div>
        </div>
        
        {/* Regenerate Button - KEY FEATURE */}
        <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg">
          <RotateCcw className="w-5 h-5" />
          <span>Regenerate Group</span>
        </button>
      </div>
      
      {/* Group Size Selector */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Group Size</h4>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">5</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium">8</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">10</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">12</button>
        </div>
      </div>
      
      {/* Learning Process Steps */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">7-Step Learning Process</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <span className="text-sm text-gray-700">Introduction & Context</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <span className="text-sm text-gray-700">Active Recall</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <span className="text-sm text-gray-700">Match Exercise</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <span className="text-sm text-gray-700">Gap Fill</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">5</div>
            <span className="text-sm text-gray-700">Build Sentence</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">6</div>
            <span className="text-sm text-gray-700">Creative Tasks</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">7</div>
            <span className="text-sm text-gray-700">Error Correction</span>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg">
          🚀 Start Learning Process
        </button>
        <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium">
          📚 Browse All Words
        </button>
      </div>
    </div>
  </div>
);

// Review Tab Screen
const ReviewTabScreen = () => (
  <div className="h-full bg-gray-50">
    {/* Tab Bar */}
    <div className="bg-white px-4 py-3 flex border-b border-gray-200">
      <div className="flex-1 text-center">
        <div className="text-gray-500">Words</div>
      </div>
      <div className="flex-1 text-center">
        <div className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-2">Review</div>
      </div>
      <div className="flex-1 text-center">
        <div className="text-gray-500">Menu</div>
      </div>
    </div>
    
    <div className="p-4">
      {/* Review Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="text-2xl font-bold text-red-600">5</div>
          <div className="text-sm text-gray-600">Due Today</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="text-2xl font-bold text-orange-600">3</div>
          <div className="text-sm text-gray-600">Due Tomorrow</div>
        </div>
      </div>
      
      {/* Review Groups */}
      <div className="space-y-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-red-500">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">🌍 Travel Group #1</h3>
            <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">⚠️ Overdue</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-red-600">8</div>
              <div className="text-xs text-gray-500">words</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-orange-600">2</div>
              <div className="text-xs text-gray-500">days ago</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">3</div>
              <div className="text-xs text-gray-500">next interval</div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-red-500 text-white py-3 rounded-xl font-medium">🚀 Review Now</button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium">📚 Flashcards</button>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-orange-500">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">💼 Business Group #2</h3>
            <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">📅 Due Today</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-orange-600">10</div>
              <div className="text-xs text-gray-500">words</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">1</div>
              <div className="text-xs text-gray-500">day ago</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">7</div>
              <div className="text-xs text-gray-500">next interval</div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-medium">⏰ Review Now</button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium">📚 Flashcards</button>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-gray-300">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">👨‍👩‍👧‍👦 Family Group #1</h3>
            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">🗓️ Tomorrow</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-600">12</div>
              <div className="text-xs text-gray-500">words</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">2</div>
              <div className="text-xs text-gray-500">days ago</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">✓</div>
              <div className="text-xs text-gray-500">mastered</div>
            </div>
          </div>
          <button className="w-full bg-gray-200 text-gray-600 py-3 rounded-xl font-medium cursor-not-allowed">
            ⏳ Review Tomorrow
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Add Custom List Modal/Bottom Sheet
const AddCustomListModal = () => (
  <div className="h-full bg-gray-50">
    {/* Header */}
    <div className="bg-white px-4 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <button className="p-2 rounded-full bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-bold text-gray-900">Add Custom List</h2>
        <div className="w-9"></div>
      </div>
    </div>
    
    <div className="p-4">
      {/* Manual Entry */}
      <div className="bg-white p-6 rounded-2xl shadow-sm mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📝 Create Manually</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">List Name</label>
            <input 
              type="text" 
              placeholder="My Custom Words"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <input 
              type="text" 
              placeholder="Words I want to learn..."
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium">
            Create List
          </button>
        </div>
      </div>
      
      {/* AI Generation Option */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
        <div className="flex items-center space-x-2 mb-3">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-bold text-gray-900">🤖 Generate with AI</h3>
        </div>
        <p className="text-gray-600 mb-3 text-sm">Let AI create a custom word list based on any topic you choose!</p>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
            <input 
              type="text" 
              placeholder="e.g., Space exploration, Cooking..."
              className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              defaultValue="Harry Potter"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty Level</label>
            <div className="flex space-x-2">
              <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">A1</button>
              <button className="px-2 py-1 bg-purple-500 text-white rounded text-xs">B1</button>
              <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">B2</button>
              <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">C1</button>
            </div>
          </div>
          
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-medium text-sm">
            ✨ Generate AI Words
          </button>
        </div>
      </div>
      
      {/* Import from File Button */}
      <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2 shadow-sm">
        <Globe className="w-5 h-5" />
        <span>Import from file</span>
      </button>
    </div>
  </div>
);

const LearningScreen = () => (
  <div className="p-4 h-full bg-gradient-to-b from-blue-50 to-white">
    <div className="flex items-center justify-between mb-6">
      <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-sm">
        <ArrowLeft className="w-5 h-5" />
      </button>
      <div className="flex-1 mx-4">
        <div className="bg-gray-200 rounded-full h-3 shadow-inner">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-in-out" style={{ width: '70%' }}></div>
        </div>
      </div>
      <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">7/10</span>
    </div>

    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">🎯 Match Words & Translations</h2>
      <p className="text-gray-600">Drag and drop to create perfect matches</p>
    </div>
    
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl border-2 border-dashed border-blue-300 shadow-lg transform hover:scale-105 transition-transform duration-200">
          <div className="flex justify-between items-center">
            <span className="font-bold text-blue-900 text-lg">Restaurant</span>
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl border-2 border-dashed border-blue-300 shadow-lg transform hover:scale-105 transition-transform duration-200">
          <div className="flex justify-between items-center">
            <span className="font-bold text-blue-900 text-lg">Ресторан</span>
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl border-2 border-dashed border-blue-300 shadow-lg transform hover:scale-105 transition-transform duration-200">
          <div className="flex justify-between items-center">
            <span className="font-bold text-blue-900 text-lg">Airport</span>
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl border-2 border-dashed border-blue-300 shadow-lg transform hover:scale-105 transition-transform duration-200">
          <div className="flex justify-between items-center">
            <span className="font-bold text-blue-900 text-lg">Аеропорт</span>
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl border-2 border-dashed border-blue-300 shadow-lg">
          <div className="flex justify-between items-center">
            <span className="font-bold text-blue-900 text-lg">Hotel</span>
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl border-2 border-dashed border-blue-300 shadow-lg">
          <div className="flex justify-between items-center">
            <span className="font-bold text-blue-900 text-lg">Готель</span>
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-8">
      <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
        ✨ Continue
      </button>
    </div>
  </div>
);

const ReviewScreen = () => (
  <div className="p-4 h-full bg-gradient-to-b from-green-50 to-white">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Review Queue</h2>
        <p className="text-gray-600">Spaced repetition schedule</p>
      </div>
      <div className="bg-red-100 px-4 py-2 rounded-2xl">
        <span className="text-sm font-bold text-red-700">🔥 5 due</span>
      </div>
    </div>
    
    <div className="space-y-4">
      <div className="bg-white p-5 rounded-2xl shadow-lg border-l-4 border-red-500">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900">🌍 Travel Group #1</h3>
          <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">⚠️ Overdue</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-xl font-bold text-red-600">10</div>
            <div className="text-xs text-gray-500">words</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-orange-600">2</div>
            <div className="text-xs text-gray-500">days ago</div>
          </div>
        </div>
        <div className="bg-red-50 p-3 rounded-lg mb-3">
          <p className="text-sm text-red-800">🎯 Interval: 1 day → 3 days (next review)</p>
        </div>
        <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          🚀 Review Now
        </button>
      </div>
      
      <div className="bg-white p-5 rounded-2xl shadow-lg border-l-4 border-orange-500">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900">💼 Business Group #2</h3>
          <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">📅 Due Today</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-xl font-bold text-orange-600">8</div>
            <div className="text-xs text-gray-500">words</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-blue-600">1</div>
            <div className="text-xs text-gray-500">day ago</div>
          </div>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg mb-3">
          <p className="text-sm text-orange-800">🎯 Interval: 3 days → 7 days (next review)</p>
        </div>
        <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          ⏰ Review Now
        </button>
      </div>
      
      <div className="bg-white p-5 rounded-2xl shadow-lg border-l-4 border-gray-300">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900">👨‍👩‍👧‍👦 Family Group #1</h3>
          <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">🗓️ Tomorrow</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-xl font-bold text-gray-600">12</div>
            <div className="text-xs text-gray-500">words</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-green-600">2</div>
            <div className="text-xs text-gray-500">days ago</div>
          </div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg mb-3">
          <p className="text-sm text-gray-700">🎯 Interval: 7 days → Archive (final review)</p>
        </div>
        <button className="w-full bg-gray-200 text-gray-600 py-3 rounded-xl font-semibold cursor-not-allowed">
          ⏳ Review Tomorrow
        </button>
      </div>
    </div>
  </div>
);

const AIGenerationScreen = () => (
  <div className="p-4 h-full">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-gray-900">AI Word Generator</h2>
      <Sparkles className="w-6 h-6 text-purple-500" />
    </div>
    
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
        <input 
          type="text" 
          placeholder="e.g., Harry Potter, Space, Cooking..."
          className="w-full p-3 border border-gray-300 rounded-lg"
          defaultValue="Harry Potter"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">B1</button>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">A1</button>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">B2</button>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">C1</button>
        </div>
      </div>
      
      <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium">
        Generate Words
      </button>
    </div>
    
    <div className="mt-6 bg-white rounded-xl p-4 shadow-sm border">
      <h3 className="font-semibold text-gray-900 mb-3">Generated Words</h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="font-medium">Wizard</span>
          <span className="text-gray-600">Чарівник</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="font-medium">Spell</span>
          <span className="text-gray-600">Заклинання</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="font-medium">Wand</span>
          <span className="text-gray-600">Чарівна паличка</span>
        </div>
      </div>
    </div>
  </div>
);

const FlashcardsScreen = () => (
  <div className="p-4 h-full">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-gray-900">Flashcards</h2>
      <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">15/50</span>
    </div>
    
    <div className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-blue-200">
          <div className="text-3xl font-bold text-blue-900 mb-4">
            Restaurant
          </div>
          <div className="text-lg text-gray-600 mb-6">
            Ресторан
          </div>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Play className="w-8 h-8 text-blue-500 bg-blue-100 rounded-full p-1" />
            <span className="text-sm text-gray-600">Tap to hear pronunciation</span>
          </div>
        </div>
        
        <div className="flex space-x-4 mt-6">
          <button className="flex-1 bg-red-100 text-red-700 py-3 rounded-xl font-medium">
            Don't Know
          </button>
          <button className="flex-1 bg-green-100 text-green-700 py-3 rounded-xl font-medium">
            I Know
          </button>
        </div>
      </div>
    </div>
  </div>
);

const IntroductionScreen = () => (
  <div className="p-4 h-full bg-gradient-to-b from-green-50 to-white">
    <div className="flex items-center justify-between mb-6">
      <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-sm">
        <ArrowLeft className="w-5 h-5" />
      </button>
      <div className="flex-1 mx-4">
        <div className="bg-gray-200 rounded-full h-3 shadow-inner">
          <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500 ease-in-out" style={{ width: '14%' }}></div>
        </div>
      </div>
      <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">1/7</span>
    </div>
    
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900">Restaurant</h3>
          <Play className="w-6 h-6 text-blue-500" />
        </div>
        <p className="text-gray-600 mb-3">Ресторан - A place where people pay to sit and eat meals</p>
        <div className="space-y-2">
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-blue-900">"We went to a nice <span className="font-semibold underline">restaurant</span> for dinner."</p>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <p className="text-sm text-purple-900">"The <span className="font-semibold underline">restaurant</span> serves Italian food."</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900">Airport</h3>
          <Play className="w-6 h-6 text-blue-500" />
        </div>
        <p className="text-gray-600 mb-3">Аеропорт - A place where aircraft take off and land</p>
        <div className="space-y-2">
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-sm text-green-900">"I'll pick you up at the <span className="font-semibold underline">airport</span>."</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-6">
      <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium">
        Continue to Recall
      </button>
    </div>
  </div>
);

const RecallScreen = () => (
  <div className="p-4 h-full bg-gradient-to-b from-orange-50 to-white">
    <div className="flex items-center justify-between mb-6">
      <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-sm">
        <ArrowLeft className="w-5 h-5" />
      </button>
      <div className="flex-1 mx-4">
        <div className="bg-gray-200 rounded-full h-3 shadow-inner">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all duration-500 ease-in-out" style={{ width: '28%' }}></div>
        </div>
      </div>
      <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">2/7</span>
    </div>
    
    <div className="text-center mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">What's this word?</h3>
      <p className="text-gray-600">Type or speak the English word</p>
    </div>
    
    <div className="bg-white p-6 rounded-xl shadow-sm border text-center mb-6">
      <div className="text-2xl font-bold text-gray-900 mb-4">Ресторан</div>
      <p className="text-gray-600 mb-4">A place where people pay to sit and eat meals</p>
      <div className="flex items-center justify-center space-x-2">
        <Play className="w-6 h-6 text-blue-500" />
        <span className="text-sm text-gray-600">Listen to pronunciation</span>
      </div>
    </div>
    
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Type your answer..."
        className="w-full p-4 border border-gray-300 rounded-xl text-lg"
        defaultValue="Restaurant"
      />
      <div className="flex space-x-3">
        <button className="flex-1 bg-gray-200 text-gray-600 py-3 rounded-xl font-medium">
          🎤 Speak
        </button>
        <button className="flex-1 bg-green-500 text-white py-3 rounded-xl font-medium">
          Check Answer
        </button>
      </div>
    </div>
  </div>
);

const GapFillScreen = () => (
  <div className="p-4 h-full bg-gradient-to-b from-purple-50 to-white">
    <div className="flex items-center justify-between mb-6">
      <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-sm">
        <ArrowLeft className="w-5 h-5" />
      </button>
      <div className="flex-1 mx-4">
        <div className="bg-gray-200 rounded-full h-3 shadow-inner">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-in-out" style={{ width: '57%' }}></div>
        </div>
      </div>
      <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">4/7</span>
    </div>
    
    <div className="text-center mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Fill in the blanks</h3>
      <p className="text-gray-600">Drag words to complete the story</p>
    </div>
    
    <div className="bg-white p-4 rounded-xl shadow-sm border mb-6">
      <p className="text-gray-900 leading-relaxed">
        Yesterday I went to a nice <span className="bg-blue-100 text-blue-900 px-2 py-1 rounded font-medium">restaurant</span> with my family. 
        We ordered pizza and pasta. After dinner, we took a taxi to the <span className="border-2 border-dashed border-gray-300 px-4 py-1 rounded">_____</span> because 
        our flight was at 9 PM. The <span className="border-2 border-dashed border-gray-300 px-4 py-1 rounded">_____</span> was very crowded, 
        but we found our gate easily.
      </p>
    </div>
    
    <div className="space-y-3">
      <h4 className="font-medium text-gray-900">Available words:</h4>
      <div className="flex flex-wrap gap-2">
        <div className="bg-blue-100 text-blue-900 px-3 py-2 rounded-lg font-medium cursor-pointer">
          airport
        </div>
        <div className="bg-blue-100 text-blue-900 px-3 py-2 rounded-lg font-medium cursor-pointer">
          hotel
        </div>
        <div className="bg-blue-100 text-blue-900 px-3 py-2 rounded-lg font-medium cursor-pointer">
          terminal
        </div>
      </div>
    </div>
  </div>
);

const BuildSentenceScreen = () => (
  <div className="p-4 h-full bg-gradient-to-b from-indigo-50 to-white">
    <div className="flex items-center justify-between mb-6">
      <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-sm">
        <ArrowLeft className="w-5 h-5" />
      </button>
      <div className="flex-1 mx-4">
        <div className="bg-gray-200 rounded-full h-3 shadow-inner">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-3 rounded-full transition-all duration-500 ease-in-out" style={{ width: '71%' }}></div>
        </div>
      </div>
      <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">5/7</span>
    </div>
    
    <div className="text-center mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Build the translation</h3>
      <p className="text-gray-600">Arrange words to create the Ukrainian translation</p>
    </div>
    
    <div className="bg-blue-50 p-4 rounded-xl mb-6">
      <p className="text-blue-900 font-medium text-center">
        "We went to a nice restaurant for dinner"
      </p>
    </div>
    
    <div className="bg-white p-4 rounded-xl shadow-sm border mb-6">
      <div className="min-h-[60px] border-2 border-dashed border-gray-300 rounded-lg p-3 flex flex-wrap gap-2">
        <span className="bg-green-100 text-green-900 px-3 py-1 rounded font-medium">Ми</span>
        <span className="bg-green-100 text-green-900 px-3 py-1 rounded font-medium">пішли</span>
        <span className="bg-green-100 text-green-900 px-3 py-1 rounded font-medium">в</span>
        <span className="bg-green-100 text-green-900 px-3 py-1 rounded font-medium">гарний</span>
      </div>
    </div>
    
    <div className="space-y-3">
      <h4 className="font-medium text-gray-900">Available words:</h4>
      <div className="flex flex-wrap gap-2">
        <div className="bg-gray-100 text-gray-900 px-3 py-2 rounded-lg font-medium cursor-pointer">
          ресторан
        </div>
        <div className="bg-gray-100 text-gray-900 px-3 py-2 rounded-lg font-medium cursor-pointer">
          на
        </div>
        <div className="bg-gray-100 text-gray-900 px-3 py-2 rounded-lg font-medium cursor-pointer">
          вечерю
        </div>
        <div className="bg-gray-100 text-gray-900 px-3 py-2 rounded-lg font-medium cursor-pointer">
          магазин
        </div>
      </div>
    </div>
  </div>
);

const CreativeTaskScreen = () => (
  <div className="p-4 h-full bg-gradient-to-b from-pink-50 to-white">
    <div className="flex items-center justify-between mb-6">
      <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-sm">
        <ArrowLeft className="w-5 h-5" />
      </button>
      <div className="flex-1 mx-4">
        <div className="bg-gray-200 rounded-full h-3 shadow-inner">
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 h-3 rounded-full transition-all duration-500 ease-in-out" style={{ width: '85%' }}></div>
        </div>
      </div>
      <span className="text-sm font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">6/7</span>
    </div>
    
    <div className="text-center mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Create your own sentences</h3>
      <p className="text-gray-600">Use at least 3 words from each group</p>
    </div>
    
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <h4 className="font-medium text-gray-900 mb-3">Group 1:</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-100 text-blue-900 px-2 py-1 rounded text-sm">restaurant</span>
          <span className="bg-blue-100 text-blue-900 px-2 py-1 rounded text-sm">airport</span>
          <span className="bg-blue-100 text-blue-900 px-2 py-1 rounded text-sm">hotel</span>
          <span className="bg-blue-100 text-blue-900 px-2 py-1 rounded text-sm">taxi</span>
          <span className="bg-blue-100 text-blue-900 px-2 py-1 rounded text-sm">ticket</span>
        </div>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg resize-none"
          rows={3}
          placeholder="Write 1-2 sentences using these words..."
          defaultValue="I took a taxi from the hotel to the airport and bought a ticket at the restaurant."
        />
      </div>
      
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <h4 className="font-medium text-gray-900 mb-3">Group 2:</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-purple-100 text-purple-900 px-2 py-1 rounded text-sm">family</span>
          <span className="bg-purple-100 text-purple-900 px-2 py-1 rounded text-sm">dinner</span>
          <span className="bg-purple-100 text-purple-900 px-2 py-1 rounded text-sm">vacation</span>
          <span className="bg-purple-100 text-purple-900 px-2 py-1 rounded text-sm">beach</span>
          <span className="bg-purple-100 text-purple-900 px-2 py-1 rounded text-sm">photo</span>
        </div>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg resize-none"
          rows={3}
          placeholder="Write 1-2 sentences using these words..."
        />
      </div>
    </div>
    
    <div className="mt-6">
      <button className="w-full bg-pink-500 text-white py-3 rounded-xl font-medium">
        Submit & Continue
      </button>
    </div>
  </div>
);

const ErrorCorrectionScreen = () => (
  <div className="p-4 h-full bg-gradient-to-b from-red-50 to-white">
    <div className="flex items-center justify-between mb-6">
      <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-sm">
        <ArrowLeft className="w-5 h-5" />
      </button>
      <div className="flex-1 mx-4">
        <div className="bg-gray-200 rounded-full h-3 shadow-inner">
          <div className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-500 ease-in-out" style={{ width: '100%' }}></div>
        </div>
      </div>
      <span className="text-sm font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">7/7</span>
    </div>
    
    <div className="text-center mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Review your mistakes</h3>
      <p className="text-gray-600">Let's fix the words you got wrong</p>
    </div>
    
    <div className="space-y-4">
      <div className="bg-red-50 p-4 rounded-xl border border-red-200">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-medium text-red-900">Question 3 - Match Exercise</h4>
          <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">Incorrect</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-900">Hotel</span>
            <span className="text-red-600 line-through">Ресторан</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-900">Correct answer:</span>
            <span className="text-green-600 font-medium">Готель</span>
          </div>
        </div>
        <button className="w-full mt-3 bg-red-500 text-white py-2 rounded-lg text-sm">
          Practice Again
        </button>
      </div>
      
      <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-medium text-orange-900">Question 7 - Gap Fill</h4>
          <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">Incorrect</span>
        </div>
        <div className="space-y-2">
          <p className="text-gray-900">
            "We went to the <span className="text-red-600 line-through">hotel</span> to catch our flight"
          </p>
          <p className="text-gray-900">
            Correct: "We went to the <span className="text-green-600 font-medium">airport</span> to catch our flight"
          </p>
        </div>
        <button className="w-full mt-3 bg-orange-500 text-white py-2 rounded-lg text-sm">
          Practice Again
        </button>
      </div>
    </div>
    
    <div className="mt-6">
      <button className="w-full bg-green-500 text-white py-3 rounded-xl font-medium">
        Complete Session
      </button>
    </div>
  </div>
)
// Helper components
const User = ({ className }: { className?: string }) => (
  <div className={`rounded-full bg-gray-400 ${className}`}></div>
);

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Next Generation Method for
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Learning Words Effectively
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionary vocabulary learning app that combines AI-powered word generation, 
              spaced repetition, and interactive exercises to help you master new languages faster than ever.
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">AI-Powered Learning</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Spaced Repetition</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Multi-Language Support</span>
              </div>
            </div>
            
            {/* Email Collection */}
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Join Waitlist</span>
                </button>
              </form>
              
              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-green-700">Thanks! You're on the waitlist.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Mock Screenshots */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See the Future of Vocabulary Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience revolutionary features that make learning words more effective and enjoyable than ever before.
            </p>
          </div>

          {/* Feature 1: Smart Dashboard */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Smart Word Lists Dashboard</h3>
              </div>
              <p className="text-xl text-gray-600">
                Organize your vocabulary with pre-generated topic lists (A2, B1, C2), verbs, nouns, and custom collections. 
                Each list shows progress and word count. Large, beautiful blocks make selection easy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Pre-generated lists: Travel, Business, Family</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Custom lists with AI generation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Progress tracking per list</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Choose Learning Process or Flashcards</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <PhoneFrame>
                <WordsMainScreen />
              </PhoneFrame>
            </div>
          </div>
          
          {/* Feature 2: THE MAIN CONCEPT - Word Group Selection */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 flex justify-center">
              <PhoneFrame>
                <WordGroupSelectionScreen />
              </PhoneFrame>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">🎯 Smart Word Group Selection</h3>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                <p className="text-lg font-semibold text-purple-900 mb-2">🚀 THE MAIN IDEA OF THE APP!</p>
                <p className="text-xl text-gray-700">Pick a customizable group of words (5-12) from any list to learn together. Regenerate groups anytime for variety!</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Customizable group sizes (5, 8, 10, 12 words)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">One-click regeneration for variety</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Visual preview of selected words</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">7-step learning process visualization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3: Introduction Exercise - Step 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">1. Introduction & Context</h3>
              </div>
              <p className="text-xl text-gray-600">
                Start with comprehensive word introductions featuring translations, definitions, 
                and AI-generated example sentences. Interactive elements reveal grammatical forms and usage patterns.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Native pronunciation audio</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">AI-generated contextual examples</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Interactive grammatical forms</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <PhoneFrame>
                <IntroductionScreen />
              </PhoneFrame>
            </div>
          </div>

          {/* Feature 4: Recall Exercise - Step 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 flex justify-center">
              <PhoneFrame>
                <RecallScreen />
              </PhoneFrame>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Brain className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">2. Active Recall Testing</h3>
              </div>
              <p className="text-xl text-gray-600">
                Test your memory with active recall exercises. Type or speak the correct word 
                based on translations and contextual clues to strengthen neural pathways.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Type or voice input options</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Contextual clues and hints</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Immediate feedback and correction</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 5: Match Exercise - Step 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-2 flex justify-center">
              <PhoneFrame>
                <LearningScreen />
              </PhoneFrame>
            </div>
            <div className="order-1 lg:order-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">3. Drag & Drop Matching</h3>
              </div>
              <p className="text-xl text-gray-600">
                Reinforce word-meaning connections through intuitive drag-and-drop matching. 
                Visual and kinesthetic learning helps cement vocabulary in long-term memory.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Intuitive drag-and-drop interface</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Visual word-meaning associations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Immediate visual feedback</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 6: Gap Fill Exercise - Step 4 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 flex justify-center">
              <PhoneFrame>
                <GapFillScreen />
              </PhoneFrame>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Plus className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">4. Contextual Gap Fill</h3>
              </div>
              <p className="text-xl text-gray-600">
                Practice words in realistic contexts with AI-generated stories and passages. 
                Fill in the blanks to understand how vocabulary works in natural language.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">AI-generated contextual stories</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Multiple difficulty levels</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Natural language patterns</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 7: Build Sentence Exercise - Step 5 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-2 flex justify-center">
              <PhoneFrame>
                <BuildSentenceScreen />
              </PhoneFrame>
            </div>
            <div className="order-1 lg:order-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">5. Sentence Construction</h3>
              </div>
              <p className="text-xl text-gray-600">
                Build translation skills by constructing sentences word by word. 
                Learn proper grammar structure while reinforcing vocabulary knowledge.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Word-by-word construction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Grammar structure learning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Translation skill development</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 8: Creative Tasks - Step 6 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 flex justify-center">
              <PhoneFrame>
                <CreativeTaskScreen />
              </PhoneFrame>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-pink-100 p-2 rounded-lg">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">6. Creative Expression</h3>
              </div>
              <p className="text-xl text-gray-600">
                Apply your vocabulary creatively by writing original sentences and stories. 
                This exercise develops fluency and helps you think naturally in the target language.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Original sentence creation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Grouped word challenges</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Fluency development</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 9: Error Correction - Step 7 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-2 flex justify-center">
              <PhoneFrame>
                <ErrorCorrectionScreen />
              </PhoneFrame>
            </div>
            <div className="order-1 lg:order-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-red-100 p-2 rounded-lg">
                  <RotateCcw className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">7. Targeted Error Correction</h3>
              </div>
              <p className="text-xl text-gray-600">
                Focus on your mistakes with targeted practice sessions. 
                Review and correct errors to ensure complete understanding before moving forward.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Mistake identification and review</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Targeted practice sessions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Complete understanding verification</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 10: Add Custom List with AI */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 flex justify-center">
              <PhoneFrame>
                <AddCustomListModal />
              </PhoneFrame>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-pink-100 p-2 rounded-lg">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">🤖 AI-Powered Custom Lists</h3>
              </div>
              <p className="text-xl text-gray-600">
                Create custom word lists manually or let AI generate them based on any topic. 
                Perfect for specific interests, hobbies, or professional vocabulary needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Manual list creation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">AI generation by topic</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Difficulty level selection (A1-C2)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Import from file option</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 11: Review Queue - Final */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-2 flex justify-center">
              <PhoneFrame>
                <ReviewTabScreen />
              </PhoneFrame>
            </div>
            <div className="order-1 lg:order-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <RotateCcw className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">📚 Smart Review Queue</h3>
              </div>
              <p className="text-xl text-gray-600">
                Our advanced spaced repetition system schedules reviews at optimal intervals 
                to maximize long-term retention and minimize study time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Priority-based review queue</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Optimized review intervals (1, 3, 7 days)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Automatic difficulty adjustment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Long-term retention tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Method Works Better
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Traditional vocabulary apps are broken. Here's how we're different.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-red-50 p-4 rounded-2xl max-w-sm mx-auto">
                <h3 className="text-lg font-semibold text-red-900 mb-2">Traditional Apps</h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Simple flashcards only</li>
                  <li>• No context or examples</li>
                  <li>• Random review timing</li>
                  <li>• Limited topic coverage</li>
                  <li>• No pronunciation help</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-green-50 p-4 rounded-2xl max-w-sm mx-auto">
                <h3 className="text-lg font-semibold text-green-900 mb-2">WordMaster</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 7 different exercise types</li>
                  <li>• AI-generated examples</li>
                  <li>• Scientific spaced repetition</li>
                  <li>• Unlimited AI topics</li>
                  <li>• Native pronunciation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">7</div>
              <div className="text-blue-100">Exercise Types</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Languages Supported</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">10k+</div>
              <div className="text-blue-100">Pre-made Word Lists</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">∞</div>
              <div className="text-blue-100">AI-Generated Topics</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Vocabulary Learning?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of language learners who are already experiencing the future of vocabulary acquisition.
          </p>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Early Access</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold">WordMaster</span>
            </div>
            <p className="text-gray-400 mb-4">
              The next generation vocabulary learning app
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 WordMaster. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;