
import React, { useRef, useEffect, useState } from 'react';

const ScratchCard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratched, setIsScratched] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set initial cover
    ctx.fillStyle = '#d4d4d8'; // Metallic silver-grey
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add texture
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.2})`;
      ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
    }

    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2);
      ctx.fill();
      checkScratch();
    };

    const checkScratch = () => {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let clearPixels = 0;
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) clearPixels++;
      }
      if (clearPixels / (pixels.length / 4) > 0.6) {
        setIsRevealed(true);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      scratch(e.clientX - rect.left, e.clientY - rect.top);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    return () => canvas.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto h-64 bg-white shadow-inner flex items-center justify-center border-4 border-white overflow-hidden group">
      <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-1000 ${isRevealed ? 'opacity-100' : 'opacity-40'}`}>
        <p className="font-script-large text-5xl text-[#d64933] text-center leading-none">
          I will always choose you, in every lifetime.
        </p>
        <p className="font-handwriting text-xl text-[#2d3e50] mt-4">- Forever Yours</p>
      </div>
      
      <canvas 
        ref={canvasRef} 
        width={450} 
        height={256} 
        className={`absolute inset-0 cursor-crosshair transition-opacity duration-1000 ${isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      />
      
      {!isRevealed && (
        <div className="absolute top-4 right-4 pointer-events-none">
          <p className="font-serif-editorial text-[10px] tracking-[0.2em] uppercase text-white drop-shadow-md">Scratch to reveal</p>
        </div>
      )}
    </div>
  );
};

export default ScratchCard;
