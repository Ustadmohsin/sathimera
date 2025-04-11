import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // For date fields
    if (["day", "month", "year"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        dateOfBirth: {
          ...prev.dateOfBirth,
          [name]: value,
        },
      }));
    } 
    // For checkbox input
    else if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } 
    // For other inputs
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
    console.log("Form Data:", formData);
    // TODO: Add your API call or next steps here
  };

  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
  };

  return (
    <motion.div 
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-green-200 "
      style={{ backgroundImage: "url('https://example.com/background.jpg')" }} // Replace with your background image URL
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <motion.div 
        className="max-w-xl w-full mx-auto mt-10 p-6 bg-gray-200 rounded shadow"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-2xl font-bold mb-4 text-center"
          variants={itemVariants}
        >
          Follow a few steps to create your profile
        </motion.h1>

        <motion.form onSubmit={handleSubmit} variants={containerVariants}>
          {/* Gender */}
          <motion.div className="mb-4" variants={itemVariants}>
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
          </motion.div>

          {/* Member ID */}
          <motion.div className="mb-4" variants={itemVariants}>
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
          </motion.div>

          {/* Email */}
          <motion.div className="mb-4" variants={itemVariants}>
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
          </motion.div>

          {/* Date of Birth */}
          <motion.div className="mb-4" variants={itemVariants}>
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
          </motion.div>

          {/* Religion */}
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block font-medium mb-1" htmlFor="religion">
              Religion
            </label>
            <select
              name="religin"
              id="religion"
              value={formData.community}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >  
              <option value="">Select a Religion</option>
              <option value="hindu">Hindu</option>
              <option value="muslim">Muslim</option>
              <option value="buddiest">Buddiest</option>
              <option value="crichan">Christian</option>
            </select>
          </motion.div>

          {/* Community */}
          <motion.div className="mb-4" variants={itemVariants}>
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
          </motion.div>

          {/* Full Name */}
          <motion.div className="mb-4" variants={itemVariants}>
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
          </motion.div>

          {/* Create a Password */}
          <motion.div className="mb-4" variants={itemVariants}>
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
          </motion.div>

          {/* Mobile Number */}
          <motion.div className="mb-4" variants={itemVariants}>
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
          </motion.div>

          {/* Caste */}
          <motion.div className="mb-4" variants={itemVariants}>
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
              <option value="Caste1">Muslim</option>
              <option value="Caste2">Sunni</option>
              <option value="Caste3">Tabligi</option>
              <option value="Caste4">Bhorri</option>
            </select>
          </motion.div>

          {/* Accept Terms and Conditions */}
          <motion.div className="mb-6" variants={itemVariants}>
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
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <Link to="/sidebar">
              <motion.button 
                type="submit" 
                className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-400 transition-colors w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Next
              </motion.button>
            </Link>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default RegistrationPage;
