import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative mx-auto ${className}`}>
      <div className="relative bg-black rounded-[2.5rem] md:rounded-[3rem] p-2 shadow-2xl transform hover:scale-102 transition-transform duration-300 w-60 md:w-80 lg:w-88">
        
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
          {/* Status bar with Dynamic Island */}
          <div className="bg-white h-8 md:h-10 lg:h-12 flex items-center justify-center relative pt-2">
            {/* Dynamic Island (iPhone pill shape) */}
            <div className="bg-black rounded-full w-20 md:w-24 lg:w-28 h-5 md:h-6 lg:h-7 flex items-center justify-center">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-2 md:w-2.5 lg:w-3 h-2 md:h-2.5 lg:h-3 bg-gray-800 rounded-full"></div>
                <div className="w-1 md:w-1.5 lg:w-2 h-1 md:h-1.5 lg:h-2 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="h-[420px] md:h-[560px] lg:h-[620px] bg-gray-50 overflow-hidden">
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
