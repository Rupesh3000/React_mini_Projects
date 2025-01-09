import React from "react";

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20 px-8 w-full h-4/5 flex items-center">
            <div className="max-w-4xl mx-auto text-center">
                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    Discover Delicious Recipes
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl mb-8">
                    Explore, search, and save your favorite recipes to make every meal memorable.
                </p>

                {/* CTA Button */}
                <div>
                    <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300">
                        Start Searching Recipes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
