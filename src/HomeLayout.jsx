// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
// import { PiIdentificationBadgeThin } from "react-icons/pi";

// const HomeLayout = () => {
//   const navigate = useNavigate();

//   const handleStepClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Container */}
//       <div className="container mx-auto px-4 py-8">
//         {/* Top Search Section */}
//         <div className="bg-white rounded shadow p-6 mb-8">
//           <h2 className="text-2xl font-bold text-rose-400 mb-4">
//             Find Your Match
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             {/* Looking For */}
//             <div>
//               <label className="block mb-1 font-medium text-gray-700">
//                 Looking For
//               </label>
//               <select className="w-full border border-gray-700 rounded p-2">
//                 <option>Female</option>
//                 <option>Male</option>
//               </select>
//             </div>

//             {/* Age */}
//             <div>
//               <label className="block mb-1 font-medium text-gray-700">
//                 Age
//               </label>
//               <input
//                 type="number"
//                 className="w-full border border-gray-700 rounded p-2"
//                 placeholder="Enter Age"
//               />
//             </div>

//             {/* Religion */}
//             <div>
//               <label className="block mb-1 font-medium text-gray-700">
//                 Religion
//               </label>
//               <select className="w-full border border-gray-300 rounded p-2">
//                 <option>Select Religion</option>
//                 <option>Christian</option>
//                 <option>Muslim</option>
//                 <option>Hindu</option>
//                 <option>Buddhist</option>
//                 <option>Jewish</option>
//                 <option>Other</option>
//               </select>
//             </div>

//             {/* Search Button */}
//             <div className="flex items-end">
//               <button className="flex bg-rose-500 hover:bg-rose-400 text-white font-semibold py-2 px-4 rounded max-w-full">
//                 <FaSearch className="text-2xl mx-3 flex flex-col" />
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Steps Section */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-rose-500">
//             Steps to Find Your Better Half
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Follow these easy steps to get started on your journey.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//   {/* Step 1: Register */}
//   <div
//     className="bg-gray-300 rounded shadow p-6 text-center cursor-pointer 
//                transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
//     onClick={() => handleStepClick("/register")}
//   >
//     <div className="mb-4  text-3xl">
//       <i className="fas fa-user-plus"></i>
//     </div>
//     <h3 className="text-xl font-bold mb-2 text-rose-600">
//       <FaSearch className="text-6xl mx-36 mb-2 text-rose-700" /> Free Register
//     </h3>
//     <p className="text-rose-700">
//       Sign up to create your profile and explore.
//     </p>
//   </div>

//   {/* Step 2: Search */}
//   <div
//     className="bg-gray-300 rounded shadow p-6 text-center cursor-pointer 
//                transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
//     onClick={() => handleStepClick("/search")}
//   >
//     <div className="mb-4  text-3xl">
//       <i className="fas fa-search"></i>
//     </div>
//     <h3 className="text-xl font-bold mb-2 text-rose-600">
//       <CgProfile className="text-6xl mb-2 mx-36 text-rose-600" />
//       Search Profiles
//     </h3>
//     <p className="text-rose-500">
//       Filter by age, location, and more to find matches.
//     </p>
//   </div>

//   {/* Step 3: Contact */}
//   <div
//     className="bg-gray-300 rounded shadow p-6 text-center cursor-pointer 
//                transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
//     onClick={() => handleStepClick("/contact")}
//   >
//     <div className="mb-4 text-3xl">
//       <i className="fas fa-phone-alt"></i>
//     </div>
//     <h3 className="text-xl text-rose-600 font-bold mb-2">
//       <PiIdentificationBadgeThin className="text-7xl mb-2 mx-36 text-rose-700" />
//       Get in Touch
//     </h3>
//     <p className="text-rose-600">
//       Connect with your matches and start a conversation.
//     </p>
//   </div>
// </div>

//       </div>
//     </div>
//   );
// };

// export default HomeLayout;






import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { PiIdentificationBadgeThin } from "react-icons/pi";
import { motion } from "framer-motion";

const HomeLayout = () => {
  const navigate = useNavigate();

  const handleStepClick = (path) => {
    navigate(path);
  };

  // Container for entire page fade/slide in.
  const pageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  // Variants for section that staggers children
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  // Variants for each step item
  const stepVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: { scale: 1.05 },
    tap: { scale: 0.98 },
  };

  // Variants for top section (search)
  const topSectionVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 }
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Top Search Section */}
        <motion.div
          className="bg-white rounded shadow p-6 mb-8"
          initial="hidden"
          animate="visible"
          variants={topSectionVariants}
        >
          <h2 className="text-2xl font-bold text-rose-400 mb-4">
            Find Your Match
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Looking For */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Looking For
              </label>
              <select className="w-full border border-gray-700 rounded p-2">
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>

            {/* Age */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                className="w-full border border-gray-700 rounded p-2"
                placeholder="Enter Age"
              />
            </div>

            {/* Religion */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Religion
              </label>
              <select className="w-full border border-gray-300 rounded p-2">
                <option>Select Religion</option>
                <option>Christian</option>
                <option>Muslim</option>
                <option>Hindu</option>
                <option>Buddhist</option>
                <option>Jewish</option>
                <option>Other</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button className="flex bg-rose-500 hover:bg-rose-400 text-white font-semibold py-2 px-4 rounded">
                <FaSearch className="text-2xl mx-3" />
                Search
              </button>
            </div>
          </div>
        </motion.div>

        {/* Steps Section */}
        <div className="text-center mb-8">
          <motion.h2
            className="text-3xl font-bold text-rose-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Steps to Find Your Better Half
          </motion.h2>
          <motion.p
            className="text-gray-500 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Follow these easy steps to get started on your journey.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Step 1: Register */}
          <motion.div
            className="bg-gray-300 rounded shadow p-6 text-center cursor-pointer"
            variants={stepVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleStepClick("/register")}
          >
            <div className="mb-4 text-3xl">
              {/* Icon placeholder */}
              <FaSearch className="hidden" /> {/* Hidden as we are reusing a custom icon for styling */}
            </div>
            <h3 className="text-xl font-bold mb-2 text-rose-600">
              <FaSearch className="text-6xl mx-auto mb-2 text-rose-700" />
              Free Register
            </h3>
            <p className="text-rose-700">
              Sign up to create your profile and explore.
            </p>
          </motion.div>

          {/* Step 2: Search */}
          <motion.div
            className="bg-gray-300 rounded shadow p-6 text-center cursor-pointer"
            variants={stepVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleStepClick("/matchidpage")}
          >
            <div className="mb-4 text-3xl">
              <CgProfile className="text-6xl mx-auto mb-2 text-rose-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-rose-600">
              Search Profiles
            </h3>
            <p className="text-rose-500">
              Filter by age, location, and more to find matches.
            </p>
          </motion.div>

          {/* Step 3: Contact */}
          <motion.div
            className="bg-gray-300 rounded shadow p-6 text-center cursor-pointer"
            variants={stepVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleStepClick("/contact")}
          >
            <div className="mb-4 text-3xl">
              <PiIdentificationBadgeThin className="text-7xl mx-auto mb-2 text-rose-700" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-rose-600">
              Get in Touch
            </h3>
            <p className="text-rose-600">
              Connect with your matches and start a conversation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomeLayout;
