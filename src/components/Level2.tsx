import { useState } from 'react';

interface LevelProps {
  nextLevel: () => void;
}

export default function Level2({ nextLevel }: LevelProps) {
  const [answer, setAnswer] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (answer.toLowerCase() === 'skomda_hacker') {
      nextLevel();
    } else {
      setError(true);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-lg sm:text-xl mb-4">[*] CHALLENGE 02: THE ALIEN LANGUAGE</h2>
      <p className="mb-4 text-sm sm:text-base leading-relaxed">&quot;Kami mencegat pesan rahasia. Formatnya terlihat seperti standar encoding basis 64 yang sering dipakai anak mesin.&quot;</p>
      
      <div className="p-4 bg-gray-900 border border-green-800 font-mono mb-8 inline-block break-all w-full sm:max-w-md">
        <span className="opacity-70 text-xs sm:text-sm">ENCRYPTED MESSAGE:</span><br/>
        <span className="text-white select-all text-sm sm:text-base mt-2 block">c2tvbWRhX2hhY2tlcg==</span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
        <label className="text-sm sm:text-base">Decrypted Message:</label>
        <input 
          type="text" 
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
            setError(false);
          }}
          className="p-2 bg-black border-b border-green-500 focus:border-green-300 outline-none w-full"
          placeholder="> _"
          required
        />
        {error && <span className="text-red-500 text-sm">ERROR: Invalid String.</span>}
        <button type="submit" className="border border-green-500 p-2 hover:bg-green-900 w-32 mt-2 transition-colors">
          [ DECODE ]
        </button>
      </form>
    </div>
  );
}