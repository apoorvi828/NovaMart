import React from "react";
import { Link } from "react-router-dom";
export default function Header(){
  
  return (
    <header className="bg-teal-700 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">

        
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">
          NovaMart
        </h1>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded-lg text-gray-700 bg-white outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="hidden md:flex items-center gap-6">
            <li className="cursor-pointer hover:text-gray-200">Home</li>
            <li className="cursor-pointer hover:text-gray-200">Categories</li>
            <li className="cursor-pointer hover:text-gray-200">Offers</li>
            <li className="cursor-pointer hover:text-gray-200">Orders</li>
          </ul>
        </nav>

        {/* Login Button */}
        <button className="bg-white text-teal-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </header>
  );          
}