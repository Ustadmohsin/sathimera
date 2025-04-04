// import React, { useState } from 'react';

// function ContactUs() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add contact logic here
//     console.log('Contact Us submitted:', { name, email, message });
//   };

//   return (
//     <div 
//       className="flex justify-center items-center min-h-screen bg-cover bg-center bg-green-100"
//       style={{ backgroundImage: "url('https://example.com/background.jpg')" }} // Replace with your background image URL
//     >
//     <div className="max-w-md mx-auto w-screen  bg-gray-200 p-8 shadow-md rounded">
//       <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-600">Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//             placeholder="Enter your name"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block mb-2 text-sm font-medium text-gray-600">Message</label>
//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//             placeholder="Enter your message"
//             rows="4"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-green-900 text-white py-2 rounded hover:bg-green-950 transition-colors"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default ContactUs;

import React from "react";

const OfficeAddresses = () => {
  return (
    <div className="p-4 md:p-8 bg-green-100 min-h-screen">
      {/* Container */}
      <div className="max-w-5xl mx-auto bg-white rounded shadow-lg p-6 md:p-10">
        
        {/* Main Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
          IQRA MARRIAGE BUREAU Office Address
        </h1>
        
        {/* Main Office Address */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Main Office Address</h2>
          <p className="text-gray-700">
            {/* Replace with your real address */}
            Shop No. 13, Central Plaza, Pathrud Chowk, Kumta Naka,  <br />
            Solapur, Maharashtra 413001</p>
          <p className="text-gray-700 mt-1">
            Phone: <span className="font-medium">+91-8446124654</span>
          </p>
        </div>

        
        

      </div>
    </div>
  );
};

export default OfficeAddresses;
