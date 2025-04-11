// import React from 'react'

// function Forgot() {
//   return (
//     <h1>Forgot Password
//     <div>

       
//         <label> new Password</label>
//         <input className placeholder='Enter your password'></input>
    
//     </div>
//     <div>

       
//         <label> new Password</label>
//         <input className placeholder='Enter your password'></input>
    
//     </div>
//     </h1>
//   )
// }

// export default Forgot


import React from 'react';

function Forgot() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-pink-600 mb-6">
          Forgot Password
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your new password"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forgot;
