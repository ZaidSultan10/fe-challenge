import React from 'react'

const Button = ({title}) => {
  return (
    <div>
        <button style={{marginTop:'20px', width:'80px',height:"50px"}}>
            {title}
        </button>
    </div>
  )
}

export default Button