import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
        Welcome to Our Portal
      </h1>
      <p className="text-lg md:text-xl mb-8 opacity-90 animate-slide-up">
        Manage attendance permissions easily and efficiently.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4 animate-fade-in animate-delay-200">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default HomePage;
