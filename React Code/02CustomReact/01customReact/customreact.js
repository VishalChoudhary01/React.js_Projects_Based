const mainContainer = document.querySelector("#root");
// targetded maincontainer through root id in html file
const reactElem = {
  type: "a",
  //declared type of html tag

  props: {
    href: "https://google.com",
    target: "_blank",
  },
  //taking attribute after create props as key inside another object
  //inner object holding key as attribute key and value as html tag value

  children: "Click Me",
  //holding third object for HtMl content
  // from here we can inject variable
};

function customRender(expectElem, holderContainer) {
  const domELem = document.createElement(expectElem.type);
  //here domElem having createElement method having tag name
  // tag name getting through object property reacELm.type

  domELem.innerHTML = expectElem.children;
  // here we adding content through reactElm obj property and third key nd value
// InnerHTML
  
domELem.setAttribute("href", expectElem.props.href);
// adding attribute in html tag using method setAttribute
// first setAttribute having key and second as value

  domELem.setAttribute("target", expectElem.props.target);
  holderContainer.appendChild(domELem);
  // now adding html <a> tag in container variable
}

customRender(reactElem, mainContainer);

// here function calling CustomRender
// having first value what will insert and second where to insert
