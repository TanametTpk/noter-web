import { GET_COLLECTION , CREATE_COLLECTION } from '../types'
import axios from 'axios'

export const getCollections = () => async dispatch => {
    //do something
    dispatch({
        type: GET_COLLECTION,
        payload: ["1" , "2" , "3"]
    })

    return

}

export const createCollection = (name) => async dispatch => {
    //do something
    dispatch({
        type: CREATE_COLLECTION,
        payload: ["1" , "2" , "3"]
    })

    return 

}