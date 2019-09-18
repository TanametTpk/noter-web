import { GET_NOTE , CREATE_NOTE } from '../types'

const initState = {
    items:[]
}

export default function(state = initState , action){

    switch (action.type) {
        case GET_NOTE:
            return {
                ...state,
                items:action.payload
            }
    
        case CREATE_NOTE:
            return {
                ...state,
                items:[action.payload  ,...state.items]
            }
        default:
            return state
    }

}
