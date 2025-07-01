// src/pages/Playlist.jsx
import React from "react";
import { motion } from "framer-motion";
import { Heart, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Playlist = ({ playlist, library, setLibrary, setCurrentTrack }) => {
  const navigate = useNavigate();

  const isInLibrary = (track) => {
    return library.some((item) => item.id === track.id);
  };

  const toggleTrackInLibrary = (track) => {
    if (isInLibrary(track)) {
      setLibrary(library.filter((item) => item.id !== track.id));
    } else {
      setLibrary([...library, track]);
    }
  };

  const handlePlay = (track) => {
    setCurrentTrack(track);
    navigate("/player");
  };

  if (!playlist || playlist.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-300 text-lg">
        AI tarafından oluşturulmuş bir liste bulunamadı.
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-4">🎶 AI Çalma Listesi</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        En son oluşturulan AI playlist aşağıda 👇
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {playlist.map((track, index) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative bg-white/90 dark:bg-zinc-800/80 p-4 rounded-xl shadow hover:shadow-xl hover:scale-[1.02] transition cursor-pointer"
          >
            {/* Albüm resmi */}
            <img
              src={track.album?.images?.[0]?.url}
              alt={track.name}
              className="w-full h-48 object-cover rounded-md mb-3"
              onClick={() => handlePlay(track)}
            />

            {/* Başlık ve sanatçı */}
            <h3 className="text-lg font-semibold truncate">{track.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
              {track.artists?.map((a) => a.name).join(", ")}
            </p>

            {/* Kalp ikonu */}
            <button
              onClick={() => toggleTrackInLibrary(track)}
              className={`absolute top-3 right-3 p-1 rounded-full transition ${
                isInLibrary(track)
                  ? "text-red-500 scale-110"
                  : "text-gray-400 hover:text-red-500"
              }`}
              title="Kitaplığa Ekle/Çıkar"
            >
              <Heart fill={isInLibrary(track) ? "currentColor" : "none"} />
            </button>

            {/* Play ikonu */}
            {track.preview_url && (
              <button
                onClick={() => handlePlay(track)}
                className="absolute bottom-3 right-3 p-1 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
                title="Şarkıyı Çal"
              >
                <Play size={18} />
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
