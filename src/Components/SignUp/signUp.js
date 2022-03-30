import React from "react"
import { Button, TextField } from "@material-ui/core"
import useForm from "../Hooks/useForm"
import { useNavigate } from "react-router"
import unProtectedPage from "../Hooks/useUnprotectedPage"
import axios from "axios"
import { BASE_URL } from "../Url/url"
import { SignStyled } from "./styled"


const SignUp = ({setRightButtonText}) => {
    unProtectedPage()
    
    const navigate = useNavigate()
    
    const goToFeed = () => {
        navigate("/feed")
    }
    const [form, onChange, clear] = useForm({
        name: "",
        email: "",
        password: ""
    })

    const onSubmitFormSignUp = (e) => {
        e.preventDefault()
        console.log(form)
        signUp(setRightButtonText)
    }

    const signUp = (setRightButtonText) => {
        axios.post(`${BASE_URL}/user/signup`, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            alert("Cadastrado com sucesso")
            goToFeed()
            setRightButtonText("Logout")

        })
        .catch((erro) => {
            console.log(erro.response.data.message)

        })
    }
    return (
        <SignStyled>
            <h1>Faça seu cadastro</h1>
            <form onSubmit={onSubmitFormSignUp}>
            <TextField
            name="name"
            type="name"
            value={form.name}
            onChange={onChange}
            placeholder="Nome"
            fullWidth
            required
            variant={"outlined"}
            margin={"normal"}
            />

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
            onClick={""}
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            color={"primary"}
            >Fazer cadastro</Button>
            </form>


        </SignStyled>
    )
}
export default SignUp