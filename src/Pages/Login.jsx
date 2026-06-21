import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-teal-700">
            NovaMart
          </h1>
          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        <form className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Remember Me */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <a
              href="#"
              className="text-teal-700 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-3 rounded-lg font-semibold hover:bg-teal-800 transition"
          >
            Login
          </button>

          {/* Divider */}
          <div className="text-center text-gray-500">
            OR
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full border py-3 rounded-lg font-medium hover:bg-gray-50 transition"
          >
            Continue with Google
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-teal-700 font-semibold hover:underline"
            >
              Sign Up
            </a>
          </p>

        </form>
      </div>
    </div>
  );
}