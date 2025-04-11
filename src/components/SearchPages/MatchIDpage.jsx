import React from 'react';
import Searchnav from '../Searchnav';

function MatchIDpage() {
  return (
    <>
      <Searchnav />

      <div className="min-h-3 bg-green-200 flex items-center justify-center py-10 px-4">
        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Match ID Search
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your Match ID below to search for a specific profile.
          </p>

          {/* Input Field */}
          <div className="mb-4">
            <label htmlFor="matchID" className="block text-sm font-medium text-gray-700 mb-1">
              Enter Match ID
            </label>
            <input
              type="text"
              id="matchID"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="e.g., 12345"
            />
          </div>

          {/* Search Button */}
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 rounded-lg transition duration-300">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default MatchIDpage;
