import * as types from '../actions/types'

const initialState = {
    users: []
}



export const userReducer = (state=initialState.users,action) => {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users:action.payload
            }
        default:
            return state;
    }
}



