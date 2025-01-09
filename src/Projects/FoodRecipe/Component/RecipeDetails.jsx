import React from "react";
import { NavLink } from "react-router-dom";

const RecipeDetails = ({ recipeDetails, handleAddToFavorite }) => {
    if (!recipeDetails) return <div>Loading...</div>;

    const { title, image_url, publisher, cooking_time, servings, ingredients } =
        recipeDetails.recipe;

    return (
        <div className=" w-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 py-12 ">
            <div className="container mx-auto flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden ">
                {/* Left Section: Recipe Image */}
                <div className="w-full md:w-1/2 ">
                    <img
                        src={image_url}
                        alt={title}
                        className="object-cover h-full w-full"
                    />
                </div>

                {/* Right Section: Recipe Details */}
                <div className="w-full md:w-1/2 p-6">
                    <h1 className="text-3xl font-bold mb-4 text-gray-800">{title}</h1>
                    <p className="text-gray-600 mb-6">
                        <strong>Publisher:</strong> {publisher}
                    </p>

                    <div className="mb-6">
                        <p className="mb-2">
                            <strong>Cooking Time:</strong> {cooking_time} minutes
                        </p>
                        <p>
                            <strong>Servings:</strong> {servings}
                        </p>
                    </div>

                    <h2 className="text-xl font-semibold mb-4">Ingredients:</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {ingredients.map((ingredient, index) => (
                            <li key={index} className="mb-1">
                                {ingredient.quantity
                                    ? `${ingredient.quantity} ${ingredient.unit} `
                                    : ""}
                                {ingredient.description}
                            </li>
                        ))}
                    </ul>


                    <NavLink
                        to={`/favorites`}

                    >
                        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                            onClick={() => handleAddToFavorite(recipeDetails.recipe)}
                        >
                            Add Favorites
                        </button>
                    </NavLink>

                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
