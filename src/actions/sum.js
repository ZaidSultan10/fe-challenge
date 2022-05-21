import {BUTTON1,BUTTONEQUAL,BUTTONADD} from './type.js'

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