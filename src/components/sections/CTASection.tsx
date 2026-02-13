import React from 'react';
import { ChevronRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Vocabulary Learning?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Join thousands of language learners who are already experiencing the future of vocabulary acquisition.
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex justify-center">
            <a
              href="https://app.lexipath.xyz"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center space-x-2 text-sm md:text-base shadow-lg"
            >
              <span>Open the App</span>
              <ChevronRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
