
import React, { useState } from 'react';
import { Star } from 'lucide-react';

const STARS = [
  { id: 1, x: 50, y: 30 },
  { id: 2, x: 70, y: 20 },
  { id: 3, x: 90, y: 30 },
  { id: 4, x: 90, y: 60 },
  { id: 5, x: 50, y: 90 },
  { id: 6, x: 10, y: 60 },
  { id: 7, x: 10, y: 30 },
  { id: 8, x: 30, y: 20 },
];

const CelestialConnection: React.FC = () => {
  const [connected, setConnected] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleStarClick = (id: number) => {
    if (connected.includes(id)) return;
    const nextConnected = [...connected, id];
    setConnected(nextConnected);
    
    if (nextConnected.length === STARS.length) {
      setTimeout(() => setIsComplete(true), 500);
    }
  };

  return (
    <div className="relative w-full h-[600px] bg-[#1a2533] overflow-hidden rounded-sm flex flex-col items-center justify-center group">
      {/* Background Star Field */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's'
            }}
          ></div>
        ))}
      </div>

      <div className="absolute top-12 left-12 z-10 text-white/80">
        <h3 className="font-serif-editorial text-xs tracking-[0.5em] uppercase opacity-40 mb-2">The Night We Met</h3>
        <p className="font-handwriting text-3xl text-[#d64933]">Connecting our stars</p>
      </div>

      <div className="relative w-80 h-80 md:w-96 md:h-96">
        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
          {/* Lines */}
          {connected.map((starId, index) => {
            if (index === 0) return null;
            const start = STARS.find(s => s.id === connected[index - 1]);
            const end = STARS.find(s => s.id === starId);
            if (!start || !end) return null;
            return (
              <line 
                key={index}
                x1={`${start.x}%`} 
                y1={`${start.y}%`} 
                x2={`${end.x}%`} 
                y2={`${end.y}%`} 
                stroke="#d64933" 
                strokeWidth="1" 
                className="opacity-40 animate-in fade-in duration-700"
              />
            );
          })}
          {isComplete && (
            <line 
              x1={`${STARS[STARS.length-1].x}%`} 
              y1={`${STARS[STARS.length-1].y}%`} 
              x2={`${STARS[0].x}%`} 
              y2={`${STARS[0].y}%`} 
              stroke="#d64933" 
              strokeWidth="1" 
              className="opacity-40"
            />
          )}
        </svg>

        {STARS.map((star) => (
          <button
            key={star.id}
            onClick={() => handleStarClick(star.id)}
            style={{ left: `${star.x}%`, top: `${star.y}%` }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 group/star transition-all duration-500 ${connected.includes(star.id) ? 'scale-125' : 'hover:scale-150'}`}
          >
            <div className={`w-3 h-3 rounded-full flex items-center justify-center ${connected.includes(star.id) ? 'bg-[#d64933]' : 'bg-white/20'}`}>
               <Star size={8} className={`${connected.includes(star.id) ? 'text-white' : 'text-transparent'}`} />
            </div>
            {!connected.includes(star.id) && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/star:opacity-100 transition-opacity whitespace-nowrap">
                <span className="font-serif-editorial text-[8px] text-white tracking-widest uppercase">click me</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {isComplete && (
        <div className="absolute bottom-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="font-serif-editorial text-2xl italic text-white/90">
            "in every universe and every lifetime i will choose your soul"
          </p>
        </div>
      )}

      <div className="absolute bottom-12 right-12 text-right opacity-10">
        <p className="font-serif-editorial italic text-white text-5xl">Cosmos</p>
      </div>
    </div>
  );
};

export default CelestialConnection;
