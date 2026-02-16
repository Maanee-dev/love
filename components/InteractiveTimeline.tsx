
import React, { useEffect, useRef, useState } from 'react';

const milestones = [
  { date: "JUNE 2023", title: "THE FIRST GLANCE", desc: "Where it all began. That small café on 4th street where the world suddenly felt much smaller." },
  { date: "OCT 2023", title: "THE LATE NIGHTS", desc: "When we realized three hours of talking wasn't enough. The stars witnessed our first secrets." },
  { date: "DEC 2023", title: "FIRST WINTER", desc: "Sharing coats and finding warmth in each other's presence. Every snowflake felt like a blessing." },
  { date: "MAR 2024", title: "BEYOND DREAMS", desc: "Starting to plan a future we both believe in. A promise whispered in the quiet of dawn." }
];

const InteractiveTimeline: React.FC = () => {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const rect = scrollRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Calculate progress through the section
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - viewHeight)));
      const index = Math.min(milestones.length - 1, Math.floor(progress * milestones.length));
      
      if (index !== active) setActive(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [active]);

  return (
    <div ref={scrollRef} className="relative min-h-[300vh] py-32 px-6">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-12 relative z-10">
            <div className="font-serif-editorial text-xs tracking-[0.5em] uppercase opacity-30 mb-8">Our Chronicles</div>
            <div className="h-[400px] relative">
              {milestones.map((m, i) => (
                <div 
                  key={i} 
                  className={`absolute inset-0 transition-all duration-1000 ease-out flex flex-col justify-center ${
                    active === i 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
                  }`}
                >
                  <span className="font-handwriting text-3xl text-[#d64933] mb-2">{m.date}</span>
                  <h3 className="font-serif-editorial text-5xl md:text-7xl uppercase tracking-tighter text-[#2d3e50] mb-6">
                    {m.title}
                  </h3>
                  <p className="font-serif-editorial text-xl md:text-2xl italic text-[#2d3e50]/60 max-w-md leading-relaxed">
                    "{m.desc}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual Representation */}
          <div className="hidden md:block relative h-[500px]">
             {milestones.map((_, i) => (
               <div 
                key={i}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  active === i ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-110 rotate-6 pointer-events-none'
                }`}
               >
                 <div className="bg-white p-4 pb-20 polaroid-shadow transform hover:scale-105 transition-transform duration-500">
                    <img 
                      src={`https://picsum.photos/seed/milestone${i}/800/1000`} 
                      className="w-full h-full object-cover grayscale brightness-90"
                      alt="milestone"
                    />
                 </div>
               </div>
             ))}
          </div>
        </div>
        
        {/* Scroll Progress Indicator */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col space-y-4">
          {milestones.map((_, i) => (
            <div 
              key={i} 
              className={`w-1 h-8 transition-all duration-500 rounded-full ${active === i ? 'bg-[#d64933] h-16' : 'bg-[#2d3e50]/10'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTimeline;
