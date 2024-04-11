mainContent = document.querySelector(".root");

const reactElm = {
  type: "a",
  props: {
    href: "https://www.facebook.com/login/device-based/regular/login/?login_attempt=1",
    target: "_blank",
  },
  content_children: "CLick Hereee",
};

function customRender(rectELmHolder, containerHolder) {
  const domELm = document.createElement(reactElm.type);
  domELm.innerHTML = reactElm.content_children;
  for (const propIn in reactElm.props) {
    if (propIn === "content_children") continue;
    {
      domELm.setAttribute(propIn, reactElm.props[propIn]);
    }
    containerHolder.appendChild(domELm);
  }
}

customRender(reactElm, mainContent);
