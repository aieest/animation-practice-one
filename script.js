function changeButtonClass() {
    const button = document.querySelector('#button');
    const activateButton = document.querySelector('.activate');
    const returnButton = document.querySelector('.return');

    if (button.classList.contains("activate")) {
        button.classList.remove("activate");
        button.classList.add("return");
        button.textContent = "Return!";
    } else if (button.classList.contains("return")) {
        button.classList.remove("return");
        button.classList.add("activate");
        button.textContent = "CLick Me!";
    }
}