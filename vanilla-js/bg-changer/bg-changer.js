const root_element = document.querySelector("#root");
const color_elements = root_element.querySelectorAll(".color");

function bgChanger(color) {
    root_element.style.backgroundColor = color;
    console.log(`Background color changed to ${color}`);
}