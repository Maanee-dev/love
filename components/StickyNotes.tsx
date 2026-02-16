
import React, { useState } from 'react';
import { Pin } from 'lucide-react';

const NOTES = [
  { id: 1, text: "you are beautiful the way you are and you don't have to change", color: "bg-yellow-100", rotation: "-rotate-3", pos: "top-[10%] left-[15%]" },
  { id: 2, text: "im always here for you and you don't have to keep anything inside and you can always talk to me", color: "bg-pink-100", rotation: "rotate-2", pos: "top-[15%] right-[20%]" },
  { id: 3, text: "you are the reason love songs make sense to me and why i listen to them so much because they remind me of u", color: "bg-blue-100", rotation: "-rotate-1", pos: "bottom-[20%] left-[25%]" },
  { id: 4, text: "i love doing long distanc with you and you are never ever too much for me", color: "bg-green-100", rotation: "rotate-6", pos: "bottom-[15%] right-[15%]" }
];

const StickyNotes: React.FC = () => {
  return (
    <section className="py-40 bg-[#ece9e4] relative overflow-hidden min-h-[800px] border-y border-black/5">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-10">
        <h2 className="font-serif-editorial text-xs tracking-[0.5em] uppercase opacity-40 mb-4">Desktop Artifacts</h2>
        <p className="font-handwriting text-4xl text-[#2d3e50]">little reminders</p>
      </div>

      <div className="relative w-full h-[600px] max-w-6xl mx-auto mt-20">
        {NOTES.map((note) => (
          <div 
            key={note.id} 
            className={`absolute ${note.pos} w-64 h-64 p-8 ${note.color} ${note.rotation} shadow-lg transition-all duration-500 hover:scale-110 hover:rotate-0 hover:z-50 group cursor-default`}
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-[#d64933]">
              <Pin size={24} className="fill-current" />
            </div>
            <div className="w-full h-full flex items-center justify-center text-center">
              <p className="font-handwriting text-2xl text-[#2d3e50] leading-tight">
                {note.text}
              </p>
            </div>
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-20 transition-opacity">
              <p className="font-serif-editorial text-[8px] uppercase tracking-widest">Note 0{note.id}</p>
            </div>
          </div>
        ))}

        {/* Decorative background elements to simulate a desk */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-black/5 rounded-full opacity-20 pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#d64933]/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
};

export default StickyNotes;
