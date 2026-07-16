interface LevelProps {
  nextLevel: () => void;
}

export default function Level3({ nextLevel }: LevelProps) {
  return (
    <div className="relative h-64 w-full">
      <h2 className="text-lg sm:text-xl mb-4">[*] CHALLENGE 03: THE MIRAGE</h2>
      <p className="mb-4 text-sm sm:text-base leading-relaxed">&quot;Terkadang jalan keluar ada tepat di depan mata, membentang luas. Kamu hanya perlu berani melangkah walau tak terlihat.&quot;</p>
      
      <p className="opacity-50 text-xs sm:text-sm mt-10 animate-pulse">[ SYSTEM WAITING FOR INPUT... ]</p>

      <button 
        onClick={nextLevel} 
        className="absolute top-20 left-0 w-full h-40 opacity-0 cursor-default"
        aria-label="Hidden Next Button"
      >
        Secret Button
      </button>
    </div>
  );
}