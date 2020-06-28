import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../containers/Router'

const baseUrl = 'http://localhost:3003/users'

export const login = (form) => async (dispatch) => {
    try {
        const response = await axios.post(
            `${baseUrl}/login`, form
        );

        window.localStorage.setItem("token", response.data.accessToken);
        dispatch(push(routes.feed))
    } catch (error) {
        alert('Por favor tentar novamente')
    }
}

export const signup = (formData) => async (dispatch) => {
    const { name, email, nickname, description, password } = formData
    const data = {
        "name": name,
        "email": email,
        "nickname": nickname,
        "description": description,
        "password": password
    }
    try {
        let response = undefined
        if (!description) {
            response = await axios.post(`${baseUrl}/signup/listener`, data)
        }
        else {
            response = await axios.post(`${baseUrl}/signup/band`, data)
        }
        alert("Usuário criado com sucesso")
        window.localStorage.setItem("token", response.data.accessToken);
        dispatch(push(routes.feed))
    }
    catch (error) {
        console.error(error)
    }
}

export const signupAdmin = (formData, token) => async (dispatch) => {
    const { name, email, nickname, description, password } = formData.form
    console.log("entrou na outr parte")
    
    const data = {
        "name": name,
        "email": email,
        "nickname": nickname,
        "password": password
    }
    console.log(formData)
    console.log(name)
    console.log(email)
    console.log(nickname)
    console.log(password)

    try {
        const response = await axios.post(
            `${baseUrl}/signup/admin`,
            data,
            {
                headers: {
                    Authorization: token
                }
            }
        )
        alert("Usuário admin criado com sucesso")
        dispatch(push(routes.feed))
    }
    catch (error) {
        console.error(error)
    }
}