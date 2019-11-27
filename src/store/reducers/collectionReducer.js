import { GET_COLLECTION , CREATE_COLLECTION, DELETE_COLLECTION } from '../types'

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

        case DELETE_COLLECTION:
            return {
                ...state,
                items:[ ...state.items.filter((i) => i.id !== action.payload.id) ]
            }

        default:
            return state
    }

}
