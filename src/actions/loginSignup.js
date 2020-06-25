import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../containers/Router'

const baseUrl = 'http://localhost:3003/users'

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
    const { name, email, nickname, description, password} = formData
    const data = {
        "name": name,
        "email": email,
        "nickname": nickname,
        "description": description,
        "password": password
    }
    try {
        let result = undefined
        if (!description){
            result = await axios.post(`${baseUrl}/signup/listener`, data)
        }
        else{
            result = await axios.post(`${baseUrl}/signup/band`, data)
        }
        alert("Usuário criado com sucesso")
        // console.log(result.data.accessToken)
        // dispatch(login(email, password))
        window.localStorage.setItem("token", result.data.accessToken);
        dispatch(push(routes.feed))
    }
    catch (error) {
        console.error(error)
    }
}