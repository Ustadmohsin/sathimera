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
    <header className="bg-green-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* Uncomment the next lines if you want a text logo */}
        {/* <Link to="/" className="text-yellow-300 text-xl font-bold">
          IQRA MARRIAGE BUREAU
        </Link> */}
        
        {/* Alternatively, display an image logo */}
        <img src="src/assets/Sathimera-removebg-preview.png" alt="Logo" className="h-10" />

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link className="text-white hover:underline font-bold" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline font-bold" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline font-bold" to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline font-bold" to="/search">
                Search
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline font-bold" to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline font-bold" to="/membership">
                Membership
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline font-bold" to="/appdownloading">
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
