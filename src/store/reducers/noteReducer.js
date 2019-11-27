import { GET_NOTE , CREATE_NOTE , UPDATE_NOTE, DELETE_NOTE } from '../types'

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

        case UPDATE_NOTE:

            let currentItems = [action.payload]

            // replace item
            let updateState = state.items.map(
                obj => currentItems.find(o => o.id === obj.id) || obj
            );

            return {
                ...state,
                items:updateState
            }

        case DELETE_NOTE:
            return {
                ...state,
                items:[ ...state.items.filter((i) => i.id !== action.payload.id) ]
            }

        default:
            return state
    }

}
