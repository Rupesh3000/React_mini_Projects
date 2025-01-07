import React from 'react'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import FoodNav from './Component/Navbar/FoodNav'
import FoodHome from './Pages/Home/FoodHome'
import Favorites from './Pages/Favorites/Favorites'
import Details from './Pages/Details/Details'

export default function FoodApp() {


    return (
        <>
            <FoodNav />

            <Routes>
                <Route path='/' element={<FoodHome />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/recipe-item/:id' element={<Details />} />
            </Routes>

        </>
    )
}
