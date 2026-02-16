
import React, { useState } from 'react';
import { Music2 } from 'lucide-react';

const TRACKS = [
  { title: "Our First Dance", lyrics: "Everything is better when we're together...", note: "This played in that tiny kitchen on our first anniversary." },
  { title: "Midnight Car Rides", lyrics: "Under the stars, just you and me...", note: "Remember the drive to the coast? This was on repeat." },
  { title: "Quiet Mornings", lyrics: "Slowly waking up to the sound of your heart...", note: "The song that always reminds me of lazy Sunday coffees." }
];

const VinylPlayer: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-32 bg-[#fdfcfb] border-y border-[#2d3e50]/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative group flex justify-center items-center">
          {/* Record Sleeve */}
          <div className="absolute -left-10 w-full h-full bg-[#2d3e50] opacity-5 -rotate-6 rounded-sm"></div>
          
          {/* Vinyl Record */}
          <div 
            className={`relative w-80 h-80 md:w-96 md:h-96 rounded-full bg-[#111] shadow-2xl flex items-center justify-center transition-transform duration-[2000ms] ${isHovered ? 'rotate-[360deg]' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Grooves */}
            <div className="absolute inset-4 rounded-full border border-white/5"></div>
            <div className="absolute inset-12 rounded-full border border-white/5"></div>
            <div className="absolute inset-20 rounded-full border border-white/5"></div>
            
            {/* Center Label */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex flex-col items-center justify-center border-4 border-[#2d3e50]/10 text-center p-4">
              <p className="font-serif-editorial text-[8px] uppercase tracking-widest opacity-40 mb-1">Side A</p>
              <p className="font-serif-editorial text-xs font-bold text-[#2d3e50] uppercase leading-tight">{TRACKS[activeTrack].title}</p>
              <div className="mt-2 w-1 h-1 bg-[#d64933] rounded-full"></div>
            </div>
          </div>

          {/* Tonearm/Needle */}
          <div className={`absolute top-0 right-10 w-4 h-48 bg-[#2d3e50]/10 origin-top transform transition-transform duration-1000 ${isHovered ? 'rotate-[30deg]' : 'rotate-0'}`}>
            <div className="absolute bottom-0 -left-2 w-8 h-8 bg-[#2d3e50] rounded-sm"></div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <Music2 size={24} className="text-[#d64933]" />
            <h3 className="font-serif-editorial text-xs tracking-[0.5em] uppercase opacity-40">The Soundtrack of Us</h3>
          </div>
          
          <div className="space-y-6">
            <h2 className="font-serif-editorial text-5xl md:text-7xl uppercase tracking-tighter text-[#2d3e50] leading-none">
              Melodies that <span className="italic">speak for me.</span>
            </h2>
            
            <div className="bg-[#f5f5f4] p-10 border-l-4 border-[#d64933] space-y-4">
              <p className="font-handwriting text-3xl text-[#d64933] italic">"{TRACKS[activeTrack].lyrics}"</p>
              <p className="font-serif-editorial text-lg text-[#2d3e50]/60 leading-relaxed">
                {TRACKS[activeTrack].note}
              </p>
            </div>

            <div className="flex space-x-4">
              {TRACKS.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveTrack(i)}
                  className={`w-10 h-10 rounded-full border border-[#2d3e50]/20 flex items-center justify-center font-serif-editorial text-xs transition-all ${activeTrack === i ? 'bg-[#2d3e50] text-white scale-110' : 'hover:bg-[#2d3e50]/5'}`}
                >
                  0{i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VinylPlayer;
