import React from 'react'
import NavBar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import ShopHome from './Pages/ShopHome.jsx'
import Cart from './Pages/Cart.jsx'

function CartApp() {

    return (
        <>
            <NavBar />

            <Routes>
                <Route path='/' element={<ShopHome />} />
                <Route path='/cart' element={<Cart />} />

            </Routes>
        </>
    )
}

export default CartApp