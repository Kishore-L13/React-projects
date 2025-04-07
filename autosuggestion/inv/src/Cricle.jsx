import React, { useState } from 'react'
import Circlenum from './Criclenum'

const Cricle = () => {
    const [input , setIntput] = useState()
  return (
    <div>
        <input type='number' placeholder='enter area' value={input}
        onChange={(e)=>setIntput(e.target.value)}/>
        <Circlenum numbCircles={input} />
    </div>
  )
}

export default Cricle