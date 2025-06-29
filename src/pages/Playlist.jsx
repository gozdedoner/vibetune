import React from "react";

const Playlist = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">AI Çalma Listesi</h1>
      <p className="text-gray-400">
        AI tarafından oluşturulan çalma listen burada görünecek. 🎧
      </p>

      {/* Örnek şarkı listesi */}
      <ul className="mt-6 space-y-3">
        <li className="bg-zinc-700 p-4 rounded-lg hover:bg-zinc-600 transition">
          🎵 Şarkı 1 - Sanatçı
        </li>
        <li className="bg-zinc-700 p-4 rounded-lg hover:bg-zinc-600 transition">
          🎵 Şarkı 2 - Sanatçı
        </li>
        <li className="bg-zinc-700 p-4 rounded-lg hover:bg-zinc-600 transition">
          🎵 Şarkı 3 - Sanatçı
        </li>
      </ul>
    </div>
  );
};

export default Playlist;
