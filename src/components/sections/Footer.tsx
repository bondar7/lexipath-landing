import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <img
              src='../public/logo.webp'
              alt='Lexipath Logo'
              className='size-12 rounded-2xl'
            >
            </img>
            <span className="ml-3 text-lg md:text-xl font-bold">Lexipath</span>
          </div>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            Your path to better vocabulary
          </p>
          <p className="text-gray-500 text-xs md:text-sm">
            © 2025 Lexipath. Made with ❤️ for language learners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
