import {BUTTON1,BUTTONEQUAL,BUTTONADD} from '../actions/type.js'

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

        case BUTTONADD:
           return {
               ...state,
               result:0 + action.payload + '+' 
               }

        default: 
           return state
    }
}

export default sum