
import React from 'react';

const MOODS = [
  { title: "Serenity", desc: "The quiet peace I find in your presence.", img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=400" },
  { title: "Chaos", desc: "Our beautiful, messy adventures.", img: "https://images.unsplash.com/photo-1514117445516-2ecdb9655430?auto=format&fit=crop&q=80&w=400" },
  { title: "Warmth", desc: "The way you hold me on cold nights.", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=400" },
  { title: "Growth", desc: "Building a future together, piece by piece.", img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=400" }
];

const MoodBoard: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[250px]">
          {/* Header Tile */}
          <div className="md:col-span-6 md:row-span-1 flex flex-col justify-center space-y-4">
            <h2 className="font-serif-editorial text-5xl uppercase tracking-tighter text-[#2d3e50]">The Texture <br/> of <span className="italic">Us</span></h2>
            <p className="font-handwriting text-2xl text-[#d64933]">a sensory archive</p>
          </div>

          {/* Large Image Tile */}
          <div className="md:col-span-6 md:row-span-2 relative group overflow-hidden rounded-sm bg-[#f5f5f4]">
            <img 
              src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&q=80&w=800" 
              alt="Texture" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#2d3e50]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-12">
              <p className="font-serif-editorial text-2xl text-white text-center italic leading-relaxed">
                "Like a favorite old book, I find something new every time I read your soul."
              </p>
            </div>
          </div>

          {/* Smaller Grid Tiles */}
          {MOODS.map((mood, i) => (
            <div key={i} className="md:col-span-3 md:row-span-1 relative group bg-[#f5f5f4] overflow-hidden rounded-sm">
              <img src={mood.img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" alt={mood.title} />
              <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-[#2d3e50]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-serif-editorial text-xs uppercase tracking-widest text-white/60 mb-1">{mood.title}</p>
                <p className="font-handwriting text-lg text-white leading-tight">{mood.desc}</p>
              </div>
            </div>
          ))}

          {/* Floating Quote Tile */}
          <div className="md:col-span-6 md:row-span-1 border-2 border-[#d64933]/10 rounded-sm flex items-center justify-center p-12 text-center italic font-serif-editorial text-xl text-[#2d3e50]/60">
            "Everything in this world is better when experienced through the lens of our love."
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodBoard;
