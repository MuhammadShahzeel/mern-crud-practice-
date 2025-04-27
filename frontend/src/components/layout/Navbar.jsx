import { Link } from "react-router-dom";

import { FiPlusSquare } from "react-icons/fi"; // NEW: react-icons plus square


const Navbar = () => {
  

  

  return (
    <div className="max-w-[1140px] px-4 mx-auto">
      <div className="h-16 flex items-center justify-between flex-col sm:flex-row">
        
        <h1 className="text-2xl sm:text-3xl font-bold uppercase text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          <Link to="/">Product Store 🛒</Link>
        </h1>

        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          <Link to="/create">
          <button className="flex items-center gap-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-md">
  <span className="hidden sm:inline">Create Product</span>
  <FiPlusSquare size={20} />
</button>

          </Link>

      
        </div>

      </div>
    </div>
  );
};

export default Navbar;
