import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { MdCoPresent } from "react-icons/md";

const NavBar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* App Logo */}
        <div
          className="text-4xl font-bold cursor-pointer flex gap-3 hover:scale-105 transition-transform duration-200"
          onClick={() => navigate("/")}
        >
          <MdCoPresent />
          <p>Attendance System</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-2xl transition-transform transform hover:scale-105"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
