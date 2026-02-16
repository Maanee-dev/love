
import React from 'react';

const ScrollIndicator: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
      <p className="font-serif-editorial text-[10px] tracking-[0.4em] uppercase text-[#2d3e50]/40">Scroll to Explore</p>
      <div className="w-[22px] h-[36px] rounded-full border border-[#2d3e50]/20 flex justify-center p-1.5">
        <div className="w-[2px] h-[6px] bg-[#d64933] rounded-full scroll-indicator-pin"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
