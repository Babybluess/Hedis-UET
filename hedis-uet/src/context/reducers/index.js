import {combineReducers } from 'redux'
import FavorReducer from './favorReducer'

const myReducer = combineReducers({
    favorList: FavorReducer,
})

export default myReducer