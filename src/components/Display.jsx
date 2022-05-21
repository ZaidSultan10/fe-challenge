import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Display = () => {

    const {result} = useSelector(state => state.sum)

    let sum = 0

    result && typeof(result) == 'object' && result.map((item) => {
        sum = sum + Number(item)
    })

  return (
    <div>
        <div style={{width:'300px',padding:'20px',border:'1px solid'}}>
            {typeof(result) == 'object' ? sum : result}
        </div>
    </div>
  )
}

export default Display