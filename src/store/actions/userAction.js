import { CREATE_USER } from '../types'
import axios from 'axios'

export const createUser = (user) => async dispatch => {
    //do something
    dispatch({
        type: CREATE_USER,
        payload: {}
    })
}
