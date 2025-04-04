// import React, { useState } from 'react';

// function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add registration logic here
//     console.log('Registration submitted:', { name, email, password });
//   };

//   return (
//     <div className="max-w-md mx-auto bg-gray-200 p-8 shadow-md rounded">
//       <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
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
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  // Manage form data in state
  const [formData, setFormData] = useState({
    gender: "",
    memberId: "IMB104080", // Default from your screenshot
    email: "",
    dateOfBirth: {
      day: "1",
      month: "Jan",
      year: "2004",
    },
    religion: "Muslim", // Default from screenshot
    community: "Muslim",
    firstName: "",
    middleName: "",
    lastName: "",
    password: "",
    mobile: "",
    caste: "",
    acceptTerms: false,
  });

  // Handle input changes for text, email, password, etc.
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // If the field is part of dateOfBirth
    if (["day", "month", "year"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        dateOfBirth: {
          ...prev.dateOfBirth,
          [name]: value,
        },
      }));
    } 
    // If it's a checkbox (terms)
    else if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } 
    // All other fields
    else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data
    console.log("Form Data:", formData);

    // TODO: Add your API call or next steps here
    // e.g., axios.post('/api/register', formData).then(...)
  };

  return (
    <div 
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-green-100"
      style={{ backgroundImage: "url('https://example.com/background.jpg')" }} // Replace with your background image URL
    >
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-200 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Follow few steps to create your profile
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Gender */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Gender</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                className="form-radio"
              />
              <span>Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                className="form-radio"
              />
              <span>Female</span>
            </label>
          </div>
        </div>

        {/* Member ID (Read-only) */}
        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="memberId">
            Member ID
          </label>
          <input
            type="text"
            name="memberId"
            id="memberId"
            value={formData.memberId}
            readOnly
            className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your email"
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Date of Birth</label>
          <div className="flex space-x-2">
            {/* Day */}
            <select
              name="day"
              value={formData.dateOfBirth.day}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-2"
            >
              {/* Just a few sample days for brevity */}
              {[...Array(31).keys()].map((d) => (
                <option key={d + 1} value={d + 1}>
                  {d + 1}
                </option>
              ))}
            </select>
            {/* Month */}
            <select
              name="month"
              value={formData.dateOfBirth.month}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-2"
            >
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            {/* Year */}
            <select
              name="year"
              value={formData.dateOfBirth.year}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-2"
            >
              {/* Range of years. Adjust as needed */}
              {Array.from({ length: 50 }, (_, i) => 1980 + i).map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Religion (Read-only or Select) */}
        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="religion">
            Religion
          </label>
          <select
          name="religin"
          id="religion"
          value={formData.community}
          onChange={handleChange}
          className="w-full border border-gray-300 rouder px-3 py-2"
          >  
          <option value =""> Select a Religion</option>
          <option value="hindu">Hindu</option>
          <option value="muslim">Muslim</option>
          <option value="buddiest">Buddiest</option>
          <option value="crichan">Christian</option>
            
          </select>
        </div>

        {/* Community */}
<div className="mb-4">
  <label className="block font-medium mb-1" htmlFor="community">
    Community
  </label>
  <select
    name="community"
    id="community"
    value={formData.community}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded px-3 py-2"
  >
    <option value="">Select a community</option>
    <option value="hindu">Hindu</option>
    <option value="muslim">Muslim</option>
    <option value="buddiest">Buddiest</option>
    <option value="crichan">Christian</option>
  </select>
</div>


        {/* Full Name */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Full Name</label>
          <div className="grid grid-cols-3 gap-2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              name="middleName"
              placeholder="Middle Name"
              value={formData.middleName}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Create a Password */}
        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="password">
            Create a Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter a strong password"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="mobile">
            Mobile No.
          </label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Caste */}
        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="caste">
            Caste
          </label>
          <select
            name="caste"
            id="caste"
            value={formData.caste}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select Caste</option>
            {/* Add actual options relevant to your context */}
            <option value="Caste1">Muslim</option>
            <option value="Caste2">Sunni</option>
            <option value="Caste2">Tabligi</option>
            <option value="Caste2">Bhorri</option>
          </select>
        </div>

        {/* Accept Terms and Conditions */}
        <div className="mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="text-sm">
              I accept the <a href="#terms" className="text-blue-500 underline">terms and conditions</a>.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <Link to="/sidebar">
        <button type="submit" className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-950 transition-colors w-full">
Next
        </button>
        </Link>
      </form>
    </div>
    </div>
  );
};

export default RegistrationPage;

