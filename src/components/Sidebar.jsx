import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Library, Sparkles, Music2 } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen, onOpenModal }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Saydam Arkaplan */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden transition-opacity duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed z-40 top-0 left-0 h-full w-64
        bg-white dark:bg-neutral-900
        text-black dark:text-white
        p-6 shadow-lg transition-transform duration-300 transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:relative md:flex md:flex-col font-sans`}
      >
        {/* Logo */}
        <div className="text-2xl font-extrabold mb-8 tracking-tight">
          Vibe<span className="text-primary">Tune</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-4 font-medium">
          <Link
            to="/"
            className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors ${
              isActive("/")
                ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                : "hover:bg-gray-100 dark:hover:bg-zinc-800"
            }`}
          >
            <Home size={20} />
            <span>Ana Sayfa</span>
          </Link>

          <Link
            to="/player"
            className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors ${
              isActive("/player")
                ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                : "hover:bg-gray-100 dark:hover:bg-zinc-800"
            }`}
          >
            <Music2 size={20} />
            <span>Çalıyor</span>
          </Link>

          <Link
            to="/search"
            className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors ${
              isActive("/search")
                ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                : "hover:bg-gray-100 dark:hover:bg-zinc-800"
            }`}
          >
            <Search size={20} />
            <span>Ara</span>
          </Link>

          <Link
            to="/library"
            className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors ${
              isActive("/library")
                ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                : "hover:bg-gray-100 dark:hover:bg-zinc-800"
            }`}
          >
            <Library size={20} />
            <span>Kitaplık</span>
          </Link>
        </nav>

        {/* AI Liste Butonu */}
        <div className="pt-8 mt-auto">
          <button
            onClick={onOpenModal}
            className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white font-semibold rounded-full py-2 hover:bg-purple-700 transition-colors shadow"
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
