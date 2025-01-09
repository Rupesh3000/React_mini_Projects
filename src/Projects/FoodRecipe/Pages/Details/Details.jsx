import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../FoodContext/FoodContext'
import RecipeDetails from '../../Component/RecipeDetails';

export default function Details() {
  const { id } = useParams()
  const { recipeDetails, setRecipeDetails, handleAddToFavorite } = useContext(GlobalContext);


  useEffect(() => {

    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      .then(res => res.json())
      .then((data) => {
        setRecipeDetails(data?.data);

      })
      .catch(e => console.log(e))
  }, [id])


  return (
    <RecipeDetails recipeDetails={recipeDetails} handleAddToFavorite={handleAddToFavorite} />
  )
}
