import { GET_COLLECTION , CREATE_COLLECTION } from '../types'
import axios from 'axios'
import URL from '../../configs/api'

export const getCollections = (user) => async dispatch => {

    let res = await axios.get(URL + "/collections/" + user)

    //do something
    dispatch({
        type: GET_COLLECTION,
        payload: res.data
    })

    return res.data

}

export const createCollection = (user , name) => async dispatch => {

    let res = await axios.post(URL + "/collections" , {
        name,
        u_id:user
    })

    //do something
    dispatch({
        type: CREATE_COLLECTION,
        payload: res.data
    })

    return res.data

}