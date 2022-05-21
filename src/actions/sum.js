import {BUTTON1} from './type.js'

export const buttonValue = (data) => {
    try{
        console.log('data',data)
        return { type: BUTTON1, payload: data }
    }catch(e){
        console.log(e)
    }
}