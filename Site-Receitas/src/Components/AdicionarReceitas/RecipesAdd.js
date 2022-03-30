import React from "react"
import useProtectedPage from "../Hooks/useProtectedPage"
import { TextField, Button} from "@material-ui/core"
import useForm from "../Hooks/useForm"
import { BASE_URL } from "../Url/url"
import axios from "axios"

const RecipesAdd = () => {
    useProtectedPage()

    const [form, onChange, clear] = useForm({
        title: "",
        description: "",
        image: ""
    })

    const onSubmit = (e) => {
        e.preventDefault()
        newRecipes()
        clear()
    }

    const newRecipes = () => {
        axios.post(`${BASE_URL}/recipe`, form, {
           headers:{
            Authorization: localStorage.getItem("token")
        }
        })
        .then((res) => {
            alert(res.data.message)
            

        })
        .catch((erro) => {
            alert(erro.response.data.message)
        })
       
    }
    return(
        <div>
            Adicionar receitas

            <form onSubmit={onSubmit}>
            <TextField 
            name="title"
            type="name"
            value={form.title}
            onChange={onChange}
            placeholder="Titulo"
            fullWidth
            required
            variant={"outlined"}
            margin={"normal"}
            />

            <TextField 
            name="description"
            type="name"
            value={form.description}
            onChange={onChange}
            placeholder="Descrição"
            fullWidth
            required
            variant={"outlined"}
            margin={"normal"}
            />

            <TextField 
            name="image"
            type="img"
            value={form.image}
            onChange={onChange}
            placeholder="Url image"
            fullWidth
            required
            variant={"outlined"}
            margin={"normal"}
            />
            <Button
            type={"submit"}
            fullWidth
            margin={"normal"}
            >Enviar</Button>
            </form>
        </div>
    )
}
export default RecipesAdd