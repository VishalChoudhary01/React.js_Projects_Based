import ReactDOM from "react-dom/client";
import "./index.css";

const NewFun = () => <h1>Byeee Fun</h1>;

/*
without return if we have one Element
 
  1. ()=> <h1>Without Return</h1>

  2. ()=>( <h1>Without Return</h1> )
*/

ReactDOM.createRoot(document.getElementById("root")).render(NewFun());
