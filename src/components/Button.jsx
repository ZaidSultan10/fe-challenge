import React,{ useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { buttonValue,buttonAdd,buttonEqual } from '../actions/sum'

const Button = ({title}) => {
    const [button1,setButton1] = useState(1)

    useEffect(() => {
        setButton1(title)
    },[title])

    const dispatch = useDispatch()

    const sendValue = (item) => {
        if(item === '='){
            dispatch(buttonEqual(item))
        }else{
            dispatch(buttonValue(item))
        }
    }

  return (
    <div>
        <button onClick={() => sendValue(button1)} style={{marginTop:'20px', width:'80px',height:"50px"}}>
            {button1}
        </button>
    </div>
  )
}

export default Button