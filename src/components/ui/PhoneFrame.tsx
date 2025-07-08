import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative mx-auto ${className}`}>
      <div className="relative bg-black rounded-[1.5rem] md:rounded-[2rem] p-1.5 md:p-2 shadow-2xl transform hover:scale-102 transition-transform duration-300 w-60 md:w-80 lg:w-88">
        
        <div className="bg-white rounded-[1rem] md:rounded-[2rem] overflow-hidden relative">
          
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
