import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="https://docport.co/assets/images/brand/logo.png"
          alt="Logo"
          className="h-10 w-auto"
        />
      </div>

      <ul className="hidden md:flex space-x-8 text-gray-700 text-lg">
        <li className="hover:text-green-500 cursor-pointer">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-green-500 cursor-pointer">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-green-500 cursor-pointer">
          <a href="#features">Features</a>
        </li>
        <li className="hover:text-green-500 cursor-pointer">
          <a href="#benefits">Benefits</a>
        </li>
        <li className="hover:text-green-500 cursor-pointer">
          <a href="#contact">Contact Us</a>
        </li>
      </ul>

      <div className="hidden md:flex space-x-4">
        <button className="text-gray-800 px-4 py-2 rounded hover:text-green-500">
          Login
        </button>
        <button className="bg-[#4eac82] text-white px-6 py-2 rounded hover:bg-green-900">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
