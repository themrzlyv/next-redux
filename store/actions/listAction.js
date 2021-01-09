import * as types from './types'

export const addmylist = (user) =>  dispatch => {
    dispatch({
        type: types.ADD_MYLIST,
        payload: user
    })
}

export const deletemylist = (user) => dispatch => {
    dispatch({
        type: types.DELETE_MYLIST,
        payload: user
    })
}