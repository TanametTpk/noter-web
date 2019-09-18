import { combineReducers } from 'redux'
import noteReducer from './noteReducer'
// import reducer

export default combineReducers({
    // object reducer
    note:noteReducer
})