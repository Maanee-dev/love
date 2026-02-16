
import React from 'react';

const STOPS = [
  { city: "PARIS", year: "2024", note: "The city of lights felt dim compared to your smile.", img: "https://picsum.photos/seed/paris/400/500" },
  { city: "TOKYO", year: "2025", note: "Someday, we'll get lost in the neon streets together.", img: "https://picsum.photos/seed/tokyo/400/500" },
  { city: "LONDON", year: "2023", note: "Rainy days are better when shared under one umbrella.", img: "https://picsum.photos/seed/london/400/500" },
  { city: "ROME", year: "2024", note: "A love as eternal as the city itself.", img: "https://picsum.photos/seed/rome/400/500" }
];

const TravelScrapbook: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16 flex justify-between items-end">
        <div>
          <h2 className="font-serif-editorial text-5xl uppercase tracking-tighter text-[#2d3e50]">The Passport of <span className="italic">Dreams</span></h2>
          <p className="font-handwriting text-2xl text-[#d64933] mt-2">places we go, and places we'll be</p>
        </div>
        <div className="hidden md:block">
          <p className="font-serif-editorial text-[10px] tracking-widest uppercase opacity-30">Scroll to travel →</p>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-12 px-6 space-x-12 scrollbar-hide no-scrollbar">
        {STOPS.map((stop, i) => (
          <div key={i} className="flex-shrink-0 w-80 group">
            <div className="relative mb-8">
              {/* Passport Stamp Decoration */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-[#d64933]/20 rounded-full flex items-center justify-center -rotate-12 z-10">
                <p className="font-serif-editorial text-[8px] uppercase tracking-widest text-[#d64933] text-center leading-none">
                  {stop.city}<br/>{stop.year}
                </p>
              </div>
              
              <div className="bg-white p-3 pt-3 pb-12 polaroid-shadow transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
                <img src={stop.img} alt={stop.city} className="w-full aspect-[3/4] object-cover grayscale brightness-90 contrast-110" />
                <div className="mt-4 flex justify-between items-center">
                   <p className="font-serif-editorial text-xs tracking-widest uppercase opacity-40">{stop.city}</p>
                   <p className="font-handwriting text-xl text-[#d64933]">{stop.year}</p>
                </div>
              </div>
            </div>
            <p className="font-serif-editorial text-lg italic text-[#2d3e50]/70 leading-relaxed px-2">
              "{stop.note}"
            </p>
          </div>
        ))}
        {/* Placeholder for future */}
        <div className="flex-shrink-0 w-80 flex flex-col items-center justify-center border-2 border-dashed border-[#2d3e50]/10 rounded-sm">
           <p className="font-serif-editorial text-xs tracking-widest uppercase opacity-20">Destination Pending</p>
           <p className="font-handwriting text-2xl text-[#d64933] mt-4">Everywhere with you.</p>
        </div>
      </div>
    </section>
  );
};

export default TravelScrapbook;
