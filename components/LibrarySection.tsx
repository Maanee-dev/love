
import React, { useState } from 'react';
import { Book as BookIcon, X } from 'lucide-react';

const BOOKS = [
  { id: 1, title: "The Midnight Conversations", color: "bg-[#2d3e50]", text: "Every secret we whispered into the dark became a cornerstone of who we are today. I treasure our honesty most of all.", date: "Vol. I" },
  { id: 2, title: "Coffee & Rain", color: "bg-[#4a6fa5]", text: "Quiet mornings are when I love you most. No noise, just the sound of the world waking up and you beside me.", date: "Vol. II" },
  { id: 3, title: "The First Summer", color: "bg-[#d64933]", text: "That heat was nothing compared to the fire you started in my soul. I knew then, and I know now.", date: "Vol. III" },
  { id: 4, title: "Our Unwritten Future", color: "bg-[#556b2f]", text: "The best chapters haven't even been started yet. I can't wait to see where we go next.", date: "Vol. IV" }
];

const LibrarySection: React.FC = () => {
  const [activeBook, setActiveBook] = useState<typeof BOOKS[0] | null>(null);

  return (
    <section className="py-40 bg-[#fdfcfb] border-y border-[#2d3e50]/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-serif-editorial text-xs tracking-[0.5em] uppercase opacity-40">The Private Archive</h2>
          <p className="font-script-large text-7xl text-[#2d3e50]">Our Library of Moments</p>
        </div>

        <div className="relative flex items-end justify-center space-x-2 h-80 border-b-8 border-[#2d3e50]/10 bg-[#f5f5f4]/30 rounded-t-lg px-10">
          {BOOKS.map((book) => (
            <div 
              key={book.id}
              onClick={() => setActiveBook(book)}
              className={`w-16 md:w-20 transition-all duration-500 cursor-pointer origin-bottom hover:-translate-y-4 ${book.color} border-x border-t border-black/10 flex flex-col items-center justify-center p-4 shadow-md group ${activeBook?.id === book.id ? 'h-[95%] shadow-xl' : 'h-[80%]'}`}
            >
              <p className="font-serif-editorial text-[10px] md:text-xs text-white/60 tracking-widest uppercase vertical-text transform rotate-180">
                {book.title}
              </p>
              <div className="mt-auto text-white/40">
                <BookIcon size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Modal-like Book Opening */}
        {activeBook && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#2d3e50]/20 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-[#fdfcfb] max-w-2xl w-full p-12 shadow-2xl relative border border-black/5 rounded-sm">
              <button 
                onClick={() => setActiveBook(null)}
                className="absolute top-6 right-6 text-[#2d3e50]/40 hover:text-[#d64933] transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className={`w-full md:w-1/3 aspect-[3/4] ${activeBook.color} shadow-lg rounded-r-lg p-6 flex flex-col justify-between text-white`}>
                  <p className="font-serif-editorial text-[10px] tracking-widest uppercase opacity-60">{activeBook.date}</p>
                  <h3 className="font-serif-editorial text-xl font-bold uppercase leading-tight">{activeBook.title}</h3>
                </div>
                
                <div className="w-full md:w-2/3 space-y-8">
                  <div className="space-y-4">
                    <p className="font-serif-editorial text-[10px] tracking-[0.5em] uppercase text-[#4a6fa5]">Excerpts from our story</p>
                    <p className="font-handwriting text-3xl md:text-4xl text-[#2d3e50] leading-tight italic">
                      "{activeBook.text}"
                    </p>
                  </div>
                  <div className="pt-8 border-t border-black/5">
                    <p className="font-serif-editorial text-sm italic text-[#2d3e50]/60 leading-relaxed">
                      Every word I've ever written about you falls short of the reality of loving you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
};

export default LibrarySection;
