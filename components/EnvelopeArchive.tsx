
import React, { useState } from 'react';
import { MailOpen, Mail } from 'lucide-react';

const LETTERS = [
  { 
    id: 1, 
    label: "when you feel down", 
    content: "you are rlly strong and you can do anything you put your mind to and know that i always believe in you and m always gonna be your biggest fan",
  },
  { 
    id: 2, 
    label: "when you feel like your not enough", 
    content: "your the most perfect girl on earth for me and i don't want you to change anythign about yourself and you literally don't have a single thing to be insecure about coz you are the most beautiful girl ever.",
  },
  { 
    id: 3, 
    label: "if you ever feel like long distance is hard ", 
    content: "ik m not always there and m not always the best too in this but pls know that u are so so so loved by me and m always here and ik long distance is not easy but i promise after you finish your uni we wil get married and we will have an awesome future together. i love you",
  }
];

const EnvelopeArchive: React.FC = () => {
  const [openedId, setOpenedId] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-[#f5f5f4]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-script-large text-7xl text-[#d64933]">The Letter Archive</h2>
          <p className="font-serif-editorial text-xs tracking-[0.5em] uppercase opacity-40 mt-4">words meant to be kept forever</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LETTERS.map((letter) => (
            <div key={letter.id} className="relative group">
              <div 
                onClick={() => setOpenedId(openedId === letter.id ? null : letter.id)}
                className={`cursor-pointer transition-all duration-700 bg-white p-8 rounded-sm shadow-md border border-black/5 flex flex-col items-center justify-center h-64 hover:shadow-xl ${openedId === letter.id ? 'translate-y-[-20px] ring-2 ring-[#d64933]/20' : ''}`}
              >
                <div className={`transition-all duration-500 ${openedId === letter.id ? 'text-[#d64933] scale-125' : 'text-[#2d3e50]/20'}`}>
                  {openedId === letter.id ? <MailOpen size={40} /> : <Mail size={40} />}
                </div>
                <h4 className="font-serif-editorial text-xs tracking-widest uppercase mt-6 text-[#2d3e50]/60">{letter.label}</h4>
                <p className="font-handwriting text-lg text-[#d64933] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click to open</p>
              </div>

              {/* Reveal Letter */}
              {openedId === letter.id && (
                <div className="absolute top-full left-0 right-0 z-50 mt-4 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="bg-[#fdfcfb] p-8 shadow-2xl border border-black/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#d64933]/10"></div>
                    <p className="font-serif-editorial text-[10px] tracking-widest uppercase opacity-30 mb-6">{letter.date}</p>
                    <p className="font-handwriting text-2xl text-[#2d3e50] leading-relaxed italic">
                      {letter.content}
                    </p>
                    <div className="mt-8 flex justify-end">
                      <p className="font-script-large text-4xl text-[#d64933]">With all my love</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnvelopeArchive;
