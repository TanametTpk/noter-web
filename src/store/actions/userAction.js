import { CREATE_USER } from '../types'
import axios from 'axios'
import URL from '../../configs/api'

export const createUser = (user) => async dispatch => {

    let res = await axios.post(URL + "/users" , {
        name: user.name,
        email:user.email,
        providerId:user.id
    })

    //do something
    dispatch({
        type: CREATE_USER,
        payload: res.data
    })

    return res.data

}
