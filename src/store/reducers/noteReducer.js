import { GET_NOTE , CREATE_NOTE , UPDATE_NOTE } from '../types'

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
        default:
            return state
    }

}
