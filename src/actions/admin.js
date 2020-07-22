import axios from 'axios'

const baseUrl = "http://localhost:3003"

export const setBands = (bands) => {
    return {
        type: 'SET_BANDS',
        payload: {
            bands
        }
    }
}

export const getAllBands = (token) => async (dispatch) =>{
    try {
        console.log(token)
        const response = await axios.get(
            `${baseUrl}/users/show/bands`,
            {
                headers: {
                    Authorization: token
                }
            }
        )
        // console.log(response.data)
        dispatch(setBands(response.data))
    } catch (error) {
        alert('Não foi possivel obter bandas')
    }
}

export const approveBand = (token, email) => async (dispatch) =>{
    try {
        await axios.put(
            `${baseUrl}/users/aprove/band`,
            {
                email: email
            },
            {
                headers: {
                    Authorization: token
                }
            }
        )
        dispatch(getAllBands(token))
        alert('Banda aprovada')
    } catch (error) {
        alert('Não foi possivel aprovar banda')
    }
}