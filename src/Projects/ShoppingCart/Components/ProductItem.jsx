import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFomrCart } from "../Store/Slice/Slice";

const ProductItem = ({ product }) => {
    const { image, title, price } = product;
    const dispathc = useDispatch()
    const { cart } = useSelector(state => state)

    const handleAddToCart = () => {
        dispathc(addToCart(product))
    }

    const handleRemoveFromCart = ()=> {
        dispathc(removeFomrCart(product.id))
        
    }
    return (
        <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col justify-between hover:shadow-lg hover:border-gray-500 transition duration-300">

            {/* Product Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-40 object-contain mb-4"
            />

            {/* Product Info */}
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
                <p className="text-gray-600 text-xl mt-2">${price.toFixed(2)}</p>
            </div>

            {/* Add to Cart Button */}
            <button
                onClick={cart.some(item => item.id === product.id) ? handleRemoveFromCart : handleAddToCart}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                {
                    cart.some(item => item.id === product.id) ? "Remove from cart" : "Add to Cart"
                }

            </button>
        </div>
    );
};

export default ProductItem;
