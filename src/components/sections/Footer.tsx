import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <img
              src='/logo.webp'
              alt='Lexipath Logo - AI-Powered Vocabulary Learning App'
              className='size-12 rounded-2xl'
              width="48"
              height="48"
            />
            <h2 className="ml-3 text-lg md:text-xl font-bold">Lexipath</h2>
          </div>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            Your path to better vocabulary
          </p>
          
          {/* Privacy Policy Link */}
          <div className="mb-4">
            <a 
              href="/privacy" 
              className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm underline"
            >
              Privacy Policy
            </a>
          </div>
          
          <address className="text-gray-500 text-xs md:text-sm not-italic">
            © 2025 Lexipath. Made with ❤️ for language learners.
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
