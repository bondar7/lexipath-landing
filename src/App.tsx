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
  Play,
  RotateCcw,
  Plus,
  Star,
  Globe,
  Smartphone,
  Mail,
  ChevronRight
} from 'lucide-react';

// Mock iPhone Screenshot Components
const PhoneFrame = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative mx-auto ${className}`}>
    <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
      <div className="bg-white rounded-[2.5rem] overflow-hidden">
        <div className="bg-black h-7 rounded-t-[2.5rem] flex items-center justify-center">
          <div className="w-16 h-1 bg-white rounded-full"></div>
        </div>
        <div className="h-[600px] bg-gray-50 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const DashboardScreen = () => (
  <div className="p-4 h-full">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">WordMaster</h1>
        <p className="text-gray-600">Ready to learn?</p>
      </div>
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
        <User className="w-5 h-5 text-white" />
      </div>
    </div>
    
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900">Travel Essentials</h3>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">156 words</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">3 groups due for review</span>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900">Business English</h3>
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Custom</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="text-sm text-gray-600">1 group due tomorrow</span>
        </div>
      </div>
    </div>
    
    <div className="mt-8 space-y-3">
      <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium">
        Start Learning
      </button>
      <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium">
        Start Review
      </button>
    </div>
  </div>
);

const LearningScreen = () => (
  <div className="p-4 h-full">
    <div className="flex items-center justify-between mb-6">
      <button className="p-2 rounded-full bg-gray-100">
        <ArrowLeft className="w-5 h-5" />
      </button>
      <div className="flex-1 mx-4">
        <div className="bg-gray-200 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
        </div>
      </div>
      <span className="text-sm text-gray-600">4/10</span>
    </div>
    
    <div className="text-center mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Match the words</h2>
      <p className="text-gray-600">Drag and drop to match words with their translations</p>
    </div>
    
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-200">
          <span className="font-medium text-blue-900">Restaurant</span>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg border-2 border-purple-200">
          <span className="font-medium text-purple-900">Ресторан</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 p-3 rounded-lg border-2 border-green-200">
          <span className="font-medium text-green-900">Airport</span>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg border-2 border-orange-200">
          <span className="font-medium text-orange-900">Аеропорт</span>
        </div>
      </div>
    </div>
    
    <div className="mt-8">
      <button className="w-full bg-gray-200 text-gray-400 py-3 rounded-xl font-medium cursor-not-allowed">
        Continue
      </button>
    </div>
  </div>
);

const ReviewScreen = () => (
  <div className="p-4 h-full">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-gray-900">Review Queue</h2>
      <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded-full">5 due</span>
    </div>
    
    <div className="space-y-3">
      <div className="bg-white p-4 rounded-xl shadow-sm border border-red-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900">Travel Group #1</h3>
          <span className="text-xs text-red-600">Overdue</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">10 words • Last reviewed 2 days ago</p>
        <button className="w-full bg-red-500 text-white py-2 rounded-lg text-sm font-medium">
          Review Now
        </button>
      </div>
      
      <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900">Business Group #2</h3>
          <span className="text-xs text-orange-600">Due Today</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">8 words • Last reviewed 1 day ago</p>
        <button className="w-full bg-orange-500 text-white py-2 rounded-lg text-sm font-medium">
          Review Now
        </button>
      </div>
      
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900">Family Group #1</h3>
          <span className="text-xs text-gray-600">Due Tomorrow</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">12 words • Last reviewed 2 days ago</p>
        <button className="w-full bg-gray-200 text-gray-600 py-2 rounded-lg text-sm font-medium">
          Review Tomorrow
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
  <div className="p-4 h-full">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-gray-900">Introduction</h2>
      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">Step 1/7</span>
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
  <div className="p-4 h-full">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-gray-900">Recall</h2>
      <span className="text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Step 2/7</span>
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
  <div className="p-4 h-full">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-gray-900">Gap Fill</h2>
      <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Step 4/7</span>
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
        <div className="bg-green-100 text-green-900 px-3 py-2 rounded-lg font-medium cursor-pointer">
          airport
        </div>
        <div className="bg-yellow-100 text-yellow-900 px-3 py-2 rounded-lg font-medium cursor-pointer">
          hotel
        </div>
        <div className="bg-pink-100 text-pink-900 px-3 py-2 rounded-lg font-medium cursor-pointer">
          terminal
        </div>
      </div>
    </div>
  </div>
);

const BuildSentenceScreen = () => (
  <div className="p-4 h-full">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-gray-900">Build Sentence</h2>
      <span className="text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">Step 5/7</span>
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
  <div className="p-4 h-full">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-gray-900">Creative Task</h2>
      <span className="text-sm bg-pink-100 text-pink-700 px-2 py-1 rounded-full">Step 6/7</span>
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
  <div className="p-4 h-full">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-gray-900">Fix Mistakes</h2>
      <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded-full">Step 7/7</span>
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
);
// Helper components
const User = ({ className }: { className?: string }) => (
  <div className={`rounded-full bg-gray-400 ${className}`}></div>
);

const ArrowLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
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
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
                <h3 className="text-2xl font-bold text-gray-900">Smart Learning Dashboard</h3>
              </div>
              <p className="text-lg text-gray-600">
                Organize your vocabulary with pre-generated topic lists and custom collections. 
                Track your progress with intelligent review scheduling that adapts to your learning pace.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Pre-generated topic lists (Travel, Business, etc.)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Custom word collections</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Intelligent review scheduling</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <PhoneFrame className="w-72">
                <DashboardScreen />
              </PhoneFrame>
            </div>
          </div>

          {/* Feature 2: Introduction Exercise */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 flex justify-center">
              <PhoneFrame className="w-72">
                <IntroductionScreen />
              </PhoneFrame>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">1. Introduction & Context</h3>
              </div>
              <p className="text-lg text-gray-600">
                Start with comprehensive word introductions featuring translations, definitions, 
                and AI-generated example sentences. Interactive elements reveal grammatical forms and usage patterns.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Native pronunciation audio</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">AI-generated contextual examples</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Interactive grammatical forms</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3: Recall Exercise */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Brain className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">2. Active Recall Testing</h3>
              </div>
              <p className="text-lg text-gray-600">
                Test your memory with active recall exercises. Type or speak the correct word 
                based on translations and contextual clues to strengthen neural pathways.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Type or voice input options</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Contextual clues and hints</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Immediate feedback and correction</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <PhoneFrame className="w-72">
                <RecallScreen />
              </PhoneFrame>
            </div>
          </div>
          {/* Feature 4: Match Exercise */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 flex justify-center">
              <PhoneFrame className="w-72">
                <LearningScreen />
              </PhoneFrame>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">3. Drag & Drop Matching</h3>
              </div>
              <p className="text-lg text-gray-600">
                Reinforce word-meaning connections through intuitive drag-and-drop matching. 
                Visual and kinesthetic learning helps cement vocabulary in long-term memory.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Intuitive drag-and-drop interface</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Visual word-meaning associations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Immediate visual feedback</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 5: Gap Fill Exercise */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Plus className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">4. Contextual Gap Fill</h3>
              </div>
              <p className="text-lg text-gray-600">
                Practice words in realistic contexts with AI-generated stories and passages. 
                Fill in the blanks to understand how vocabulary works in natural language.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">AI-generated contextual stories</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Multiple difficulty levels</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Natural language patterns</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <PhoneFrame className="w-72">
                <GapFillScreen />
              </PhoneFrame>
            </div>
          </div>

          {/* Feature 6: Build Sentence Exercise */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 flex justify-center">
              <PhoneFrame className="w-72">
                <BuildSentenceScreen />
              </PhoneFrame>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">5. Sentence Construction</h3>
              </div>
              <p className="text-lg text-gray-600">
                Build translation skills by constructing sentences word by word. 
                Learn proper grammar structure while reinforcing vocabulary knowledge.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Word-by-word construction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Grammar structure learning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Translation skill development</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 7: Creative Tasks */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-pink-100 p-2 rounded-lg">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">6. Creative Expression</h3>
              </div>
              <p className="text-lg text-gray-600">
                Apply your vocabulary creatively by writing original sentences and stories. 
                This exercise develops fluency and helps you think naturally in the target language.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Original sentence creation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Grouped word challenges</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Fluency development</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <PhoneFrame className="w-72">
                <CreativeTaskScreen />
              </PhoneFrame>
            </div>
          </div>

          {/* Feature 8: Error Correction */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 flex justify-center">
              <PhoneFrame className="w-72">
                <ErrorCorrectionScreen />
              </PhoneFrame>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-red-100 p-2 rounded-lg">
                  <RotateCcw className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">7. Targeted Error Correction</h3>
              </div>
              <p className="text-lg text-gray-600">
                Focus on your mistakes with targeted practice sessions. 
                Review and correct errors to ensure complete understanding before moving forward.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Mistake identification and review</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Targeted practice sessions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Complete understanding verification</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Feature 9: Spaced Repetition */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <RotateCcw className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Scientific Spaced Repetition</h3>
              </div>
              <p className="text-lg text-gray-600">
                Our advanced spaced repetition system schedules reviews at optimal intervals 
                to maximize long-term retention and minimize study time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Optimized review intervals (1, 3, 7 days)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Automatic difficulty adjustment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Long-term retention tracking</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <PhoneFrame className="w-72">
                <ReviewScreen />
              </PhoneFrame>
            </div>
          </div>

          {/* Feature 10: AI Generation */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 flex justify-center">
              <PhoneFrame className="w-72">
                <AIGenerationScreen />
              </PhoneFrame>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-pink-100 p-2 rounded-lg">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">AI-Powered Word Generation</h3>
              </div>
              <p className="text-lg text-gray-600">
                Generate custom vocabulary lists on any topic using AI. Simply enter a theme 
                and difficulty level to get relevant words with translations and examples.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Any topic or theme</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Difficulty level selection (A1-C2)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Instant translations and examples</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 11: Flashcards */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Smart Flashcards</h3>
              </div>
              <p className="text-lg text-gray-600">
                Quick flashcard drills with native pronunciation and smart categorization. 
                Easily add words to your learning lists for deeper study.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Native pronunciation audio</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">One-tap learning list addition</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Progress tracking</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <PhoneFrame className="w-72">
                <FlashcardsScreen />
              </PhoneFrame>
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