import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Loader2, Sparkles } from "lucide-react";

const AIPlaylistModal = ({ isOpen, onClose, onGenerate, isLoading, token }) => {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);

  const handleGenerate = async () => {
    if (!prompt || !token) return;
    setResults([]);

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          prompt
        )}&type=track&limit=8`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setResults(data.tracks.items || []);
    } catch (error) {
      console.error("Spotify verisi alınamadı:", error);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-xl rounded bg-white dark:bg-zinc-900 p-6 shadow-lg">
          <Dialog.Title className="text-xl font-bold mb-4 flex items-center text-primary">
            <Sparkles className="mr-2" />
            AI Playlist Oluştur
          </Dialog.Title>

          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="örnek: lo-fi coding music"
            className="w-full p-3 rounded border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 text-black dark:text-white mb-4"
          />

          <button
            onClick={handleGenerate}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-purple-700 transition flex items-center"
            disabled={!prompt || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Oluşturuluyor...
              </>
            ) : (
              "Oluştur"
            )}
          </button>

          {/* 🎵 Sonuçlar */}
          {results.length > 0 && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {results.map((track) => (
                <div
                  key={track.id}
                  className="bg-gray-100 dark:bg-zinc-800 rounded p-3 flex items-center space-x-4"
                >
                  <img
                    src={track.album.images[0]?.url}
                    alt={track.name}
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <p className="font-semibold text-sm">{track.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {track.artists.map((a) => a.name).join(", ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AIPlaylistModal;
