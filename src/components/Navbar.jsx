import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Login", to: "/login" },
  { name: "Register", to: "/register" },
  { name: "Search", to: "/matchidpage" },
  { name: "Contact Us", to: "/contact" },
  { name: "Membership", to: "/membership" },
  { name: "App Downloading", to: "/appdownloading" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <motion.header
      className="bg-rose-400 p-4 w-full shadow-md fixed top-0 left-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
  {/* Logo */}
  <Link
    to="/"
    className="flex items-center text-xl font-bold flex-1 md:flex-none"
  >
    <img
      src=""
      alt="IQRA Marriage Bureau Logo"
      className=""
    />
  </Link>

  {/* Desktop Nav */}
  <nav className="hidden md:flex space-x-6">
    {navLinks.map((link) => (
      <div
        key={link.name}
        className="transition-transform duration-200 transform hover:scale-105"
      >
        <Link
          to={link.to}
          className="text-white hover:text-black font-semibold transition duration-300"
        >
          {link.name}
        </Link>
      </div>
    ))}
  </nav>

  {/* Hamburger (Right-aligned on mobile) */}
  <button
    className="md:hidden text-white ml-4"
    onClick={toggleMenu}
    aria-label="Toggle menu"
  >
    {menuOpen ? <X size={28} /> : <Menu size={28} />}
  </button>
</div>


      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="md:hidden px-4 pt-4 pb-2 space-y-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white hover:text-black font-semibold py-2 transition"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
