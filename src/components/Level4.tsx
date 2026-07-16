import { useState, useEffect } from 'react';

interface LevelProps {
  nextLevel: () => void;
}

export default function Level4({ nextLevel }: LevelProps) {
  const [flag, setFlag] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    console.log("%cWARNING: SYSTEM BREACH DETECTED!", "color: red; font-size: 20px; font-weight: bold;");
    console.log("%cFLAG = sudo_rm_rf", "color: lime; font-size: 16px; background: black; padding: 5px;");
    console.log("Submit flag ini ke input terminal.");
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (flag === 'sudo_rm_rf') {
      nextLevel();
    } else {
      setError(true);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-lg sm:text-xl mb-4 text-red-500 animate-pulse">[*] CRITICAL ALERT: SYSTEM LOCKDOWN</h2>
      <p className="mb-4 text-sm sm:text-base leading-relaxed">&quot;Sistem utama mendeteksi intrusi. Antarmuka (UI) rusak. Pesan error hanya dikirim ke jalur log komunikasi pengembang (Console).&quot;</p>
      
      <div className="mb-8 mt-4 text-red-500 font-bold text-sm sm:text-base">
        <p>UI_RENDER_ERROR_0x99281</p>
        <p>CHECK_DEV_CONSOLE_FOR_PAYLOAD</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
        <label className="text-sm sm:text-base text-red-400">Enter Final Flag:</label>
        <input 
          type="text" 
          value={flag}
          onChange={(e) => {
            setFlag(e.target.value);
            setError(false);
          }}
          className="p-2 bg-black border-b border-red-500 focus:border-red-300 outline-none w-full text-red-400"
          placeholder="FLAG_xxxx"
          required
        />
        {error && <span className="text-red-500 text-sm">ERROR: Invalid Flag. Intrusion Blocked.</span>}
        <button type="submit" className="border border-red-500 text-red-500 p-2 hover:bg-red-900 w-32 mt-2 transition-colors">
          [ OVERRIDE ]
        </button>
      </form>
    </div>
  );
}