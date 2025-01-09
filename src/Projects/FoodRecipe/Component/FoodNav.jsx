import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../FoodContext/FoodContext";


const FoodNav = () => {
    const { searchParam, setSearchParm, handleSubmit } = useContext(GlobalContext);
    return (
        <nav className=" flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
            {/* Logo */}
            <div className="container flex items-center justify-between p-4">
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
                    <form action="" onSubmit={handleSubmit}>

                        <input
                            type="text"
                            value={searchParam}
                            onChange={(e) => setSearchParm(e.target.value)}
                            placeholder="Search..."
                            className="p-2 w-64 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 placeholder-gray-400"
                        />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default FoodNav;
