import React from "react"
import { Button } from "@material-ui/core"
import styled from "styled-components"
import { useNavigate } from "react-router";
import { HeaderStyled } from "./styled";


const Header = ({rightButtonText, setRightButtonText}) => {
    const token = localStorage.getItem("token")
  
    const navigate = useNavigate()
    const pageLogin = () => {
        navigate("/login")
    }

    const goToFeed = () => {
        navigate("/feed")
    }

    const logout = () => {
        localStorage.removeItem("token")
    }

    const righButtonAction = () => {
        if(token){
            logout()
            setRightButtonText("Login")
            pageLogin()
        } else {
            pageLogin()
        }
    }
    return (
        <HeaderStyled>
            
            <Button
            color={"primary"}
            onClick={goToFeed} 
            >Inicio</Button>


            <Button
            color={"primary"}
            onClick={righButtonAction}
            >{rightButtonText}</Button>
           

        </HeaderStyled>
    )
}
export default Header