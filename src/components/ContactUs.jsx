import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
    }
  }
};

const headingVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const leftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

const rightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

const OfficeAddresses = () => {
  return (
    <motion.div 
      className="p-4 md:p-8 bg-green-200 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Container */}
      <div className="max-w-5xl mx-auto bg-white rounded shadow-lg p-6 md:p-10">
        {/* Main Heading */}
        <motion.h1 
          className="text-2xl md:text-3xl font-bold text-rose-500 mb-6"
          variants={headingVariants}
        >
          IQRA MARRIAGE BUREAU Office Address
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side: Office Address */}
          <motion.div variants={leftVariants}>
            <h2 className="text-xl font-semibold mb-2">Main Office Address</h2>
            <p className="text-gray-700">
              Shop No. 13, Central Plaza, Pathrud Chowk, Kumta Naka, <br />
              Solapur, Maharashtra 413001
            </p>
            <p className="text-gray-700 mt-1">
              Phone: <span className="font-medium">+91-8446124654</span>
            </p>
          </motion.div>
          
          {/* Right Side: Google Map Embed */}
          <motion.div variants={rightVariants}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d950.4258464608649!2d75.917181!3d17.664202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5db76d34989e3%3A0xad09ad0e0ecce9d6!2sshathimera%20marriage%20bureau!5e0!3m2!1sen!2sin!4v1743848994881!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Map"
              className="rounded"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default OfficeAddresses;
