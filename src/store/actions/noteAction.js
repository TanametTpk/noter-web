import { GET_NOTE , CREATE_NOTE } from '../types'
import axios from 'axios'
import URL from '../../configs/api'

export const getNotes = (user , collection) => async dispatch => {

    let res = await axios.get(URL + `/notes/${user}/${collection}?sort="date"` )

    //do something
    dispatch({
        type: GET_NOTE,
        payload: res.data
    })

    return res.data

}

export const createNote = (user , collection , content) => async dispatch => {

    let res = await axios.post(URL + "/notes" , {
        note:{content},
        userId:user,
        collectionId:collection
    })

    //do something
    dispatch({
        type: CREATE_NOTE,
        payload: res.data
    })

    return res.data

}