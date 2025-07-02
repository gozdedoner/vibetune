import React, { useEffect, useState } from "react";
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Mic2,
  ListMusic,
  Laptop2,
  Volume2,
  Maximize2,
} from "lucide-react";

const Player = ({ currentSong, isPlaying, onPlayPause }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0); // Yeni şarkı başladığında sıfırla
  }, [currentSong]);

  if (!currentSong) {
    return (
      <div className="bg-white dark:bg-zinc-900 h-24 border-t border-gray-200 dark:border-zinc-700 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          🎵 Çalmak için bir şarkı seçin.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-zinc-900 h-28 px-6 py-4 border-t border-gray-200 dark:border-zinc-700 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
      {/* 🎵 Şarkı Bilgisi */}
      <div className="flex items-center gap-4">
        <img
          src={currentSong.artwork}
          alt={currentSong.title}
          className="w-14 h-14 rounded-md shadow-md object-cover"
        />
        <div className="overflow-hidden">
          <div className="font-semibold truncate">{currentSong.title}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
            {currentSong.artist}
          </div>
        </div>
      </div>

      {/* ▶️ Kontroller */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-5">
          <SkipBack className="icon" />
          <button
            onClick={onPlayPause}
            className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full shadow transition-transform transform hover:scale-110"
          >
            {isPlaying ? (
              <Pause size={22} className="text-white" />
            ) : (
              <Play size={22} className="text-white" />
            )}
          </button>
          <SkipForward className="icon" />
        </div>

        {/* ⏳ İlerleme Çubuğu */}
        <div className="w-full flex items-center gap-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">0:00</span>
          <div className="w-full h-1 bg-gray-300 dark:bg-gray-700 rounded-full relative">
            <div
              className="absolute top-0 left-0 bg-purple-600 h-1 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {currentSong.duration || "3:00"}
          </span>
        </div>
      </div>

      {/* 🎚️ Sağ Panel */}
      <div className="hidden md:flex items-center justify-end gap-4">
        <Mic2 className="icon" />
        <ListMusic className="icon" />
        <Laptop2 className="icon" />
        <div className="flex items-center gap-2">
          <Volume2 className="icon" />
          <div className="w-24 bg-gray-300 dark:bg-gray-700 h-1 rounded-full">
            <div className="bg-purple-600 h-1 w-3/4 rounded-full"></div>
          </div>
        </div>
        <Maximize2 className="icon" />
      </div>
    </div>
  );
};

export default Player;
