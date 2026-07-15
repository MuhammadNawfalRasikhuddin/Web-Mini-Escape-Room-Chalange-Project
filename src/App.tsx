import { useState } from 'react';
import Level1 from './components/Level1';
import Level2 from './components/Level2';
import Level3 from './components/Level3';
import Level4 from './components/Level4';
import Victory from './components/Victory';
import { playSuccessSound } from './utils/sound';

export default function App() {
  const [level, setLevel] = useState<number>(0);

  const nextLevel = () => {
    setLevel(level + 1);
  };

  const handleStartConnection = () => {
    playSuccessSound();
    setLevel(1);
  };

  return (
    <main className="relative min-h-screen p-4 sm:p-6 md:p-16 flex flex-col w-full">
      <div className="scanline"></div> 

      {/* Tanda > di ujung baris ini yang kemungkinan kehapus sebelumnya */}
      <div className="w-full max-w-3xl mx-auto relative z-10">
        
        {/* LEVEL 0: Boot Screen (Untuk nge-bypass kebijakan mute browser) */}
        {level === 0 && (
          <div 
            className="flex items-center justify-center min-h-[70vh] cursor-pointer"
            onClick={handleStartConnection}
          >
            <div className="border border-green-500 p-6 sm:p-10 text-center hover:bg-green-900 transition-colors bg-opacity-20">
              <p className="text-xl sm:text-2xl font-bold animate-pulse text-green-400">
                [ CLICK HERE TO INITIALIZE CONNECTION ]
              </p>
              <p className="mt-4 text-xs sm:text-sm opacity-60">
                Bypass firewall and connect to SKOMDA mainframe...
              </p>
            </div>
          </div>
        )}

        {/* Header Terminal untuk Level 1-4 */}
        {level > 0 && level < 5 && (
          <div className="mb-6 sm:mb-8 border-b border-green-700 pb-4">
            <p className="opacity-70 text-sm sm:text-base">root@skomda-mainframe:~$ ./start_ctf.sh</p>
            <h1 className="text-xl sm:text-2xl font-bold mt-2">CTF MINI ESCAPE ROOM</h1>
            <p className="mt-1 text-sm sm:text-base">STATUS: [ LEVEL 0{level} / 04 ]</p>
          </div>
        )}

        {/* Routing Level */}
        <div className="mt-6 sm:mt-8">
          {level === 1 && <Level1 nextLevel={nextLevel} />}
          {level === 2 && <Level2 nextLevel={nextLevel} />}
          {level === 3 && <Level3 nextLevel={nextLevel} />}
          {level === 4 && <Level4 nextLevel={nextLevel} />}
          {level === 5 && <Victory />}
        </div>
      </div>
    </main>
  );
}