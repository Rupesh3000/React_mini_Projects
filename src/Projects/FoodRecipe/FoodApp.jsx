import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FoodNav from './Component/FoodNav'
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
