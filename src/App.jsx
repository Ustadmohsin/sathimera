// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './components/Home'
// import Login from './components/Login';
// import Register from './components/Register';
// import Search from './components/Search';
// import ContactUs from './components/ContactUs';
// import PremiumServices from './components/PremiumServices';


// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         {/* <nav className="bg-blue-600 p-4 min-h-full">
//           <ul className="flex space-x-4">
//             <li>
//               <Link className="text-white hover:text-gray-300 m-6" to="/">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link className="text-white hover:text-gray-300 m-6" to="/login">
//                 Login
//               </Link>
//             </li>
//             <li>
//               <Link className="text-white hover:text-gray-300 m-6" to="/register">
//                 Register
//               </Link>
//             </li>
//             <li>
//               <Link className="text-white hover:text-gray-300 m-6" to="/search">
//                 Search
//               </Link>
//             </li>
//             <li>
//               <Link className="text-white hover:text-gray-300 m-6" to="/contact">
//                 Contact Us
//               </Link>
//             </li>
//             <li>
//               <Link className="text-white hover:text-gray-300 m-6" to="/premiumservice">
//                 Premimu Service
//               </Link>
//             </li>
//             <li>
//               <Link className="text-white hover:text-gray-300 m-6" to="/">
//               SATHIMERA LOGO
//               </Link>
//             </li>
//           </ul>
//         </nav> */}
//         <div className="p-6">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/search" element={<Search />} />
//             <Route path="/contact" element={<ContactUs />} />
//             <Route path="/premiumservice" element={<PremiumServices />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }
// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Search from "./components/Search"
import Contact from "./components/ContactUs"
import MemberShip from "./components/MemberShip";


const App = () => {
  return (
    <Router>
      {/* Navbar will always be shown on every page */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/membership" element={<MemberShip />} />
        
        
      </Routes>
    </Router>
  );
};

export default App;


