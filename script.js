function changeButtonClass() {
    const button = document.querySelector('#button');
    const activateButton = document.querySelector('.activate');
    const returnButton = document.querySelector('.return');

    if (button.classList.contains("activate")) {
        button.classList.remove("activate");
        button.classList.add("return");
        button.textContent = "Return!";
    }
}