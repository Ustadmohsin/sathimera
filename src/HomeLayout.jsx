import React from "react";

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Container */}
      <div className="container mx-auto px-4 py-8">
        {/* Top Search Section */}
        <div className="bg-white rounded shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            Find Your Match
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Looking For */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Looking For
              </label>
              <select className="w-full border border-gray-300 rounded p-2">
                <option>Female</option>
                <option>Male</option>
                <option>Any</option>
              </select>
            </div>

            {/* Age */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter Age"
              />
            </div>

            {/* Religion */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Religion
              </label>
              <select className="w-full border border-gray-300 rounded p-2">
                <option>Select Religion</option>
                <option>Christian</option>
                <option>Muslim</option>
                <option>Hindu</option>
                <option>Buddhist</option>
                <option>Jewish</option>
                <option>Other</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded w-full">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-pink-600">
            Steps to Find Your Better Half
          </h2>
          <p className="text-gray-500 mt-2">
            Follow these easy steps to get started on your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1: Register */}
          <div className="bg-white rounded shadow p-6 text-center">
            {/* Icon (you can replace with an <img> or a different icon library) */}
            <div className="mb-4 text-pink-600 text-3xl">
              <i className="fas fa-user-plus"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Free Register</h3>
            <p className="text-gray-600">
              Sign up to create your profile and explore.
            </p>
          </div>

          {/* Step 2: Search */}
          <div className="bg-white rounded shadow p-6 text-center">
            <div className="mb-4 text-pink-600 text-3xl">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Search Profiles</h3>
            <p className="text-gray-600">
              Filter by age, location, and more to find matches.
            </p>
          </div>

          {/* Step 3: Contact */}
          <div className="bg-white rounded shadow p-6 text-center">
            <div className="mb-4 text-pink-600 text-3xl">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
            <p className="text-gray-600">
              Connect with your matches and start a conversation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
