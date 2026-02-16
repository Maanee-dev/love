
import React, { useState, useRef } from 'react';

const TornLetterPuzzle: React.FC = () => {
  const [pieces, setPieces] = useState([
    { id: 1, pos: { x: 5, y: 10 }, rotation: -12, text: "from the moment i saw you i found no one else as attractive and as pretty as you. when im next to you i get so shy and you are the only person that makes me feel that way. i remember the first day i met you how weird i was because i didn't talk at all too coz i never thought someone as beautiful as you could give me a chance." },
    { id: 2, pos: { x: 50, y: 40 }, rotation: 8, text: "i think about you 24/7 like you are always constantly on my mind and i worry about you so much and i don't want you to feel sad about anything and i hope you know that im here for you and that you can talk to me always and you are never too much for me." },
    { id: 3, pos: { x: 20, y: 65 }, rotation: -5, text: "i mean i don't think i have to tell you this but holy you are sara like you are the coolest most hottest most awesome girl ever. like and u worry so much how abt how u look and silly things like that. you are literally so perfect to me and ever since we started playing genshin together i had the fattest crush on u and i always found it so so attractive like the tiktoks u posted on ur acc. and you always act so strong but ur just a baby" },
  ]);

  const [activePiece, setActivePiece] = useState<number | null>(null);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (id: number, e: React.MouseEvent) => {
    setActivePiece(id);
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (activePiece === null) return;
    const parent = (e.currentTarget as HTMLElement).closest('.puzzle-container');
    if (!parent) return;

    const parentRect = parent.getBoundingClientRect();
    const x = ((e.clientX - parentRect.left - offset.current.x) / parentRect.width) * 100;
    const y = ((e.clientY - parentRect.top - offset.current.y) / parentRect.height) * 100;

    setPieces(prev => prev.map(p => p.id === activePiece ? { ...p, pos: { x, y } } : p));
  };

  const handleMouseUp = () => setActivePiece(null);

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="puzzle-container relative w-full h-[500px] bg-[#ece9e4] rounded-sm border border-black/5 overflow-hidden select-none cursor-default"
    >
      <div className="absolute top-6 left-6 z-10">
        <h3 className="font-serif-editorial text-xs tracking-[0.4em] uppercase opacity-40">Interactive Artifact 01</h3>
        <p className="font-handwriting text-2xl text-[#d64933] mt-2">Mending the fragments</p>
      </div>

      {pieces.map((piece) => (
        /* Fixed: Merged duplicate style attributes into a single style object */
        <div
          key={piece.id}
          onMouseDown={(e) => handleMouseDown(piece.id, e)}
          className={`absolute p-8 bg-[#fdfcfb] shadow-xl border-t border-l border-white/50 cursor-grab active:cursor-grabbing transition-transform duration-300 w-64 md:w-80`}
          style={{
            left: `${piece.pos.x}%`,
            top: `${piece.pos.y}%`,
            transform: `rotate(${activePiece === piece.id ? 0 : piece.rotation}deg) scale(${activePiece === piece.id ? 1.05 : 1})`,
            zIndex: activePiece === piece.id ? 50 : 10,
            clipPath: piece.id === 1 
              ? 'polygon(0% 0%, 100% 0%, 95% 45%, 100% 100%, 0% 95%)' 
              : piece.id === 2 
                ? 'polygon(5% 0%, 100% 5%, 90% 100%, 0% 90%)' 
                : 'polygon(0% 5%, 95% 0%, 100% 100%, 5% 95%, 0% 50%)' 
          }}
        >
          <p className="font-handwriting text-xl md:text-2xl text-[#2d3e50]/80 leading-relaxed pointer-events-none">
            {piece.text}
          </p>
        </div>
      ))}
      
      <div className="absolute bottom-6 right-6 text-right opacity-20">
        <p className="font-serif-editorial italic text-4xl">Love Letters</p>
      </div>
    </div>
  );
};

export default TornLetterPuzzle;
