import React from "react";
import { NavLink } from "react-router-dom";

const FoodNav = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
            {/* Logo */}
            <div className="text-2xl font-extrabold text-white tracking-wide">Foody</div>

            {/* Nav Links */}
            <div className="flex space-x-8 text-lg">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-yellow-300 font-semibold "
                            : "text-white hover:text-yellow-300 transition duration-300"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/favorites"
                    className={({ isActive }) =>
                        isActive
                            ? "text-yellow-300 font-semibold "
                            : "text-white hover:text-yellow-300 transition duration-300"
                    }
                >
                    Favorites
                </NavLink>
            </div>

            {/* Search Input */}
            <div>
                <form action="">

                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 w-64 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 placeholder-gray-400"
                    />
                </form>
            </div>
        </nav>
    );
};

export default FoodNav;
