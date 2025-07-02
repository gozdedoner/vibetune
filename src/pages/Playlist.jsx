// src/pages/Playlist.jsx
import React from "react";
import { motion } from "framer-motion";
import { Heart, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Playlist = ({ playlist, library, setLibrary, setCurrentTrack }) => {
  const navigate = useNavigate();

  const isInLibrary = (track) => library.some((item) => item.id === track.id);

  const toggleTrackInLibrary = (track) => {
    if (isInLibrary(track)) {
      setLibrary(library.filter((item) => item.id !== track.id));
    } else {
      setLibrary([...library, track]);
    }
  };

  if (!playlist || playlist.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-300 text-lg">
        AI tarafından oluşturulmuş bir liste bulunamadı.
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-zinc-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          🎶 AI Çalma Listesi
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {playlist.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-4 hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={track.album?.images?.[0]?.url}
                alt={track.name}
                className="w-full h-48 object-cover rounded-lg mb-4 shadow"
              />

              <h3 className="text-xl font-semibold truncate">{track.name}</h3>
              <p className="text-sm text-gray-300 truncate">
                {track.artists?.map((a) => a.name).join(", ")}
              </p>

              {/* Kalp ikonu */}
              <button
                onClick={() => toggleTrackInLibrary(track)}
                className={`absolute top-4 right-4 p-2 rounded-full transition ${
                  isInLibrary(track)
                    ? "text-red-500 scale-110"
                    : "text-gray-400 hover:text-red-500"
                }`}
                title="Kitaplığa Ekle/Çıkar"
              >
                <Heart fill={isInLibrary(track) ? "currentColor" : "none"} />
              </button>

              {/* Dinleme */}
              {track.preview_url && (
                <div className="mt-4 flex items-center justify-between gap-2">
                  <audio
                    controls
                    src={track.preview_url}
                    className="w-full rounded"
                  />
                  <button
                    onClick={() => {
                      setCurrentTrack(track);
                      navigate("/player");
                    }}
                    className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white"
                    title="Şarkıyı Çal"
                  >
                    <Play size={18} />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
