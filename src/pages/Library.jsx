import React from "react";

const Library = ({ library }) => {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-primary">📚 Kitaplığım</h1>

        {library.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            Henüz kitaplığına şarkı eklemedin.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {library.map((track, index) => (
              <div
                key={index}
                className="bg-white/90 dark:bg-zinc-800/80 rounded-xl p-4 shadow hover:shadow-lg transition-all"
              >
                <img
                  src={track.album?.images?.[0]?.url}
                  alt={track.name}
                  className="w-full h-48 object-cover rounded mb-3"
                />
                <h3 className="font-semibold truncate">{track.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                  {track.artists.map((a) => a.name).join(", ")}
                </p>
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
        )}
      </div>
    </div>
  );
};

export default Library;
