import React, { useEffect, useState } from "react"
import useProtectedPage from "../Hooks/useProtectedPage"
import useRequestData from "../Hooks/useRequestData"
import { BASE_URL } from "../Url/url"
import { List, AddRecipeButton } from "./styled"
import { Add } from "@material-ui/icons"
import { useNavigate } from "react-router"


const Feed = () => {
    useProtectedPage()

    const navigate = useNavigate()
    const goToNewRecipes = () => {
        navigate("/adicionar")
    }

    const onClickDetails = (id) => {
        navigate(`/detalhes/${id}`)
    }

    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

    console.log(recipes)

    const recipeList = recipes.map((recipe) => {
        return(
            <div key={recipe.recipe_id} className="container">
                <div>
               <p> {recipe.title}</p> <img src={recipe.image}/>
               
                </div>
                <button onClick={() => onClickDetails(recipe.recipe_id)}>Detalhes</button>
                 </div>
        )
    })

    return(
        <div>
            <AddRecipeButton 
            color={"primary"}
            >
             <Add
             onClick={goToNewRecipes}/>
            </AddRecipeButton>

        <List>
            {recipeList}

        
        </List>
        </div>
    )
}
export default Feed