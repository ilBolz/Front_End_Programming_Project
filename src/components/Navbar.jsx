import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Register from "./Register";
import Login from "./Login";
import AdminLogin from "./AdminLogin";
import { logout } from "../redux/AuthSlice";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const openSignUp = () => {
    setIsLogin(false);
    setIsAdminLogin(false);
    setIsModalOpen(true);
  };
  const openLogin = () => {
    setIsLogin(true);
    setIsAdminLogin(false);
    setIsModalOpen(true);
  };
  const openAdminLogin = () => {
    setIsLogin(false);
    setIsAdminLogin(true);
    setIsModalOpen(true);
  };
  const handleLogout = () => {
    dispatch(logout());
    console.log("User logged out");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wide text-blue-500">
          <Link to="/">E-Commerce</Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-10 text-sm font-semibold text-gray-700">
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
            {auth.isAdmin && (
              <Link to="/adminSection" className="hover:text-blue-500 transition">
                Admin Section
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" aria-label="Cart" className="relative">
            <FaShoppingCart className="text-xl text-gray-600 hover:text-blue-500 transition" />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 w-5 h-5 rounded-full flex justify-center items-center text-white text-xs font-bold shadow">
                {products.length}
              </span>
            )}
          </Link>
          {auth.isAuthenticated ? (
            <div className="flex items-center space-x-2 gap-2">
              <p className="text-lg text-gray-700">Utente: {auth.username}</p>
              <button
                className="hidden md:block text-sm  transition cursor-pointer bg-blue-400 hover:bg-blue-500 text-white font-semibold py-1 px-3 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="hidden md:block text-sm text-gray-700 hover:text-blue-500 transition cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Login | Register
            </button>
          )}
          <button className="block md:hidden text-xl text-gray-600 hover:text-blue-500 transition">
            <FaUser />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-xl text-gray-600 hover:text-blue-500 transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-white shadow-md`}
      >
        <div className="flex flex-col items-center space-y-4 py-4 text-sm font-semibold text-gray-700">
          <Link
            to="/"
            className="hover:text-blue-500 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="hover:text-blue-500 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-500 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          {auth.isAdmin && (
            <Link
              to="/adminSection"
              className="hover:text-blue-500 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admin Section
            </Link>
          )}
          {auth.isAuthenticated ? (
            <button
              className="text-sm bg-blue-400 hover:bg-blue-500 text-white font-semibold py-1 px-3 rounded"
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="text-sm text-gray-700 hover:text-blue-500 transition cursor-pointer"
              onClick={() => {
                setIsModalOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              Login | Register
            </button>
          )}
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <Login
            openSignUp={openSignUp}
            openAdminLogin={openAdminLogin}
            closeModal={() => setIsModalOpen(false)}
          />
        ) : isAdminLogin ? (
          <AdminLogin
            onBack={openLogin}
            closeModal={() => setIsModalOpen(false)}
          />
        ) : (
          <Register
            openLogin={openLogin}
            closeModal={() => setIsModalOpen(false)}
          />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
