export default function Victory() {
  const asciiArt = String.raw`
      ___  _______________________________  ____________   _____  _  ______________  ___ 
     / _ |/ ___/ ___/ __/ __/ __/ __/ ___/ / ___/ __/ _ | / |/ / / |/ /_  __/ __/  |/  /
    / __ / /__/ /__/ _/_\ \_\ \/ _// /_   / (_ / _// __ |/    / /    / / / / _// /|_/ / 
   /_/ |_\___/\___/___/___/___/___/\__/   \___/___/_/ |_/_/|_/ /_/|_/ /_/ /___/_/  /_/  
  `;

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] text-center animate-pulse w-full">
      <div className="w-full overflow-x-auto pb-4">
        <pre className="text-[10px] sm:text-xs md:text-sm font-bold text-green-400 w-max mx-auto text-left">
          {asciiArt}
        </pre>
      </div>
      <div className="mt-6 sm:mt-10 border border-green-500 p-4 sm:p-6 inline-block bg-green-900 bg-opacity-20 w-full max-w-lg mx-auto">
        <h2 className="text-lg sm:text-2xl mb-2 font-bold">&gt; SYSTEM OVERRIDE SUCCESSFUL.</h2>
        <p className="text-green-300 text-sm sm:text-base">Welcome to the mainframe, Hacker.</p>
        <p className="mt-4 opacity-50 text-xs sm:text-sm">Silakan lapor ke panitia bahwa kamu telah meretas sistem ini.</p>
      </div>
    </div>
  );
}