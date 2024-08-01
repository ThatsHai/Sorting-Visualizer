import React, { useState } from 'react'
import ArrayValue from './ArrayValue'


const BubbleSort = () => {
  const [array, setArray] = useState([1, 3, 4])
  
  return (
    <div>
      {array.map((value, index) => {
        return <ArrayValue key={index} value={value} />
      })}
    </div>
  )
}

export default BubbleSort