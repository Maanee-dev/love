
import React from 'react';
import { Reason } from '../types';

interface ReasonCardProps {
  reason: Reason;
  index: number;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ reason, index }) => {
  const rotation = index % 2 === 0 ? '-rotate-2' : 'rotate-2';
  
  return (
    <div className={`flex flex-col md:flex-row gap-8 items-center md:items-start py-16 border-b border-[#2d3e50]/10 last:border-b-0`}>
      <div className={`w-full md:w-1/3 transition-transform hover:rotate-0 duration-500 ${rotation}`}>
        <div className="bg-white p-3 pt-3 pb-16 polaroid-shadow">
          <img 
            src={reason.image} 
            alt={reason.title} 
            className="w-full aspect-[4/5] object-cover"
          />
          {reason.handwrittenNote && (
            <p className="font-handwriting text-2xl text-[#d64933] mt-6 text-center">
              {reason.handwrittenNote}
            </p>
          )}
        </div>
      </div>
      
      <div className="w-full md:w-2/3 space-y-4 pt-8">
        <h3 className="font-serif-editorial text-xs tracking-[0.3em] uppercase text-[#4a6fa5]">Reason {index + 1}</h3>
        <h2 className="font-serif-editorial text-4xl md:text-6xl uppercase tracking-tighter leading-none text-[#2d3e50]">
          {reason.title}
        </h2>
        <p className="font-serif-editorial text-xl md:text-2xl italic leading-relaxed text-[#2d3e50]/80 max-w-xl">
          "{reason.description}"
        </p>
      </div>
    </div>
  );
};

export default ReasonCard;
