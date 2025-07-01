import React from "react";
import { useNavigate } from "react-router-dom";
import { Music2, RefreshCcw, ArrowLeft, Heart } from "lucide-react";

const AIPlaylistPage = ({ playlist, library, setLibrary }) => {
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

  if (!playlist || playlist.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-300 text-lg">
        Henüz bir AI çalma listesi oluşturulmadı.
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-zinc-900 text-black dark:text-white transition-all">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold flex items-center text-primary">
            <Music2 className="mr-2" />
            AI Oluşturulan Çalma Listesi
          </h1>

          <div className="flex gap-2">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium bg-gray-200 dark:bg-zinc-700 rounded hover:bg-gray-300 dark:hover:bg-zinc-600 transition"
            >
              <ArrowLeft size={16} />
              Anasayfa
            </button>

            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium bg-primary text-white rounded hover:bg-purple-700 transition"
            >
              <RefreshCcw size={16} />
              Yeni Oluştur
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {playlist.map((track) => (
            <div
              key={track.id}
              className="bg-white/90 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-md p-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative"
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

              {/* Kalp İkonu */}
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
      </div>
    </div>
  );
};

export default AIPlaylistPage;
