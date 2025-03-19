import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search logic here
    console.log('Search query:', query);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-200 p-8 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Search</h2>
      <form onSubmit={handleSearch}>
        <div className="mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter search term"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
