import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Library, Sparkles, Music2 } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen, onOpenModal }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobil ekran için saydam arka plan */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-white dark:bg-neutral-900 text-black dark:text-white p-6 transition-transform duration-300 transform
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:flex md:flex-col font-sans`}
      >
        <div className="text-2xl font-extrabold mb-8 tracking-tight">
          Vibe<span className="text-primary">Tune</span>
        </div>

        <nav className="space-y-4 font-medium">
          <Link
            to="/"
            className={`flex items-center gap-3 transition-colors ${
              isActive("/")
                ? "text-black dark:text-white"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-black dark:hover:text-white`}
          >
            <Home size={22} />
            <span>Ana Sayfa</span>
          </Link>

          <Link
            to="/player"
            className={`flex items-center gap-3 transition-colors ${
              isActive("/player")
                ? "text-black dark:text-white"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-black dark:hover:text-white`}
          >
            <Music2 size={22} />
            <span>Çalıyor</span>
          </Link>

          <Link
            to="/search"
            className={`flex items-center gap-3 transition-colors ${
              isActive("/search")
                ? "text-black dark:text-white"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-black dark:hover:text-white`}
          >
            <Search size={22} />
            <span>Ara</span>
          </Link>

          <Link
            to="/library"
            className={`flex items-center gap-3 transition-colors ${
              isActive("/library")
                ? "text-black dark:text-white"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-black dark:hover:text-white`}
          >
            <Library size={22} />
            <span>Kitaplık</span>
          </Link>
        </nav>

        <div className="pt-8 mt-auto">
          <button
            onClick={onOpenModal}
            className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white font-semibold rounded-full py-2 hover:bg-purple-700 transition-colors shadow-sm"
          >
            <Sparkles size={18} />
            <span>AI Liste Oluştur</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
