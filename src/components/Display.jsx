import React, { useState } from 'react'

const Display = () => {

    const [result,setResult] = useState(0)

  return (
    <div>
        <div style={{border:'1px solid',width:'150px',height:'40px'}}>
            {result}
        </div>
    </div>
  )
}

export default Display