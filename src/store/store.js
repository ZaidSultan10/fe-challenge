import {createStore, combineReducers} from 'redux'
import sum from '../reducers/sum.js'

export const ConfigureStore = () => {
     const store = createStore(
        combineReducers({
            sum
        }),
    )  
    return store
}