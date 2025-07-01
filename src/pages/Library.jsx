// src/pages/Library.jsx
import React from "react";
import { Heart } from "lucide-react";

const Library = ({ library, setLibrary }) => {
  const toggleLibrary = (track) => {
    const isSaved = library.find((item) => item.id === track.id);
    if (isSaved) {
      setLibrary(library.filter((item) => item.id !== track.id));
    } else {
      setLibrary([...library, track]);
    }
  };

  return (
    <div className="min-h-screen px-6 py-8 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6">📚 Kitaplığın</h1>

      {library.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          Henüz kitaplığa eklenmiş bir çalma listen yok.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {library.map((track, index) => (
            <div
              key={index}
              className="bg-white/90 dark:bg-zinc-800/80 border border-zinc-700 rounded-xl p-4 transition hover:shadow-lg"
            >
              <img
                src={track.album?.images?.[0]?.url}
                alt={track.name}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h3 className="text-lg font-semibold truncate">{track.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {track.artists?.map((a) => a.name).join(", ")}
              </p>

              {/* Kalp butonu */}
              <button
                onClick={() => toggleLibrary(track)}
                className="mt-2 text-red-500 hover:scale-110 transition"
              >
                <Heart fill="currentColor" />
              </button>

              {/* Örnek dinleme */}
              {track.preview_url && (
                <audio
                  controls
                  src={track.preview_url}
                  className="mt-3 w-full"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Library;
