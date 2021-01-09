import * as types from '../actions/types'

const initialState = {
    posts: []
}


export const postReducer = (state=initialState.posts,action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }
}