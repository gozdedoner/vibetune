import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Loader2, Sparkles } from "lucide-react";
import SineWave from "../components/SineWave";

const AIPlaylistModal = ({ isOpen, onClose, isLoading, token, onGenerate }) => {
  const [prompt, setPrompt] = useState("");

  const presets = [
    { label: "lofi chill", color: "accentPink" },
    { label: "deep focus", color: "accentGreen" },
    { label: "retro wave", color: "accentYellow" },
    { label: "cosmic techno", color: "accentBlue" },
    { label: "sleep sounds", color: "accentPink" },
    { label: "energetic workout", color: "accentGreen" },
  ];

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-xl rounded-2xl bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md p-6 shadow-2xl border border-primary transition-all duration-300">
          <SineWave />

          <Dialog.Title className="text-xl font-bold mb-4 flex items-center text-primary">
            <Sparkles className="mr-2" />
            AI Playlist Oluştur
          </Dialog.Title>

          {/* Prompt input */}
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="örnek: lo-fi coding music"
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 text-black dark:text-white mb-4 transition"
          />

          {/* Prompt ile oluştur butonu */}
          <button
            onClick={() => onGenerate(prompt)}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-purple-700 transition flex items-center mb-4"
            disabled={!prompt || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Oluşturuluyor...
              </>
            ) : (
              "Prompt ile Oluştur"
            )}
          </button>

          {/* Preset butonları */}
          <div className="flex flex-wrap gap-2">
            {presets.map((p) => (
              <button
                key={p.label}
                onClick={() => onGenerate(p.label)}
                className={`px-3 py-1 rounded-full text-sm hover:scale-105 transition-all ${
                  p.color === "accentPink"
                    ? "bg-accentPink text-white"
                    : p.color === "accentGreen"
                    ? "bg-accentGreen text-white"
                    : p.color === "accentBlue"
                    ? "bg-accentBlue text-white"
                    : p.color === "accentYellow"
                    ? "bg-accentYellow text-black"
                    : "bg-primary text-white"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AIPlaylistModal;
