// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const RegistrationPage = () => {
//   // Manage form data in state
//   const [formData, setFormData] = useState({
//     gender: "",
//     memberId: "", // Default from your screenshot
//     email: "",
//     dateOfBirth: {
//       day: "1",
//       month: "Jan",
//       year: "2004",
//     },
//     religion: "Muslim", // Default from screenshot
//     community: "Muslim",
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     password: "",
//     mobile: "",
//     caste: "",
//     acceptTerms: false,
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
    
//     // For date fields
//     if (["day", "month", "year"].includes(name)) {
//       setFormData((prev) => ({
//         ...prev,
//         dateOfBirth: {
//           ...prev.dateOfBirth,
//           [name]: value,
//         },
//       }));
//     } 
//     // For checkbox input
//     else if (type === "checkbox") {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: checked,
//       }));
//     } 
//     // For other inputs
//     else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     // TODO: Add your API call or next steps here
//   };

//   // Animation variants
//   const pageVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" }
//     },
//   };

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.4 }
//     },
//   };

//   return (
//     <motion.div 
//       className="flex justify-center items-center min-h-screen bg-cover bg-center bg-green-200"
//       style={{ backgroundImage: "url('https://example.com/background.jpg')" }} // Replace with your background image URL
//       initial="hidden"
//       animate="visible"
//       variants={pageVariants}
//     >
//       <motion.div 
//         className="max-w-xl w-full mx-auto mt-10 p-6 bg-gray-200 rounded shadow"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h1 
//           className="text-2xl font-bold mb-4 text-center"
//           variants={itemVariants}
//         >
//           Follow a few steps to create your profile
//         </motion.h1>

//         <motion.form onSubmit={handleSubmit} variants={containerVariants}>
//           {/* Gender */}
//           <motion.div className="mb-4" variants={itemVariants}>
//             <label className="block font-medium mb-1">Gender</label>
//             <div className="flex items-center space-x-4">
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Male"
//                   checked={formData.gender === "Male"}
//                   onChange={handleChange}
//                   className="form-radio"
//                 />
//                 <span>Male</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Female"
//                   checked={formData.gender === "Female"}
//                   onChange={handleChange}
//                   className="form-radio"
//                 />
//                 <span>Female</span>
//               </label>
//             </div>
//           </motion.div>

//           {/* Member ID */}
//           <motion.div className="mb-4" variants={itemVariants}>
//             <label className="block font-medium mb-1" htmlFor="memberId">
//               Member ID
//             </label>
//             <input
//               type="text"
//               name="memberId"
//               id="memberId"
//               value={formData.memberId}
//               readOnly
//               className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-700"
//             />
//           </motion.div>

//           {/* Email */}
//           <motion.div className="mb-4" variants={itemVariants}>
//             <label className="block font-medium mb-1" htmlFor="email">
//               E-mail
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               placeholder="Enter your email"
//             />
//           </motion.div>

//           {/* Date of Birth */}
//           <motion.div className="mb-4" variants={itemVariants}>
//             <label className="block font-medium mb-1">Date of Birth</label>
//             <div className="flex space-x-2">
//               <select
//                 name="day"
//                 value={formData.dateOfBirth.day}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded px-2 py-2"
//               >
//                 {[...Array(31).keys()].map((d) => (
//                   <option key={d + 1} value={d + 1}>
//                     {d + 1}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 name="month"
//                 value={formData.dateOfBirth.month}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded px-2 py-2"
//               >
//                 {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
//                   <option key={m} value={m}>
//                     {m}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 name="year"
//                 value={formData.dateOfBirth.year}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded px-2 py-2"
//               >
//                 {Array.from({ length: 50 }, (_, i) => 1980 + i).map((yr) => (
//                   <option key={yr} value={yr}>
//                     {yr}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </motion.div>

