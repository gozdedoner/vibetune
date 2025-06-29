import React from "react";
import { ChevronLeft, ChevronRight, LoaderCircle, Play } from "lucide-react";

const MainContent = ({
  songs,
  playlistTitle,
  playlistDescription,
  isLoading,
  onPlaySong,
}) => {
  return (
    <div className="flex-1 bg-gradient-to-b from-emerald-800 via-zinc-900 to-black text-white p-6 overflow-y-auto">
      <header className="flex justify-between items-center mb-10">
        <div className="flex space-x-4">
          <button className="bg-black rounded-full p-1">
            <ChevronLeft size={24} />
          </button>
          <button className="bg-black rounded-full p-1">
            <ChevronRight size={24} />
          </button>
        </div>
        <button className="bg-white text-black font-bold rounded-full px-6 py-2 hover:scale-105 transition-transform">
          Premium'a Geç
        </button>
      </header>

      <h1 className="text-3xl font-bold mb-2">{playlistTitle}</h1>
      {playlistDescription && (
        <p className="text-gray-300 mb-6">{playlistDescription}</p>
      )}

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <LoaderCircle className="animate-spin text-white" size={48} />
        </div>
      ) : (
        <div className="space-y-2">
          <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 text-gray-400 p-2 uppercase text-sm border-b border-gray-700">
            <div className="text-center">#</div>
            <div>Başlık</div>
            <div>Albüm</div>
            <div>Süre</div>
          </div>
          {songs.map((song, index) => (
            <div
              key={index}
              className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 items-center p-2 rounded-md hover:bg-white/10 cursor-pointer group"
              onClick={() => onPlaySong(song)}
            >
              <div className="text-center text-gray-400 group-hover:hidden">
                {index + 1}
              </div>
              <div className="text-center text-gray-400 hidden group-hover:block">
                <Play size={20} className="text-white" />
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src={
                    song.artwork ||
                    `https://placehold.co/64x64/1DB954/FFFFFF?text=${song.artist?.substring(
                      0,
                      1
                    )}`
                  }
                  alt={song.title}
                  className="w-10 h-10 rounded-sm"
                />
                <div>
                  <div className="text-white font-semibold">{song.title}</div>
                  <div className="text-sm text-gray-400">{song.artist}</div>
                </div>
              </div>
              <div className="text-gray-400">{song.album}</div>
              <div className="text-gray-400">{song.duration}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainContent;
