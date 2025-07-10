import React, { useEffect, useRef, useState } from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className = "" }) => {
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Start the hint animation immediately
            setShowScrollHint(true);
            setHasAnimated(true);
            
            // Auto-scroll demo on desktop
            if (window.innerWidth >= 1024 && contentRef.current) {
              const content = contentRef.current;
              const maxScroll = content.scrollHeight - content.clientHeight;
              
              if (maxScroll > 0) {
                // Smooth scroll down after showing the hint
                setTimeout(() => {
                  content.scrollTo({ top: maxScroll * 0.3, behavior: 'smooth' });
                }, 800);
                
                // Scroll back up after 2 seconds
                setTimeout(() => {
                  content.scrollTo({ top: 0, behavior: 'smooth' });
                }, 2800);
              }
            }
            
            // No timer - hint stays until user interaction
          }
        });
      },
      { threshold: 0.5 }
    );

    if (frameRef.current) {
      observer.observe(frameRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Listen for ANY scroll events within the phone frame (including from child components)
  useEffect(() => {
    if (!showScrollHint) return;

    const hideHint = (e: Event) => {
      console.log('User interaction detected, hiding hint');
      setShowScrollHint(false);
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      console.log('Adding scroll listener to capture all scroll events');
      
      // Listen for scroll events that bubble up from any child element
      contentElement.addEventListener('scroll', hideHint, { passive: true, capture: true });
      
      // Also listen for wheel events anywhere in the phone frame
      contentElement.addEventListener('wheel', hideHint, { passive: true });
      
      // Listen for touch events (mobile scrolling)
      contentElement.addEventListener('touchstart', hideHint, { passive: true });
      contentElement.addEventListener('touchmove', hideHint, { passive: true });
      
      return () => {
        console.log('Removing all interaction listeners');
        contentElement.removeEventListener('scroll', hideHint, true);
        contentElement.removeEventListener('wheel', hideHint);
        contentElement.removeEventListener('touchstart', hideHint);
        contentElement.removeEventListener('touchmove', hideHint);
      };
    }
  }, [showScrollHint]);

  return (
    <div ref={frameRef} className={`relative mx-auto ${className}`}>
      <div className="relative bg-black rounded-[2.5rem] md:rounded-[3rem] p-2 shadow-2xl transform hover:scale-102 transition-transform duration-300 w-60 md:w-80 lg:w-88">
        
        {/* Scroll hint overlay with fade in animation */}
        {showScrollHint && (
          <div className="absolute inset-0 z-10 pointer-events-none animate-fade-in">
            {/* Pulsing glow effect */}
            <div className="absolute inset-0 bg-blue-400/20 rounded-[2.5rem] md:rounded-[3rem] animate-pulse"></div>
            
            {/* Scroll indicator - now shown on all devices */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg flex items-center space-x-2 animate-bounce">
                <div className="w-1 h-4 bg-gray-600 rounded-full"></div>
                <span className="text-xs text-gray-700 font-medium">Scroll to explore</span>
                <div className="flex flex-col space-y-1">
                  <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-gray-600"></div>
                  <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-gray-600"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
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
          
          <div 
            ref={contentRef}
            className="h-[420px] md:h-[560px] lg:h-[620px] bg-gray-50 overflow-hidden hover:overflow-y-auto transition-all duration-300 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#D1D5DB transparent'
            }}
          >
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
