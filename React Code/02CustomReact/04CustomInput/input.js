const mainRender = document.querySelector(".root");
const inputElm = {
  tag: "input",
  attr: {
    type: "text",
    id: "",
    placeholder: "Please Enter Your Name",
  },
};

function inputRender(inputHolder, contentRender) {
  const domInput = document.createElement(inputHolder.tag);

  for (const attrName in inputElm.attr) {
    domInput.setAttribute(attrName, inputHolder.attr[attrName]);
  }

  contentRender.appendChild(domInput);
}

inputRender(inputElm, mainRender);
