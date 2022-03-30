import React from "react"
import useProtectedPage from "../Hooks/useProtectedPage"
import { useParams } from "react-router"
import useRequestData from "../Hooks/useRequestData"
import { BASE_URL } from "../Url/url"
import { DetailImage, RecipeContainer, ScreenContainer } from "./styled"
import { Typography } from "@material-ui/core"

const DetailsPage = () => {
    useProtectedPage()
    const params = useParams()

    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]
    console.log(recipe)
    
    return(
        <ScreenContainer>
            {recipe && <RecipeContainer>
                <DetailImage src={recipe.image} />
                <Typography align={"center"} variant={"h5"} color={"primary"}>{recipe && recipe.title}</Typography>
                <Typography align={"center"}>{recipe.description}</Typography>                  
                     
            </RecipeContainer>}
        
        </ScreenContainer>
    )
}
export default DetailsPage