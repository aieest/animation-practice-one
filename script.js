const button = document.querySelector('#button');
const div = document.querySelector('#main-div')

function changeClass() {
    if (button.classList.contains("activate")) {
        button.classList.remove("activate");
        button.classList.add("return");
        button.textContent = "Return!";
        div.classList.remove("dots-inactive")
        div.classList.add("dots-active")
    } else if (button.classList.contains("return")) {
        button.classList.remove("return");
        button.classList.add("activate");
        button.textContent = "Click Me!";
        div.classList.remove("dots-active")
        div.classList.add("dots-inactive")
    }
}