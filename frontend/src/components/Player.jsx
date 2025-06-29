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
    setProgress(0); // Şarkı değiştiğinde başa al
  }, [currentSong]);

  if (!currentSong) {
    return (
      <div className="bg-white dark:bg-zinc-900 h-24 border-t border-gray-200 dark:border-zinc-700 flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">
          Çalmak için bir şarkı seçin.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-zinc-900 h-24 p-4 text-black dark:text-white border-t border-gray-200 dark:border-zinc-700 grid grid-cols-3 items-center">
      {/* Şarkı Bilgisi */}
      <div className="flex items-center gap-4">
        <img
          src={currentSong.artwork}
          alt={currentSong.title}
          className="w-14 h-14 rounded-md shadow-md"
        />
        <div>
          <div className="font-semibold">{currentSong.title}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {currentSong.artist}
          </div>
        </div>
      </div>

      {/* Kontroller */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <SkipBack className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer" />
          <button
            onClick={onPlayPause}
            className="bg-primary p-3 rounded-full hover:scale-110 transition-transform"
          >
            {isPlaying ? (
              <Pause size={24} className="text-white" />
            ) : (
              <Play size={24} className="text-white" />
            )}
          </button>
          <SkipForward className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer" />
        </div>

        {/* İlerleme Çubuğu */}
        <div className="w-full flex items-center gap-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">0:00</span>
          <div className="w-full bg-gray-300 dark:bg-gray-700 h-1 rounded-full group">
            <div
              className="bg-primary h-1 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {currentSong.duration}
          </span>
        </div>
      </div>

      {/* Sağ İkonlar */}
      <div className="flex items-center justify-end gap-4">
        <Mic2 className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer" />
        <ListMusic className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer" />
        <Laptop2 className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer" />
        <div className="flex items-center gap-2">
          <Volume2 className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer" />
          <div className="w-24 bg-gray-300 dark:bg-gray-700 rounded-full h-1">
            <div className="bg-primary h-1 rounded-full w-3/4"></div>
          </div>
        </div>
        <Maximize2 className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Player;
