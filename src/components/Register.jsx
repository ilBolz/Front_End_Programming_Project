import React from "react";

const Register = ({ openLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md border border-gray-100">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Sign Up
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600">Already have an account?</span>
          <button
            className="ml-2 text-blue-500 hover:underline font-semibold cursor-pointer"
            onClick={openLogin}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
