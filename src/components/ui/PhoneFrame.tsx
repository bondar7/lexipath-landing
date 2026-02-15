import React, { useEffect, useRef, useState } from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className = "" }) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={frameRef} className={`relative mx-auto ${className}`}>
      <div className="relative bg-black rounded-[2.5rem] md:rounded-[3rem] p-1.5 shadow-2xl w-60 md:w-[21rem] lg:w-[22rem]">
        
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
          {/* Status bar with Dynamic Island */}
          <div className="bg-white h-7 md:h-9 lg:h-10 flex items-center justify-center relative pt-1">
            {/* Dynamic Island (iPhone pill shape) */}
            <div className="bg-black rounded-full w-16 md:w-20 lg:w-24 h-4 md:h-5 lg:h-6 flex items-center justify-center">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-1.5 md:w-2 lg:w-2.5 h-1.5 md:h-2 lg:h-2.5 bg-gray-800 rounded-full"></div>
                <div className="w-1 md:w-1.5 lg:w-2 h-1 md:h-1.5 lg:h-2 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div
            ref={contentRef}
            className="h-[460px] md:h-[600px] lg:h-[660px] bg-background overflow-y-auto phone-scroll"
            style={{
              scrollbarWidth: 'none',
            }}
          >
            {children}
          </div>
          
          {/* Home indicator */}
          <div className="bg-white h-5 md:h-7 flex items-center justify-center">
            <div className="w-20 md:w-28 h-0.5 md:h-1 bg-gray-900 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
