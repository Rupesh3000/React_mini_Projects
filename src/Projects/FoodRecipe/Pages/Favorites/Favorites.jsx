import React, { useContext } from 'react'
import { GlobalContext } from '../../FoodContext/FoodContext';
import RecipeItem from '../../Component/RecipeItem';


export default function Favorites() {
  const { favoriteList } = useContext(GlobalContext);
  return (
    <div className='flex justify-center py-5 bg-gray-700'>
      <div className="container flex flex-wrap gap-9 items-center justify-evenly bg-gray-700 py-6">
        {
          favoriteList && favoriteList.length > 0 ?
            favoriteList.map((item, index) => <RecipeItem item={item} index={index} />)
            : <div>Nothing is added</div>
        }
      </div>
    </div>
  )
}
