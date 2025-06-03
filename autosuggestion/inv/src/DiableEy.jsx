import React,{useState,useEffect} from 'react'
const Disable = ()=>{
const [disabled, setDisabled] = useState(false);
const [input,setInput] = useState("")
useEffect(() => {
  const timer = setTimeout(() => setDisabled(true), 5000);
  return () => clearTimeout(timer);
}, []);
return(
  <>
  <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
<button disabled={disabled}>Click Me</button></>
)}
export default Disable