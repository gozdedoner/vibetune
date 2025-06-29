import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import { Outlet, NavLink } from "react-router-dom";

const Layout = ({ onOpenModal }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 text-black dark:text-white overflow-hidden">
      {/* Yan menü */}
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        onOpenModal={onOpenModal}
      />

      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Mobil navbar */}
        <Navbar setSidebarOpen={setSidebarOpen} />

        {/* Tema butonu (desktop) */}
        <div className="hidden md:flex justify-end items-center px-6 pt-4">
          <ThemeToggle />
        </div>

        {/* AI Playlist butonları */}
        <div className="flex justify-start items-center px-6 space-x-4 mt-4">
          <button
            onClick={onOpenModal}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            AI Liste Oluştur
          </button>
          <NavLink
            to="/ai-playlist"
            className={({ isActive }) =>
              `text-purple-400 hover:underline ${
                isActive ? "font-semibold" : ""
              }`
            }
          >
            Oluşturulan Listeyi Gör
          </NavLink>
        </div>

        {/* Sayfa içeriği */}
        <main className="p-4 md:p-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
