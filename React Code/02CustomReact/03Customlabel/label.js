const mainRend = document.querySelector(".root");

const labelContent = {
  label: {
    tag: "label",
    content_child:"First Name",
  }  
};

function renderInput(InputBox,containerHolder){
    const domLabel=document.createElement(InputBox.label.tag);
    domLabel.innerHTML=InputBox.label.content_child
    containerHolder.appendChild(domLabel);
}

renderInput(labelContent,mainRend);