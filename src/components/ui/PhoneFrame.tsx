import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className = "" }) => {
  return (
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
};

export default PhoneFrame;
