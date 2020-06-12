import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../containers/Router'

const baseUrl = 'http://localhost:3000'

export const login = (email, password) => async (dispatch) => {

    const loginData = {
        email,
        password
    }

    try {
        const response = await axios.post(
            `${baseUrl}/users/login`, loginData
        );

        const token = response.data.acessToken;
        // const username = response.data.user.username

        //Testando token
        console.log(token)

        window.localStorage.setItem("token", token);
        // window.localStorage.setItem("user", username)

        dispatch(push(routes.feed))
    } catch (error) {
        alert('Por favor tentar novamente')
    }
}

export const signup = (formData) => async (dispatch) => {
    const { email, password, username} = formData
    const data = {
        "email": email,
        "password": password,
        "username": username
    }
    try {
        await axios.post(`${baseUrl}/signup`, data)
        alert("Usuário criado com sucesso")
        dispatch(login(email, password))
    }
    catch (error) {
        console.error(error)
    }
}