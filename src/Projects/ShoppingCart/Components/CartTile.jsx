import React from 'react'

function CartTile({ cartItem }) {
    const { image, title, price } = cartItem;
    return (
        <>
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
        
            </div>
        </>
    )
}

export default CartTile