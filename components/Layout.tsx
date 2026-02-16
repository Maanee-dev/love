
import React from 'react';

export const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-transparent mix-blend-difference text-white">
      <div className="font-serif-editorial text-xl tracking-widest uppercase">for my sara</div>
      <div className="hidden md:flex space-x-8 text-xs tracking-widest uppercase font-light">
        <a href="#" className="hover:opacity-60 transition-opacity">Chronicles</a>
        <a href="#reasons" className="hover:opacity-60 transition-opacity">The Why</a>
        <a href="#ai" className="hover:opacity-60 transition-opacity">Notes</a>
        <a href="#" className="hover:opacity-60 transition-opacity">Legacy</a>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 bg-[#2d3e50] text-[#f5f5f4] text-center">
      <div className="max-w-xl mx-auto space-y-8">
        <h2 className="font-script-large text-6xl md:text-8xl">Always & Forever</h2>
        <div className="pt-8 border-t border-white/20 text-[10px] tracking-[0.2em] uppercase opacity-50">
I LOVE YOU        </div>
      </div>
    </footer>
  );
};
