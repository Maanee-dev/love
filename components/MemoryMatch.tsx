
import React, { useState, useEffect } from 'react';

const IMAGES = [
  'https://picsum.photos/seed/love1/200/200',
  'https://picsum.photos/seed/love2/200/200',
  'https://picsum.photos/seed/love3/200/200',
  'https://picsum.photos/seed/love4/200/200',
];

interface Card {
  id: number;
  img: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const MemoryMatch: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    const deck = [...IMAGES, ...IMAGES]
      .sort(() => Math.random() - 0.5)
      .map((img, i) => ({ id: i, img, isFlipped: false, isMatched: false }));
    setCards(deck);
  }, []);

  const handleFlip = (id: number) => {
    if (flipped.length === 2 || cards[id].isMatched || cards[id].isFlipped) return;
    
    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);
    
    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [first, second] = newFlipped;
      if (cards[first].img === cards[second].img) {
        newCards[first].isMatched = true;
        newCards[second].isMatched = true;
        setCards(newCards);
        setFlipped([]);
      } else {
        setTimeout(() => {
          newCards[first].isFlipped = false;
          newCards[second].isFlipped = false;
          setCards(newCards);
          setFlipped([]);
        }, 1000);
      }
    }
  };

  const isWon = cards.length > 0 && cards.every(c => c.isMatched);

  return (
    <div className="bg-[#f0ede9] p-12 rounded-sm border border-[#2d3e50]/5">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h3 className="font-serif-editorial text-3xl uppercase tracking-tighter text-[#2d3e50]">The Matchmaker</h3>
          <p className="font-handwriting text-lg text-[#d64933]">finding our pieces</p>
        </div>
        <div className="text-right">
          <p className="font-serif-editorial text-[10px] tracking-widest uppercase opacity-40">Moves: {moves}</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto">
        {cards.map((card) => (
          <div 
            key={card.id}
            onClick={() => handleFlip(card.id)}
            className={`aspect-square cursor-pointer transition-all duration-500 perspective-1000 ${card.isFlipped ? 'rotate-y-180' : ''}`}
          >
            <div className={`relative w-full h-full transform transition-transform duration-500 preserve-3d ${card.isFlipped ? 'rotate-y-180' : ''}`}>
              {/* Back of card */}
              <div className="absolute inset-0 bg-[#2d3e50] border border-white/10 flex items-center justify-center backface-hidden">
                <div className="w-8 h-8 rounded-full border border-white/20"></div>
              </div>
              {/* Front of card */}
              <div className="absolute inset-0 bg-white rotate-y-180 backface-hidden">
                <img src={card.img} alt="" className="w-full h-full object-cover grayscale brightness-90" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {isWon && (
        <div className="mt-8 text-center animate-bounce">
          <p className="font-handwriting text-2xl text-[#d64933]">You always know me best.</p>
        </div>
      )}
    </div>
  );
};

export default MemoryMatch;
