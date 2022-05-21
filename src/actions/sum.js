import {BUTTON1,BUTTONEQUAL,BUTTONADD,BUTTONCLEAR,BUTTONRESETNEW} from './type.js'

export const buttonValue = (data) => {
    try{
        return { type: BUTTON1, payload: data }
    }catch(e){
        console.log(e)
    }
}

export const buttonAdd = (data) => {
    try{
        return { type: BUTTONADD, payload: data }
    }catch(e){
        console.log(e)
    }
}

export const buttonEqual = (data) => {
    try{
        return { type: BUTTONEQUAL, payload: data }
    }catch(e){
        console.log(e)
    }
}

export const buttonClear = (data) => {
    try{
        return { type: BUTTONCLEAR, payload: data }
    }catch(e){
        console.log(e)
    }
}

export const buttonResetNew = (data) => {
    try{
        return { type: BUTTONRESETNEW, payload: data }
    }catch(e){
        console.log(e)
    }
}