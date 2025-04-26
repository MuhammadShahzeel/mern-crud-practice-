import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { FiPlusSquare } from "react-icons/fi"; // NEW: react-icons plus square
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleColorMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="max-w-[1140px] px-4 mx-auto">
      <div className="h-16 flex items-center justify-between flex-col sm:flex-row">
        
        <h1 className="text-2xl sm:text-3xl font-bold uppercase text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          <Link to="/">Product Store 🛒</Link>
        </h1>

        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          <Link to="/create">
            <button className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md">
              <FiPlusSquare size={20} />
            </button>
          </Link>

          <button 
            onClick={toggleColorMode}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md"
          >
            {darkMode ? <LuSun size={20} /> : <IoMoon size={20} />}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
