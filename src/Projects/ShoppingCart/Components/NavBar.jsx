import React from "react";
import { NavLink } from "react-router-dom";



const NavBar = () => {

    return (
        <nav className=" flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
            {/* Logo */}
            <div className="container flex items-center justify-between p-4">
                <div className="text-2xl font-extrabold text-white tracking-wide">Shopping Cart</div>

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
                        to="/cart"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-300 font-semibold "
                                : "text-white hover:text-yellow-300 transition duration-300"
                        }
                    >
                        Cart
                    </NavLink>
                </div>
              
            </div>
        </nav>
    );
};

export default NavBar;
