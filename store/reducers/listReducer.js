import * as types from '../actions/types'

const initialState = {
    mylist: []
}



export const addmylistReducer = (state=initialState.mylist,action) => {
    switch (action.type) {
        case types.ADD_MYLIST:
            return [...state,{...action.payload}]
        default:
            return state;
    }
}
