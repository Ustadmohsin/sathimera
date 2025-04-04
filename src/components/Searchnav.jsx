// import React, { useState  } from 'react';
// import { Link } from 'react-router-dom';

// function Search() {
//   const [query, setQuery] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Add search logic here
//     console.log('Search query:', query);
//   };

//   return (
//     <div 
//     className="flex justify-center items-center min-h bg-cover bg-center bg-green-100"
//     style={{ backgroundImage: "url('https://example.com/background.jpg')" }} // Replace with your background image URL
//   >
  
//     <div className="max-w-md mx-auto bg-gray-200 p-8 shadow-md rounded">
//       <h2 className="text-2xl font-bold mb-6 text-center">Search</h2>
     
//       <form onSubmit={handleSearch}>
//         <div>
//                    <Link to="/simple">
//                       <button
//                         type="button"
//                         className="w-50 py-2 px-4 bg-green-800 text-white font-semibold rounded-md hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       >
//                         Simple Search 
                  
//                       </button>
//                     </Link>
//                    <Link to="/">
//                       <button
//                         type="button"
//                         className="w-50 py-2 px-4 bg-green-800 text-white font-semibold rounded-md hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       >
//                         Advance Search 
                  
//                       </button>
//                     </Link>
//                    <Link to="/">
//                       <button
//                         type="button"
//                         className="w-50 py-2 px-4 bg-green-800 text-white font-semibold rounded-md hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       >
//                         Match ID Search 
                  
//                       </button>
//                       <button
//                         type="button"
//                         className="w-50 py-2 px-4 bg-green-800 text-white font-semibold rounded-md hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       >
//                         Marital Status Search 
                  
//                       </button>
//                     </Link>


                    
//                   </div>
      
//         <div className="mb-4">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//             placeholder="Enter MATCH ID"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-950 transition-colors"
//         >
//           Match ID
//         </button>
//       </form>
//     </div>
//     // </div>
//   );
// }

// export default Search;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Search() {
//   const [query, setQuery] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Add search logic here
//     console.log('Search query:', query);
//   };

//   return (
//     <div
//       className="flex justify-center items-center min-h-screen bg-cover bg-center bg-green-100"
//       style={{ backgroundImage: "url('https://example.com/background.jpg')" }} // Replace with your background image URL
//     >
//       <div className="max-w-md mx-auto bg-gray-200 p-8 shadow-md rounded">
//         <h2 className="text-2xl font-bold mb-6 text-center">Search</h2>
        
//         <div className="flex flex-col space-y-4 mb-6">
//           <Link to="/simple">
//             <button
//               type="button"
//               className="w-full py-2 px-4 bg-green-800 text-white font-semibold rounded-md hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Simple Search
//             </button>
//           </Link>
//           <Link to="/advance">
//             <button
//               type="button"
//               className="w-full py-2 px-4 bg-green-800 text-white font-semibold rounded-md hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Advance Search
//             </button>
//           </Link>
//           <Link to="/match-id">
//             <button
//               type="button"
//               className="w-full py-2 px-4 bg-green-800 text-white font-semibold rounded-md hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Match ID Search
//             </button>
//           </Link>
//           <Link to="/marital-status">
//             <button
//               type="button"
//               className="w-full py-2 px-4 bg-green-800 text-white font-semibold rounded-md hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Marital Status Search
//             </button>
//           </Link>
//         </div>

//         <form onSubmit={handleSearch}>
//           <div className="mb-4">
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//               placeholder="Enter MATCH ID"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-950 transition-colors"
//           >
//             Match ID
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Search;

import React from 'react'
import Search from './SearchPages/Search'

function Searchnav() {
  return (
    <>
    <Search />
    </>
    
  )
}

export default Searchnav