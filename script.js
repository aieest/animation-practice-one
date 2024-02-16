const button = document.querySelector('#button');
const span = document.querySelector('.span');
const spanDiv = document.querySelector('.span-div');
const numberOfSpans = Math.floor((window.screen.width * window.screen.height) / 5250);


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

for (let i = 1; i <= numberOfSpans; i++) {
    const newSpan = document.createElement('span');
    newSpan.classList.add('span', 'dots-inactive');
    spanDiv.appendChild(newSpan);
}