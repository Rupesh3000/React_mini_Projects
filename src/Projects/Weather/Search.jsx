import React, { useState } from 'react'

export default function Search({ fetchWeatherData, search, setSearch }) {

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeatherData(search); // Call the fetch function
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Weather Finder</h1>
      <div className="flex w-full max-w-md">
        <input
          type="text"
          onKeyDown={handleKeyDown}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter city name..."
          className="flex-1 p-3 rounded-l-lg border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => fetchWeatherData(search)}
          className="px-6 py-3 bg-blue-700 text-white font-medium rounded-r-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
    </div>
  );
}
