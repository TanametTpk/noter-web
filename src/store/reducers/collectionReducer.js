import { GET_COLLECTION , CREATE_COLLECTION } from '../types'

const initState = {
    items:[]
}

export default function(state = initState , action){

    switch (action.type) {
        case GET_COLLECTION:
            return {
                ...state,
                items:action.payload
            }
    
        case CREATE_COLLECTION:
            return {
                ...state,
                items:[ ...state.items , action.payload ]
            }
        default:
            return state
    }

}
