import React, { useState } from "react";

export default function Search() {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
      e.preventDefault();
      // Handle search logic here
      console.log('Searching for:', searchTerm);
    };
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
        <div className="my-6 md:my-8 lg:my-12">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">Find Your Favourite Products</h1>
        </div>
      <form onSubmit={handleSearch} className="relative">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto w-full"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
