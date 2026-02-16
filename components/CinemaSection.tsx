
import React from 'react';

const CLIPS = [
  { url: 'https://maanilovesara.com/stargazing.JPG', title: 'Frame 01' },
  { url: 'https://maanilovesara.com/valentines-day-first.jpg', title: 'Frame 02' },
  { url: 'https://maanilovesara.com/first-time-at-your-home.jpg', title: 'Frame 03' },
  { url: 'https://maanilovesara.com/best-not.jpg', title: 'Frame 04' },
  { url: 'https://maanilovesara.com/me-choking-u-cs.jpg', title: 'Frame 05' },
    { url: '', title: 'Frame 06' },
        { url: '', title: 'Frame 07' },
                { url: '', title: 'Frame 08' },
                                { url: '', title: 'Frame 09' },




];

const CinemaSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#111] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16 flex flex-col items-center">
        <h2 className="font-serif-editorial text-5xl md:text-7xl uppercase tracking-tighter text-white leading-none">
          2 years of <span className="italic italic-font text-[#d64933]">Us</span>
        </h2>
        <p className="font-handwriting text-2xl text-white/40 mt-4 italic">we made so much memories together :(</p>
      </div>

      <div className="relative flex space-x-4 animate-scroll whitespace-nowrap">
        {/* Double the list for infinite scroll feel */}
        {[...CLIPS, ...CLIPS].map((clip, i) => (
          <div key={i} className="inline-block relative group">
            {/* Film Sprockets */}
            <div className="absolute top-0 left-0 right-0 h-6 flex justify-around items-center px-4 bg-black/80 z-10">
              {[...Array(6)].map((_, j) => (
                <div key={j} className="w-3 h-3 bg-white/10 rounded-sm"></div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-6 flex justify-around items-center px-4 bg-black/80 z-10">
              {[...Array(6)].map((_, j) => (
                <div key={j} className="w-3 h-3 bg-white/10 rounded-sm"></div>
              ))}
            </div>

            <div className="w-[400px] aspect-video relative overflow-hidden bg-gray-900 border-x-8 border-black">
              <img 
                src={clip.url} 
                className="w-full h-full object-cover grayscale brightness-75 contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                alt={clip.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <p className="absolute bottom-8 left-6 font-serif-editorial text-xs tracking-widest text-white/50 uppercase">
                {clip.title} // SCENE: FOREVER
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CinemaSection;
