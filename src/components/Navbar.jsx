import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide text-blue-500">
          <Link to="/">E-Commerce</Link>
        </div>

        {/* Search */}
        <div className="hidden md:block flex-1 mx-8">
          <form className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute top-2.5 left-3 text-blue-400" />
          </form>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" aria-label="Cart" className="relative">
            <FaShoppingCart className="text-xl text-gray-600 hover:text-blue-500 transition" />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 w-5 h-5 rounded-full flex justify-center items-center text-white text-xs font-bold shadow">
                {products.length}
              </span>
            )}
          </Link>
          <button className="hidden md:block text-sm text-gray-700 hover:text-blue-500 transition">
            Login | Register
          </button>
          <button className="block md:hidden text-xl text-gray-600 hover:text-blue-500 transition">
            <FaUser />
          </button>
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-xl text-gray-600 hover:text-blue-500 transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile search (optional) */}
      <div className="md:hidden px-4 pb-2">
        <form className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaSearch className="absolute top-2.5 left-3 text-blue-400" />
        </form>
      </div>

      {/* Navigation links */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:flex md:items-center md:justify-center space-y-4 md:space-y-0 md:space-x-10 py-4 text-sm font-semibold text-gray-700`}
      >
        <Link to="/" className="hover:text-blue-500 transition">
          Home
        </Link>
        <Link to="/shop" className="hover:text-blue-500 transition">
          Shop
        </Link>
        <Link to="/contact" className="hover:text-blue-500 transition">
          Contact
        </Link>
        <Link to="/about" className="hover:text-blue-500 transition">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
