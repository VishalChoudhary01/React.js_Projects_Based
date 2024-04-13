# 1. useState
step 1 import React, {useState} from react
        {useState} from react
Note:- we just use hooks in function component We cannot hold any scope like if else loop or another function

State: State represents the data that a component can maintain and update during its lifetime. It's like the memory of a component. With state, you can manage dynamic information such as user input, server responses, or UI states.

useState Hook: Before the introduction of hooks, functional components were stateless. useState is a hook that allows functional components to manage state. It's a function provided by React that you can use to add state variables to your functional components.

Syntax: useState is called inside a functional component. It returns an array containing two elements: the current state value and a function to update that state value. You typically destructure these elements when calling useState.

const [state, setState] = useState(initialState)

const [age, setAge] = useState(28);
  const [name, setName] = useState('Taylor');
  const [todos, setTodos] = useState(() => createTodos());

  Note useState work synchronically we cannot hold inside condition or loop

  useState(1)
  useState(2)
  useState(3)
  useState(4) they will all execute

  setAge(age-5) wrong way
  if we do like this so we will repeat same thing again
  setAge(age-5) //23
  setAge(age-5) // expected 18 but will get 23 again
  because React state hold state in bunch after execution final out will get

  setAge((prevAge)=> prevAge-5) Right way

  here if we call setAge((prevAge)=> prevAge-5) // 23
                setAge((prevAge)=> prevAge-5) // 18

Note:- if assign any complex code like any loop based in initial State after call again the performance of application low

for btter performance we can assign function inside useState( ()=>{ })

## useState with function
Example const [count,setCount]=useState(()=>{
    console.log("Runs Function") // its will excute one time but we will get functionality
     return 4
})

if we pass function inside useState its will excute every time when its render

function initialVal(){
    console.log("start")
    return 4
}

const [count,setCount]=useState( initialVal() )

we can optimise that function excute once time if render multiple time

const [count,setCount]=useState(()=> initialVal())

# useState with Object

Here we Have multiple value for set in state 

const [state,setState]=useState( {count:4,theme:"blue"} )
const count= state.count
const theme= state.theme

function decrement(){
    setState( prevState =>{
        return { ...prevState,count:prevCount => prevCount.count - 1 }
    })
}

we can do normal grab each value and assign two different useState
 <button onClick={decrement}></button>
 <span>{count}</span>
 <span>{theme}</span>