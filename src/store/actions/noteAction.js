import { GET_NOTE , CREATE_NOTE , UPDATE_NOTE, DELETE_NOTE } from '../types'
import axios from 'axios'
import URL from '../../configs/api'

export const getNotes = (user , collection) => async dispatch => {

    let res = await axios.get(URL + `/notes/${user}/${collection}?sort=date` )

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

export const updateNote = (user , collection , note) => async dispatch => {

    let res = await axios.post(URL + `/notes/${user}/${collection}/${note.id}` , note)
    console.log(res.data);
    

    //do something
    dispatch({
        type: UPDATE_NOTE,
        payload: res.data
    })

    return res.data

}

export const deleteNote = (user , collection , note) => async dispatch => {

    let res = await axios.post(URL + `/notes/${user}/${collection}/${note.id}/del` , note)

    //do something
    dispatch({
        type: DELETE_NOTE,
        payload: res.data
    })

    return res.data

}