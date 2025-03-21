import React from "react";
import logo from "../assets/logo.png"; // Import logo from the assets folder

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="CarbonCrunch Logo" className="w-8 h-8" />
        <span className="font-semibold text-lg">CarbonCrunch</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-gray-700">
        <a href="#" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">Services</a>
        <a href="#" className="hover:text-black">Blog</a>
        <a href="#" className="hover:text-black">About Us</a>
        <a href="#" className="hover:text-black">Contact</a>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 border border-green-500 text-green-700 rounded-md hover:bg-green-100">
          Login
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
          Book Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
