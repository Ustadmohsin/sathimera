// import React from "react";
// import background from "../assets/background.png";
// import { FaSearch, FaUserPlus, FaSignInAlt } from "react-icons/fa";
// import HomeLayout from "../HomeLayout";
// import { CiHeart } from "react-icons/ci";
// import { motion } from "framer-motion";

// function Home() {
//   // Define animation variants for container, button, and content.
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const buttonVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { type: "spring", stiffness: 300 }
//     }
//   };

//   const contentVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { 
//       opacity: 1, 
//       scale: 1, 
//       transition: { duration: 0.6, ease: "easeOut" } 
//     }
//   };

//   return (
//     <>
//       <motion.div
//         className="min-h-screen bg-cover bg-center bg-no-repeat text-center bg-rose-100"
//         style={{
//           // To use your local background image, uncomment and update the line below:
//           // backgroundImage: `url(${background})`,
//         }}
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         {/* Navigation Buttons */}
//         <motion.div 
//           className="flex justify-center space-x-6 pt-20"
//           variants={containerVariants}
//         >
//           {/* Search Button */}
//           <motion.a
//             href="/search"
//             className="flex items-center space-x-2 px-4 py-2 font-bold bg-violet-600 rounded-lg hover:bg-violet-500 transition duration-300"
//             variants={buttonVariants}
//             whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
//           >
//             <FaSearch className="text-white" size={30} />
//             <span className="text-white">Search</span>
//           </motion.a>
//           {/* Register Button */}
//           <motion.a
//             href="/register"
//             className="flex items-center space-x-2 px-4 py-2 bg-violet-600 rounded-lg hover:bg-violet-500 transition duration-300"
//             variants={buttonVariants}
//             whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
//           >
//             <FaUserPlus className="text-white" size={30} />
//             <span className="text-white">Register</span>
//           </motion.a>
//           {/* Login Button */}
//           <motion.a
//             href="/login"
//             className="flex items-center space-x-2 px-4 py-2 bg-violet-600 rounded-lg hover:bg-violet-500 transition duration-300"
//             variants={buttonVariants}
//             whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
//           >
//             <FaSignInAlt className="text-white" size={30} />
//             <span className="text-white">Login</span>
//           </motion.a>
//         </motion.div>
  
//         {/* Main Content */}
//         <motion.div 
//           className="text-rose-600 pt-36 px-4 sm:px-6"
//           variants={contentVariants}
//         >
//           <CiHeart className="mx-auto text-7xl" />
//           <motion.h1 
//             className="text-4xl font-bold mt-4"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//           >
                IQRA MARRIRGE BUREAU solapur ....mohsin
//           </motion.h1>
//           <motion.h2 
//             className="mt-4 text-lg"
//             animate={{ opacity: [0, 1, 0] }}
//             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//           >
//             Rishto Ka Aagaz...
//           </motion.h2>
//         </motion.div>
//       </motion.div>
      
//       {/* Other Layout Components */}
//       <HomeLayout />
//     </>
//   );
// }

// export default Home;
import React from "react";
import background from "../assets/background.png";
import { FaSearch, FaUserPlus, FaSignInAlt } from "react-icons/fa";
import HomeLayout from "../HomeLayout";
import { CiHeart } from "react-icons/ci";
import { motion } from "framer-motion";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        className="min-h-screen bg-cover bg-center bg-no-repeat text-center bg-rose-100"
        style={{
          // Uncomment to use background image
          // backgroundImage: `url(${background})`,
        }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Navigation Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-24 px-4"
          variants={containerVariants}
        >
          {/* Search Button */}
          <motion.a
            href="/search"
            className="flex items-center space-x-2 px-6 py-3 font-bold bg-violet-600 rounded-lg hover:bg-violet-500 transition duration-300 w-full sm:w-auto justify-center"
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
          >
            <FaSearch className="text-white" size={24} />
            <span className="text-white">Search</span>
          </motion.a>

          {/* Register Button */}
          <motion.a
            href="/register"
            className="flex items-center space-x-2 px-6 py-3 font-bold bg-violet-600 rounded-lg hover:bg-violet-500 transition duration-300 w-full sm:w-auto justify-center"
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
          >
            <FaUserPlus className="text-white" size={24} />
            <span className="text-white">Register</span>
          </motion.a>

          {/* Login Button */}
          <motion.a
            href="/login"
            className="flex items-center space-x-2 px-6 py-3 font-bold bg-violet-600 rounded-lg hover:bg-violet-500 transition duration-300 w-full sm:w-auto justify-center"
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
          >
            <FaSignInAlt className="text-white" size={24} />
            <span className="text-white">Login</span>
          </motion.a>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="text-rose-600 pt-20 sm:pt-36 px-6 sm:px-10 max-w-3xl mx-auto"
          variants={contentVariants}
        >
          <CiHeart className="mx-auto text-7xl" />
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mt-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            IQRA MARRIAGE BUREAU Solapur ...
          </motion.h1>
          <motion.h2
            className="mt-4 text-md sm:text-lg"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            Rishto Ka Aagaz...
          </motion.h2>
        </motion.div>
      </motion.div>

      {/* Other Layout Sections */}
      <HomeLayout />
    </>
  );
}

export default Home;

