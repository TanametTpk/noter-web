import { createStore , applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
  
const persistedReducer = persistReducer(persistConfig, rootReducer)
  

const middleware = [thunk]

const initialState = {}

const store = createStore( 
    persistedReducer, 
    initialState,
    applyMiddleware(...middleware)
)

let persistor = persistStore(store)

export default () => {
    return {
        store,
        persistor
    }
}