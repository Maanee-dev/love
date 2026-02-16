
import React from 'react';
import { Coffee, Heart, Music } from 'lucide-react';

const DailyReminderBox: React.FC = () => {
  return (
    <section id="ai" className="py-32 px-6 bg-[#f0ede9] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12 inline-block px-4 py-2 bg-white/50 backdrop-blur rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold text-[#4a6fa5]">
        </div>
        
        <div className="bg-white p-12 shadow-2xl border border-black/5 rotate-1 hover:rotate-0 transition-transform duration-500">
          <div className="flex justify-center space-x-4 mb-8 text-[#d64933]/30">
            <Coffee size={24} />
            <Heart size={24} />
            <Music size={24} />
          </div>
          
          <p className="font-handwriting text-4xl md:text-6xl text-[#2d3e50] leading-tight">
            "You are the most prettiest and sweetest girl ever and i will always and forever love you so much mmmwah :) "
          </p>
          
          <div className="mt-12 pt-8 border-t border-black/5">
            <p className="font-serif-editorial text-sm tracking-[0.5em] uppercase opacity-40"></p>
          </div>
        </div>
      </div>
      
      {/* Decorative background script */}
      <div className="absolute -right-20 bottom-10 font-script-large text-[15vw] opacity-[0.05] -rotate-12 pointer-events-none select-none">
        potato
      </div>
    </section>
  );
};

export default DailyReminderBox;
