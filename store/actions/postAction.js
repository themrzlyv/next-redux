import * as types from './types'

export const fetchposts = () => async dispatch => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    dispatch({
        type: types.GET_POSTS,
        payload: await res.json()
    })
}

export const fetchusers = () => async dispatch => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    dispatch({
        type: types.GET_USERS,
        payload: await res.json()
    })
}




