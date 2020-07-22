const initialState = {
    bands: undefined
}

const users = (state = initialState, action) => {
    switch(action.type){
        case "SET_BANDS": {
            return {
                bands: action.payload.bands
            }
        }
        default:{
            return state
        }
    }

}
export default users;