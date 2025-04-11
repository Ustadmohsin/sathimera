import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Searchnav from '../Searchnav';

const Advance = () => {
  const [formData, setFormData] = useState({
    gender: '',
    maritalStatus: '',
    ageFrom: '',
    ageTo: '',
    heightFrom: '',
    heightTo: '',
    religion: '',
    caste: '',
    education: '',
    occupation: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className='bg-green-200'>
        <Searchnav />
        <motion.div
          className="max-w-2xl mx-auto mt-6 p-4 md:p-6 bg-white shadow-2xl rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Advance Search
          </motion.h1>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Gender */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Gender</label>
              <div className="flex items-center space-x-4">
                {['female', 'male'].map((g) => (
                  <label key={g} className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      onChange={handleChange}
                      checked={formData.gender === g}
                      className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span className="text-gray-700 capitalize">{g}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Marital Status */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Marital Status</label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 transition"
              >
                <option value="">Select Marital Status</option>
                <option value="never-married">Never Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>

            {/* Age and Height Range */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              {/* Age */}
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 font-semibold mb-2">Age</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    name="ageFrom"
                    value={formData.ageFrom}
                    onChange={handleChange}
                    placeholder="23"
                    className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 transition"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    name="ageTo"
                    value={formData.ageTo}
                    onChange={handleChange}
                    placeholder="28"
                    className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
              </div>

              {/* Height */}
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <label className="block text-gray-700 font-semibold mb-2">Height</label>
                <div className="flex items-center space-x-2">
                  <select
                    name="heightFrom"
                    value={formData.heightFrom}
                    onChange={handleChange}
                    className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 transition"
                  >
                    <option value="">4ft 6in</option>
                    <option value="4ft7in">4ft 7in</option>
                    <option value="5ft">5ft</option>
                  </select>
                  <span>-</span>
                  <select
                    name="heightTo"
                    value={formData.heightTo}
                    onChange={handleChange}
                    className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 transition"
                  >
                    <option value="">7ft</option>
                    <option value="6ft9in">6ft 9in</option>
                    <option value="7ft">7ft</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Religion, Caste */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['religion', 'caste'].map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 font-semibold mb-2 capitalize">{field}</label>
                  <select
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 transition"
                  >
                    <option value="">Select {field.charAt(0).toUpperCase() + field.slice(1)}</option>
                    {field === 'religion' ? (
                      ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain'].map((rel) => (
                        <option key={rel} value={rel.toLowerCase()}>{rel}</option>
                      ))
                    ) : (
                      <option value="">Add caste options</option>
                    )}
                  </select>
                </div>
              ))}
            </div>

            {/* Education, Occupation, City */}
            {['education', 'occupation', 'city'].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 font-semibold mb-2 capitalize">{field}</label>
                <select
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 transition"
                >
                  <option value="">Select {field}</option>
                  {field === 'education' && ['High School', 'Bachelor’s', 'Master’s', 'Doctorate'].map((opt) => (
                    <option key={opt} value={opt.toLowerCase()}>{opt}</option>
                  ))}
                  {field === 'occupation' && ['Engineer', 'Doctor', 'Teacher', 'Business'].map((opt) => (
                    <option key={opt} value={opt.toLowerCase()}>{opt}</option>
                  ))}
                  {field === 'city' && ['Mumbai', 'Delhi', 'Bangalore', 'Kolkata'].map((opt) => (
                    <option key={opt} value={opt.toLowerCase()}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-indigo-500 transition"
              >
                Search
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </>
  );
};

export default Advance;
