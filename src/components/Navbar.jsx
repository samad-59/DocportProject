import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
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
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-green-500 cursor-pointer">
          <Link to="/#about">About</Link>
        </li>
        <li className="hover:text-green-500 cursor-pointer">
          <Link to="/#features">Features</Link>
        </li>
        <li className="hover:text-green-500 cursor-pointer">
          <Link to="/#benefits">Benefits</Link>
        </li>
        <li className="hover:text-green-500 cursor-pointer">
          <Link to="/#contact">Contact Us</Link>
        </li>
      </ul>

      <div className="hidden md:flex space-x-4">
        <button 
          onClick={() => navigate('/login')} 
          className="text-gray-800 px-4 py-2 rounded hover:text-green-500">
          Login
        </button>
        <button 
          onClick={() => navigate('/signup')}
          className="bg-[#4eac82] text-white px-6 py-2 rounded hover:bg-green-900">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
