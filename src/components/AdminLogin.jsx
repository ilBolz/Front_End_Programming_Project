import React from "react";
import { loginAdmin } from "../redux/AuthSlice";
import { useDispatch } from "react-redux";

const AdminLogin = ({ onBack, closeModal }) => {
  const dispatch = useDispatch();

  const handleAdminLogin = (username) => {
    dispatch(loginAdmin({ username }));
    closeModal();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md border border-gray-100">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Admin Login
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target.email);
            const email = e.target.email.value;
            const password = e.target.password.value;
            handleAdminLogin(email, password);
          }}
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Admin Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter admin email"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Admin Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter admin password"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label
              htmlFor="admin-remember"
              className="flex items-center text-gray-600"
            >
              <input
                type="checkbox"
                id="admin-remember"
                name="admin-remember"
                className="mr-2"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-blue-500 hover:underline text-sm cursor-pointer"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition cursor-pointer"
          >
            Admin Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            className="text-blue-500 hover:underline font-semibold cursor-pointer"
            onClick={onBack}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
