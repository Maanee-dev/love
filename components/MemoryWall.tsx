
import React, { useState, useRef } from 'react';

interface Memory {
  id: number;
  url: string;
  caption: string;
  initialPos: { x: number; y: number };
  rotate: number;
}

const MEMORIES: Memory[] = [
  { id: 1, url: 'https://maanilovesara.com/ice-cream.JPG', caption: '', initialPos: { x: 10, y: 10 }, rotate: -5 },
  { id: 2, url: 'https://maanilovesara.com/flower.JPG', caption: '', initialPos: { x: 50, y: 15 }, rotate: 3 },
  { id: 3, url: 'https://maanilovesara.com/slipper.JPG', caption: '', initialPos: { x: 25, y: 45 }, rotate: -2 },
  { id: 4, url: 'https://maanilovesara.com/my baby.JPG', caption: '', initialPos: { x: 60, y: 55 }, rotate: 8 },
];

const MemoryWall: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden h-[800px] select-none">
      <div className="absolute top-12 left-12 z-20">
        <h2 className="font-script-large text-7xl text-[#d64933] opacity-80">my other half :)</h2>
        <p className="font-serif-editorial text-xs tracking-widest uppercase opacity-40 mt-4">drag and rearrange our memories</p>
      </div>
      
      <div className="relative w-full h-full">
        {MEMORIES.map((mem) => (
          <DraggablePolaroid key={mem.id} memory={mem} />
        ))}
      </div>
      
      <div className="absolute bottom-12 right-12 text-right">
        <p className="font-serif-editorial italic text-[#2d3e50]/30 text-6xl md:text-8xl">Scrapbook</p>
      </div>
    </section>
  );
};

const DraggablePolaroid: React.FC<{ memory: Memory }> = ({ memory }) => {
  const [position, setPosition] = useState(memory.initialPos);
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const parent = (e.currentTarget as HTMLElement).parentElement;
    if (!parent) return;
    
    const parentRect = parent.getBoundingClientRect();
    const x = ((e.clientX - parentRect.left - offset.current.x) / parentRect.width) * 100;
    const y = ((e.clientY - parentRect.top - offset.current.y) / parentRect.height) * 100;
    
    setPosition({ x, y });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="absolute inset-0 pointer-events-none"
    >
      <div
        onMouseDown={handleMouseDown}
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: `rotate(${memory.rotate}deg)`,
          zIndex: isDragging ? 50 : 10,
        }}
        className={`pointer-events-auto absolute bg-white p-3 pt-3 pb-12 polaroid-shadow w-48 md:w-64 cursor-grab active:cursor-grabbing transition-shadow ${isDragging ? 'shadow-2xl scale-105' : ''}`}
      >
        <img src={memory.url} alt="" className="w-full aspect-square object-cover pointer-events-none grayscale hover:grayscale-0 transition-all duration-700" />
        <p className="font-handwriting text-xl text-[#d64933] mt-4 text-center">{memory.caption}</p>
      </div>
    </div>
  );
};

export default MemoryWall;
