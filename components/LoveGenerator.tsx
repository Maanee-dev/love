
import React, { useState } from 'react';
import { generateLoveNote } from '../services/geminiService';
import { Sparkles, Heart } from 'lucide-react';

const LoveGenerator: React.FC = () => {
  const [note, setNote] = useState<string>("Click the heart to reveal a new reason why my soul chose yours...");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    const newNote = await generateLoveNote();
    setNote(newNote);
    setIsLoading(false);
  };

  return (
    <section id="ai" className="py-32 px-6 bg-[#f0ede9] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12 inline-block px-4 py-2 bg-white/50 backdrop-blur rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold text-[#4a6fa5]">
          A Constant Evolution of Love
        </div>
        
        <div className="min-h-[200px] flex items-center justify-center px-4">
          <p className={`font-serif-editorial text-3xl md:text-5xl italic leading-tight text-[#2d3e50] transition-all duration-700 ${isLoading ? 'opacity-30 blur-sm scale-95' : 'opacity-100'}`}>
            "{note}"
          </p>
        </div>

        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="mt-16 relative group"
        >
          <div className="absolute -inset-4 bg-[#d64933]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
          <div className={`p-6 bg-white rounded-full shadow-lg border border-[#d64933]/20 relative z-10 transition-transform active:scale-90 ${isLoading ? 'animate-pulse' : 'hover:-translate-y-1'}`}>
            <Heart className={`w-10 h-10 ${isLoading ? 'fill-[#d64933]/50' : 'fill-[#d64933]'} text-transparent transition-colors`} />
          </div>
          <div className="mt-4 font-handwriting text-xl text-[#d64933]">generate a new note</div>
        </button>
      </div>
      
      {/* Decorative background script */}
      <div className="absolute -right-20 bottom-10 font-script-large text-[15vw] opacity-[0.05] -rotate-12 pointer-events-none select-none">
        eternity
      </div>
    </section>
  );
};

export default LoveGenerator;
