
import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const TRAITS = [
  "ADVENTURE", "PATIENCE", "HUMOR", "SUPPORT", "KINDNESS", "PASSION", "TRUST", "DREAMS"
];

const InteractiveDial: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [selected, setSelected] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    const extra = 360 * 5 + Math.random() * 360;
    const newRotation = rotation + extra;
    setRotation(newRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
      const actualRotation = newRotation % 360;
      const index = Math.floor(((360 - actualRotation + 22.5) % 360) / 45);
      setSelected(TRAITS[index]);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center py-20 bg-white">
      <div className="text-center mb-16 space-y-2">
        <h3 className="font-serif-editorial text-4xl uppercase tracking-tighter text-[#2d3e50]">Soul Ingredients</h3>
        <p className="font-handwriting text-xl text-[#d64933]">what makes us, us</p>
      </div>

      <div className="relative">
        {/* Needle */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-12 bg-[#d64933] z-20" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}></div>
        
        <div 
          onClick={spin}
          className="w-80 h-80 rounded-full border-[12px] border-[#2d3e50] relative transition-transform duration-[3000ms] cubic-bezier(0.15, 0, 0.15, 1) shadow-2xl cursor-pointer"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {TRAITS.map((trait, i) => (
            <div 
              key={trait} 
              className="absolute w-full h-full flex justify-center pt-8"
              style={{ transform: `rotate(${i * 45}deg)` }}
            >
              <span className="font-serif-editorial text-[10px] font-bold tracking-[0.2em] uppercase text-[#2d3e50]/40">
                {trait}
              </span>
            </div>
          ))}
          <div className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full border-4 border-[#2d3e50] flex items-center justify-center">
             <div className="w-1 h-1 bg-[#d64933] rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="mt-16 h-12 flex items-center justify-center">
        {selected && !isSpinning ? (
          <p className="font-serif-editorial text-2xl italic text-[#2d3e50]">
            "Our love is built on <span className="text-[#d64933]">{selected.toLowerCase()}</span>."
          </p>
        ) : isSpinning ? (
          <div className="flex space-x-2">
            {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-[#d64933]/20 animate-pulse"></div>)}
          </div>
        ) : (
          <button onClick={spin} className="flex items-center space-x-3 text-[#2d3e50]/40 hover:text-[#d64933] transition-colors">
            <RotateCcw size={16} />
            <span className="font-serif-editorial uppercase tracking-widest text-xs">Spin the wheel</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default InteractiveDial;
