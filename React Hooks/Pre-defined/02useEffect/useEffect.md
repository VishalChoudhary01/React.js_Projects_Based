# React Component Phases:-
1. Intialization -> Where component intialize
2. Mounting -> where Component Render on web 
3. Updation -> Where we update value / re -render on web just like using useState()
4. unmounting -> when component invisible on screen after rendered on screen 

## Shorthand for import and use
```javascript
    React.useEffect(()=>{

    },[Dependency Array List])
```
## mount when we refresh page component rendered.

# useEffect
 when we want fetch data on web on this dependency we want to render other component and do something else we use useEffect. ex if user switch to another page data want to unmount from screen we can use useEffect.

 useEffect take on call back function and second argument as dependency array list

 ## How we track unmount of component?
 ```javascript

 useEffect(()=>{
    console.log("counter mounted");

    return function(){
        console.log("unmounted")
    }
 })
 ```  
 ## Empty  dependency arrays will not get any mount behaviour we need something for that depended value will effect on render or unmount

```javascript

import {useEffect, useState} from "react"
function App() {
const [count,setCount]=useState(1);
useEffect(()=>{
  console.log("render",Math.random());

},[])


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

```
 // if dependency some values until that value get changed then the useEffect will word ( mount or mount)

 ### Note
 when we return any function from call back function of useEffect 


 ```javascript
 useEffect(()=>{
    console.log("user Update Mount",counter)
    return ()=>{
        console.log("user Unmount return component".counter);
    }
 })


 ```
 ### output:
 
 user Unmount return component 0  // here first unmount
 user Update Mount 1 // here mounted
 user Unmount return component 1  // here second unmount
 user Update Mount 2 // here second mounted

 ## Always return element first unmount and then call back function mount 

Piyush Grag Ended


Web dev Simplified Kyle

#### prefect example useEffect get change inner width on page 

 
```javascript
import React,{useState,useEffect} from "react"

export default function App(){
    const [windowWidth,setWindowWidth]= useState(window.innerWidth);

    const HandleSize=()=>{
        setWindowWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize",HandleSize)

        // Clean up way for optimization
        return ()=>{
            window.removeEventListener("resize",handleSize)
        }
    },[])

    return (
        <div>{windowWidth}</div>
    )
} 

```
## we can use conditional statement for useEffect where we want to use

```javascript

import './App.css'
import {useEffect, useState} from "react"
function App() {
const [count,setCount]=useState(1);



useEffect(()=>{
  if(count==20){

    console.log("render",Math.random());
  }

},[count])


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

```
# Note-> useEffect will run without dependency array but it choose all state for effect without " [] "
if we dont want use we dont pass empty array otherwise its will not work

Simple if you want to effect on all dependency variable or method
just use like this:-

### For all dependency
```javascript
useEffect(()=>{})
 
```