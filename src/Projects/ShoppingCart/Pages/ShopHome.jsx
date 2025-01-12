import React, { useEffect, useState } from 'react'
import ProductItem from '../Components/ProductItem';

export default function ShopHome() {

  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const fetchProductData = async () => {
    try {
      setIsLoading(true)
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      if (data && data.length > 0) {
        setProductData(data)
        setIsLoading(false)
      }

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchProductData();
  }, [])




  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
        <div className="text-center">
          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>

          {/* Loading Text */}
          <h1 className="text-white text-2xl mt-5 font-bold">Loading...</h1>
          <p className="text-white/80 mt-2">
            Please wait while we load the products for you.
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-gray-300 py-10">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Products
          </h1>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {productData.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
