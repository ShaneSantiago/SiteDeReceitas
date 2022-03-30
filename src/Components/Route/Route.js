import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RecipesAdd from "../AdicionarReceitas/RecipesAdd"
import DetailsPage from "../DetailsPage/DetailsPage"
import Feed from "../Feed/feed"
import Login from "../Login/LoginPage"
import SignUp from "../SignUp/signUp"

const Router = ({rightButtonText, setRightButtonText}) => {
    return (
        
        <Routes>
        
        <Route exact path="/login" element={<Login rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>}>
        </Route>

        <Route exact path="/cadastro" element={<SignUp rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>}>
        </Route>

        <Route exact path="/feed" element={<Feed />}>
        </Route>

        <Route exact path="/adicionar" element={<RecipesAdd />}>
        </Route>

        <Route exact path="/detalhes/:id" element={<DetailsPage />}>
        </Route>

        </Routes>
        
    )
}
export default Router