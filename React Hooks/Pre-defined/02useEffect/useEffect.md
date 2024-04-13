# React Component Phases:-
1. Intialization -> Where component intialize
2. Mounting -> where Component Render on web 
3. Updation -> Where we update value / re -render on web just like using useState()
4. unmounting -> when component invisible on screen after rendered on screen 

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
 // Empty  dependency arrays means -> whole component mount or unmount

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