import React from 'react';

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
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center space-x-2 text-base md:text-lg shadow-lg"
            >
              <span>Open the App</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
