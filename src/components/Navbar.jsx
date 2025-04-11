import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  // Animation variant for individual nav items.
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    })
  };

  // Array of navigation items and their respective routes.
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Login", to: "/login" },
    { name: "Register", to: "/register" },
    { name: "Search", to: "/matchidpage" },
    { name: "Contact Us", to: "/contact" },
    { name: "Membership", to: "/membership" },
    { name: "App Downloading", to: "/appdownloading" }
  ];

  return (
    <motion.header 
      className="bg-rose-400 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <motion.div 
          className="mb-4 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Link to="/" className="text-violet-700 text-xl font-bold">
            IQRA MARRIAGE BUREAU LOGO
          </Link>
        </motion.div>
        
        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-wrap md:flex-nowrap space-x-6">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                whileHover={{ scale: 1.1 }}
                className="mb-2 md:mb-0"
              >
                <Link 
                  to={link.to}
                  className="text-white hover:text-black font-bold"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
