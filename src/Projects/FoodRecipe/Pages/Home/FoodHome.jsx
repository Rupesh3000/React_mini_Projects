import React, { useContext } from 'react'
import { GlobalContext } from '../../FoodContext/FoodContext'
import RecipeItem from '../../Component/RecipeItem';
import HeroSection from '../../Component/HeroSection';

export default function FoodHome() {

  const { isLoading, recipeList } = useContext(GlobalContext);


  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
        <div className="text-center">
          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>

          {/* Loading Text */}
          <h1 className="text-white text-2xl mt-5 font-bold">Loading...</h1>
          <p className="text-white/80 mt-2">
            Please wait while we load the content for you.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='flex justify-center py-5 bg-gray-700'>
      <div className="container flex flex-wrap gap-9 items-center justify-evenly bg-gray-700 py-6">
        {
          recipeList && recipeList.length > 0 ?
            recipeList.map((item, index) => <RecipeItem item={item} index={index} />)
            : <HeroSection />
        }
      </div>
    </div>
  )
}
