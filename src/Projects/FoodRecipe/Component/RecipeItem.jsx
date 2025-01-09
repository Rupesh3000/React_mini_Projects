import React from "react";
import { NavLink } from "react-router-dom";

const RecipeItem = ({ item, }) => {
    const { image_url, publisher, title, id } = item;

    return (
        <div className="w-96 rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            {/* Image */}
            <img
                src={image_url}
                alt={title}
                className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">
                {/* Publisher */}
                <p className="text-sm text-gray-600 mb-2">
                    <strong>Publisher:</strong> {publisher}
                </p>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-4 truncate">
                    {title}
                </h3>

                {/* NavLink */}
                <NavLink
                    to={`/recipe-item/${id}`}
                    className="block w-full text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                    Recipe Details
                </NavLink>
            </div>
        </div>
    );
};

export default RecipeItem;
