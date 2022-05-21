import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Display = () => {

    // const [result,setResult] = useState(0)

    const {result} = useSelector(state => state.sum)
    console.log('result >>> ',result)

  return (
    <div>
        <div style={{border:'1px solid',width:'150px',height:'40px'}}>
            {result}
        </div>
    </div>
  )
}

export default Display