//           {/* Religion */}
//           <motion.div className="mb-4" variants={itemVariants}>
//             <label className="block font-medium mb-1" htmlFor="religion">
//               Religion
//             </label>
//             <select
//               name="religin"
//               id="religion"
//               value={formData.community}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//             >  
//               <option value="">Select a Religion</option>
//               <option value="hindu">Hindu</option>
//               <option value="muslim">Muslim</option>
//               <option value="buddiest">Buddiest</option>
//               <option value="crichan">Christian</option>
//             </select>
//           </motion.div>

//           {/* Community */}
//           <motion.div className="mb-4" variants={itemVariants}>
//             <label className="block font-medium mb-1" htmlFor="community">
//               Community
//             </label>
//             <select
//               name="community"
//               id="community"
//               value={formData.community}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//             >
//               <option value="">Select a community</option>
//               <option value="hindu">Hindu</option>
//               <option value="muslim">Muslim</option>
//               <option value="buddiest">Buddiest</option>
//               <option value="crichan">Christian</option>
//             </select>
//           </motion.div>

//           {/* Full Name */}
//           <motion.div className="mb-4" variants={itemVariants}>
//             <label className="block font-medium mb-1">Full Name</label>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded px-3 py-2"
//               />
//               <input
//                 type="text"
//                 name="middleName"
//                 placeholder="Middle Name"
//                 value={formData.middleName}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded px-3 py-2"
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last Name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded px-3 py-2"
//               />
//             </div>
//           </motion.div>

//           {/* Create a Password */}
//           <motion.div className="mb-4" variants={itemVariants}>
//             <label className="block font-medium mb-1" htmlFor="password">
//               Create a Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               placeholder="Enter a strong password"
//             />
//           </motion.div>

//           {/* Mobile Number */}
//           <motion.div className="mb-4" variants={itemVariants}>
//             <label className="block font-medium mb-1" htmlFor="mobile">
//               Mobile No.
//             </label>
//             <input
//               type="tel"
//               name="mobile"
//               id="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               placeholder="Enter your phone number"
//             />
//           </motion.div>

//           {/* Caste */}
//           <motion.div className="mb-4" variants={itemVariants}>
//             <label className="block font-medium mb-1" htmlFor="caste">
//               Caste
//             </label>
//             <select
//               name="caste"
//               id="caste"
//               value={formData.caste}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//             >
//               <option value="">Select Caste</option>
//               <option value="Caste1">Muslim</option>
//               <option value="Caste2">Sunni</option>
//               <option value="Caste3">Tabligi</option>
//               <option value="Caste4">Bhorri</option>
//             </select>
//           </motion.div>

//           {/* Accept Terms and Conditions */}
//           <motion.div className="mb-6" variants={itemVariants}>
//             <label className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 name="acceptTerms"
//                 checked={formData.acceptTerms}
//                 onChange={handleChange}
//                 className="form-checkbox"
//               />
//               <span className="text-sm">
//                 I accept the{" "}
//                 <a href="#terms" className="text-blue-500 underline">
//                   terms and conditions
//                 </a>.
//               </span>
//             </label>
//           </motion.div>

//           {/* Submit Button */}
//           <motion.div variants={itemVariants}>
//             <Link to="/sidebar">
//               <motion.button 
//                 type="submit" 
//                 className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-400 transition-colors w-full"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 Next
//               </motion.button>
//             </Link>
//           </motion.div>
//         </motion.form>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default RegistrationPage;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     gender: "",
//     memberId: "",
//     email: "",
//     dateOfBirth: {
//       day: "1",
//       month: "Jan",
//       year: "2004",
//     },
//     religion: "Muslim",
//     community: "Muslim",
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     password: "",
//     mobile: "",
//     caste: "",
//     acceptTerms: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (["day", "month", "year"].includes(name)) {
//       setFormData((prev) => ({
//         ...prev,
//         dateOfBirth: {
//           ...prev.dateOfBirth,
//           [name]: value,
//         },
//       }));
//     } else if (type === "checkbox") {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: checked,
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//   };

