import { CREATE_USER } from '../types'

const initState = {
    item:{}
}

export default function(state = initState , action){

    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                item:action.payload
            }
    
        default:
            return state
    }

}
