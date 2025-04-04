import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Search() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-green-100">
      {/* Navigation Bar (Fixed) */}
      <div className="w-full bg-gray-200 p-4 shadow-md sticky top-0 z-50">
        <div className="flex flex-wrap justify-center gap-2">
          <Link to="/simple">
            <button className="px-4 py-2 bg-green-800 text-white font-semibold rounded-md hover:bg-green-950 transition">
              Simple Search
            </button>
          </Link>
          <Link to="/advance">
            <button className="px-4 py-2 bg-green-800 text-white font-semibold rounded-md hover:bg-green-950 transition">
              Advance Search
            </button>
          </Link>
          <Link to="/match-id">
            <button className="px-4 py-2 bg-green-800 text-white font-semibold rounded-md hover:bg-green-950 transition">
              Match ID Search
            </button>
          </Link>
          <Link to="/marital-status">
            <button className="px-4 py-2 bg-green-800 text-white font-semibold rounded-md hover:bg-green-950 transition">
              Marital Status Search
            </button>
          </Link>
        </div>
      </div>

      {/* Content Section (Page opens below) */}
      <div className="w-full max-w-4xl p-6 mt-4">
        <Outlet /> {/* This is where the dynamic content will be displayed */}
      </div>
    </div>
  );
}

export default Search;