//   return (
//     <div className="flex flex-col min-h-screen my-16">
//       {/* Navbar */}
//       <nav className="bg-blue-600 text-white py-4 px-6 mb-8">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-lg font-bold">MyApp</h1>
//           <ul className="flex space-x-4">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div
//         className="flex-grow flex justify-center items-center bg-green-200"
//         style={{ backgroundImage: "url('https://example.com/background.jpg')" }}
//       >
//         <div className="max-w-xl w-full mx-auto p-6 bg-gray-200 rounded shadow">
//           <h1 className="text-2xl font-bold mb-4 text-center">
//             Follow a few steps to create your profile
//           </h1>
//           <form onSubmit={handleSubmit}>
//             {/* Form Fields (same as before) */}
//             {/* Gender, Member ID, Email, Date of Birth, etc. */}
//           </form>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6 px-6 mt-8">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2023 MyApp. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Register;





// import React, { useState } from "react";

// function  Register() {
//   // State for each field - no default values set
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [gender, setGender] = useState("");
//   const [community, setCommunity] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [fatherName, setFatherName] = useState("");
//   const [motherName, setMotherName] = useState("");
//   const [email, setEmail] = useState("");
//   const [day, setDay] = useState("");
//   const [month, setMonth] = useState("");
//   const [year, setYear] = useState("");

//   // Handler for form submission (e.g., go to next step or do something else)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     const formData = {
//       mobileNumber,
//       gender,
//       community,
//       fullName,
//       fatherName,
//       motherName,
//       email,
//       dateOfBirth: {
//         day,
//         month,
//         year,
//       },
//     };
//     console.log("Form data:", formData);
//     // You can navigate to another page, show a success message, etc.
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-4 px-2">
//       <h1 className="text-xl font-semibold mb-4 text-gray-800">
//         Follow few steps to create your profile
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8"
//       >
//         {/* Mobile Number */}
//         <div className="mb-4">
//           <label
//             htmlFor="mobileNumber"
//             className="block text-gray-700 font-bold mb-2"
//           >
//             Mobile Number
//           </label>
//           <input
//             id="mobileNumber"
//             type="text"
//             value={mobileNumber}
//             onChange={(e) => setMobileNumber(e.target.value)}
//             placeholder="Enter mobile number"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         {/* Gender (Button Style) */}
// <div className="mb-4">
//   <label className="block text-gray-700 font-bold mb-2">Gender</label>
//   <div className="flex space-x-4">
//     {["Male", "Female", "Other"].map((option) => (
//       <button
//         type="button"
//         key={option}
//         onClick={() => setGender(option)}
//         className={`px-4 py-2 rounded-md border 
//           ${
//             gender === option
//               ? "bg-blue-500 text-white border-blue-600"
//               : "bg-white text-gray-700 border-gray-300"
//           } 
//           hover:bg-blue-100 transition`}
//       >
//         {option}
//       </button>
//     ))}
//   </div>
// </div>


