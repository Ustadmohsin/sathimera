import React, { useState } from "react";
import Search from "./Search";

function FilterForm() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [religion, setReligion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the search action
    // For now, we'll just log the form data to the console
    console.log({ gender, age, religion });
  };

  return (
    <div>
      
<div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded shadow-md max-w-sm w-full"
      >
        {/* Gender */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Gender</label>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="female" className="cursor-pointer">Female</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="male" className="cursor-pointer">Male</label>
          </div>
        </div>

        {/* Age */}
        <div className="mb-4">
          <label 
            htmlFor="age" 
            className="block text-gray-700 font-bold mb-2"
          >
            Age
          </label>
          <select
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="">Select Age</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
          </select>
        </div>

        {/* Religion */}
        <div className="mb-4">
          <label 
            htmlFor="religion"
            className="block text-gray-700 font-bold mb-2"
          >
            Religion
          </label>
          <select
            id="religion"
            value={religion}
            onChange={(e) => setReligion(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="">Select Religion</option>
            <option value="hindu">Hindu</option>
            <option value="muslim">Muslim</option>
            <option value="christian">Christian</option>
            <option value="sikh">Sikh</option>
            <option value="buddhist">Buddhist</option>
            <option value="jain">Jain</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Search Button */}
        <button 
          type="submit"
          className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded w-full"
        >
          Search
        </button>
      </form>
    </div>
    </div>
  
    
  );
}

export default FilterForm;
