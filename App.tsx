
import React from 'react';
import { Header, Footer } from './components/Layout';
import Hero from './components/Hero';
import ReasonCard from './components/ReasonCard';
import DailyReminderBox from './components/DailyReminderBox';
import MusicPlayer from './components/MusicPlayer';
import InteractiveTimeline from './components/InteractiveTimeline';
import MemoryWall from './components/MemoryWall';
import ScratchCard from './components/ScratchCard';
import MemoryMatch from './components/MemoryMatch';
import InteractiveDial from './components/InteractiveDial';
import TornLetterPuzzle from './components/TornLetterPuzzle';
import WishJar from './components/WishJar';
import CelestialConnection from './components/CelestialConnection';
import VinylPlayer from './components/VinylPlayer';
import TravelScrapbook from './components/TravelScrapbook';
import EnvelopeArchive from './components/EnvelopeArchive';
import StickyNotes from './components/StickyNotes';
import MoodBoard from './components/MoodBoard';
import CinemaSection from './components/CinemaSection';
import LibrarySection from './components/LibrarySection';
import GreenhouseSection from './components/GreenhouseSection';
import { REASONS } from './constants';
import { Quote, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#d64933]/20 selection:text-[#d64933] bg-[#f5f5f4]">
      <Header />
      
      {/* Floating Music Player Widget */}
      <div className="fixed bottom-8 left-8 z-50 hidden lg:block">
        <MusicPlayer />
      </div>
      
      <main>
        {/* Entry & Vibe */}
        <Hero />

        {/* Introduction & Scratch Reveal */}
        <section className="px-6 py-32 bg-white relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -top-10 -left-10 text-[#d64933]/10">
                <Quote size={120} />
              </div>
              <div className="relative group overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src="https://maanilovesara.com/birthday.JPG" 
                  alt="Our View" 
                  className="w-full h-[650px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-10 px-4 md:px-0">
              <h2 className="font-serif-editorial text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] text-[#2d3e50]">
                my favorite time of <span className="italic italic-font"> last year was my birthday XD</span>
              </h2>
              <div className="space-y-6">
                <p className="font-serif-editorial text-xl text-[#2d3e50]/70 leading-relaxed italic">
                i stil Remember how it made me feel when i walked inside you room and seeing it decorated so so well and i still get goosbumps thinking about it because you know i never thought i could have a love as amazing as this. i always act nonchalant about it but it's just feels so out of this world yk having someone decorate a whole room for me like me is crazy and i never got to experience love till i met you and everyday felt like that day but for some reason that day made me feel a lot more things and so thank you. 
                </p>
                <div className="pt-8">
                  <ScratchCard />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Puzzle Artifact */}
        <section className="py-32 px-6 bg-[#f5f5f4]">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <p className="font-handwriting text-3xl text-[#d64933]">whenever you need reassurance</p>
            </div>
             <TornLetterPuzzle />
          </div>
        </section>

        {/* Cinema Reel */}
        <CinemaSection />

        {/* Sticky Notes Desk */}
        <StickyNotes />

        {/* Celestial Connection */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <CelestialConnection />
          </div>
        </section>

        {/* Scrapbook Visuals */}
        <MemoryWall />

   



    

        {/* Letter Drawer */}
        <EnvelopeArchive />

        {/* Fixed Daily Reminder Section */}
        <DailyReminderBox />

        {/* Grand Final Text */}
        <section className="py-60 px-6 text-center overflow-hidden bg-white">
          <div className="relative group cursor-default">
            <p className="font-serif-editorial text-4xl md:text-[12vw] uppercase tracking-tighter leading-[0.8] text-[#2d3e50] relative -mt-[6vw] z-10 transition-all hover:tracking-normal duration-1000 group-hover:scale-105">
              HAPPY VALENTINES <span className="italic italic-font text-[#d64933]">DAY</span> 
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
