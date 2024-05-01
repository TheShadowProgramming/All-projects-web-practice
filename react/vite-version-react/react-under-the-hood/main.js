// let's say we wanna create an element and push it inside the experimental div that we created
const reactElement = {
  type: "div",
  props: {
    style: "background-color: aqua;",
    class: "button",
  },
  children: "<p>something inside the div</p>",
};

const mainContainer = document.querySelector("#root");

function reactRender(reactElement, mainContainer) {
  const newElement = document.createElement(reactElement.type);
  newElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    newElement.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.appendChild(newElement);
}
