import React, { useState } from "react";
import Slider from "react-slick";
import {
  Sparkles,
  Headphones,
  Music,
  Coffee,
  Car,
  Code,
} from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const playlists = [
  {
    title: "Lo-Fi Mola",
    description: "Dinlenme anları için chill tınılar",
    icon: <Coffee className="w-5 h-5 mr-2 text-accentPink" />,
  },
  {
    title: "Gece Sürüşü",
    description: "Arabada dinlenecek synth-pop parçalar",
    icon: <Car className="w-5 h-5 mr-2 text-accentBlue" />,
  },
  {
    title: "Kodlama Zamanı",
    description: "Odağını artıracak enstrümantal listeler",
    icon: <Code className="w-5 h-5 mr-2 text-accentGreen" />,
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};

const Home = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(null);

  const handleGenerate = () => {
    if (!prompt) return;
    setResult([
      `🎵 "${prompt}" için Lo-fi beats`,
      `🔥 "${prompt}" için enerjik pop`,
      `🌙 "${prompt}" için gece chill listesi`,
    ]);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-background dark:to-zinc-900 p-4 md:p-6 flex items-center justify-center">
      <div className="bg-gray-100 dark:bg-zinc-900 text-black dark:text-white rounded-lg p-4 md:p-8 shadow-xl max-w-4xl w-full">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4 text-primary flex items-center">
          <Music className="mr-2 text-primary" />
          VibeTune'a Hoş Geldin
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
          AI destekli müzik deneyimine hazır mısın? Sol menüden dilediğin
          bölüme geçiş yapabilir, kendi çalma listeni oluşturabilir ve
          müziğin keyfini çıkarabilirsin. <span className="ml-1">✨</span>
        </p>

        {/* Bilgilendirici kartlar */}
        <div className="mt-8 space-y-3">
          <div className="bg-purple-100 dark:bg-zinc-800 p-3 md:p-4 rounded-md text-purple-600 dark:text-accentPink flex items-center">
            <Sparkles className="mr-2" size={18} />
            <span>Yeni: AI ile çalma listeni birkaç kelimeyle oluştur!</span>
          </div>
          <div className="bg-blue-100 dark:bg-zinc-800 p-3 md:p-4 rounded-md text-blue-600 dark:text-accentBlue flex items-center">
            <Headphones className="mr-2" size={18} />
            <span>
              Lo-fi, pop, chill veya enerjik müzikler seni bekliyor.
            </span>
          </div>
        </div>

        {/* Playlist Slider */}
        <div className="mt-10">
          <h2 className="text-lg md:text-2xl font-semibold mb-4 flex items-center">
            <Music size={20} className="mr-2 text-accentGreen" />
            Önerilen Çalma Listeleri
          </h2>

          <Slider {...sliderSettings}>
            {playlists.map((playlist, index) => (
              <div key={index}>
                <div className="bg-gray-200 dark:bg-zinc-800 p-6 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-zinc-700 transition">
                  <div className="flex items-center mb-2">
                    {playlist.icon}
                    <h3 className="text-lg font-bold">{playlist.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {playlist.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* AI Playlist Input */}
        <div className="mt-10 bg-gray-100 dark:bg-zinc-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
            AI ile Çalma Listesi Oluştur
          </h3>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Örneğin: odaklanma, gece yürüyüşü..."
              className="flex-1 p-2 rounded border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-white"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              onClick={handleGenerate}
              className="bg-primary text-white font-semibold px-4 py-2 rounded hover:bg-purple-700 transition"
            >
              Oluştur
            </button>
          </div>

          {result && (
            <ul className="mt-4 list-disc pl-5 text-sm text-black dark:text-gray-300">
              {result.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
