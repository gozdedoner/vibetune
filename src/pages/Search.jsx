// src/pages/Search.jsx
import React, { useState } from "react";
import { Heart } from "lucide-react";

const Search = ({ spotifyToken, library, setLibrary }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query || !spotifyToken) return;

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          query
        )}&type=track&limit=9`,
        {
          headers: {
            Authorization: `Bearer ${spotifyToken}`,
          },
        }
      );
      const data = await response.json();
      if (data.tracks?.items) {
        setResults(data.tracks.items);
      }
    } catch (error) {
      console.error("Arama hatası:", error);
    }
  };

  const toggleLibrary = (track) => {
    const isSaved = library.find((item) => item.id === track.id);
    if (isSaved) {
      setLibrary(library.filter((item) => item.id !== track.id));
    } else {
      setLibrary([...library, track]);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">🔍 Müzik Ara</h1>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Şarkı, sanatçı ya da albüm..."
          className="flex-grow p-3 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Ara
        </button>
      </div>

      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.map((track) => (
            <div
              key={track.id}
              className="bg-white/90 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 rounded-xl shadow p-4 hover:shadow-lg transition"
            >
              <img
                src={track.album?.images?.[0]?.url}
                alt={track.name}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold truncate">{track.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {track.artists?.map((artist) => artist.name).join(", ")}
              </p>

              <button
                onClick={() => toggleLibrary(track)}
                className="mt-2 flex items-center gap-2 text-sm text-primary"
              >
                <Heart
                  size={18}
                  className={
                    library.find((item) => item.id === track.id)
                      ? "fill-current text-red-500"
                      : "text-gray-400"
                  }
                />
                {library.find((item) => item.id === track.id)
                  ? "Kitaplıkta"
                  : "Kitaplığa ekle"}
              </button>

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

export default Search;
