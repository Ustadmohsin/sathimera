import React from 'react';

export default function Admin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-slate-500 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg">
        <h1 className="text-4xl font-bold text-center text-white mb-6">New Admin Login</h1>
        <form action="#" method="POST">
          {/* Username Input */}
          <div className="relative my-4">
            <input
              type="text"
              id="username"
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="username"
              className="absolute top-2 left-0 text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 origin-[0] peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Username
            </label>
          </div>

          {/* Password Input */}
          <div className="relative my-4">
            <input
              type="password"
              id="password"
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute top-2 left-0 text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 origin-[0] peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Password
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-500 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}