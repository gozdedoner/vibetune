import React, { useState } from "react";

const AiPlaylist = () => {
  const [input, setInput] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const handleGenerate = () => {
    if (!input.trim()) return;

    // Simüle edilmiş AI cevabı (API entegrasyonu yerine geçici öneri)
    const suggestions = {
      relax: ["Lo-Fi Chill", "Evening Jazz", "Calm Piano"],
      party: ["Electro Pop Hits", "Dance Fever", "Club Bangers"],
      focus: ["Deep Work Beats", "Ambient Coding", "Instrumental Study"],
    };

    const key = input.toLowerCase().includes("focus")
      ? "focus"
      : input.toLowerCase().includes("party")
      ? "party"
      : "relax";

    setPlaylist(suggestions[key]);
  };

  return (
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        AI Playlist Oluşturucu
      </h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Örn: odaklanmak için müzik"
        className="w-full p-2 mb-4 rounded border dark:bg-zinc-700 dark:text-white"
      />
      <button
        onClick={handleGenerate}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        Oluştur
      </button>

      {playlist.length > 0 && (
        <div className="mt-6">
          <h3 className="text-md font-bold text-gray-900 dark:text-white mb-2">
            Önerilen Playlist:
          </h3>
          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
            {playlist.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AiPlaylist;
