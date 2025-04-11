import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-green-200"
      style={{ backgroundImage: "url('https://example.com/background.jpg')" }} // Replace with your background image URL
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <motion.div 
        className="w-full max-w-md p-8 space-y-6 bg-gray-200 bg-opacity-90 rounded shadow-md"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-3xl font-extrabold text-center text-rose-500"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          Member Login
        </motion.h2>
        <motion.form onSubmit={handleSubmit} className="mt-8 space-y-6" variants={fadeInVariants} initial="hidden" animate="visible">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email ID
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-black"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-black"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <motion.button
            type="submit"
            className="w-full py-2 px-4 bg-rose-500 text-white font-semibold rounded-md hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Login
          </motion.button>
        </motion.form>
        <motion.div className="flex flex-col sm:flex-row justify-between text-sm space-y-4 sm:space-y-0" variants={fadeInVariants} initial="hidden" animate="visible">
          <a href="forgot" className="text-black hover:underline">
            Forgot Password?
          </a>
          <div className="flex flex-col items-center">
            <h2>Not A Member?</h2>
            <Link to="/register" className="w-full">
              <motion.button
                type="button"
                className="w-full py-2 px-4 mt-2 bg-rose-500 text-white font-semibold rounded-md hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Register Now Free
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
