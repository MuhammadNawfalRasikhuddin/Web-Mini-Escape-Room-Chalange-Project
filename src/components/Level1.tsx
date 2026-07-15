import { useState } from 'react';

interface LevelProps {
  nextLevel: () => void;
}

export default function Level1({ nextLevel }: LevelProps) {
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === 'root_dtp') {
      nextLevel();
    } else {
      setError(true);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-lg sm:text-xl mb-4">[*] CHALLENGE 01: THE BLIND SPOT</h2>
      <p className="mb-6 text-sm sm:text-base leading-relaxed">&quot;Admin meninggalkan kunci brankas ini di balik layar. Apa yang tidak terlihat oleh mata, mungkin terlihat oleh mesin.&quot;</p>
      
      <div dangerouslySetInnerHTML={{ __html: '<!-- PASSWORD: root_dtp -->' }} />

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 w-full max-w-sm">
        <label className="text-sm sm:text-base">Masukkan Password:</label>
        <input 
          type="text" 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          className="p-2 bg-black border-b border-green-500 focus:border-green-300 outline-none w-full"
          placeholder="> _"
          required
        />
        {error && <span className="text-red-500 text-sm">ERROR: Access Denied.</span>}
        <button type="submit" className="border border-green-500 p-2 hover:bg-green-900 w-32 mt-2 transition-colors">
          [ SUBMIT ]
        </button>
      </form>
    </div>
  );
}