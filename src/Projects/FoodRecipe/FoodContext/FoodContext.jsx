import { createContext, useState } from "react";


export const GlobalContext = createContext(null)

export default function GlobleState({ children }) {
    const [searchParam, setSearchParm] = useState('');
    const [recipeList, setRecipeList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [recipeDetails, setRecipeDetails] = useState(null)
    const [favoriteList, setFavoritesList] = useState([])

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            setIsLoading(true)
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await res.json();

            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes)
                setIsLoading(false)
                setSearchParm('')
            } else {
                console.log("somehing went wrong");
            }
        } catch (error) {
            console.log(error);
        }
    }


    const handleAddToFavorite = (getCurrentId) => {

        let cpyFavoriteList = [...favoriteList];
        const index = cpyFavoriteList.findIndex(item => item.id === getCurrentId.id);

        if (index === -1) {
            cpyFavoriteList.push(getCurrentId)
        } else {
            cpyFavoriteList.slice(index)
        }

        setFavoritesList(cpyFavoriteList)
    }



    return <GlobalContext.Provider value={{ favoriteList, setFavoritesList, handleAddToFavorite, searchParam, setSearchParm, handleSubmit, isLoading, recipeList, recipeDetails, setRecipeDetails }}>{children}</GlobalContext.Provider>
}