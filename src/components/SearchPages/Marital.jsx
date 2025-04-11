import React, { useState } from "react";
import Searchnav from "../Searchnav"; // Make sure the path to Searchnav is correct

function Marital() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [religion, setReligion] = useState("");
  const [maritalStatus, setMaritalStatus] = useState(""); // New state for marital status

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle your search logic here – for now we simply log the form values.
    console.log("Search Parameters:", { gender, age, religion, maritalStatus });
  };

  return (
    <>
      <div >
        <Searchnav />
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Marital Status Search</h1>
          <form onSubmit={handleSearch} className="max-w-md mx-auto space-y-4">
            {/* Gender Selection */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Age Input */}
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter Age"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            {/* Religion Selection */}
            <div>
              <label htmlFor="religion" className="block text-sm font-medium text-gray-700">
                Religion
              </label>
              <select
                id="religion"
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select Religion</option>
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="christian">Christian</option>
                <option value="sikh">Sikh</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Marital Status Selection */}
            <div>
              <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">
                Marital Status
              </label>
              <select
                id="maritalStatus"
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>

            {/* Search Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Marital;
