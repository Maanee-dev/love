
import React from 'react';
import ScrollIndicator from './ScrollIndicator';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-[0.03] select-none">
         <span className="font-script-large text-[40vw] leading-none whitespace-nowrap">Beloved</span>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
        <h1 className="font-script-large text-7xl md:text-[10rem] text-[#d64933] leading-[0.6] mb-4">
        to my whole world
        </h1>
        
        <div className="space-y-4">
          <p className="font-serif-editorial text-2xl md:text-5xl uppercase tracking-tighter leading-none text-[#2d3e50]">
            <br />
            you feel like home to me than any house ever did 
          </p>
          <p className="font-serif-editorial text-lg md:text-xl italic text-[#4a6fa5] tracking-widest uppercase mt-4">
            thank you for always sticking up to me and making me feel loved.
          </p>
        </div>
      </div>

      <div className="mt-20 relative w-full max-w-5xl grid grid-cols-12 gap-4 h-[400px]">
        {/* Overlapping Image Collage */}
        <div className="col-start-1 col-end-5 md:col-start-2 md:col-end-6 relative z-10 rotate-[-5deg] transition-transform hover:rotate-0 duration-500">
           <div className="bg-white p-3 pt-3 pb-12 polaroid-shadow w-full aspect-[3/4]">
             <img src="https://maanilovesara.com/candid.JPG" alt="Us" className="w-full h-full object-cover grayscale brightness-90 contrast-110" />
             <p className="font-handwriting text-2xl text-[#d64933] mt-4 text-center"></p>
           </div>
        </div>
        
        <div className="col-start-6 col-end-12 md:col-start-7 md:col-end-11 relative z-20 rotate-[3deg] transition-transform hover:rotate-0 duration-500 mt-12">
           <div className="bg-white p-3 pt-3 pb-12 polaroid-shadow w-full aspect-[4/5]">
             <img src="https://maanilovesara.com/adventure2.JPG" alt="Us" className="w-full h-full object-cover sepia-[.2]" />
             <p className="font-handwriting text-2xl text-[#d64933] mt-4 text-center"></p>
           </div>
        </div>
      </div>

      {/* Mouse Scroller Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
