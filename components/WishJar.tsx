
import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const WISHES = [
  "A spontaneous road trip to nowhere.",
  "Breakfast in bed, exactly how you like it.",
  "One whole day of zero chores, only pampering.",
  "A sunset picnic at our favorite spot.",
  "A handwritten letter delivered by mail.",
  "A 'Yes Day' where I say yes to everything.",
  "Unlimited hugs for the next 24 hours."
];

const WishJar: React.FC = () => {
  const [currentWish, setCurrentWish] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const pullWish = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentWish(null);
    
    setTimeout(() => {
      const randomWish = WISHES[Math.floor(Math.random() * WISHES.length)];
      setCurrentWish(randomWish);
      setIsAnimating(false);
    }, 800);
  };

  return (
    <div className="relative py-20 bg-white flex flex-col items-center justify-center overflow-hidden min-h-[600px]">
      <div className="text-center mb-12 space-y-4">
        <h2 className="font-serif-editorial text-5xl uppercase tracking-tighter text-[#2d3e50]">The Jar of <span className="italic text-[#d64933]">Somedays</span></h2>
        <p className="font-handwriting text-xl text-[#2d3e50]/60 italic">Click the jar to claim a promise</p>
      </div>

      <div className="relative group cursor-pointer" onClick={pullWish}>
        {/* Jar Visual */}
        <div className={`w-48 h-64 border-4 border-[#2d3e50]/10 rounded-t-[40px] rounded-b-[20px] relative transition-transform duration-500 ${isAnimating ? 'scale-95 rotate-3' : 'group-hover:scale-105'}`}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2d3e50]/5 rounded-full -mt-2 border border-black/5"></div>
          
          {/* Reflections */}
          <div className="absolute top-8 left-4 w-2 h-32 bg-white/40 rounded-full"></div>
          
          {/* Paper scraps inside */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1 w-32">
             {[...Array(8)].map((_, i) => (
               <div key={i} className="w-8 h-4 bg-[#fdfcfb] border border-black/5 rotate-[15deg] transform hover:translate-y-[-10px] transition-transform"></div>
             ))}
          </div>
        </div>

        {/* Wish Card Reveal */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 transition-all duration-700 ${currentWish ? 'opacity-100 scale-100 translate-y-[-120%]' : 'opacity-0 scale-50 pointer-events-none'}`}>
          <div className="bg-[#fdfcfb] p-6 polaroid-shadow border border-[#d64933]/10 text-center space-y-4">
             <div className="flex justify-center text-[#d64933] opacity-30"><Sparkles size={20}/></div>
             <p className="font-serif-editorial text-lg tracking-widest uppercase text-[#4a6fa5] text-[10px]">Good for one:</p>
             <p className="font-handwriting text-3xl text-[#d64933] leading-tight">
               {currentWish}
             </p>
             <div className="pt-4 border-t border-black/5">
                <p className="font-serif-editorial text-[9px] uppercase tracking-[0.3em] opacity-30">Redeemable whenever you need a smile</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishJar;
