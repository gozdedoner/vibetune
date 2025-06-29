import React from "react";
import { FaBars } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <div className="md:hidden bg-white dark:bg-gray-900 p-4 flex justify-between items-center shadow">
      <button
        onClick={() => setSidebarOpen(true)}
        className="text-black dark:text-white text-2xl"
      >
        <FaBars />
      </button>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
