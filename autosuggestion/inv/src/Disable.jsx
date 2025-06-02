import React,{useState} from 'react'

const Disable =()=>{
  const [isVisble, setIsVisble] = useState(false)
   const HandleClick=()=>{
     setIsVisble(true)
     console.log("Btn_Open")
     setTimeout(()=>{
       setIsVisble(false)
       console.log("btn_close")
     },5000)
   }
  return (
    <div>
<h1>Click Me</h1>
<button onClick={HandleClick} disabled={isVisble}>{isVisble ? "wait":"clickme"}</button>
      </div>
  )
}
export default Disable