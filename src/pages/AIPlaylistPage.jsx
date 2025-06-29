import React from "react";
import { Music2 } from "lucide-react";

const AIPlaylistPage = ({ playlist }) => {
  if (!playlist || playlist.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-300">
        Henüz bir AI çalma listesi oluşturulmadı.
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 flex items-center text-primary">
        <Music2 className="mr-2" /> AI Oluşturulan Çalma Listesi
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {playlist.map((track, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg shadow hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
          >
            <img
              src={track.album?.images?.[0]?.url}
              alt={track.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold">{track.name}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              {track.artists?.map((artist) => artist.name).join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIPlaylistPage;
