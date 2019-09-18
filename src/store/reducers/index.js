import { combineReducers } from 'redux'
import noteReducer from './noteReducer'
import collectionReducer from './collectionReducer'
import userReducer from './userReducer'
// import reducer

export default combineReducers({
    // object reducer
    note:noteReducer,
    collection:collectionReducer,
    user:userReducer
})