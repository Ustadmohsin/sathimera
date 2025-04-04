


// import React from "react";
// import HomeLayout from "../HomeLayout";
// import background from "../assets/background.png";


// // If you have the image in 'src/assets/16683661_5786039.jpg'
// // and you are using a bundler that supports imports, you can do:
// // import backgroundImage from "src/assets/16683661_5786039.jpg";

// function Home() {
//   return (
    
//     <div
//       className="min-h-screen bg-cover bg-center bg-no-repeat text-center"
//       style={{
//         // If you imported the image above, use:
//         // backgroundImage: `url(${backgroundImage})`,
//         // Otherwise, if you prefer a direct path:
//         backgroundImage: `url(${background})`,
// }}
//     >
//       {/* Your Layout or other components */}
      

//       {/* You can add other content here if needed */}
//       <div className="text-green-800 pt-36">
        
//         <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
//         <p className="mt-4">
//           This is an example of how to use a background image with Tailwind CSS.
//         </p>
//       </div>
//     </div>
  
//   );
// }

// export default Home;

import React from "react";
import background from "../assets/background.png";
import { FaSearch, FaUserPlus, FaSignInAlt } from "react-icons/fa";
import HomeLayout from "../HomeLayout";

function Home() {
  return (
    <>
<div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Navigation buttons */}
      <div className="flex justify-center space-x-4 pt-20 ">
        {/* Search Button */}
        <a
          href="/search"
          className="flex items-center space-x-2 px-4 py-2 bg-green-800  rounded hover:bg-green-900"
        >
          <FaSearch className="text-white" size={20} />
          <span className="text-white">Search</span>
        </a>
        {/* Register Button */}
        <a
          href="/register"
          className="flex items-center space-x-2 px-4 py-2 bg-green-800  rounded hover:bg-green-900"
        >
          <FaUserPlus className="text-white" size={20} />
          <span className="text-white">Register</span>
        </a>
        {/* Login Button */}
        <a
          href="/login"
          className="flex items-center space-x-2 px-4 py-2 bg-green-800  rounded hover:bg-green-900"
        >
          <FaSignInAlt className="text-white" size={20} />
          <span className="text-white">Login</span>
        </a>
      </div>
  

      {/* Main Content */}
      <div className="text-green-800 pt-36">
        <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
        <p className="mt-4">
          This is an example of how to use a background image with Tailwind CSS.
        </p>
      </div>
    </div>
    
    < HomeLayout />
    </>
    
  );
}

export default Home;

