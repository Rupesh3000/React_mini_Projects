import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartTile from '../Components/CartTile';


export default function Cart() {

  const [totalCart, setTotalCart] = useState(0)
  const { cart } = useSelector(state => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])


  console.log(cart, totalCart)
  return (
    <>
      {
        cart && cart.length ?
          <div className="min-h-screen bg-gray-300 py-10">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {
                  cart.map(cartItem => <CartTile cartItem={cartItem} />)
                }
              </div>

              <div className='flex flex-col justify-center items-end p-5 space-y-5 mt-14'>
                <h1 className='font-bold text-lg text-red-700'> Your cart summary</h1>
                <p>
                  <span className='text-gray-800 font-bold'>Total Item</span>
                  <span>: {cart.length}</span>
                </p>
                <p>
                  <span className='text-gray-800 font-bold'>Total Amount</span>
                  <span>: {totalCart}</span>
                </p>
              </div>


            </div>
          </div>
          : <div className='min-h-[80vh] flex flex-col items-center justify-center'>

            <h1 className='text-gray-800 font-bold text-xl mb-2'>Your cart is empty </h1>
            <Link to={"/"}>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">

                Shop now

              </button>
            </Link>

          </div>
      }
    </>
  )
}
