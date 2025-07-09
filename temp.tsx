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
    <div className="relative bg-black rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] p-1.5 md:p-2 lg:p-3 shadow-2xl transform hover:scale-105 transition-transform duration-300 w-64 sm:w-72 md:w-80 lg:w-96">
      {/* Dynamic Island (iPhone 16 style) */}
      <div className="absolute top-2 md:top-3 lg:top-5 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-gray-900 rounded-full px-3 md:px-4 lg:px-6 py-1 md:py-1.5 lg:py-2 flex items-center justify-center">
          <div className="flex items-center space-x-1.5 md:space-x-2 lg:space-x-3">
            <div className="w-1.5 md:w-2 lg:w-3 h-1.5 md:h-2 lg:h-3 bg-gray-700 rounded-full"></div>
            <div className="w-1 md:w-1.5 lg:w-2 h-1 md:h-1.5 lg:h-2 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden relative">
        {/* Status bar */}
        <div className="bg-white h-8 md:h-10 lg:h-14 flex items-center justify-between px-3 md:px-4 lg:px-6 pt-2 md:pt-3 lg:pt-4">
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
            <div className="w-3 md:w-4 lg:w-6 h-1.5 md:h-2 lg:h-3 bg-gray-900 rounded-sm relative">
              <div className="w-0.5 md:w-1 lg:w-1.5 h-0.5 md:h-1 lg:h-1.5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
            </div>
            <div className="text-xs text-gray-900 font-medium">100%</div>
          </div>
        </div>
        
        <div className="h-[420px] sm:h-[480px] md:h-[560px] lg:h-[700px] bg-gray-50 overflow-hidden">
          {children}
        </div>
        
        {/* Home indicator */}
        <div className="bg-white h-4 md:h-6 lg:h-8 flex items-center justify-center">
          <div className="w-16 md:w-24 lg:w-32 h-0.5 md:h-0.5 lg:h-1 bg-gray-900 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

