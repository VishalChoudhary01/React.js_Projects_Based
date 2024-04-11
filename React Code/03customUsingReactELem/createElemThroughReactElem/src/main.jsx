import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/*
React.createElement method just takes some parameters obj like property but in arrange format
Regular Syntax
 1. Tag
 2. object (Props/attribute) 
 3. Content (innerHTML / textContent)
 4. Variable through {} [Evaluated Expression]

 1. type: The type you have passed.
 2. props: The props you have passed except for ref and key. 
 If the type is a component with legacy type.defaultProps, 
 then any missing or undefined props will get the values from type.defaultProps.
 3. ref: The ref you have passed. If missing, null.
 4. key: The key you have passed, coerced to a string. If missing, null.

*/


/* Evaluated Expression Injection
1. Using CreateElement Method

const greet="Good Morning"
React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Vist MEEE"

  After Content Variable Injection
  
  greet [here we call variable direct]

  but in JSX we have to use " {} "


)


*/
const reactElm = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Vist MEEE"
);
const name="Vishal";
const evaluatedVar= React.createElement("h1",{},"My Name is ",name);
ReactDOM.createRoot(document.getElementById("root")).render(

  <>
  {reactElm}
  {evaluatedVar}
  </>
);
