import React from "react";

const Login = ({ openSignUp, openAdminLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md border border-gray-100">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Login
        </h2>
        <form>
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
          <div className="flex items-center justify-between mb-6">
            <label
              htmlFor="remember"
              className="flex items-center text-gray-600"
            >
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2"
              />
              Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition cursor-pointer"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600">Don't have an account?</span>
          <button
            className="ml-2 text-blue-500 hover:underline font-semibold cursor-pointer"
            onClick={openSignUp}
          >
            Sign Up
          </button>
        </div>
        <div className="mt-4 text-center">
          <span className="text-gray-600">Are you the owner of the page?</span>
          <button
            className="ml-2 text-blue-500 hover:underline font-semibold cursor-pointer"
            onClick={openAdminLogin}
          >
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
