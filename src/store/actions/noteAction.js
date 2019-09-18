import { GET_NOTE , CREATE_NOTE } from '../types'
import axios from 'axios'

export const getNotes = () => async dispatch => {
    //do something
    dispatch({
        type: GET_NOTE,
        payload: ["1" , "2" , "3"]
    })

    return

}

export const createNote = (user , collection , content) => async dispatch => {
    //do something
    dispatch({
        type: CREATE_NOTE,
        payload: ["1" , "2" , "3"]
    })

    return

}