//         {/* Community */}
//         <div className="mb-4">
//           <label
//             htmlFor="community"
//             className="block text-gray-700 font-bold mb-2"
//           >
//             Community
//           </label>
//           <input
//             id="community"
//             type="text"
//             value={community}
//             onChange={(e) => setCommunity(e.target.value)}
//             placeholder="Enter your community"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         {/* Full Name */}
//         <div className="mb-4">
//           <label
//             htmlFor="fullName"
//             className="block text-gray-700 font-bold mb-2"
//           >
//             Full Name
//           </label>
//           <input
//             id="fullName"
//             type="text"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             placeholder="Enter full name"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         {/* Father Name */}
//         <div className="mb-4">
//           <label
//             htmlFor="fatherName"
//             className="block text-gray-700 font-bold mb-2"
//           >
//             Father Name
//           </label>
//           <input
//             id="fatherName"
//             type="text"
//             value={fatherName}
//             onChange={(e) => setFatherName(e.target.value)}
//             placeholder="Enter father name"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         {/* Mother Name */}
//         <div className="mb-4">
//           <label
//             htmlFor="motherName"
//             className="block text-gray-700 font-bold mb-2"
//           >
//             Mother Name
//           </label>
//           <input
//             id="motherName"
//             type="text"
//             value={motherName}
//             onChange={(e) => setMotherName(e.target.value)}
//             placeholder="Enter mother name"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-gray-700 font-bold mb-2"
//           >
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter email address"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         {/* Date of Birth */}
//         <div className="mb-4">
//           <label
//             htmlFor="day"
//             className="block text-gray-700 font-bold mb-2"
//           >
//             Date of Birth
//           </label>
//           <div className="flex space-x-2">
//             <input
//               id="day"
//               type="text"
//               value={day}
//               onChange={(e) => setDay(e.target.value)}
//               placeholder="Day"
//               className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//             <input
//               id="month"
//               type="text"
//               value={month}
//               onChange={(e) => setMonth(e.target.value)}
//               placeholder="Month"
//               className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//             <input
//               id="year"
//               type="text"
//               value={year}
//               onChange={(e) => setYear(e.target.value)}
//               placeholder="Year"
//               className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//         </div>

//         <div className="flex justify-end mt-6">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Next
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Register;



import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    gender: "",
    memberId: "IMB104178", // Set default Member ID
    email: "",
    dateOfBirth: {
      day: "1",
      month: "Jan",
      year: "2004",
    },
    religion: "Muslim",
    community: "Muslim",
    firstName: "",
    middleName: "",
    lastName: "",
    password: "",
    mobile: "",
    caste: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (["day", "month", "year"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        dateOfBirth: {
          ...prev.dateOfBirth,
          [name]: value,
        },
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200 mt-10 ">
      <div className="max-w-xl w-full mx-auto mt-10 p-6 bg-gray-200 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Follow a few steps to create your profile
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

          {/* Member ID */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Member ID</label>
            <input
              type="text"
              name="memberId"
              value={formData.memberId}
              readOnly
              className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-700"
              
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium mb-1">E-mail</label>
            <input
              type="email"
              name="email"
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
              <select
                name="day"
                value={formData.dateOfBirth.day}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-2"
              >
                {[...Array(31).keys()].map((d) => (
                  <option key={d + 1} value={d + 1}>
                    {d + 1}
                  </option>
                ))}
              </select>
              <select
                name="month"
                value={formData.dateOfBirth.month}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-2"
              >
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <select
                name="year"
                value={formData.dateOfBirth.year}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-2"
              >
                {Array.from({ length: 50 }, (_, i) => 1980 + i).map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Religion */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Religion</label>
            <select
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select a Religion</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Buddiest">Buddhist</option>
              <option value="Christian">Christian</option>
            </select>
          </div>

          {/* Community */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Community</label>
            <select
              name="community"
              value={formData.community}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select a Community</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Buddiest">Buddhist</option>
              <option value="Christian">Christian</option>
            </select>
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Full Name</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
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

          {/* Password */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Create a Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter a strong password"
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Mobile No.</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Caste */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Caste</label>
            <select
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select Caste</option>
              <option value="Muslim">Muslim</option>
              <option value="Sunni">Sunni</option>
              <option value="Tabligi">Tabligi</option>
              <option value="Bhorri">Bhorri</option>
            </select>
          </div>

          {/* Accept Terms */}
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
                I accept the{" "}
                <a href="#terms" className="text-blue-500 underline">
                  terms and conditions
                </a>.
              </span>
            </label>
          </div>

          {/* Submit */}
          <div>
            <Link to="/sidebar">
              <button
                type="submit"
                className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-400 transition-colors w-full"
              >
                Next
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;




