import React from "react";

const Search = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Müzik Ara</h1>
      <input
        type="text"
        placeholder="Şarkı, sanatçı ya da albüm ara..."
        className="w-full p-3 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <p className="text-gray-400 mt-6">Arama sonuçları burada görünecek...</p>
    </div>
  );
};

export default Search;
