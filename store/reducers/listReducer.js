import * as types from '../actions/types'

const initialState = {
    mylist: []
}



export const addmylistReducer = (state=initialState.mylist,action) => {
    switch (action.type) {
        case types.ADD_MYLIST:
            return [...state,{...action.payload}]
        case types.DELETE_MYLIST:
            const newstate = state.filter(item=>item.id!==action.payload.id)
            return newstate;
            // return {
            //     ...state.filter(item=>item.id!==action.payload.id)
            // }
        default:
            return state;
    }
}
