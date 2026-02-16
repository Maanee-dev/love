
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music, Volume2 } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Replace 'favourite-song.mp3' with your actual filename if different
  const tracks = [
    { 
      title: "OUR FAVORITE SONG", 
      artist: "The Best Memory", 
      year: "2024", 
      url: "https://maanilovesara.com/love45.mp3" 
    },
    { 
      title: "THAT ONE SUMMER", 
      artist: "Acoustic Vibes", 
      year: "2023", 
      url: "./summer-song.mp3" 
    }
  ];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => {
          console.warn("Playback prevented or file not found. Ensure favourite-song.mp3 exists in the root folder.", e);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-white/40 backdrop-blur-md p-6 rounded-sm border border-black/5 flex items-center space-x-6 max-w-sm shadow-xl">
      <audio 
        ref={audioRef} 
        src={tracks[currentTrack].url} 
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className={`relative w-20 h-20 flex-shrink-0 transition-transform duration-1000 ${isPlaying ? 'rotate-infinite' : ''}`}>
        <div className={`w-full h-full bg-[#111] rounded-full flex items-center justify-center border-4 border-[#222] ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
          <div className="w-8 h-8 bg-[#d64933] rounded-full border-2 border-white/20 flex items-center justify-center">
             <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
        {/* Tonearm */}
        <div className={`absolute -top-2 -right-2 w-4 h-14 bg-gray-400 origin-top transform transition-transform duration-700 rounded-full ${isPlaying ? 'rotate-[25deg]' : 'rotate-0'}`} style={{ border: '1px solid rgba(0,0,0,0.1)' }}></div>
      </div>
      
      <div className="flex-grow space-y-1 overflow-hidden">
        <p className="font-serif-editorial text-[10px] tracking-[0.2em] uppercase opacity-50">now playing</p>
        <h4 className="font-serif-editorial text-sm font-bold tracking-widest truncate">{tracks[currentTrack].title}</h4>
        <p className="font-handwriting text-lg text-[#d64933]">{tracks[currentTrack].artist}</p>
        
        <div className="flex items-center space-x-3 pt-2">
          <button onClick={togglePlay} className="hover:text-[#d64933] transition-colors p-1">
            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
          </button>
          <div className="h-[1px] flex-grow bg-black/10 relative overflow-hidden">
             <div 
              className={`absolute inset-0 bg-[#d64933] transition-transform duration-300 ${isPlaying ? 'animate-progress-slide' : 'scale-x-0'}`}
              style={{ transformOrigin: 'left' }}
             ></div>
          </div>
          <Volume2 size={14} className="opacity-30" />
        </div>
      </div>

      <style>{`
        @keyframes progress-slide {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        .animate-progress-slide {
          animation: progress-slide 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;
