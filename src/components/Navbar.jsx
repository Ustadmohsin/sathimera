// import React from 'react'

// function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }
// export default Navbar
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">
          IQRA MARRIAGE BUREAU
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link className="text-white hover:text-gray-300" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300" to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300" to="/search">
                Search
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300" to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300" to="/membership">
                Membership
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300" to="/appdownloading">
                App Downloading
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
