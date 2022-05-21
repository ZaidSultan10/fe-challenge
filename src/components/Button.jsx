import React,{useContext, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { buttonValue } from '../actions/sum'

const Button = ({title}) => {
    const [button1,setButton1] = useState(1)

    useEffect(() => {
        setButton1(title)
    },[title])

    const dispatch = useDispatch()

    const sendValue = (item) => {
        dispatch(buttonValue(item))
    }
  return (
    <div>
        {/* {
            buttonObject && buttonObject.map((item) => (
                <button onClick={sendValue(item.value)} style={{marginTop:'20px', width:'80px',height:"50px"}}>
                    {item.value}
                </button>
            ))
        } */}
        <button onClick={() => sendValue(button1)} style={{marginTop:'20px', width:'80px',height:"50px"}}>
            {button1}
        </button>
    </div>
  )
}

export default Button