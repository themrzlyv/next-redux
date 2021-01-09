import {combineReducers} from 'redux'
import { addmylistReducer } from './listReducer'
import { postReducer } from './postReducer'
import { userReducer } from './userReducer'
export default combineReducers({
    posts: postReducer,
    users: userReducer,
    mylist: addmylistReducer
})