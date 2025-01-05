import React from "react";

function WeatherCard({ weatherData }) {


    return (
        <div className="max-w-screen-sm mx-auto bg-stone-300 rounded-lg shadow-lg p-6 space-y-6">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                    {weatherData?.name || "City"}, {weatherData?.sys?.country || "Country"}
                </h2>
                <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex justify-around items-center">
                <div className="text-6xl font-bold text-blue-600">
                    {Math.floor(weatherData?.main?.temp || 0)}°C
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5 text-sm text-gray-700 bg-gray-50 p-4 rounded-lg shadow-inner">
                <div className="flex justify-between items-center bg-blue-100 p-2 rounded-md shadow">
                    <span className="font-medium text-blue-700">Wind Speed:</span>
                    <span className="font-bold text-gray-800">{weatherData?.wind?.speed || 0} km/h</span>
                </div>
                <div className="flex justify-around items-center bg-green-100 p-3 rounded-md shadow">
                    <span className="font-medium text-green-700">Humidity:</span>
                    <span className="font-bold text-gray-800">{weatherData?.main?.humidity || 0}%</span>
                </div>
            </div>

        </div>
    );
}

export default WeatherCard;

// Example Usage
/*
const weatherData = {
  cityName: "New York",
  countryName: "USA",
  date: "2025-01-03",
  temperature: 5,
  windSpeed: 15,
  humidity: 80,
};

<WeatherCard weatherData={weatherData} />
*/
