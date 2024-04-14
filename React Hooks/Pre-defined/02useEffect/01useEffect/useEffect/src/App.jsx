import './App.css'
import {useEffect, useState} from "react"
function App() {
const [count,setCount]=useState(1);



useEffect(()=>{
  if(count==10)

    console.log("render",Math.random());
  

})


function increase(){
  return setCount(count+1);
}

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>+</button> 
    </>
  )
}


export default App
