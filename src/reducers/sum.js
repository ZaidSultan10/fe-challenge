import {BUTTON1,BUTTONEQUAL} from '../actions/type.js'

let initialValue = {
    result:0
}

const sum = (state = initialValue, action) => {
    switch(action.type){
        case BUTTON1:
           return {
               ...state,
               result:state.result === 0 ? action.payload : state.result + action.payload.toString()
               }

        case BUTTONEQUAL:
           return {
               ...state,
               result:action.payload === '=' && state.result.split('+')
               }
        
        default: 
           return state
    }
}

export default sum