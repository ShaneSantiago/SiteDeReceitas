import React, { useState, useEffect } from "react"
import useForm from "../Hooks/useForm"
import { Button, TextField } from "@material-ui/core"
import { useNavigate } from "react-router"
import axios from "axios"
import { BASE_URL } from "../Url/url"
import unProtectedPage from "../Hooks/useUnprotectedPage"
import CircularProgress from "@material-ui/core/CircularProgress"
import { LoginStyled } from "./styled"

const Login = ({setRightButtonText}) => {
    unProtectedPage()
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()
    const goToSignUp = () => {
        navigate("/cadastro")
    }

    const goToFeed = () => {
        navigate("/feed")
    }
    const [form, onChange, clear] = useForm({
        email: "",
        password: ""
    })

    const onSubmitForm = (e) => {
        e.preventDefault()
        login(setRightButtonText, setIsLoading)
    }
const login = (setRightButtonText) => {
    axios.post(`${BASE_URL}/user/login`, form)
        .then((res) => {
        alert(res.data.message)
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed()
        setRightButtonText("Logout")
        setIsLoading(false)

        })
        .catch((erro) => {
            setIsLoading(false)
            alert("Erro ao efetuar o login", erro.response.data.message)

        })
}
    
    return (
        <LoginStyled>
            <h1>Faça Login </h1>
        <form onSubmit={onSubmitForm}>
            <TextField 
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="E-mail"
            fullWidth
            required
            variant={"outlined"}
            margin={"normal"}
            />

            <TextField  
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
            placeholder="Senha"
            fullWidth
            required
            variant={"outlined"}
            margin={"normal"}
            />

            <Button
            type={"submit"}
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            color={"primary"}
            >{isLoading? <CircularProgress color={"inherit"} size={20}/> : <>Fazer Login</>}</Button>
        </form>
        <Button
        onClick={goToSignUp}
        type={"submit"}
        fullWidth
        variant={"text"}
        margin={"normal"}
        color={"primary"}
        >Não tem cadastro? Cadastre-se</Button>
        </LoginStyled>
    )
}
export default Login
