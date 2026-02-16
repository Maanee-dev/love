
import React from 'react';

const FLOWERS = [
  { name: "Lavender", trait: "For your calming presence", meaning: "You are the peace in my storm.", color: "text-purple-400" },
  { name: "Wild Rose", trait: "For your resilient spirit", meaning: "Beautiful, fierce, and entirely yourself.", color: "text-pink-400" },
  { name: "Eucalyptus", trait: "For your healing soul", meaning: "Just being near you makes me feel whole.", color: "text-green-500" },
  { name: "Marigold", trait: "For your radiant joy", meaning: "The sun follows you wherever you go.", color: "text-yellow-500" }
];

const GreenhouseSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="font-serif-editorial text-xs tracking-[0.5em] uppercase text-[#556b2f]">The Botanical Garden</h2>
              <p className="font-serif-editorial text-5xl md:text-7xl uppercase tracking-tighter text-[#2d3e50]">
                A Love that <span className="italic italic-font text-[#d64933]">Blooms</span>
              </p>
            </div>
            <p className="font-serif-editorial text-xl text-[#2d3e50]/60 leading-relaxed max-w-md">
              Like a garden in perpetual spring, every facet of your personality is a flower I've carefully pressed and saved in the pages of my heart.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {FLOWERS.map((flower, i) => (
              <div key={i} className="group relative bg-[#f9f8f6] p-8 rounded-sm border border-black/5 flex flex-col items-center text-center space-y-4 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-125 transition-transform duration-500 ${flower.color}`}>
                  {/* Simplistic botanical icon representation */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 opacity-50">
                    <path d="M12 2C12 2 12 10 12 10M12 10C12 10 4 14 4 18C4 22 12 22 12 22M12 10C12 10 20 14 20 18C20 22 12 22 12 22" />
                  </svg>
                </div>
                <h4 className="font-serif-editorial text-[10px] tracking-widest uppercase opacity-40">{flower.name}</h4>
                <p className="font-serif-editorial text-lg font-bold text-[#2d3e50]">{flower.trait}</p>
                <div className="h-0 group-hover:h-12 overflow-hidden transition-all duration-500">
                  <p className="font-handwriting text-xl text-[#d64933] italic mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    "{flower.meaning}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative leaf background */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none rotate-45 translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 100 100" fill="#556b2f">
          <path d="M50 0C50 0 100 50 50 100C50 100 0 50 50 0" />
        </svg>
      </div>
    </section>
  );
};

export default GreenhouseSection;