// Word List View - Shows all words in a selected list with Learn/Flashcards options
const WordListView = () => (
  <div className="h-full bg-gray-50">
    {/* Header */}
    <div className="bg-white px-3 md:px-4 py-3 md:py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <button className="p-1.5 md:p-2 rounded-full bg-gray-100">
          <ArrowLeft className="w-4 md:w-5 h-4 md:h-5" />
        </button>
        <h2 className="text-base md:text-lg font-bold text-gray-900">💼 Business English</h2>
        <div className="w-7 md:w-9"></div>
      </div>
    </div>
    
    <div className="p-3 md:p-4">
      {/* List Summary */}
      <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm mb-3 md:mb-4">
        <div className="flex items-center justify-between mb-2 md:mb-3">
          <h3 className="text-base md:text-lg font-bold text-gray-900">180 words total</h3>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">45% mastered</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2 mb-2 md:mb-3">
          <div className="bg-blue-500 h-1.5 md:h-2 rounded-full" style={{width: '45%'}}></div>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-xs md:text-sm font-medium">Learn</button>
          <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-xs md:text-sm font-medium">Flashcards</button>
        </div>
      </div>
      
      {/* Word List */}
      <div className="space-y-2">
        {['Meeting', 'Proposal', 'Budget', 'Contract', 'Revenue', 'Strategy'].map((word, index) => {
          const translations = ['Зустріч', 'Пропозиція', 'Бюджет', 'Контракт', 'Дохід', 'Стратегія'];
          const colors = ['green', 'blue', 'orange', 'red', 'purple', 'gray'];
          const color = colors[index];
          
          return (
            <div key={word} className={`bg-white p-2.5 md:p-3 rounded-lg shadow-sm border-l-4 border-${color}-500`}>
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium text-gray-900 text-sm md:text-base">{word}</span>
                  <p className="text-xs md:text-sm text-gray-600">{translations[index]}</p>
                </div>
                <div className={`w-2.5 md:w-3 h-2.5 md:h-3 bg-${color}-500 rounded-full`}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

// Words Tab - Main Screen with word lists
const WordsMainScreen = () => (
  <div className="h-full bg-gray-50">
    {/* Tab Bar */}
    <div className="bg-white px-3 md:px-4 py-2 md:py-3 flex border-b border-gray-200">
      <div className="flex-1 text-center">
        <div className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 md:pb-2 text-sm md:text-base">Words</div>
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
        {[
          { name: 'A2 Words', level: 'A2', words: 324, progress: 78, color: 'green' },
          { name: 'C1 Words', level: 'C1', words: 156, progress: 23, color: 'red' },
          { name: 'Business English', level: 'B2', words: 180, progress: 45, color: 'blue' },
          { name: 'My Custom List', level: 'Custom', words: 67, progress: 89, color: 'purple' }
        ].map((list, index) => (
          <div key={index} className="bg-white p-3 md:p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2 md:mb-3">
              <h3 className="text-base md:text-lg font-bold text-gray-900">{list.name}</h3>
              <span className={`text-xs bg-${list.color}-100 text-${list.color}-700 px-2 py-1 rounded-full font-medium`}>{list.level}</span>
            </div>
            <div className="flex items-center justify-between mb-2 md:mb-3">
              <div className="text-sm font-semibold text-gray-900">{list.words} words</div>
              <div className={`text-xs text-${list.color}-600 font-medium`}>{list.progress}% mastered</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2 md:mb-3">
              <div className={`bg-${list.color}-500 h-1.5 rounded-full transition-all duration-500`} style={{width: `${list.progress}%`}}></div>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-500 text-white py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-blue-600 transition-colors">Learn</button>
              <button className="flex-1 bg-gray-100 text-gray-700 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-200 transition-colors">Flashcards</button>
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

// Word Group Selection Screen - THE MAIN IDEA OF THE APP
const WordGroupSelectionScreen = () => (
  <div className="h-full bg-gray-50">
    {/* Header */}
    <div className="bg-white px-3 md:px-4 py-3 md:py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <button className="p-1.5 md:p-2 rounded-full bg-gray-100">
          <ArrowLeft className="w-4 md:w-5 h-4 md:h-5" />
        </button>
        <h2 className="text-base md:text-lg font-bold text-gray-900">💼 Business English</h2>
        <div className="w-7 md:w-9"></div>
      </div>
    </div>
    
    <div className="p-3 md:p-4">
      {/* Group Selection - MAIN CONCEPT */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-6 rounded-2xl mb-4 md:mb-6 border border-blue-200">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">Pick Word Group</h3>
          <div className="bg-blue-100 px-2 md:px-3 py-1 rounded-full">
            <span className="text-xs md:text-sm font-medium text-blue-700">Group Size: 8</span>
          </div>
        </div>
        
        {/* Selected Words Display */}
        <div className="bg-white p-3 md:p-4 rounded-xl mb-3 md:mb-4 shadow-sm">
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            {['Meeting', 'Proposal', 'Budget', 'Contract', 'Revenue', 'Strategy', 'Deadline', 'Profit'].map((word) => (
              <div key={word} className="bg-blue-50 text-blue-800 px-2 md:px-3 py-1.5 md:py-2 rounded-lg text-center font-medium text-xs md:text-sm">
                {word}
              </div>
            ))}
          </div>
        </div>
        
        {/* Regenerate Button - KEY FEATURE */}
        <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2.5 md:py-3 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-shadow">
          <RotateCcw className="w-4 md:w-5 h-4 md:h-5" />
          <span className="text-sm md:text-base">Regenerate Group</span>
        </button>
      </div>
      
      {/* Group Size Selector */}
      <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm mb-4 md:mb-6">
        <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Group Size</h4>
        <div className="flex space-x-2">
          {[5, 8, 10, 12].map((size) => (
            <button 
              key={size}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-medium text-sm ${
                size === 8 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      
      {/* Learning Process Steps */}
      <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm mb-4 md:mb-6">
        <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">7-Step Learning Process</h4>
        <div className="space-y-1.5 md:space-y-2">
          {[
            'Introduction & Context',
            'Active Recall',
            'Match Exercise',
            'Gap Fill',
            'Build Sentence',
            'Creative Tasks',
            'Error Correction'
          ].map((step, index) => (
            <div key={index} className="flex items-center space-x-2 md:space-x-3">
              <div className={`w-6 md:w-8 h-6 md:h-8 ${index === 0 ? 'bg-green-500 text-white' : 'bg-blue-100 text-blue-700'} rounded-full flex items-center justify-center text-xs md:text-sm font-bold`}>
                {index + 1}
              </div>
              <span className="text-xs md:text-sm text-gray-700">{step}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="space-y-2 md:space-y-3">
        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg shadow-lg hover:shadow-xl transition-shadow">
          🚀 Start Learning Process
        </button>
        <button className="w-full bg-gray-100 text-gray-700 py-2.5 md:py-3 rounded-xl font-medium text-sm md:text-base hover:bg-gray-200 transition-colors">
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
    <div className="bg-white px-3 md:px-4 py-2 md:py-3 flex border-b border-gray-200">
      <div className="flex-1 text-center">
        <div className="text-gray-500 text-sm md:text-base">Words</div>
      </div>
      <div className="flex-1 text-center">
        <div className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 md:pb-2 text-sm md:text-base">Review</div>
      </div>
      <div className="flex-1 text-center">
        <div className="text-gray-500 text-sm md:text-base">Menu</div>
      </div>
    </div>
    
    <div className="p-3 md:p-4">
      {/* Review Stats */}
      <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-6">
        <div className="bg-white p-2.5 md:p-3 rounded-lg shadow-sm">
          <div className="text-lg md:text-xl font-bold text-red-600">5</div>
          <div className="text-xs text-gray-600">Overdue</div>
        </div>
        <div className="bg-white p-2.5 md:p-3 rounded-lg shadow-sm">
          <div className="text-lg md:text-xl font-bold text-orange-600">3</div>
          <div className="text-xs text-gray-600">Due Today</div>
        </div>
        <div className="bg-white p-2.5 md:p-3 rounded-lg shadow-sm">
          <div className="text-lg md:text-xl font-bold text-blue-600">2</div>
          <div className="text-xs text-gray-600">Tomorrow</div>
        </div>
      </div>
      
      {/* Review Groups */}
      <div className="space-y-2 md:space-y-3">
        {[
          { name: 'Travel Group 1', status: 'Overdue', statusColor: 'red', words: 8, daysAgo: 2, nextInterval: '3d' },
          { name: 'Business Group 2', status: 'Due Today', statusColor: 'orange', words: 10, daysAgo: 1, nextInterval: '7d' },
          { name: 'Family Group 1', status: 'Tomorrow', statusColor: 'blue', words: 12, daysAgo: 2, nextInterval: 'Done' },
          { name: 'A2 Vocabulary', status: 'Ready', statusColor: 'green', words: 6, daysAgo: 3, nextInterval: '14d' }
        ].map((group, index) => (
          <div key={index} className={`bg-white p-3 md:p-4 rounded-xl shadow-sm border-l-4 border-${group.statusColor}-500`}>
            <div className="flex items-center justify-between mb-2 md:mb-3">
              <h3 className="text-sm md:text-base font-semibold text-gray-900">{group.name}</h3>
              <span className={`text-xs bg-${group.statusColor}-100 text-${group.statusColor}-700 px-2 py-1 rounded font-medium`}>{group.status}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-3 mb-2 md:mb-3">
              <div className="text-center">
                <div className={`text-sm font-bold text-${group.statusColor}-600`}>{group.words}</div>
                <div className="text-xs text-gray-500">words</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-gray-600">{group.daysAgo}</div>
                <div className="text-xs text-gray-500">days ago</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-blue-600">{group.nextInterval}</div>
                <div className="text-xs text-gray-500">next</div>
              </div>
            </div>
            <button className={`w-full py-1.5 md:py-2 rounded-lg font-medium text-xs md:text-sm transition-colors ${
              group.status === 'Tomorrow' 
                ? 'bg-gray-200 text-gray-600 cursor-not-allowed' 
                : `bg-${group.statusColor}-500 text-white hover:bg-${group.statusColor}-600`
            }`}>
              {group.status === 'Tomorrow' ? 'Review Tomorrow' : 'Review Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-20 md:pb-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 md:p-3 rounded-xl md:rounded-2xl shadow-lg">
                <Brain className="w-6 md:w-8 h-6 md:h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Next Generation Method for
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Learning Words Effectively
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary vocabulary learning app that combines AI-powered word generation, 
              spaced repetition, and interactive exercises to help you master new languages faster than ever.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-6 md:mb-8">
              {['AI-Powered Learning', 'Spaced Repetition', 'Multi-Language Support'].map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500" />
                  <span className="text-sm md:text-base text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Email Collection */}
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm md:text-base shadow-lg"
                >
                  <Mail className="w-4 md:w-5 h-4 md:h-5" />
                  <span>Join Waitlist</span>
                </button>
              </form>
              
              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-green-700 text-sm md:text-base">Thanks! You're on the waitlist.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pt-28 md:pb-40">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-white/90 text-sm font-medium">Powered by Advanced AI</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Master Any Language
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                10x Faster
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered vocabulary learning that adapts to your brain. 
              <span className="text-blue-300 font-semibold">7 scientifically-proven exercises</span> in one seamless experience.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-10">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">3x Retention Rate</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold">15 Min/Day</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">15+ Languages</span>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for early access"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-white/60 text-base"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-base shadow-2xl"
                >
                  <Zap className="w-5 h-5" />
                  <span>Get Early Access</span>
                </button>
              </form>
              
              {isSubmitted && (
                <div className="mt-6 p-4 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-300 font-medium">You're on the waitlist! Check your email.</span>
                  </div>
                </div>
              )}
              
              {/* Trust Indicators */}
              <div className="mt-6 flex items-center justify-center space-x-6 text-white/60 text-sm">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-white hidden lg:block"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-white hidden lg:block"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-white"></path>
          </svg>
        </div>
      </div>

      {/* Features Section - Mobile First, No Horizontal Scroll */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See the Future of Vocabulary Learning
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore revolutionary features that make learning words more effective and enjoyable.
            </p>
          </div>
          
          {/* Feature Cards - Mobile First Grid */}
          <div className="space-y-12 md:space-y-20">

            {/* Feature Card 1: Smart Dashboard */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 border">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <BookOpen className="w-6 md:w-8 h-6 md:h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">Smart Word Lists</h3>
                  </div>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Organize vocabulary with pre-generated topic lists (A2, B1, C2), verbs, nouns, and custom collections.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Pre-generated lists: Travel, Business, Family',
                      'Custom lists with AI generation',
                      'Progress tracking per list'
                    ].map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-base md:text-lg text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 lg:order-2 flex justify-center">
                  <PhoneFrame className="transform hover:scale-105 transition-transform duration-300">
                    <WordsMainScreen />
                  </PhoneFrame>
                </div>
              </div>
            </div>

            {/* Feature Card 2: Word Group Selection */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 border">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <Target className="w-6 md:w-8 h-6 md:h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">Smart Word Groups</h3>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                    <p className="text-base md:text-lg font-semibold text-purple-900 mb-2">🚀 THE MAIN IDEA!</p>
                    <p className="text-lg md:text-xl text-gray-700">Pick customizable groups of words (5-12) to learn together. Regenerate anytime!</p>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Customizable group sizes',
                      'One-click regeneration'
                    ].map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-base md:text-lg text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                  <PhoneFrame className="transform hover:scale-105 transition-transform duration-300">
                    <WordGroupSelectionScreen />
                  </PhoneFrame>
                </div>
              </div>
            </div>

            {/* Feature Card 3: Review System */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 border">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <RotateCcw className="w-6 md:w-8 h-6 md:h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">📚 Smart Review Queue</h3>
                  </div>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Advanced spaced repetition system schedules reviews at optimal intervals for maximum retention.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Priority-based review queue',
                      'Optimized intervals (1, 3, 7 days)',
                      'Automatic difficulty adjustment'
                    ].map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-base md:text-lg text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 lg:order-2 flex justify-center">
                  <PhoneFrame className="transform hover:scale-105 transition-transform duration-300">
                    <ReviewTabScreen />
                  </PhoneFrame>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Learning Steps Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              7-Step Learning Process
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Our scientifically-proven method ensures deep understanding and long-term retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { step: 1, title: 'Introduction & Context', icon: BookOpen, color: 'green', description: 'Learn words with definitions, translations, and examples' },
              { step: 2, title: 'Active Recall', icon: Brain, color: 'orange', description: 'Test your memory with type or voice input' },
              { step: 3, title: 'Match Exercise', icon: Target, color: 'blue', description: 'Connect words with their meanings through drag & drop' },
              { step: 4, title: 'Gap Fill', icon: Plus, color: 'purple', description: 'Practice words in realistic story contexts' },
              { step: 5, title: 'Build Sentence', icon: Users, color: 'indigo', description: 'Construct translations word by word' },
              { step: 6, title: 'Creative Tasks', icon: Sparkles, color: 'pink', description: 'Write original sentences using new vocabulary' },
              { step: 7, title: 'Error Correction', icon: RotateCcw, color: 'red', description: 'Review and fix mistakes for targeted improvement' }
            ].map(({ step, title, icon: Icon, color, description }) => (
              <div key={step} className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`bg-${color}-100 p-3 rounded-xl`}>
                    <Icon className={`w-6 h-6 text-${color}-600`} />
                  </div>
                  <div className={`w-8 h-8 bg-${color}-500 text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                    {step}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Method Works Better
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Traditional vocabulary apps are broken. Here's how we're different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center space-y-4">
              <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Traditional Apps</h3>
                <ul className="text-sm text-red-700 space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span>Simple flashcards only</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span>No context or examples</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span>Random review timing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span>Limited topic coverage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span>No pronunciation help</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full shadow-lg">
                <ArrowRight className="w-6 md:w-8 h-6 md:h-8 text-white" />
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-4">WordMaster</h3>
                <ul className="text-sm text-green-700 space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>7 different exercise types</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>AI-generated examples</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Scientific spaced repetition</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Unlimited AI topics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Native pronunciation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { number: '7', label: 'Exercise Types' },
              { number: '15+', label: 'Languages Supported' },
              { number: '10k+', label: 'Pre-made Word Lists' },
              { number: '∞', label: 'AI-Generated Topics' }
            ].map(({ number, label }) => (
              <div key={label} className="text-white">
                <div className="text-2xl md:text-3xl font-bold mb-2">{number}</div>
                <div className="text-blue-100 text-sm md:text-base">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Vocabulary Learning?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Join thousands of language learners who are already experiencing the future of vocabulary acquisition.
          </p>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm md:text-base shadow-lg"
              >
                <span>Get Early Access</span>
                <ChevronRight className="w-4 md:w-5 h-4 md:h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Brain className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <span className="ml-3 text-lg md:text-xl font-bold">WordMaster</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              The next generation vocabulary learning app
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              © 2024 WordMaster. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;