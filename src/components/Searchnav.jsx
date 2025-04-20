
// import React, { useState } from "react";

// function SearchPage() {
//   // State to track which tab is currently active
//   const [activeTab, setActiveTab] = useState("simple");

//   // Handler to switch active tab
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="p-6">
//       {/* Header / Title (optional) */}
//       <h1 className="text-2xl font-bold mb-4">MATCH ID Search</h1>

//       {/* Button group */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         <button
//           className={`py-2 px-4 rounded 
//             ${activeTab === "simple" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-800"}
//           `}
//           onClick={() => handleTabClick("simple")}
//         >
//           Simple Search
//         </button>
//         <button
//           className={`py-2 px-4 rounded 
//             ${activeTab === "advance" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-800"}
//           `}
//           onClick={() => handleTabClick("/advance")}
//         >
//           Advance Search
//         </button>
//         <button
//           className={`py-2 px-4 rounded 
//             ${activeTab === "matchId" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-800"}
//           `}
//           onClick={() => handleTabClick("matchId")}
//         >
//           Match ID Search
//         </button>
//         <button
//           className={`py-2 px-4 rounded 
//             ${activeTab === "marital" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-800"}
//           `}
//           onClick={() => handleTabClick("marital")}
//         >
//           Marital Status Search
//         </button>
//       </div>

//       {/* Content based on active tab */}
//       <div className="border p-4 rounded shadow-sm">
//         {activeTab === "simple" && (
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Simple Search</h2>
//             <p className="text-gray-700">
//               This is where you can place fields or additional content for a basic (simple) search.
//             </p>
//           </div>
//         )}

//         {activeTab === "advance" && (
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Advance Search</h2>
//             <p className="text-gray-700">
//               This is where you can place fields or additional content for an advanced search.
//             </p>
//           </div>
//         )}

//         {activeTab === "matchId" && (
          // <div>
          //   <h2 className="text-xl font-semibold mb-2">Match ID Search</h2>
          //   <p className="text-gray-700">
          //     Here you can add inputs or logic for searching by a specific match ID.
          //   </p>
          //   {/* Example input */}
          //   <div className="mt-4">
          //     <label htmlFor="matchID" className="block mb-1 font-medium">
          //       Enter MATCH ID:
          //     </label>
          //     <input
          //       type="text"
          //       id="matchID"
          //       className="border rounded p-2 w-full"
          //       placeholder="e.g., 12345"
          //     />
          //   </div>
          //   <button className="mt-4 bg-pink-600 text-white py-2 px-4 rounded">
          //     Search
          //   </button>
          // </div>
//         )}

//         {activeTab === "marital" && (
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Marital Status Search</h2>
//             <p className="text-gray-700">
//               This is where you can place filters or drop-downs for marital status searches.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SearchPage;

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// function Searchnav() {
//   return (
//     <motion.nav
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="bg-green-100"
//     >
//       <div className="min-h-5 flex flex-col items-center">
//         {/* Navigation Bar (Sticky) */}
//         <div className="w-full bg-gray-200 p-4 shadow-md sticky top-0 z-50">
//           <div className="flex flex-wrap justify-center gap-3">
//             {[
//               { to: "/simple", label: "Simple Search" },
//               { to: "/advance", label: "Advance Search" },
//               { to: "/matchidpage", label: "Match ID Search" },
//               { to: "/marital", label: "Marital Status Search" },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Link to={item.to}>
//                   <button className="px-4 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-500 transition duration-300 w-full">
//                     {item.label}
//                   </button>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// }

// export default Searchnav;


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Searchnav = () => {
  const navItems = [
    { to: "/simple", label: "Simple Search" },
    { to: "/advance", label: "Advance Search" },
    { to: "/matchidpage", label: "Match ID Search" },
    { to: "/marital", label: "Marital Status Search" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-green-100 w-full"
    >
      <div className="w-full sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-center md:justify-between gap-3 sm:gap-4">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link to={item.to}>
                <button className="w-full sm:w-auto px-4 py-2 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-500 transition duration-300">
                  {item.label}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Searchnav;
