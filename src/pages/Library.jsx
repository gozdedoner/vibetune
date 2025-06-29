import React from "react";

const Library = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Kitaplığın</h1>
      <p className="text-gray-400">
        Kaydettiğin çalma listeleri burada görüntülenecek.
      </p>

      {/* Örnek çalma listesi */}
      <ul className="mt-6 space-y-3">
        <li className="bg-zinc-700 p-4 rounded-lg hover:bg-zinc-600 transition">
          💾 Gece Yolculuğu
        </li>
        <li className="bg-zinc-700 p-4 rounded-lg hover:bg-zinc-600 transition">
          💾 Sabah Enerjisi
        </li>
      </ul>
    </div>
  );
};

export default Library;
