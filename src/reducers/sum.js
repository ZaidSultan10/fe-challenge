import {BUTTON1} from '../actions/type.js'

let initialValue = {
    result:0
}

const sum = (state = initialValue, action) => {
    switch(action.type){
        case BUTTON1:
           return {
               ...state,
               result:action.payload
               }
        
        default: 
           return state
    }
}

export default sum