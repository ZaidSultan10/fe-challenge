import React,{ useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { buttonValue,buttonEqual,buttonAdd } from '../actions/sum'
import { useSelector } from 'react-redux'

const Button = ({title}) => {
    const [button1,setButton1] = useState(1)
    const {result} = useSelector(state => state.sum)

    useEffect(() => {
        setButton1(title)
    },[title])

    let sum = 0

    result && typeof(result) == 'object' && result.map((item) => {
        sum = sum + Number(item)
        return sum
    })

    const dispatch = useDispatch()

    const sendValue = (item) => {
        if(item === '='){
            dispatch(buttonEqual(item))
        }else if(typeof(result) == 'object' && item === '+'){
            dispatch(buttonAdd(sum))
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