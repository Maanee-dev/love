
import React, { useState } from 'react';
import { MessageCircle, X, Send, Heart, Coffee, Star } from 'lucide-react';

const SMILE_TRIGGERS = [
  "Sea otters hold hands when they sleep so they don't drift away. Just like us, but fluffier.",
  "I love you more than a fat kid loves a free cupcake. And that's a lot.",
  "Reminder: You are the 'extra fries' at the bottom of the bag of my life. The best part.",
  "Even when you're grumpy, you're like a tiny, angry kitten. Cute, but I'll bring snacks just in case.",
  "If you were a potato, you'd be a sweet potato. Obviously."
];

const SupportBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: "Hey Bestie! I'm the Love-Bot. Feeling a bit icky or just want a goofy reminder?" }
  ]);
  const [notifying, setNotifying] = useState(false);

  const handleSadness = () => {
    setMessages(prev => [...prev, 
      { role: 'user', text: "I'm feeling a bit sad today..." },
      { role: 'bot', text: "OH NO! Dispatching a highly trained carrier pigeon to notify your boyfriend IMMEDIATELY! 🕊️" }
    ]);
    
    setNotifying(true);
    setTimeout(() => {
      const randomSmile = SMILE_TRIGGERS[Math.floor(Math.random() * SMILE_TRIGGERS.length)];
      setMessages(prev => [...prev, 
        { role: 'bot', text: `While the pigeon flies, here's a goofy reminder: ${randomSmile}` },
        { role: 'bot', text: "Also, daily reminder: You are my absolute favorite human. No refunds." }
      ]);
      setNotifying(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-80 bg-white shadow-2xl rounded-2xl border border-black/5 overflow-hidden mb-4 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#d64933] p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                🤪
              </div>
              <span className="font-serif-editorial text-sm tracking-widest uppercase">Goof-Bot 3000</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 space-y-4 bg-[#fdfcfb]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm font-serif-editorial ${
                  m.role === 'user' ? 'bg-[#d64933] text-white rounded-br-none' : 'bg-gray-100 text-[#2d3e50] rounded-bl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {notifying && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl animate-pulse text-xs italic opacity-50">
                  Sending email to boyfriend...
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-black/5 bg-white flex flex-col space-y-2">
            <button 
              onClick={handleSadness}
              className="w-full py-2 bg-[#d64933]/10 hover:bg-[#d64933]/20 text-[#d64933] rounded-full font-serif-editorial text-xs uppercase tracking-widest transition-colors flex items-center justify-center space-x-2"
            >
              <span>I'm feeling sad :(</span>
            </button>
            <button 
              onClick={() => setMessages(prev => [...prev, {role: 'bot', text: "Daily reminder: You are awesome, go eat some cheese."}])}
              className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-[#2d3e50] rounded-full font-serif-editorial text-xs uppercase tracking-widest transition-colors"
            >
              Just a goofy fact?
            </button>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#2d3e50] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group"
      >
        <div className="relative">
          <MessageCircle size={30} className="group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#d64933] rounded-full border-2 border-[#2d3e50] animate-ping"></div>
        </div>
      </button>
    </div>
  );
};

export default SupportBot;
