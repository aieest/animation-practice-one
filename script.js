const button = document.querySelector('#button');
const span = document.querySelector('.span');
const spanDiv = document.querySelector('.span-div');

function changeClass() {
    if (button.classList.contains("activate")) {
        button.classList.remove("activate");
        button.classList.add("return");
        button.textContent = "Return!";
        span.classList.remove("dots-inactive")
        span.classList.add("dots-active")
    } else if (button.classList.contains("return")) {
        button.classList.remove("return");
        button.classList.add("activate");
        button.textContent = "Click Me!";
        span.classList.remove("dots-active")
        span.classList.add("dots-inactive")
    }
}