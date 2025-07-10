import React from 'react';
import { Brain } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <Brain className="w-5 md:w-6 h-5 md:h-6 text-white" />
            </div>
            <span className="ml-3 text-lg md:text-xl font-bold">Lexipath</span>
          </div>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            The next generation vocabulary app
          </p>
          <p className="text-gray-500 text-xs md:text-sm">
            © 2025 Lexipath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
