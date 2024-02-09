const button = document.querySelector('#button');
const div = document.querySelector('')

function changeButtonClass() {
    const activateButton = document.querySelector('.activate');
    const returnButton = document.querySelector('.return');

    if (button.classList.contains("activate")) {
        button.classList.remove("activate");
        button.classList.add("return");
        button.textContent = "Return!";
    } else if (button.classList.contains("return")) {
        button.classList.remove("return");
        button.classList.add("activate");
        button.textContent = "Click Me!";
    }
}

function changeDivClass() {
    if (button.classList.contains("activate")) {
        div.classList.remove("dots-inactive")
        div.classList.add("dots-active")
    } else if (button.classList.contains("dots-inactive")) {
        div.classList.remove("dots-active")
        div.classList.add("dots-inactive")
    }
}