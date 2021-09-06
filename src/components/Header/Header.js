import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="max-w-screen-2xl m-auto flex py-5 border-b border-gray-300">
      <div>
        <Link
          to="/"
          className="font-bold text-2xl text-gray-800 cursor-pointer"
        >
          News Portal
        </Link>
      </div>
      <div className="flex-1"></div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-gray-200 cursor-pointer px-3">
          <input
            type="text"
            placeholder="Search"
            className="border-none outline-none py-2 px-3 w-full bg-transparent"
          />
          <AiOutlineSearch className="w-7 h-7 text-gray-600" />
        </div>
        <Link
          to="/login"
          className="font-medium cursor-pointer p-2 rounded-md transform
         transition duration-200 active:scale-105 ease-out"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="font-medium cursor-pointer p-2 rounded-md bg-blue-500 text-white 
             transform transition duration-200 active:scale-105 ease-out"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Header;
