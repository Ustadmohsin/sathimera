// import React, { useState } from 'react';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add login logic here
//     console.log('Login submitted:', { email, password });
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded">
//       <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//       <form onSubmit={handleSubmit}>
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
//           <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//             placeholder="Enter your password"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-50 bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition-colors"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-200 rounded shadow-md">
        <h2 className="text-3xl font-extrabold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between text-sm">
          <a href="#" className="text-black hover:underline">
            Forgot Password?
          </a>
          <div>
            {/* Not a member?{' '} */}
            <h2>Not A Memeber ?</h2> {' '}
            <Link to="/register">
            <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register Now Free
          </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

