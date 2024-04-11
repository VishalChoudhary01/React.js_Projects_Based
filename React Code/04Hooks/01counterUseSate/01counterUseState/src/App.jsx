import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(10);
  // count assign default value through useState(10)

  /*
  hold as parameter for default value
  useState( var) - variable
  useState( {}) - object
  useState( []) - array
  useState( true ) - boolean
  useState("") - empty string
  useState("Vishal") - string



  */
  let addValue = () => {
    setCount(count+1);
    console.log(count);
  };
  let removeValue = () => {
    setCount(count-1);
    console.log(count);
  };


  return (
    <>
      <h1>Counter</h1>
      <h3>Start Value :- {count}</h3>
      <br />
      <button onClick={addValue}>Increase : {count}</button>
      <button onClick={removeValue}>Decrease : {count}</button>
    </>
  );
}

export default App;
